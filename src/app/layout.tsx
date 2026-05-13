import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: "Immobilienmakler Hamburg & Schleswig-Holstein | Mark Gerlach Immobilien",
    template: "%s | Mark Gerlach Immobilien",
  },
  description:
    "Erfahrener Immobilienmakler im Hamburger Speckgürtel und ganz Schleswig-Holstein. Verkauf, Bewertung, Vermittlung. Unbürokratisch, persönlich, mit regionalem Netzwerk. ✓ Norderstedt ✓ Henstedt-Ulzburg ✓ Hamburg ✓ Pinneberg",
  keywords: [
    "Immobilienmakler Hamburg",
    "Immobilienmakler Schleswig-Holstein",
    "Haus verkaufen Norderstedt",
    "Immobilie verkaufen Hamburg Speckgürtel",
    "Immobilienbewertung kostenlos",
    "Immobilienmakler Henstedt-Ulzburg",
    "Immobilienmakler Pinneberg",
    "Off-Market Immobilie",
  ],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: COMPANY.website,
    siteName: COMPANY.name,
    title: "Immobilienmakler Hamburg & Schleswig-Holstein | Mark Gerlach Immobilien",
    description:
      "Persönlich, unbürokratisch und mit dem Netzwerk, das den Unterschied macht. Wir verkaufen Ihre Immobilie zum besten Preis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: COMPANY.name,
  url: COMPANY.website,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.street,
    postalCode: COMPANY.zip,
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.state,
    addressCountry: COMPANY.country,
  },
  areaServed: [
    { "@type": "City", name: "Hamburg" },
    { "@type": "City", name: "Norderstedt" },
    { "@type": "City", name: "Henstedt-Ulzburg" },
    { "@type": "City", name: "Kaltenkirchen" },
    { "@type": "City", name: "Quickborn" },
    { "@type": "City", name: "Bad Bramstedt" },
    { "@type": "City", name: "Elmshorn" },
    { "@type": "City", name: "Pinneberg" },
    { "@type": "AdministrativeArea", name: "Kreis Segeberg" },
    { "@type": "AdministrativeArea", name: "Schleswig-Holstein" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.2",
    reviewCount: "47",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {children}
      </body>
    </html>
  );
}
