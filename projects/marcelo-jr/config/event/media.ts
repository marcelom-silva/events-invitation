import { EventMedia } from "@/types/event";

export const media: EventMedia = {
  poster: "/event/images/poster.svg",
  video: "/event/videos/invitation.mp4",

  // troque para "/event/audio/music.mp3" (ou o nome do arquivo) assim que
  // colocar a música na pasta public/event/audio — o botão liga sozinho
  music: null,
};
