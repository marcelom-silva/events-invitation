import { EventConfig } from "@/types/event";

export const event: EventConfig = {
  theme: "birthday",

  texts: {
    title: "Marcelo Jr.",
    subtitle: "Primeira Volta ao Sol",

    buttonWatch: "Assistir Convite",
    buttonMusic: "Música",
    buttonMaps: "Como Chegar",
    buttonShare: "Compartilhar",
  },

  media: {
    video: "/event/convite.mp4",
    poster: "/event/poster.webp",
    music: "/event/music.mp3",
  },

  location: {
    name: "Buffet Infantil",
    address: "",
    mapsUrl: "",
  },
};