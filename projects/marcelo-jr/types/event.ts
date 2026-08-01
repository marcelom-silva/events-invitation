export type ThemeType = "kids-birthday";

export interface EventLocation {
  name: string;
  address: string;
  mapsUrl: string;
}

export interface EventMedia {
  poster: string;
  video: string;
  music: string | null;
}

export interface EventTexts {
  title: string;
  subtitle: string;
  shareText: string;
  buttonMusic: string;
  buttonMaps: string;
  buttonShare: string;
  buttonRSVP: string;
}

export interface EventConfig {
  theme: ThemeType;
  texts: EventTexts;
  media: EventMedia;
  location: EventLocation;
  rsvpUrl: string | null;
}
