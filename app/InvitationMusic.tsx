"use client";

import { useEffect, useRef, useState } from "react";

export function InvitationMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const syncPlaying = () => setPlaying(true);
    const syncPaused = () => setPlaying(false);
    audio.addEventListener("play", syncPlaying);
    audio.addEventListener("pause", syncPaused);

    return () => {
      audio.removeEventListener("play", syncPlaying);
      audio.removeEventListener("pause", syncPaused);
    };
  }, []);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
    }
  }

  return (
    <div className="invitation-music">
      <audio ref={audioRef} src="/audio/jump.mp3" loop preload="metadata" />
      <button
        className={`invitation-music__button${playing ? " is-playing" : ""}`}
        type="button"
        onClick={toggleMusic}
        aria-pressed={playing}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
      >
        <span className="invitation-music__icon" aria-hidden="true">{playing ? "❚❚" : "♪"}</span>
      </button>
    </div>
  );
}
