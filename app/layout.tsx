import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ana Luz Fest | Mis XV",
  description: "Invitación digital a los XV de Ana Luz Tello Bordón.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
