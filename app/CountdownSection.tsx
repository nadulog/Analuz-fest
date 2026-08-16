"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-09-27T21:00:00-03:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const remaining = Math.max(0, EVENT_DATE - Date.now());

  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTime(getTimeLeft());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const values = time ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <section className="countdown" aria-label="Cuenta regresiva para Ana Luz Fest">
      <img
        className="section-image"
        src="/images/ana-luz-fest-countdown-clean.png"
        width="945"
        height="1676"
        alt="Escenario floral de Ana Luz Fest con cuenta regresiva"
      />
      <div className="countdown__petals" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span className={`countdown-petal countdown-petal--${index + 1}`} key={index} />
        ))}
      </div>
      <div className="countdown__values" aria-live="off">
        <CountdownValue value={values.days} label="días" />
        <CountdownValue value={values.hours} label="horas" />
        <CountdownValue value={values.minutes} label="minutos" />
        <CountdownValue value={values.seconds} label="segundos" />
      </div>
      <p className="sr-only" aria-live="polite">
        Faltan {values.days} días, {values.hours} horas, {values.minutes} minutos y {values.seconds} segundos.
      </p>
    </section>
  );
}

function CountdownValue({ value, label }: { value: number; label: string }) {
  return (
    <span className="countdown__value" aria-label={`${value} ${label}`}>
      {String(value).padStart(2, "0")}
    </span>
  );
}
