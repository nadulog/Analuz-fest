import type { Metadata } from "next";
import InvitationPage from "../page";

const shareUrl = "https://bloomdate-analuz-fest.netlify.app/invitacion/";

export const metadata: Metadata = {
  title: "Ana Luz Fest | Mis XV",
  description: "¡Qué alegría compartir este momento con vos! Abrí mi invitación.",
  alternates: { canonical: shareUrl },
  openGraph: {
    type: "website",
    url: shareUrl,
    siteName: "Ana Luz Fest",
    locale: "es_AR",
    title: "Ana Luz Fest | Mis XV",
    description: "¡Qué alegría compartir este momento con vos! Abrí mi invitación.",
    images: [
      {
        url: "/og.jpg",
        secureUrl: "https://bloomdate-analuz-fest.netlify.app/og.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Ana Luz Fest, Mis XV. Qué alegría compartir este momento con vos.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Luz Fest | Mis XV",
    description: "¡Qué alegría compartir este momento con vos! Abrí mi invitación.",
    images: ["/og.jpg"],
  },
};

export default InvitationPage;
