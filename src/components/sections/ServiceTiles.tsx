"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, MessageCircle, Search } from "lucide-react";

const tiles = [
  {
    icon: Home,
    eyebrow: "Ich möchte verkaufen",
    title: "Kostenlose Bewertung in 2 Minuten",
    description:
      "Erhalten Sie eine fundierte Markteinschätzung Ihrer Immobilie — schnell, unverbindlich und kostenlos.",
    cta: "Jetzt bewerten",
    href: "/verkaufen#bewertung",
    highlight: true,
  },
  {
    icon: Search,
    eyebrow: "Ich suche eine Immobilie",
    title: "Aktuelle Objekte in Hamburg & SH",
    description:
      "Vom Stadthaus bis zur Ostsee-Immobilie — entdecken Sie unsere aktuellen Angebote.",
    cta: "Objekte entdecken",
    href: "/immobilien",
    highlight: false,
  },
  {
    icon: MessageCircle,
    eyebrow: "Ich habe eine Frage",
    title: "Persönliche Beratung anfordern",
    description:
      "Sprechen Sie direkt mit uns — wir nehmen uns Zeit für Ihr Anliegen, ohne Verkaufsdruck.",
    cta: "Kontakt aufnehmen",
    href: "/kontakt",
    highlight: false,
  },
] as const;

export default function ServiceTiles() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-wide">
        <div className="mb-12 max-w-2xl">
          <span className="section-label">Wie können wir Ihnen helfen?</span>
          <h2 className="h2">Drei Wege, mit uns zu starten</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={tile.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                  tile.highlight
                    ? "bg-primary-950 text-cream shadow-xl hover:shadow-2xl"
                    : "border border-primary-200 bg-white text-primary-900 shadow-sm hover:border-accent-300 hover:shadow-xl"
                }`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
                    tile.highlight
                      ? "bg-accent-500 text-primary-950"
                      : "bg-accent-50 text-accent-600"
                  }`}
                >
                  <tile.icon className="h-7 w-7" />
                </div>
                <p
                  className={`mb-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] ${
                    tile.highlight ? "text-accent-300" : "text-accent-600"
                  }`}
                >
                  {tile.eyebrow}
                </p>
                <h3
                  className={`mb-3 font-serif text-2xl leading-snug ${
                    tile.highlight ? "text-cream" : "text-primary-900"
                  }`}
                >
                  {tile.title}
                </h3>
                <p
                  className={`mb-6 flex-1 text-sm leading-relaxed ${
                    tile.highlight ? "text-primary-200" : "text-primary-600"
                  }`}
                >
                  {tile.description}
                </p>
                <span
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${
                    tile.highlight ? "text-accent-300" : "text-accent-600"
                  }`}
                >
                  {tile.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
