"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

export function PressSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prensa" className="py-16 bg-[#0a0a0a] border-y border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-[#d4a017] mb-2">
              Medios y prensa
            </p>
            <h2 className="font-serif text-xl font-bold text-white">
              ¿Quieres entrevistar o cubrir a Karina?
            </h2>
            <p className="text-sm text-[#606060] mt-1">
              Descarga el kit de prensa o escribe directamente al equipo de medios.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/prensa"
              className="px-5 py-2.5 text-sm border border-[#d4a017]/40 text-[#d4a017] rounded-lg hover:bg-[#d4a017]/10 transition-colors font-medium"
            >
              Kit de prensa
            </Link>
            <Link
              href={`mailto:${personal.contact.press}`}
              className="btn-gold px-5 py-2.5 text-sm font-bold"
            >
              Contactar prensa
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
