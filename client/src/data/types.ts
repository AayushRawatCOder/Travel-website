export interface Attraction {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Package {
  id: number;
  name: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
}

export interface SeasonalInfo {
  season: string;
  months: string;
  temperature: string;
  description: string;
  icon: string;
}

export interface Tips {
  dos: string[];
  donts: string[];
  localFood: string[];
}

export interface DestinationData {
  name: string;
  tagline: string;
  region: string;
  hero: string;
  overview: string[];
  attractions: Attraction[];
  packages: Package[];
  seasonalInfo: SeasonalInfo[];
  gallery: string[];
  tips: Tips;
}
export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface PackageDetail {
  id: number;
  name: string;
  duration: string;
  image: string;
  basePrice: number;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

export type DestinationPackages = Record<string, PackageDetail>;