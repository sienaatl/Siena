import { supabase, supabaseClientId } from './supabase';

export type HourEntry = { label: string; value: string };

export type RestaurantInfo = {
  address: string;
  phone: string;
  maps_url: string;
  hours: HourEntry[];
};

export const RESTAURANT_FALLBACK: RestaurantInfo = {
  address: '124 Devore Rd, Alpharetta, GA 30009',
  phone: '+1 (404) 777-5124',
  maps_url: 'https://maps.app.goo.gl/9rkP14kjw5Dhmrsy5',
  hours: [
    { label: 'Monday', value: 'Closed' },
    { label: 'Tuesday – Thursday', value: '4:00 PM – 10:00 PM' },
    { label: 'Friday – Saturday', value: '4:00 PM – 12:00 AM' },
    { label: 'Sunday', value: '4:00 PM – 10:00 PM' },
  ],
};

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number);
  if (h === 0 && m === 0) return '12:00 AM';
  const period = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return m === 0 ? `${hour}:00 ${period}` : `${hour}:${String(m).padStart(2, '0')} ${period}`;
}

export async function getRestaurantInfo(): Promise<RestaurantInfo> {
  try {
    const { data: location, error: locError } = await supabase
      .from('locations')
      .select('id, address, phone, google_maps_url')
      .eq('restaurant_id', supabaseClientId)
      .limit(1)
      .single();

    if (locError || !location) return RESTAURANT_FALLBACK;

    const { data: hoursData, error: hoursError } = await supabase
      .from('location_hours')
      .select('day_of_week, is_closed, open_time, close_time')
      .eq('location_id', location.id)
      .order('day_of_week');

    if (hoursError || !hoursData?.length) {
      return {
        address: location.address ?? RESTAURANT_FALLBACK.address,
        phone: location.phone ?? RESTAURANT_FALLBACK.phone,
        maps_url: location.google_maps_url ?? RESTAURANT_FALLBACK.maps_url,
        hours: RESTAURANT_FALLBACK.hours,
      };
    }

    // Reorder: Mon(1) → Sat(6) → Sun(0)
    const ordered = [1, 2, 3, 4, 5, 6, 0]
      .map((d) => hoursData.find((h) => h.day_of_week === d))
      .filter(Boolean) as typeof hoursData;

    // Group consecutive days that share the same schedule
    type Group = { days: number[]; is_closed: boolean; open_time: string | null; close_time: string | null };
    const groups: Group[] = [];

    for (const row of ordered) {
      const scheduleKey = row.is_closed ? 'closed' : `${row.open_time}-${row.close_time}`;
      const last = groups[groups.length - 1];
      const lastKey = last
        ? last.is_closed ? 'closed' : `${last.open_time}-${last.close_time}`
        : null;

      if (last && scheduleKey === lastKey) {
        last.days.push(row.day_of_week);
      } else {
        groups.push({ days: [row.day_of_week], is_closed: row.is_closed, open_time: row.open_time, close_time: row.close_time });
      }
    }

    const hours: HourEntry[] = groups.map((g) => {
      const label =
        g.days.length === 1
          ? DAY_NAMES[g.days[0]]
          : `${DAY_NAMES[g.days[0]]} – ${DAY_NAMES[g.days[g.days.length - 1]]}`;
      const value = g.is_closed
        ? 'Closed'
        : `${formatTime(g.open_time!)} – ${formatTime(g.close_time!)}`;
      return { label, value };
    });

    return {
      address: location.address ?? RESTAURANT_FALLBACK.address,
      phone: location.phone ?? RESTAURANT_FALLBACK.phone,
      maps_url: location.google_maps_url ?? RESTAURANT_FALLBACK.maps_url,
      hours,
    };
  } catch {
    return RESTAURANT_FALLBACK;
  }
}
