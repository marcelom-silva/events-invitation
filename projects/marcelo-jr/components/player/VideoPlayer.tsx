"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, RotateCcw, LucideIcon } from "lucide-react";

type VideoPlayerProps = {
  src: string;
  poster: string;
  alt: string;
};

type PlayerStatus = "idle" | "playing" | "ended";

export default function VideoPlayer({ src, poster, alt }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<PlayerStatus>("idle");

  function handlePlay() {
    setStatus("playing");
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  }

  function handleReplay() {
    setStatus("playing");
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    });
  }

  return (
    <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-black shadow-lg">
      {status !== "idle" && (
        <video
          ref={videoRef}
          src={src}
          playsInline
          controls={status === "playing"}
          onEnded={() => setStatus("ended")}
          className="aspect-[9/16] w-full bg-black object-cover"
        />
      )}

      {status === "idle" && (
        <button
          type="button"
          onClick={handlePlay}
          className="group relative block w-full"
        >
          <Image
            src={poster}
            alt={alt}
            width={720}
            height={1280}
            priority
            sizes="(max-width: 768px) 100vw, 480px"
            className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Overlay icon={Play} />
        </button>
      )}

      {status === "ended" && (
        <button
          type="button"
          onClick={handleReplay}
          className="absolute inset-0 flex items-center justify-center bg-black/40"
        >
          <Overlay icon={RotateCcw} />
        </button>
      )}
    </div>
  );
}

function Overlay({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/25">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[var(--sun-orange)] shadow-xl transition-transform duration-300 group-hover:scale-110">
        <Icon size={28} strokeWidth={2.25} className={Icon === Play ? "ml-0.5" : undefined} />
      </div>
    </div>
  );
}
