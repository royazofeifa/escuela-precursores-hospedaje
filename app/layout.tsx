import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hospedaje | Escuela del Servicio de Precursores",
  description: "Asignaciones, contactos y ubicaciones de hospedaje para la Escuela del Servicio de Precursores.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
