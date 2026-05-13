"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "mgi-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const id = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(id);
    }
  }, []);

  const setConsent = (value: "all" | "essential") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-Einstellungen"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-primary-200 bg-white p-6 shadow-2xl sm:inset-x-6"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <div className="flex-1">
              <h2 className="mb-1 font-serif text-lg font-semibold text-primary-900">
                Wir verwenden Cookies
              </h2>
              <p className="text-sm leading-relaxed text-primary-700">
                Diese Website nutzt notwendige Cookies für den Betrieb sowie optionale
                Cookies für Statistik und Marketing. Mit Klick auf „Alle akzeptieren"
                stimmen Sie der Verwendung zu. Mehr in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="font-semibold text-accent-600 underline hover:text-accent-700"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
              <button
                type="button"
                onClick={() => setConsent("essential")}
                className="rounded-full border-2 border-primary-300 px-5 py-2.5 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-900 hover:bg-primary-50"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={() => setConsent("all")}
                className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-accent-600"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
