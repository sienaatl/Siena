import siteData from "./site-data.json";

export type HourEntry = { label: string; value: string };

export type RestaurantInfo = {
  address: string;
  phone: string;
  email: string;
  maps_url: string;
  hours: HourEntry[];
};

export const RESTAURANT_FALLBACK: RestaurantInfo = siteData.restaurant;

export async function getRestaurantInfo(): Promise<RestaurantInfo> {
  return siteData.restaurant;
}
