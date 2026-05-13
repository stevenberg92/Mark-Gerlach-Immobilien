"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-cream/80 backdrop-blur"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-xl font-bold text-primary-900 sm:text-2xl"
          aria-label={`${COMPANY.name} Startseite`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-900 font-serif text-base font-bold text-accent-300">
            MG
          </span>
          <span className="hidden sm:inline">Mark Gerlach</span>
        </Link>

        <nav className="hidden lg:block" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-primary-800 transition-colors hover:text-accent-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-sm font-semibold text-primary-900 transition-colors hover:text-accent-600 md:flex"
            aria-label={`Anrufen ${COMPANY.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phoneDisplay}
          </a>
          <Link
            href="/verkaufen#bewertung"
            className="btn-primary px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="hidden sm:inline">Immobilie kostenlos bewerten</span>
            <span className="sm:hidden">Bewerten</span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="rounded-full p-2 text-primary-900 transition-colors hover:bg-primary-100 lg:hidden"
            aria-label="Menü öffnen"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-primary-950/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-4 sm:px-6">
              <span className="font-serif text-xl font-bold text-cream">Menü</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-full p-2 text-cream transition-colors hover:bg-primary-800"
                aria-label="Menü schließen"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-4 sm:px-6">
              <ul className="space-y-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-primary-800 py-4 font-serif text-2xl text-cream transition-colors hover:text-accent-300"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-cream"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-lg font-semibold">{COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
