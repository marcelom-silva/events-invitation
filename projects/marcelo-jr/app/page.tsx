import Container from "@/components/layout/Container";
import Card from "@/components/layout/Card";

import VideoPlayer from "@/components/player/VideoPlayer";

import Hero from "@/components/ui/Hero";
import ActionButtons from "@/components/ui/ActionButtons";
import ConfirmPresenceButton from "@/components/ui/ConfirmPresenceButton";
import ShareButton from "@/components/ui/ShareButton";
import MapsButton from "@/components/ui/MapsButton";

import Background from "@/components/themes/kids-birthday/Background";
import Mascot from "@/components/themes/kids-birthday/Mascot";

import { event } from "@/config/event";

export default function Home() {
  return (
    <>
      <Background />

      <Container>
        <Card>
          <Mascot />

          <Hero title={event.texts.title} subtitle={event.texts.subtitle} />

          <VideoPlayer
            src={event.media.video}
            poster={event.media.poster}
            alt={event.texts.title}
          />

          <ActionButtons>
            {event.rsvpUrl && (
              <ConfirmPresenceButton
                href={event.rsvpUrl}
                label={event.texts.buttonRSVP}
              />
            )}
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
