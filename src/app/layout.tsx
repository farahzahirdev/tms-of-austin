import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep TMS with BrainsWay in Austin, TX | TMS of Austin",
  description:
    "FDA-approved BrainsWay Deep TMS for treatment-resistant depression and OCD in Austin, TX. Non-invasive, insurance accepted. 3 locations. Call (737) 471-5402.",
  icons: {
    icon: "/images/favicon-96.png",
  },
  keywords: [
    "TMS Austin TX",
    "TMS of Austin",
    "Deep TMS BrainsWay",
    "treatment resistant depression Austin",
    "OCD treatment Austin",
    "Deep TMS Cedar Park",
  ],
  openGraph: {
    title: "Deep TMS with BrainsWay in Austin, TX | TMS of Austin",
    description:
      "FDA-approved Deep TMS for depression & OCD. Non-invasive, insurance accepted. South Austin, North Austin & Cedar Park.",
    url: site.website,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#04141B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href={site.ghl.origin} />
        <link rel="prefetch" href={site.ghl.calendar.src} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
        {/*
          GHL's embed script resizes booking/survey iframes via postMessage. If the
          listener isn't attached before the widget reports height, the iframe stays
          at its starting size. afterInteractive registers early — before the
          widget finishes booting — unlike lazyOnload which often loses that race.
        */}
        <Script src={site.ghl.embedScriptSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
