import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, DM_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal"],
});

const siteUrl = "https://diffusr.ai";

export const metadata: Metadata = {
  title: "Diffusr — AI UGC Campaigns for Brands",
  description:
    "Launching viral AI UGC Campaigns for your brand at scale.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Diffusr — AI UGC Campaigns for Brands",
    description: "Launching viral AI UGC Campaigns for your brand at scale.",
    url: siteUrl,
    siteName: "Diffusr",
    images: [
      {
        url: `${siteUrl}/og-banner.png`,
        width: 1200,
        height: 630,
        alt: "Diffusr — Your brand. Everywhere it should be.",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diffusr — AI UGC Campaigns for Brands",
    description: "Launching viral AI UGC Campaigns for your brand at scale.",
    images: [`${siteUrl}/og-banner.png`],
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable} ${barlowCondensed.variable} antialiased`}
    >
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
