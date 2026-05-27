"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data/personal";

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="divider-gold absolute top-0 left-0 right-0" />
        <div className="divider-gold absolute bottom-0 left-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {personal.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="font-serif text-5xl lg:text-6xl font-bold text-gold-gradient mb-2 group-hover:glow-gold-text transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-[#606060] uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
