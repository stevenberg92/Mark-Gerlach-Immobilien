"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Placeholder from "@/components/Placeholder";
import { BLOG_TEASERS } from "@/lib/data";

export default function BlogTeaser() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-label">Aus unserem Ratgeber</span>
            <h2 className="h2 mb-4">Aktuelles aus unserem Ratgeber</h2>
            <p className="lead">
              Marktanalysen, Verkaufstipps und rechtliche Hinweise — kompakt und praxisnah.
            </p>
          </div>
          <Link href="/ratgeber" className="btn-ghost">
            Alle Artikel
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOG_TEASERS.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary-200 bg-cream transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={article.slug} className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* TODO: Echtes Artikelbild ergänzen ({article.title}) */}
                  <Placeholder
                    label={article.title}
                    tone="primary"
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-900 backdrop-blur">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-3 flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {article.date}
                  </p>
                  <h3 className="mb-3 font-serif text-xl leading-snug text-primary-900 transition-colors group-hover:text-accent-700">
                    {article.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-primary-700">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-all group-hover:gap-2.5">
                    Weiterlesen <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
