"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ecosystem = [
  {
    icon: "◈",
    title: "Cursos Online",
    description:
      "Formación empresarial específica para la industria de la belleza. Desde pricing hasta marketing, con resultados documentados.",
    tag: "Auto-estudio",
    cta: "Ver cursos",
    href: "/#ecosistema",
    highlight: false,
  },
  {
    icon: "◆",
    title: "Mentoría IMPERIAL",
    description:
      "Programa intensivo de mentoría personalizada para emprendedoras que quieren resultados en 90 días. Plazas limitadas.",
    tag: "Más popular",
    cta: "Aplicar ahora",
    href: "/#contacto",
    highlight: true,
  },
  {
    icon: "❋",
    title: "Comunidad",
    description:
      "La red de emprendedoras de belleza más activa de Latinoamérica. Soporte, recursos y conexiones reales.",
    tag: "Comunidad",
    cta: "Unirse",
    href: "/#contacto",
    highlight: false,
  },
  {
    icon: "✦",
    title: "Masterclasses",
    description:
      "Sesiones intensivas en vivo sobre temas específicos: pricing, Instagram, escalamiento, finanzas. Cada mes.",
    tag: "En vivo",
    cta: "Ver próximas",
    href: "/#contacto",
    highlight: false,
  },
];

export function EcosistemaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosistema" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
            Herramientas para crecer
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            El ecosistema{" "}
            <span className="text-gold-gradient">IMPERIAL</span>
          </h2>
          <p className="text-[#a8a8a8] max-w-2xl mx-auto">
            No importa en qué etapa está tu negocio — hay un recurso diseñado para
            llevarte al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystem.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                item.highlight
                  ? "border-[#d4a017]/40 bg-[#141410] glow-gold"
                  : "border-[#1e1e1e] bg-[#141414] hover:border-[#d4a017]/30"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#f9d423] rounded-full text-black text-xs font-bold">
                  {item.tag}
                </div>
              )}
              {!item.highlight && (
                <div className="absolute top-4 right-4 px-2 py-0.5 border border-[#1e1e1e] rounded-full text-[#404040] text-xs">
                  {item.tag}
                </div>
              )}

              <div className="text-3xl text-[#d4a017] mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#606060] leading-relaxed flex-1 mb-6">
                {item.description}
              </p>
              <a
                href={item.href}
                className={`text-sm font-semibold text-center py-2.5 px-4 rounded-lg transition-all ${
                  item.highlight
                    ? "btn-gold"
                    : "btn-ghost-gold"
                }`}
              >
                {item.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
