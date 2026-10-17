import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibafoundation.org"),

  title: {
    default: "IBA Foundation | Potential, put into practice.",
    template: "%s | IBA Foundation",
  },

  description:
    "We bring ambitious people together to think critically, experiment boldly, and build solutions to real-world problems.",

  applicationName: "IBA Foundation",

  keywords: [
    "IBA Foundation",
    "Innovation",
    "Competitions",
    "Builders",
    "Multidisciplinary Challenges",
    "Initiatives",
    "Potential put into practice",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibafoundation.org",
    siteName: "IBA Foundation",
    title: "IBA Foundation | Potential, put into practice.",
    description:
      "We bring ambitious people together to think critically, experiment boldly, and build solutions to real-world problems.",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1280,
        height: 720,
        alt: "IBA Foundation — Potential, put into practice.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IBA Foundation | Potential, put into practice.",
    description:
      "We bring ambitious people together to think critically, experiment boldly, and build solutions to real-world problems.",
    images: ["/images/hero-poster.webp"],
  },

  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0C0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
