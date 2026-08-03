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

export async function fetchHours(): Promise<ApiHourEntry[]> {
  const res = await fetch(HOURS_API, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch hours (${res.status})`);
  const data = await res.json();
  return data.hours as ApiHourEntry[];
}

// The API's own `day_of_week` numbers Monday=0..Sunday=6, not the JS
// Date.getDay() convention (Sunday=0..Saturday=6) the calendar needs — map
// by day name instead of trusting the numeric field lines up.
const DAY_NAME_TO_JS_WEEKDAY: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export function getClosedWeekdays(entries: ApiHourEntry[]): number[] {
  return entries
    .filter((e) => e.closed)
    .map((e) => DAY_NAME_TO_JS_WEEKDAY[e.day])
    .filter((d): d is number => d !== undefined);
}

// JS Date.getDay() values for days the reservations calendar should disable —
// used by the reservation form's date picker.
export async function fetchClosedWeekdays(): Promise<number[]> {
  const entries = await fetchHours();
  return getClosedWeekdays(entries);
}

// Matches FALLBACK_HOURS below (Monday only) — used if the live API is
// unreachable, so the date picker still knows to close out Mondays.
export const FALLBACK_CLOSED_WEEKDAYS: number[] = [1];

export type DaySchedule = {
  closed: boolean;
  openTime: string | null;
  closeTime: string | null;
  closesNextDay: boolean;
};

// Keyed by JS Date.getDay() (0=Sunday..6=Saturday), not the API's own
// Monday-first day_of_week numbering — same day-name mapping as above.
export type WeekdaySchedule = Record<number, DaySchedule>;

export function getWeekdaySchedule(entries: ApiHourEntry[]): WeekdaySchedule {
  const schedule: WeekdaySchedule = {};
  for (const e of entries) {
    const weekday = DAY_NAME_TO_JS_WEEKDAY[e.day];
    if (weekday === undefined) continue;
    schedule[weekday] = {
      closed: e.closed,
      openTime: e.open_time,
      closeTime: e.close_time,
      closesNextDay: e.closes_next_day,
    };
  }
  return schedule;
}

export async function fetchWeekdaySchedule(): Promise<WeekdaySchedule> {
  return getWeekdaySchedule(await fetchHours());
}

// Generates every half-hour reservation slot between a day's open and close
// time (in 12-hour AM/PM form), rolling past midnight when `closesNextDay`
// is set — e.g. 16:00-"00:00" with closesNextDay becomes 4:00 PM..12:00 AM.
export function getTimeSlotsForDay(schedule: DaySchedule | undefined): string[] {
  if (!schedule || schedule.closed || !schedule.openTime || !schedule.closeTime) return [];

  const [oh, om] = schedule.openTime.split(":").map(Number);
  const [ch, cm] = schedule.closeTime.split(":").map(Number);
  const openMinutes = oh * 60 + om;
  let closeMinutes = ch * 60 + cm;
  if (schedule.closesNextDay || closeMinutes <= openMinutes) closeMinutes += 24 * 60;

  const slots: string[] = [];
  for (let mins = openMinutes; mins <= closeMinutes; mins += 30) {
    const wrapped = mins % (24 * 60);
    const h24 = Math.floor(wrapped / 60);
    const m = wrapped % 60;
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    const period = h24 < 12 ? "AM" : "PM";
    slots.push(`${h12}:${String(m).padStart(2, "0")} ${period}`);
  }
  return slots;
}

// Matches FALLBACK_HOURS below — used if the live API is unreachable.
export const FALLBACK_WEEKDAY_SCHEDULE: WeekdaySchedule = {
  0: { closed: false, openTime: "16:00", closeTime: "22:00", closesNextDay: false },
  1: { closed: true, openTime: null, closeTime: null, closesNextDay: false },
  2: { closed: false, openTime: "16:00", closeTime: "22:00", closesNextDay: false },
  3: { closed: false, openTime: "16:00", closeTime: "22:00", closesNextDay: false },
  4: { closed: false, openTime: "16:00", closeTime: "00:00", closesNextDay: true },
  5: { closed: false, openTime: "16:00", closeTime: "00:00", closesNextDay: true },
  6: { closed: false, openTime: "16:00", closeTime: "22:00", closesNextDay: false },
};

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
  return groupHours(await fetchHours());
}

// Shown only when the live hours API is unreachable, so the footer never
// goes blank — not the source of truth, just a last-resort placeholder.
export const FALLBACK_HOURS: GroupedHourEntry[] = [
  { label: "Monday", value: "Closed" },
  { label: "Tuesday - Thursday", value: "4:00 PM - 10:00 PM" },
  { label: "Friday - Saturday", value: "4:00 PM - 12:00 AM" },
  { label: "Sunday", value: "4:00 PM - 10:00 PM" },
];
