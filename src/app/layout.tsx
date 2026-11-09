import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Live7 | Fresh Farm Produce & Grain Logistics",
  description:
    "Newly launched UK wholesale produce supplier providing fresh farm vegetables, seasonal fruits, and bulk basmati rice directly to trade clients.",
  icons: {
    icon: [
      { url: "/live7-favicon.ico" },
      { url: "/live7-favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/live7-favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased bg-slate-50 text-slate-800 min-h-screen flex flex-col`}
      >
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}

