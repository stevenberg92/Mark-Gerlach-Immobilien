"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide">
        <div className="mb-12 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">Kundenstimmen</span>
            <h2 className="h2">Was unsere Kunden über uns sagen</h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-accent-200 bg-accent-50 px-5 py-3">
            <div className="flex items-center gap-0.5 text-accent-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <Star className="h-4 w-4 fill-current text-accent-300" />
            </div>
            <p className="text-sm font-semibold text-primary-900">
              4,2 ★ auf ImmoScout24
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex h-full flex-col rounded-3xl border border-primary-200 bg-cream p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-accent-200"
                strokeWidth={1}
              />
              <div className="mb-4 flex items-center gap-0.5 text-accent-500">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
                {[...Array(5 - t.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current text-accent-200" />
                ))}
              </div>
              <blockquote className="mb-6 flex-1 font-serif text-lg leading-relaxed text-primary-900">
                „{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-primary-200 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-950 font-sans text-sm font-bold text-accent-300">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{t.name}</p>
                  <p className="text-xs text-primary-600">{t.location}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={COMPANY.immoScoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Alle Bewertungen ansehen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
