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
    locale: "es_AR",
    title: "Ana Luz Fest | Mis XV",
    description: "¡Qué alegría compartir este momento con vos! Abrí mi invitación.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 907,
        alt: "Ana Luz Fest, Mis XV. Qué alegría compartir este momento con vos.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Luz Fest | Mis XV",
    description: "¡Qué alegría compartir este momento con vos! Abrí mi invitación.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
