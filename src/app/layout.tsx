import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "El mejor lugar para ir comer",
  description: "Aplicación web ficticia para restaurante.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
