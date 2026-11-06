import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coatwell | Painting, Roofing & Remodeling in El Paso, TX",
  description:
    "Coatwell provides professional painting, roofing, kitchen remodeling, bathroom remodeling, flooring, and drywall services in El Paso, Texas and surrounding areas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* GLOBAL NAVBAR — appears on every page */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">{children}</main>

        {/* GLOBAL FOOTER — appears on every page */}
        <Footer />
      </body>
    </html>
  );
}