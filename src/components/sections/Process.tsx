"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-wide">
        <div className="mb-14 max-w-2xl">
          <span className="section-label">So einfach geht's</span>
          <h2 className="h2 mb-4">In 5 Schritten zum erfolgreichen Verkauf</h2>
          <p className="lead">
            Wir nehmen Ihnen jeden Schritt ab — Sie geben nur die Zustimmung.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-6 top-12 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-accent-300 via-accent-400 to-accent-300 lg:block"
            aria-hidden
          />
          <ol className="grid gap-8 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-950 font-serif text-xl font-semibold text-accent-300 shadow-md ring-4 ring-cream">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-serif text-xl text-primary-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-primary-700">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/verkaufen#bewertung" className="btn-primary">
            Schritt 1 starten
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
