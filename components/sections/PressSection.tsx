"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { pressLogos } from "@/lib/data/testimonials";

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
        >
          <p className="text-center text-xs uppercase tracking-widest text-[#404040] mb-10">
            Vista y citada en
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {pressLogos.map((press, i) => (
              <motion.div
                key={press.name}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-[#303030] text-lg font-serif font-bold tracking-wide hover:text-[#606060] transition-colors cursor-default"
              >
                {press.name}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/prensa" className="text-xs text-[#404040] hover:text-[#606060] transition-colors">
              Ver toda la cobertura de prensa →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
