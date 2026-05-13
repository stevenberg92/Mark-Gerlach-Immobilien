"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/Placeholder";

export default function About() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* TODO: Professionelles Portrait Mark Gerlach mit Hamburg/SH-Landschaft im Hintergrund einsetzen */}
          <Placeholder
            label="Portrait Mark Gerlach"
            tone="cream"
            className="aspect-[4/5] w-full rounded-3xl shadow-xl"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-primary-950 px-6 py-5 text-cream shadow-xl sm:block">
            <p className="font-serif text-3xl font-semibold text-accent-300">10+</p>
            <p className="text-xs uppercase tracking-widest text-primary-200">Jahre Erfahrung</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="section-label">Über Mark Gerlach Immobilien</span>
          <h2 className="h2 mb-6">
            Ihr Partner für Immobilien — von Hamburg bis zur Lübecker Bucht
          </h2>
          <div className="space-y-4 font-sans text-base leading-relaxed text-primary-700 sm:text-lg">
            <p>
              Ansässig im Hamburger Speckgürtel vermitteln wir Immobilien jeglicher Art in
              Hamburg, Norderstedt, Henstedt-Ulzburg, Kaltenkirchen, Quickborn, Bad Bramstedt,
              Elmshorn, Pinneberg und dem übrigen Schleswig-Holstein.
            </p>
            <p>
              Durch mehrjährige Erfahrung in der Vermarktung von Immobilien rund um die
              Lübecker Bucht stehen wir Ihnen auch in der Ostseeregion tatkräftig zur Verfügung.
            </p>
            <p>
              Unsere Zusammenarbeit ist unbürokratisch, lösungsorientiert und auf Ihre
              maximale Entlastung ausgerichtet.
            </p>
          </div>
          <Link href="/ueber-uns" className="btn-ghost mt-8">
            Mehr über uns erfahren
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
