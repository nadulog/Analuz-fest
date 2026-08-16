"use client";

import { useEffect, useState } from "react";

const ADDRESS = "Festival Garden, Pasaje Ignacio Molina s/n, Barrio Vargas";
const MAPS_URL = "https://maps.app.goo.gl/F5JJHLS9HDfpWnur9";
const WAZE_URL = `https://www.waze.com/ul?q=${encodeURIComponent(ADDRESS)}&navigate=yes`;

export function LocationSection() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  async function copyAddress() {
    await navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="location" aria-label="Ubicación de Festival Garden">
      <img
        className="section-image"
        src="/images/ana-luz-fest-location.png"
        width="944"
        height="1674"
        alt="Festival Garden, Pasaje Ignacio Molina sin número, Barrio Vargas"
        loading="lazy"
      />
      <button className="location__open" type="button" onClick={() => setOpen(true)}>
        <span className="sr-only">Ver opciones para llegar a Festival Garden</span>
      </button>

      {open && (
        <div className="location-modal" role="dialog" aria-modal="true" aria-label="Cómo llegar a Festival Garden">
          <button className="location-modal__backdrop" type="button" onClick={() => setOpen(false)} aria-label="Cerrar" />
          <div className="location-modal__card">
            <img
              className="location-modal__image"
              src="/images/ana-luz-fest-location-modal.png"
              width="944"
              height="1674"
              alt="Opciones de navegación para llegar a Festival Garden"
            />
            <button className="location-hotspot location-hotspot--close" type="button" onClick={() => setOpen(false)}>
              <span className="sr-only">Cerrar opciones de ubicación</span>
            </button>
            <a className="location-hotspot location-hotspot--maps" href={MAPS_URL} target="_blank" rel="noreferrer">
              <span className="sr-only">Abrir en Google Maps</span>
            </a>
            <a className="location-hotspot location-hotspot--waze" href={WAZE_URL} target="_blank" rel="noreferrer">
              <span className="sr-only">Abrir en Waze</span>
            </a>
            <button className="location-hotspot location-hotspot--copy" type="button" onClick={copyAddress}>
              <span className="sr-only">Copiar dirección</span>
            </button>
            <p className={`location-modal__toast${copied ? " is-visible" : ""}`} role="status">
              Dirección copiada
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
