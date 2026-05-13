"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, MapPin, Square } from "lucide-react";
import Placeholder from "@/components/Placeholder";
import { FEATURED_PROPERTIES, type Property } from "@/lib/data";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

function PropertyCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex w-[320px] flex-shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-primary-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:w-[360px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Placeholder
          label={property.imageAlt}
          tone="primary"
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-900 backdrop-blur">
          {property.type}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-1 font-serif text-xl text-primary-900">{property.title}</h3>
        <p className="mb-5 flex items-center gap-1.5 text-sm text-primary-600">
          <MapPin className="h-3.5 w-3.5" /> {property.location}
        </p>
        <div className="mb-5 grid grid-cols-3 gap-2 border-y border-primary-100 py-4 text-xs text-primary-700">
          {property.rooms > 0 && (
            <div>
              <p className="font-semibold text-primary-900">{property.rooms}</p>
              <p className="text-[10px] uppercase tracking-wider">Zimmer</p>
            </div>
          )}
          {property.livingArea > 0 && (
            <div>
              <p className="flex items-center gap-1 font-semibold text-primary-900">
                <Square className="h-3 w-3" />
                {property.livingArea}
              </p>
              <p className="text-[10px] uppercase tracking-wider">Wohnfläche</p>
            </div>
          )}
          {property.plotArea && (
            <div>
              <p className="flex items-center gap-1 font-semibold text-primary-900">
                <Maximize2 className="h-3 w-3" />
                {property.plotArea}
              </p>
              <p className="text-[10px] uppercase tracking-wider">Grundstück</p>
            </div>
          )}
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-primary-500">Kaufpreis</p>
            <p className="font-serif text-2xl font-semibold text-primary-900">
              {formatPrice(property.price)}
            </p>
          </div>
          <Link
            href={`/immobilien/${property.id}`}
            className="rounded-full border-2 border-primary-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-900 transition-colors hover:bg-primary-900 hover:text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function TopOffers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.85;
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-wide">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-label">Aktuelle Top-Angebote</span>
            <h2 className="h2 mb-4">
              Aktuelle Immobilienangebote in Hamburg &amp; Schleswig-Holstein
            </h2>
            <p className="lead">
              Eine Auswahl unserer aktuellen Objekte — vom Stadthaus bis zum Reetdachhaus
              an der Ostsee.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-200 text-primary-800 transition-colors hover:border-primary-900 hover:bg-primary-900 hover:text-white"
              aria-label="Vorheriges Angebot"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-200 text-primary-800 transition-colors hover:border-primary-900 hover:bg-primary-900 hover:text-white"
              aria-label="Nächstes Angebot"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {FEATURED_PROPERTIES.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/immobilien" className="btn-secondary">
            Alle Angebote ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
