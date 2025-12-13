import { z } from "zod";

export type GeolocationData = {
  country: string;
  country_code: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
};
