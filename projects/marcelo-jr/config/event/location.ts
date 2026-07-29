import { EventLocation } from "@/types/event";

const address = "Residencial Vitali, Águas Claras, DF, 71917-180";

export const location: EventLocation = {
  name: "Residencial Vitali",
  address,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
};
