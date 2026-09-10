"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { speakingEvents } from "@/lib/data/testimonials";

const topics = [
  "El Futuro de los Negocios de Belleza en LATAM",
  "De Artista a CEO: El Camino de las Emprendedoras",
  "Marketing Digital para la Industria de la Belleza",
  "Liderazgo Femenino en Economías Emergentes",
  "La Economía Invisible de la Belleza",
  "Pricing Estratégico: Cobra lo que Vales",
];

export function SpeakingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conferencias" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              Conferencista internacional
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Palabras que{" "}
              <span className="text-gold-gradient">inspiran acción</span>
            </h2>
            <p className="text-[#a8a8a8] leading-relaxed mb-8">
              Karina lleva su mensaje a auditorios de emprendedoras en Latinoamérica y
              Estados Unidos. Sus conferencias combinan datos reales, historias poderosas
              y estrategias inmediatamente aplicables.
            </p>

            {/* Topics */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#606060] mb-4">
                Temas de conferencia
              </h3>
              <ul className="space-y-2">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                    <span className="text-sm text-[#a8a8a8]">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/conferencias" className="btn-gold px-6 py-3 inline-block text-sm font-bold">
              Contratar como conferencista
            </Link>
          </motion.div>

          {/* Right: Events */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#606060] mb-6">
              Eventos recientes
            </h3>
            {speakingEvents.map((event, i) => (
              <motion.div
                key={event.event}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="card-premium p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">
                      {event.event}
                    </div>
                    <div className="text-xs text-[#606060] mb-2">{event.topic}</div>
                    <div className="text-xs text-[#d4a017]">
                      {event.attendees} asistentes
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[#404040] shrink-0 border border-[#1e1e1e] px-2 py-1 rounded">
                    {event.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
