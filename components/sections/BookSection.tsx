"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/data/books";

export function BookSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const book = books[0];

  return (
    <section id="libro" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#f9d423]/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book cover */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative animate-float">
              {/* Book shadow */}
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/60 blur-xl rounded-full" />

              {/* Book cover with real image */}
              <div
                className="relative w-56 h-72 lg:w-72 lg:h-96 rounded-lg overflow-hidden"
                style={{
                  boxShadow: "0 0 50px rgba(249, 212, 35, 0.2), 0 25px 60px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src="/images/book-cover.png"
                  alt="De Cero a Hacer Mi Propio Sistema — Karina Alvarado"
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 768px) 224px, 288px"
                  priority
                />
                {/* Subtle shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Coming soon badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#f9d423] flex items-center justify-center text-black text-xs font-bold text-center leading-tight animate-pulse-gold">
                <span>PRÓX.<br />2026</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              El libro
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gold-gradient">{book.title}</span>
            </h2>
            <p className="text-[#606060] text-sm mb-6 italic">
              {book.subtitle}
            </p>
            <p className="text-[#a8a8a8] leading-relaxed mb-8">
              {book.description}
            </p>

            {/* Publisher badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e1e1e] mb-6">
              <span className="text-xs text-[#404040]">Publicado por</span>
              <span className="text-xs font-semibold text-[#d4a017]">{book.publisher}</span>
            </div>

            {/* Bonuses teaser */}
            <div className="card-premium p-5 mb-8">
              <h3 className="text-sm font-semibold text-[#d4a017] mb-3 uppercase tracking-wider">
                Bonificaciones para pre-orden:
              </h3>
              <ul className="space-y-2">
                {book.bonuses.slice(0, 3).map((bonus) => (
                  <li key={bonus} className="flex items-start gap-2 text-sm text-[#a8a8a8]">
                    <span className="text-[#d4a017] mt-0.5">✓</span>
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/libros/${book.slug}`} className="btn-gold px-6 py-3 text-sm font-bold text-center">
                Registrarme para pre-orden
              </Link>
              <Link href="/libros" className="btn-ghost-gold px-6 py-3 text-sm text-center">
                Más detalles →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
