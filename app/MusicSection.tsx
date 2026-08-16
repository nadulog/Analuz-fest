"use client";

import { useRef, useState } from "react";

const SPOTIFY_URL = "https://open.spotify.com/playlist/0gAEVrxsXgecvqvGIyL2A8?si=BFfayw_mSvWrx64U8lelUA&utm_source=whatsapp&pt=97d99a8acdbdb22cbb83f9ea93f8210d&pi=CXBTikPiTGeSs";

export function MusicSection() {
  const [active, setActive] = useState(false);
  const timer = useRef<number | null>(null);

  function playEffect() {
    setActive(false);
    window.requestAnimationFrame(() => setActive(true));
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(false), 900);
  }

  return (
    <section className={`playlist${active ? " is-active" : ""}`} aria-label="Playlist colaborativa de Ana Luz Fest">
      <img
        className="section-image"
        src="/images/ana-luz-fest-playlist.png"
        width="944"
        height="1674"
        alt="Que suene tu canción. Sumá un tema a la playlist de Ana Luz Fest."
        loading="lazy"
      />
      <div className="music-wave" aria-hidden="true">
        {Array.from({ length: 19 }, (_, index) => <span key={index} />)}
      </div>
      <div className="music-burst" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => <i key={index} />)}
      </div>
      <a
        className="playlist__link"
        href={SPOTIFY_URL}
        target="_blank"
        rel="noreferrer"
        onPointerDown={playEffect}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") playEffect();
        }}
      >
        <span className="sr-only">Agregar una canción a la playlist en Spotify</span>
      </a>
    </section>
  );
}
