"use client";

import { useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import IconButton from "@/components/ui/IconButton";

type MusicToggleProps = {
  src: string | null;
  label: string;
};

export default function MusicToggle({ src, label }: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const disabled = !src;

  function toggle() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <>
      {src && <audio ref={audioRef} src={src} loop preload="none" />}

      <IconButton
        icon={playing ? VolumeX : Music}
        label={disabled ? "Em breve" : label}
        active={playing}
        disabled={disabled}
        onClick={toggle}
      />
    </>
  );
}
