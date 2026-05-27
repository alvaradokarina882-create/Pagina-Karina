"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#f9d423]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#b8860b]/6 blur-[100px] pointer-events-none" />

      {/* Decorative gold lines */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#d4a017]/30 to-transparent" />
      <div className="absolute top-40 right-10 w-px h-48 bg-gradient-to-b from-transparent via-[#d4a017]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#f9d423] animate-pulse" />
          <span className="text-xs font-medium text-[#d4a017] tracking-wide uppercase">
            Empresaria · Autora · Líder Visionaria
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6"
        >
          <span className="text-white">Deja el modo</span>
          <br />
          <span className="text-gold-gradient">automático.</span>
          <br />
          <span className="text-white">Construye desde</span>
          <br />
          <span className="text-gold-gradient glow-gold-text">
            tu propio sistema
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#a8a8a8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Soy Karina Alvarado — empresaria, creadora de sistemas y líder visionaria.
          Ayudo a mujeres a{" "}
          <strong className="text-white">construir negocios con propósito, estructura y dirección</strong>{" "}
          desde la fuerza interior y la transformación real.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/#ecosistema" className="btn-gold px-8 py-4 text-base font-bold w-full sm:w-auto">
            Explorar el ecosistema
          </Link>
          <Link href="/sobre-mi" className="btn-ghost-gold px-8 py-4 text-base w-full sm:w-auto">
            Mi historia →
          </Link>
        </motion.div>

        {/* Social proof mini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#606060]"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["V", "C", "S", "M", "I"].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-[#d4a017] to-[#92400e] flex items-center justify-center text-white text-xs font-bold"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span>+5,000 emprendedoras transformadas</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-[#1e1e1e]" />
          <div className="flex items-center gap-1.5">
            <span className="text-[#f9d423]">★★★★★</span>
            <span>Conferencista internacional</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-[#1e1e1e]" />
          <div>20+ países de impacto</div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#404040] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#404040] to-transparent"
        />
      </motion.div>
    </section>
  );
}
