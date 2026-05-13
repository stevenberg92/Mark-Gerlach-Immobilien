"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  LineChart,
  Lock,
  MapPin,
  Network,
  Search,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const iconMap = {
  Home,
  LineChart,
  Search,
  MapPin,
  Lock,
  Network,
} as const;

export default function Services() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-wide">
        <div className="mb-12 max-w-2xl">
          <span className="section-label">Unsere Leistungen</span>
          <h2 className="h2 mb-4">Alles aus einer Hand</h2>
          <p className="lead">
            Von der ersten Bewertung bis zur Schlüsselübergabe — wir begleiten Sie durch
            jeden Schritt.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-3xl border border-primary-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary-900 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-950 text-accent-300 transition-all group-hover:bg-accent-500 group-hover:text-primary-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl text-primary-900">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-primary-700">
                  {service.description}
                </p>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-all group-hover:gap-2.5 group-hover:text-accent-700"
                >
                  Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/leistungen" className="btn-ghost">
            Alle Leistungen im Detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
