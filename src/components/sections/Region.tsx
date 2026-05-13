"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { REGIONS } from "@/lib/constants";

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "-");

export default function Region() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-primary-950 shadow-xl">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
              aria-label="Stilisierte Karte unseres Tätigkeitsgebiets"
            >
              <defs>
                <radialGradient id="map-glow" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#c08a2d" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#c08a2d" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="url(#map-glow)" />
              <g stroke="#3e5d82" strokeWidth="0.5" fill="none" opacity="0.4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`h-${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" />
                ))}
              </g>
              <path
                d="M80 160 Q140 80 230 100 Q310 110 340 200 Q360 290 270 320 Q180 340 110 280 Q60 230 80 160 Z"
                fill="#243a57"
                stroke="#c08a2d"
                strokeWidth="2"
                opacity="0.85"
              />
              {[
                { x: 200, y: 230, label: "Hamburg", size: 6 },
                { x: 210, y: 195, label: "Norderstedt", size: 4 },
                { x: 220, y: 165, label: "Henstedt-Ulzburg", size: 4 },
                { x: 195, y: 140, label: "Kaltenkirchen", size: 3 },
                { x: 145, y: 195, label: "Pinneberg", size: 3 },
                { x: 295, y: 180, label: "Lübecker Bucht", size: 4 },
              ].map((p) => (
                <g key={p.label}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={p.size}
                    fill="#c08a2d"
                    stroke="#fbf9f4"
                    strokeWidth="1.5"
                  />
                  <text
                    x={p.x + p.size + 4}
                    y={p.y + 3}
                    fill="#fbf9f4"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    {p.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <span className="section-label">Unsere Region</span>
          <h2 className="h2 mb-4">Wir kennen unsere Region — und zwar genau</h2>
          <p className="lead mb-8">
            Als regional verwurzelter Makler kennen wir die Eigenheiten jedes Stadtteils,
            jeden Quadratmeterpreis und jeden Schulbezirk. Klicken Sie auf Ihre Region,
            um mehr zu erfahren.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {REGIONS.map((region, i) => (
              <motion.div
                key={region}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Link
                  href={`/standort/${slugify(region)}`}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-primary-200 bg-white px-4 py-2 text-sm font-medium text-primary-800 transition-all hover:border-primary-900 hover:bg-primary-900 hover:text-white"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {region}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 rounded-2xl bg-cream p-5 text-sm leading-relaxed text-primary-700">
            <strong className="text-primary-900">
              Sie kommen aus einer anderen Region?
            </strong>{" "}
            Sie kommen aus einer anderen Region in Schleswig-Holstein, Mecklenburg-Vorpommern
            oder Niedersachsen? Sprechen Sie uns gerne an — wir vermitteln Sie kostenlos an
            unsere kompetenten Kooperationspartner vor Ort.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
