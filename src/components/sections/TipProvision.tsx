"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";

export default function TipProvision() {
  return (
    <section className="bg-cream py-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-accent-200 bg-gradient-to-br from-accent-50 via-cream to-accent-100 px-8 py-10 shadow-sm sm:px-12 sm:py-12"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent-200/50 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto,1fr,auto]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-950 text-accent-300">
              <Gift className="h-8 w-8" />
            </div>
            <div>
              <h2 className="mb-2 font-serif text-2xl text-primary-900 sm:text-3xl">
                Sie kennen jemanden, der verkaufen möchte?
              </h2>
              <p className="font-sans text-base leading-relaxed text-primary-700">
                Wir belohnen jeden Tipp, der zum Verkauf führt, mit einer angemessenen
                Tippgeberprovision. Unkompliziert und fair.
              </p>
            </div>
            <Link href="/tippgeber" className="btn-primary whitespace-nowrap">
              Tipp einreichen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
