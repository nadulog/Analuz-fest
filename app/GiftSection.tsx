"use client";

import { useEffect, useState } from "react";

const ALIAS = "analuztello143";

export function GiftSection() {
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

  async function copyAlias() {
    await navigator.clipboard.writeText(ALIAS);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="gift" aria-label="Información para regalos">
      <img
        className="section-image"
        src="/images/ana-luz-fest-gift.png"
        width="944"
        height="1674"
        alt="Lo más lindo va a ser compartir este festival con vos. Si querés hacerme un regalo, podés ver los datos."
        loading="lazy"
      />
      <button className="gift__open" type="button" onClick={() => setOpen(true)}>
        <span className="sr-only">Ver datos para regalos</span>
      </button>

      {open && (
        <div className="gift-modal" role="dialog" aria-modal="true" aria-label="Datos para regalos">
          <button className="gift-modal__backdrop" type="button" onClick={() => setOpen(false)} aria-label="Cerrar" />
          <div className="gift-modal__card">
            <img
              className="gift-modal__image"
              src="/images/ana-luz-fest-gift-modal-v2.png"
              width="944"
              height="1674"
              alt="Marco floral para los datos del regalo"
            />
            <button className="gift-modal__close" type="button" onClick={() => setOpen(false)}>
              <span className="sr-only">Cerrar datos para regalos</span>
            </button>
            <div className="gift-modal__content">
              <div className="gift-modal__detail">
                <span>Nombre</span>
                <strong>Ana Luz Tello Bordon</strong>
              </div>
              <div className="gift-modal__detail">
                <span>Alias</span>
                <strong>{ALIAS}</strong>
              </div>
              <div className="gift-modal__detail">
                <span>Entidad</span>
                <strong>Mercado Pago</strong>
              </div>
              <button className="gift-modal__copy" type="button" onClick={copyAlias}>
                {copied ? "Alias copiado" : "Copiar alias"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
