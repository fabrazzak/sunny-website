import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

/* ─── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "SUNY LLC – Your Strategic Retail Partner on Amazon",
  description:
    "SUNY LLC is a premier Amazon wholesale and distribution firm. We specialize in brand protection, MAP compliance, listing optimization, and FBA inventory management.",
  keywords:
    "Amazon wholesale, brand partnership, MAP compliance, listing optimization, FBA, SUNY LLC, retail partner, Amazon FBA, brand protection, e-commerce",
  authors:   [{ name: "SUNY LLC" }],
  creator:   "SUNY LLC",
  publisher: "SUNY LLC",
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title:       "SUNY LLC – Your Strategic Retail Partner on Amazon",
    description: "Partner with SUNY LLC to scale your brand on Amazon through expert distribution, brand protection, and listing optimization.",
    type:        "website",
    url:         "https://sunyllc.com",
    siteName:    "SUNY LLC",
    locale:      "en_US",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "SUNY LLC – Your Strategic Retail Partner on Amazon",
    description: "Partner with SUNY LLC to scale your brand on Amazon.",
  },
};

/* ─── Viewport / Theme ──────────────────────────────────────── */
export const viewport: Viewport = {
  width:           "device-width",
  initialScale:    1,
  viewportFit:     "cover",
  themeColor:      "#0A1628",
};

/* ─── JSON-LD Structured Data ───────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SUNY LLC",
  description: "Premier Amazon wholesale and distribution firm specializing in brand protection and listing optimization.",
  url: "https://sunyllc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@sunyllc.com",
    contactType: "customer service",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to external resources for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SZSM7W8W5P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SZSM7W8W5P');
          `}
        </Script>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
