"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BUYER_REQUESTS } from "@/lib/data";

export default function BuyerRequests() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide">
        <div className="mb-12 max-w-2xl">
          <span className="section-label">Aktive Käufergesuche</span>
          <h2 className="h2 mb-4">Vielleicht suchen wir genau Ihre Immobilie</h2>
          <p className="lead">
            Für unsere Bestandskunden suchen wir permanent Häuser, Grundstücke und Wohnungen
            im Kreis Segeberg, Pinneberg und im nördlichen Hamburg.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BUYER_REQUESTS.map((req, i) => (
            <motion.article
              key={req.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-primary-200 bg-cream p-7 transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl"
            >
              <div
                className="absolute right-5 top-5 text-3xl"
                role="presentation"
                aria-hidden="true"
              >
                {req.emoji}
              </div>
              <h3 className="mb-1 pr-12 font-serif text-xl text-primary-900">{req.title}</h3>
              <p className="text-sm leading-relaxed text-primary-700">{req.description}</p>
              <span className="mt-5 inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                {req.badge}
              </span>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/verkaufen#bewertung" className="btn-primary">
            Passende Immobilie anbieten
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
