"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Eye, Star, Clock } from "lucide-react";
import Placeholder from "@/components/Placeholder";

const trustItems = [
  { icon: Star, label: "4,2 ★ auf ImmoScout24" },
  { icon: Eye, label: "7.800+ Exposé-Aufrufe" },
  { icon: Clock, label: "Aktiv seit über 10 Jahren" },
  { icon: Award, label: "Persönlich beraten" },
];

export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-cream pb-16 pt-32 lg:pb-24 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_15%_20%,rgba(192,138,45,0.08),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(26,42,63,0.06),transparent_55%)]" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Immobilienmakler im Hamburger Speckgürtel</span>
          <h1 className="font-serif text-4xl leading-[1.08] text-primary-950 sm:text-5xl md:text-6xl lg:text-[64px]">
            Ihr Immobilienmakler für{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Hamburg</span>
              <span className="absolute -bottom-1 left-0 h-3 w-full bg-accent-200/70" />
            </span>{" "}
            &amp; Schleswig-Holstein
          </h1>
          <p className="lead mt-6 max-w-xl">
            Persönlich, unbürokratisch und mit dem Netzwerk, das den Unterschied macht.
            Wir verkaufen Ihre Immobilie zum besten Preis — und entlasten Sie dabei maximal.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/verkaufen#bewertung" className="btn-primary">
              Immobilie kostenlos bewerten lassen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/immobilien" className="btn-secondary">
              Aktuelle Angebote ansehen
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-primary-200 pt-6 sm:grid-cols-4">
            {trustItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-xs font-medium text-primary-700"
              >
                <item.icon className="h-4 w-4 flex-shrink-0 text-accent-500" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* TODO: Hochwertiges Hero-Bild einsetzen (Empfehlung: Reetdachhaus Moorrege oder Strandhaus Sierksdorf) */}
          <Placeholder
            label="Reetdachhaus Moorrege — Hero-Bild"
            tone="primary"
            className="aspect-[4/5] w-full rounded-3xl shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-primary-100 sm:block sm:max-w-xs"
          >
            <div className="flex items-center gap-2 text-accent-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <Star className="h-4 w-4 fill-current text-accent-200" />
            </div>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-primary-600">
              ImmoScout24 Bewertung
            </p>
            <p className="font-serif text-2xl font-semibold text-primary-900">4,2 / 5,0</p>
            <p className="text-xs text-primary-600">aus 47 Kundenbewertungen</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
