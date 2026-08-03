const HOURS_API = "https://reservations.sienaatl.com/api/hours";

export type ApiHourEntry = {
  day: string;
  day_of_week: number;
  closed: boolean;
  open_time: string | null;
  close_time: string | null;
  closes_next_day: boolean;
};

export type GroupedHourEntry = { label: string; value: string };

function formatTime12(time: string): string {
  const [hStr, mStr] = time.split(":");
  const h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mStr} ${period}`;
}

function formatDayRange(entry: ApiHourEntry): string {
  if (entry.closed || !entry.open_time || !entry.close_time) return "Closed";
  return `${formatTime12(entry.open_time)} - ${formatTime12(entry.close_time)}`;
}

// Groups consecutive days (in day_of_week order) that share the exact same
// formatted range into a single "Start - End" label, e.g. Tue/Wed/Thu at
// 4-10pm becomes one "Tuesday - Thursday" line. Only adjacent days merge —
// Sunday matching Tuesday-Thursday's hours doesn't pull it into that group
// once Friday/Saturday (different hours) sit between them.
export function groupHours(entries: ApiHourEntry[]): GroupedHourEntry[] {
  const sorted = [...entries].sort((a, b) => a.day_of_week - b.day_of_week);
  const groups: { days: string[]; value: string }[] = [];

  for (const entry of sorted) {
    const value = formatDayRange(entry);
    const last = groups[groups.length - 1];
    if (last && last.value === value) {
      last.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], value });
    }
  }

  return groups.map(({ days, value }) => ({
    label: days.length > 1 ? `${days[0]} - ${days[days.length - 1]}` : days[0],
    value,
  }));
}

export async function fetchGroupedHours(): Promise<GroupedHourEntry[]> {
  const res = await fetch(HOURS_API, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch hours (${res.status})`);
  const data = await res.json();
  return groupHours(data.hours as ApiHourEntry[]);
}

// Shown only when the live hours API is unreachable, so the footer never
// goes blank — not the source of truth, just a last-resort placeholder.
export const FALLBACK_HOURS: GroupedHourEntry[] = [
  { label: "Monday", value: "Closed" },
  { label: "Tuesday - Thursday", value: "4:00 PM - 10:00 PM" },
  { label: "Friday - Saturday", value: "4:00 PM - 12:00 AM" },
  { label: "Sunday", value: "4:00 PM - 10:00 PM" },
];
