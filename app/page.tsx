import { Countdown } from "./CountdownSection";
import { LocationSection } from "./LocationSection";
import { GiftSection } from "./GiftSection";
import { MusicSection } from "./MusicSection";
import { InvitationMusic } from "./InvitationMusic";

export default function Home() {
  return (
    <main className="invitation-shell">
      <InvitationMusic />
      <section className="hero" aria-label="Portada de Ana Luz Fest">
        <img
          className="hero__image"
          src="/images/ana-luz-fest-portada-v2.png"
          width="945"
          height="1676"
          alt="Ana Luz en un paisaje de montaña rodeada de flores, portada de Ana Luz Fest, Mis XV, 26 de septiembre"
          fetchPriority="high"
        />
        <div className="hero__petals" aria-hidden="true">
          <span className="petal petal--one" />
          <span className="petal petal--two" />
          <span className="petal petal--three" />
        </div>
      </section>
      <Countdown />
      <section className="event-ticket" aria-label="Datos de Ana Luz Fest y acceso VIP">
        <img
          className="section-image event-ticket__image"
          src="/images/ana-luz-fest-ticket.png"
          width="887"
          height="1774"
          alt="Entrada de Ana Luz Fest: 26 de septiembre de 2026, apertura de puertas a las 21:00, ingreso hasta las 21:30 en Festival Garden, Pasaje Ignacio Molina sin número, Barrio Vargas. Acceso VIP, entrada única número 0015."
          loading="lazy"
        />
      </section>
      <LocationSection />
      <section className="dress-code" aria-label="Código de vestimenta">
        <img
          className="section-image"
          src="/images/ana-luz-fest-dress-code-v2.png"
          width="944"
          height="1674"
          alt="Dress code elegante sport con looks negros. Vestite cómodo y elegí calzado apto para césped."
          loading="lazy"
        />
      </section>
      <section className="ana-gallery" aria-label="Fotos de Ana Luz">
        <div className="ana-gallery__heading">
          <span aria-hidden="true">✦</span>
          <h2>Un poquito de mí</h2>
        </div>
        <div className="ana-gallery__track">
          <figure className="ana-gallery__photo">
            <img src="/images/ana-luz-gallery-5.jpeg" width="1200" height="1600" alt="Ana Luz de pie frente a un paisaje de montaña" loading="lazy" />
          </figure>
          <figure className="ana-gallery__photo">
            <img src="/images/ana-luz-gallery-3.jpeg" width="1200" height="1600" alt="Ana Luz sentada frente a las montañas iluminadas por el sol" loading="lazy" />
          </figure>
          <figure className="ana-gallery__photo">
            <img src="/images/ana-luz-gallery-4.jpeg" width="1200" height="1600" alt="Ana Luz sonriendo en un paisaje de montaña" loading="lazy" />
          </figure>
        </div>
        <span className="ana-gallery__arrow" aria-hidden="true">→</span>
      </section>
      <MusicSection />
      <GiftSection />
      <section className="bloomkeep" aria-label="Bloomkeep de Ana Luz Fest">
        <img
          className="section-image"
          src="/images/ana-luz-fest-bloomkeep.png"
          width="944"
          height="1674"
          alt="Bloomkeep, el festival desde adentro. Fotos y videos en tiempo real."
          loading="lazy"
        />
        <a
          className="bloomkeep__link"
          href="https://app.bloomkeep.site/analuz-fest"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Entrar a Bloomkeep de Ana Luz Fest</span>
        </a>
      </section>
      <section className="trivias" aria-label="Bloom Trivias">
        <img
          className="section-image"
          src="/images/ana-luz-fest-trivias.png"
          width="944"
          height="1674"
          alt="Bloom Trivias. El festival también se juega: preguntas, votaciones y ranking, próximamente en la fiesta."
          loading="lazy"
        />
      </section>
      <section className="rsvp" aria-label="Confirmación de asistencia">
        <img
          className="section-image"
          src="/images/ana-luz-fest-rsvp.png"
          width="944"
          height="1674"
          alt="¿Venís? Quiero vivir este festival con vos. Confirmá tu asistencia."
          loading="lazy"
        />
        <a
          className="rsvp__link"
          href="https://bloomdate-rsvp.netlify.app/r/cumple-xv-ana-luz"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Confirmar asistencia a Ana Luz Fest</span>
        </a>
      </section>
      <footer className="bloomdate-footer">
        <p className="bloomdate-footer__made">Hecha con mucho amor <span aria-hidden="true">♥</span> por</p>
        <img className="bloomdate-footer__logo" src="/bloomdate-logo-gray.svg" width="400" height="100" alt="BloomDate" />
        <nav className="bloomdate-footer__links" aria-label="Contacto de BloomDate">
          <a href="https://wa.me/5491140436324" target="_blank" rel="noreferrer">
            <img src="/icons/whatsapp.svg" width="32" height="32" alt="" />
            <span className="sr-only">Contactar a BloomDate por WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/bloomdate.invitaciones/" target="_blank" rel="noreferrer">
            <img src="/icons/instagram.svg" width="32" height="32" alt="" />
            <span className="sr-only">Ver BloomDate en Instagram</span>
          </a>
          <a href="https://bloomdate-site.netlify.app/" target="_blank" rel="noreferrer">
            <img src="/icons/web.svg" width="32" height="32" alt="" />
            <span className="sr-only">Visitar la web de BloomDate</span>
          </a>
        </nav>
        <p className="bloomdate-footer__copyright">© 2026 BloomDate · Todos los derechos reservados</p>
      </footer>
    </main>
  );
}
