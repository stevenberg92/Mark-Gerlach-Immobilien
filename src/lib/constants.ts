export const COMPANY = {
  name: "Mark Gerlach Immobilien",
  legalName: "Mark Gerlach Immobilien",
  street: "Norderstraße 11",
  zip: "24558",
  city: "Henstedt-Ulzburg",
  state: "Schleswig-Holstein",
  country: "DE",
  phone: "+49 4193 7549300",
  phoneDisplay: "04193 7549300",
  email: "info@mark-gerlach-immobilien.de",
  hours: "Mo–Fr 9:00–18:00 Uhr · Sa nach Vereinbarung",
  website: "https://www.mark-gerlach-immobilien.de",
  immoScoutUrl: "https://www.immobilienscout24.de/anbieter/mark-gerlach-immobilien",
} as const;

export const REGIONS = [
  "Hamburg",
  "Norderstedt",
  "Henstedt-Ulzburg",
  "Kaltenkirchen",
  "Quickborn",
  "Bad Bramstedt",
  "Elmshorn",
  "Pinneberg",
  "Kreis Segeberg",
  "Lübecker Bucht",
  "Sierksdorf",
] as const;

export const NAV_LINKS = [
  { label: "Start", href: "/" },
  { label: "Immobilien", href: "/immobilien" },
  { label: "Verkaufen", href: "/verkaufen" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
