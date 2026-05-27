"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data/personal";

export function FilosofiaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="filosofia" className="py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
            Lo que me mueve
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold">
            Mi <span className="text-gold-gradient">filosofía</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personal.filosofia.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-premium p-6 group hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="text-3xl text-[#d4a017] mb-4 group-hover:text-[#f9d423] transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#606060] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
