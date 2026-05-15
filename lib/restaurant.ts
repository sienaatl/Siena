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
  return RESTAURANT_FALLBACK;
}
