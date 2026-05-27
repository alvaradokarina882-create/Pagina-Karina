"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
            Resultados reales
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen las{" "}
            <span className="text-gold-gradient">emprendedoras</span>
          </h2>
          <p className="text-[#a8a8a8] max-w-xl mx-auto">
            Más de 5,000 profesionales han transformado sus negocios con el
            método Karina Alvarado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-premium p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-[#f9d423] text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#a8a8a8] text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#d4a017]/10 border border-[#d4a017]/20 rounded-full mb-5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f9d423]" />
                <span className="text-xs font-semibold text-[#d4a017]">{t.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e1e]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a017] to-[#92400e] flex items-center justify-center text-black text-sm font-bold shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#606060]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
