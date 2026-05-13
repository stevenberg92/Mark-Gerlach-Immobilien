import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, REGIONS } from "@/lib/constants";

const services = [
  { label: "Verkaufen", href: "/verkaufen" },
  { label: "Kaufen", href: "/immobilien" },
  { label: "Bewertung", href: "/verkaufen#bewertung" },
  { label: "Off-Market", href: "/leistungen#off-market" },
  { label: "Käufergesuche", href: "/leistungen#gesuche" },
];

const serviceLinks = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "FAQ", href: "/faq" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 font-serif text-base font-bold text-primary-950">
                MG
              </span>
              <span className="font-serif text-xl text-cream">Mark Gerlach</span>
            </div>
            <address className="space-y-3 text-sm not-italic leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <div>
                  {COMPANY.legalName}
                  <br />
                  {COMPANY.street}
                  <br />
                  {COMPANY.zip} {COMPANY.city}
                </div>
              </div>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 transition-colors hover:text-accent-300"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-accent-400" />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 transition-colors hover:text-accent-300"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-accent-400" />
                {COMPANY.email}
              </a>
              <p className="pt-2 text-xs text-primary-300">{COMPANY.hours}</p>
            </address>
          </div>

          <div>
            <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-widest text-accent-400">
              Leistungen
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="transition-colors hover:text-accent-300"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-widest text-accent-400">
              Regionen
            </h3>
            <ul className="space-y-3 text-sm">
              {REGIONS.slice(0, 6).map((region) => (
                <li key={region}>
                  <Link
                    href={`/standort/${region
                      .toLowerCase()
                      .replace(/ä/g, "ae")
                      .replace(/ö/g, "oe")
                      .replace(/ü/g, "ue")
                      .replace(/ß/g, "ss")
                      .replace(/\s+/g, "-")}`}
                    className="transition-colors hover:text-accent-300"
                  >
                    Immobilienmakler {region}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-widest text-accent-400">
              Service &amp; Rechtliches
            </h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-accent-300">
                    {l.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-accent-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 text-xs text-primary-300 md:flex-row">
          <div>
            © {new Date().getFullYear()} {COMPANY.legalName}. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-5">
            <a
              href={COMPANY.immoScoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-300"
            >
              ImmoScout24
            </a>
            <a href="#" className="transition-colors hover:text-accent-300">
              Immowelt
            </a>
            <a href="#" className="transition-colors hover:text-accent-300">
              Kleinanzeigen
            </a>
            {/* TODO: Social-Media-Profile verlinken (Instagram, Facebook) sobald vorhanden */}
          </div>
        </div>
      </div>
    </footer>
  );
}
