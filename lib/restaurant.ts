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
  phone: '404-488-3399',
  maps_url: 'https://maps.app.goo.gl/qAEv8rdegv8rYr1c8',
  hours: [
    { label: 'Monday', value: 'Closed' },
    { label: 'Tuesday – Thursday', value: '4:00 PM – 10:00 PM' },
    { label: 'Friday – Saturday', value: '4:00 PM – 12:00 AM' },
    { label: 'Sunday', value: '4:00 PM – 10:00 PM' },
  ],
};

export async function getRestaurantInfo(): Promise<RestaurantInfo> {
  try {
    const { data, error } = await supabase
      .from('restaurant_info')
      .select('address, phone, maps_url, hours')
      .eq('client_id', supabaseClientId)
      .single();

    if (error || !data) return RESTAURANT_FALLBACK;

    return {
      address: data.address ?? RESTAURANT_FALLBACK.address,
      phone: data.phone ?? RESTAURANT_FALLBACK.phone,
      maps_url: data.maps_url ?? RESTAURANT_FALLBACK.maps_url,
      hours:
        Array.isArray(data.hours) && data.hours.length > 0
          ? data.hours
          : RESTAURANT_FALLBACK.hours,
    };
  } catch {
    return RESTAURANT_FALLBACK;
  }
}
