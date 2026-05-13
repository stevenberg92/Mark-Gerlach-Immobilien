"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import Placeholder from "@/components/Placeholder";
import { COMPANY } from "@/lib/constants";
import { SELL_BENEFITS } from "@/lib/data";

export default function SellSection() {
  return (
    <section
      id="verkaufen"
      className="relative overflow-hidden bg-primary-950 py-20 text-cream lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_10%_20%,rgba(192,138,45,0.18),transparent_50%),radial-gradient(circle_at_90%_80%,rgba(192,138,45,0.10),transparent_55%)]" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* TODO: Bild Schlüsselübergabe oder Bewertungsprotokoll-Detail einsetzen */}
          <Placeholder
            label="Schlüsselübergabe / Verkauf"
            tone="accent"
            className="aspect-[5/4] w-full rounded-3xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            Für Verkäufer &amp; Eigentümer
          </span>
          <h2 className="font-serif text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
            Sie möchten Ihre Immobilie verkaufen? Wir machen es einfach.
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-primary-200">
            Der Verkauf einer Immobilie ist eine der wichtigsten finanziellen Entscheidungen
            Ihres Lebens. Wir nehmen Ihnen den Aufwand ab — Sie behalten die Kontrolle.
          </p>

          <ul className="mt-8 space-y-4">
            {SELL_BENEFITS.map((benefit, i) => (
              <motion.li
                key={benefit.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-primary-950">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-serif text-lg text-cream">{benefit.title}</p>
                  <p className="text-sm text-primary-300">{benefit.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/verkaufen#bewertung" className="btn-primary">
              Jetzt kostenlose Bewertung starten
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-cream hover:text-accent-300"
            >
              <Phone className="h-4 w-4" />
              Oder anrufen: {COMPANY.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
