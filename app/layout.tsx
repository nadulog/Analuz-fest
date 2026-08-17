import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bloomdate-analuz-fest.netlify.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ana Luz Fest | Mis XV",
  description: "Invitación digital a los XV de Ana Luz Tello Bordón.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ana Luz Fest",
    locale: "es_AR",
    title: "Ana Luz Fest | Mis XV",
    description: "¡Qué alegría compartir este momento con vos! Abrí mi invitación.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
