import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Louis Bolatre — Senior Product Manager",
  description:
    "Senior PM avec 6 ans d'expérience en startup & scale-up. Discovery → Delivery → et je build aussi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-white text-zinc-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
