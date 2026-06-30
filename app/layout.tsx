import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cormorant_Garamond, Inter } from "next/font/google";

export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matt-gallery.vercel.app/"),

  title: {
    default: "Matt's Gallery",
    template: "%s | Matt's Gallery",
  },

  description:
    "Handcrafted wooden objects inspired by craftsmanship, tradition and nature. Discover unique collections of functional art, jewellery and timeless wooden artifacts.",

  keywords: [
    "woodworking",
    "wood art",
    "handcrafted",
    "wooden objects",
    "wood sculpture",
    "artisan",
    "gallery",
    "woodcraft",
    "Nordic design",
  ],

  openGraph: {
    title: "Matt's Gallery",
    description:
      "Handcrafted wooden objects inspired by craftsmanship, tradition and nature.",
    url: "https://matt-gallery.vercel.app/",
    siteName: "Matt's Gallery",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matt's Gallery – Handcrafted Wooden Objects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Matt's Gallery",
    description:
      "Handcrafted wooden objects inspired by craftsmanship, tradition and nature.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}