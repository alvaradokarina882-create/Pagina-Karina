"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Gold border frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#d4a017]/20" />
              <div className="absolute -inset-6 rounded-2xl border border-[#d4a017]/10" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden bg-[#141414] w-full h-full border border-[#1e1e1e]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f9d423] to-[#b8860b] flex items-center justify-center text-black text-3xl font-bold font-serif mx-auto mb-4">
                      K
                    </div>
                    <p className="text-[#404040] text-sm">Foto de Karina Alvarado</p>
                    <p className="text-[#303030] text-xs mt-1">Reemplazar con imagen real</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 card-premium p-4 glow-gold-sm">
                <div className="text-2xl font-bold text-gold">15+</div>
                <div className="text-xs text-[#606060]">Años de experiencia</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              Mi historia
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              De la silla al{" "}
              <span className="text-gold-gradient">escenario</span>
            </h2>

            <div className="space-y-4 mb-8">
              {personal.bio.map((paragraph, i) => (
                <p key={i} className="text-[#a8a8a8] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Estrategia de Negocios",
                "Marketing Digital",
                "Liderazgo Femenino",
                "Educación Empresarial",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium border border-[#1e1e1e] text-[#606060] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/sobre-mi" className="btn-ghost-gold px-6 py-3 inline-block">
              Conoce mi historia completa →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
