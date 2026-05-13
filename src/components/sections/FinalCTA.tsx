"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-24 text-cream lg:py-32">
      {/* TODO: Hintergrundbild Hamburg-Skyline oder SH-Landschaft mit dunklem Overlay einsetzen */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-950 to-black"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_30%,rgba(192,138,45,0.20),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(62,93,130,0.25),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent"
      />

      <div className="container-tight relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent-400">
            Starten Sie jetzt
          </span>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
            Bereit, Ihre Immobilie zum besten Preis zu verkaufen?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary-200">
            Starten Sie jetzt mit einer kostenlosen, unverbindlichen Bewertung. Wir melden uns
            innerhalb von 24 Stunden bei Ihnen.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/verkaufen#bewertung" className="btn-primary">
              Jetzt kostenlos bewerten
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:bg-cream hover:text-primary-950"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
