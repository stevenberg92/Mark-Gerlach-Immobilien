export type Property = {
  id: string;
  title: string;
  location: string;
  type: string;
  rooms: number;
  livingArea: number;
  plotArea?: number;
  price: number;
  image: string;
  imageAlt: string;
};

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "reetdach-moorrege",
    title: "Idyllisches Reetdachhaus",
    location: "Moorrege, Kreis Pinneberg",
    type: "Einfamilienhaus",
    rooms: 5,
    livingArea: 168,
    plotArea: 920,
    price: 749000,
    // TODO: Echtes Objektfoto Reetdachhaus Moorrege einfügen
    image: "/images/placeholder-reetdach.jpg",
    imageAlt: "Reetdachhaus in Moorrege mit großem Garten",
  },
  {
    id: "strandhaus-sierksdorf",
    title: "Strandhaus an der Ostsee",
    location: "Sierksdorf, Lübecker Bucht",
    type: "Ferienhaus",
    rooms: 4,
    livingArea: 124,
    plotArea: 540,
    price: 895000,
    // TODO: Echtes Objektfoto Strandhaus Sierksdorf einfügen
    image: "/images/placeholder-strandhaus.jpg",
    imageAlt: "Modernes Strandhaus mit Meerblick in Sierksdorf",
  },
  {
    id: "altbau-hamburg",
    title: "Stilvolle Altbauwohnung",
    location: "Hamburg-Eppendorf",
    type: "Eigentumswohnung",
    rooms: 3,
    livingArea: 92,
    price: 685000,
    // TODO: Echtes Objektfoto Altbauwohnung Hamburg einfügen
    image: "/images/placeholder-altbau.jpg",
    imageAlt: "Hochwertig sanierte Altbauwohnung in Hamburg-Eppendorf",
  },
  {
    id: "efh-norderstedt",
    title: "Modernes Einfamilienhaus",
    location: "Norderstedt-Garstedt",
    type: "Einfamilienhaus",
    rooms: 6,
    livingArea: 184,
    plotArea: 612,
    price: 829000,
    // TODO: Echtes Objektfoto EFH Norderstedt einfügen
    image: "/images/placeholder-efh.jpg",
    imageAlt: "Modernes Einfamilienhaus in Norderstedt-Garstedt",
  },
  {
    id: "grundstueck-pronstorf",
    title: "Baugrundstück in Toplage",
    location: "Pronstorf, Kreis Segeberg",
    type: "Grundstück",
    rooms: 0,
    livingArea: 0,
    plotArea: 1240,
    price: 245000,
    // TODO: Echtes Objektfoto Baugrundstück Pronstorf einfügen
    image: "/images/placeholder-grundstueck.jpg",
    imageAlt: "Erschlossenes Baugrundstück in Pronstorf",
  },
  {
    id: "stadthaus-henstedt",
    title: "Charmantes Stadthaus",
    location: "Henstedt-Ulzburg",
    type: "Reihenendhaus",
    rooms: 4,
    livingArea: 138,
    plotArea: 320,
    price: 565000,
    // TODO: Echtes Objektfoto Stadthaus Henstedt-Ulzburg einfügen
    image: "/images/placeholder-stadthaus.jpg",
    imageAlt: "Charmantes Stadthaus in Henstedt-Ulzburg",
  },
];

export const BUYER_REQUESTS = [
  {
    emoji: "🏡",
    title: "Familie mit 2 Kindern",
    description: "sucht Einfamilienhaus in Norderstedt bis 750.000 €",
    badge: "Sofort kaufbereit",
  },
  {
    emoji: "🏗️",
    title: "Privater Investor",
    description: "sucht Baugrundstück im Kreis Segeberg ab 600 m²",
    badge: "Alle Preisklassen",
  },
  {
    emoji: "🔨",
    title: "Sanierer aus Hamburg",
    description: "sucht Sanierungsobjekt in Hamburg-Nord",
    badge: "Finanzierung steht",
  },
  {
    emoji: "🏢",
    title: "Senioren-Ehepaar",
    description: "sucht barrierearme Eigentumswohnung in Henstedt-Ulzburg bis 400.000 €",
    badge: "Bonität geprüft",
  },
] as const;

export const SERVICES = [
  {
    title: "Immobilienverkauf",
    description: "Professionelle Vermarktung mit voller Reichweite auf allen relevanten Portalen.",
    icon: "Home",
  },
  {
    title: "Immobilienbewertung",
    description: "Realistische Marktwerteinschätzung Ihres Objekts — kostenlos und unverbindlich.",
    icon: "LineChart",
  },
  {
    title: "Käuferbetreuung",
    description: "Wir finden Ihre Wunschimmobilie in Hamburg und ganz Schleswig-Holstein.",
    icon: "Search",
  },
  {
    title: "Baugrundstücke",
    description: "Spezialisiert auf die Vermittlung erschlossener Grundstücke in Norddeutschland.",
    icon: "MapPin",
  },
  {
    title: "Off-Market-Verkauf",
    description: "Diskreter Verkauf über unsere aktive Käufer-Datenbank — ohne öffentliches Inserat.",
    icon: "Lock",
  },
  {
    title: "Beratung & Netzwerk",
    description: "Finanzierung, Energieausweis, Notar, Haushaltsauflösung — alles aus einer Hand.",
    icon: "Network",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Kostenlose Bewertung",
    description: "Sie übermitteln uns die Eckdaten Ihrer Immobilie online oder telefonisch.",
  },
  {
    title: "Persönliches Gespräch",
    description: "Wir besichtigen Ihre Immobilie vor Ort und besprechen die Vermarktungsstrategie.",
  },
  {
    title: "Vermarktung",
    description: "Professionelle Exposé-Erstellung, Inserate auf allen Portalen, Besichtigungen.",
  },
  {
    title: "Verhandlung",
    description: "Wir verhandeln den besten Preis für Sie und prüfen die Bonität der Käufer.",
  },
  {
    title: "Notartermin",
    description: "Wir begleiten Sie bis zur Beurkundung und zur Schlüsselübergabe.",
  },
] as const;

export const TESTIMONIALS = [
  {
    initials: "AS",
    name: "Familie Schmidt",
    location: "Norderstedt",
    rating: 5,
    quote:
      "Herr Gerlach hat unser Haus innerhalb von drei Wochen verkauft — und das deutlich über unserem Wunschpreis. Die Abwicklung war absolut professionell und unkompliziert.",
  },
  {
    initials: "BM",
    name: "Birgit M.",
    location: "Henstedt-Ulzburg",
    rating: 5,
    quote:
      "Wir haben uns von Anfang an persönlich betreut gefühlt. Die regionale Erfahrung hat einen riesigen Unterschied gemacht — wir würden jederzeit wieder mit Mark Gerlach zusammenarbeiten.",
  },
  {
    initials: "TK",
    name: "Thomas K.",
    location: "Lübecker Bucht",
    rating: 4,
    quote:
      "Schneller Verkauf eines Ferienhauses an der Ostsee. Die aktive Käuferdatenbank hat uns einen passenden Käufer gebracht, bevor das Objekt überhaupt online war.",
  },
] as const;

export const BLOG_TEASERS = [
  {
    title: "Immobilienpreise im Kreis Segeberg 2026 — aktuelle Entwicklung",
    excerpt:
      "Wie haben sich die Quadratmeterpreise in den letzten 12 Monaten entwickelt? Eine Analyse für Eigentümer.",
    date: "12. März 2026",
    slug: "/ratgeber/immobilienpreise-kreis-segeberg-2026",
    category: "Marktanalyse",
  },
  {
    title: "Haus verkaufen in Norderstedt: Was Eigentümer jetzt wissen müssen",
    excerpt:
      "Die wichtigsten Schritte, häufigsten Fehler und wie Sie den optimalen Verkaufszeitpunkt erkennen.",
    date: "04. März 2026",
    slug: "/ratgeber/haus-verkaufen-norderstedt",
    category: "Verkaufstipps",
  },
  {
    title: "Energieausweis-Pflicht: Was beim Verkauf wichtig ist",
    excerpt:
      "Welcher Energieausweis ist Pflicht? Welche Fristen gelten und wie vermeiden Sie hohe Bußgelder?",
    date: "21. Februar 2026",
    slug: "/ratgeber/energieausweis-pflicht-verkauf",
    category: "Recht & Pflicht",
  },
] as const;

export const SELL_BENEFITS = [
  {
    title: "Aktive Käufer-Datenbank",
    description: "Oft verkaufen wir Ihre Immobilie, bevor sie öffentlich inseriert wird.",
  },
  {
    title: "Komplettes Netzwerk",
    description: "Energieberater, Finanzierer, Notare, Haushaltsauflöser — alles aus einer Hand.",
  },
  {
    title: "Regionale Marktexpertise",
    description: "Vom Hamburger Speckgürtel bis zur Lübecker Bucht — wir kennen jeden Markt.",
  },
  {
    title: "Maximale Entlastung",
    description: "Sie unterschreiben, wir kümmern uns um alles dazwischen.",
  },
  {
    title: "Transparente Zusammenarbeit",
    description: "Klare Kommunikation, keine versteckten Kosten, keine bösen Überraschungen.",
  },
] as const;
