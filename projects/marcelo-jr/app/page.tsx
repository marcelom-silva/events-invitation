import Container from "@/components/layout/Container";
import Card from "@/components/layout/Card";

import VideoPlayer from "@/components/player/VideoPlayer";
import AudioController from "@/components/player/AudioController";

import Hero from "@/components/ui/Hero";
import ActionButtons from "@/components/ui/ActionButtons";
import ShareButton from "@/components/ui/ShareButton";
import MapsButton from "@/components/ui/MapsButton";

import Background from "@/components/themes/kids-birthday/Background";
import SunMascot from "@/components/themes/kids-birthday/SunMascot";

import { event } from "@/config/event";

export default function Home() {
  return (
    <>
      <Background />

      <Container>
        <Card>
          <SunMascot />

          <Hero title={event.texts.title} subtitle={event.texts.subtitle} />

          <VideoPlayer
            src={event.media.video}
            poster={event.media.poster}
            alt={event.texts.title}
          />

          <ActionButtons>
            <AudioController
              src={event.media.music}
              label={event.texts.buttonMusic}
            />
            <MapsButton
              href={event.location.mapsUrl}
              label={event.texts.buttonMaps}
            />
            <ShareButton
              title={event.texts.title}
              text={event.texts.shareText}
              label={event.texts.buttonShare}
            />
          </ActionButtons>
        </Card>
      </Container>
    </>
  );
}
