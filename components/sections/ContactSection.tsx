"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data/personal";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  const contactOptions = [
    {
      icon: "◆",
      title: "Conferencista",
      description: "Contrata a Karina para tu evento, congreso o summit",
      email: personal.contact.booking,
    },
    {
      icon: "◈",
      title: "Mentoría",
      description: "Programa de acompañamiento personalizado para tu negocio",
      email: personal.contact.email,
    },
    {
      icon: "✦",
      title: "Prensa",
      description: "Entrevistas, colaboraciones y cobertura mediática",
      email: personal.contact.press,
    },
  ];

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f9d423]/3 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
            Hablemos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            ¿Lista para el{" "}
            <span className="text-gold-gradient">siguiente nivel</span>?
          </h2>
          <p className="text-[#a8a8a8] max-w-xl mx-auto">
            Cuéntame en qué etapa está tu negocio y cómo puedo ayudarte a
            llegar donde quieres estar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            {contactOptions.map((option, i) => (
              <motion.a
                key={option.title}
                href={`mailto:${option.email}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-premium p-5 flex items-center gap-4 group block hover:no-underline"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4a017]/10 border border-[#d4a017]/20 flex items-center justify-center text-[#d4a017] text-xl group-hover:bg-[#d4a017]/20 transition-colors shrink-0">
                  {option.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-sm mb-1">
                    {option.title}
                  </div>
                  <div className="text-xs text-[#606060]">{option.description}</div>
                  <div className="text-xs text-[#d4a017] mt-1">{option.email}</div>
                </div>
                <div className="text-[#404040] group-hover:text-[#d4a017] transition-colors">
                  →
                </div>
              </motion.a>
            ))}

            {/* Social */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wider text-[#404040] mb-4">
                Sígueme en redes
              </p>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", href: personal.socialLinks.instagram },
                  { label: "TikTok", href: personal.socialLinks.tiktok },
                  { label: "YouTube", href: personal.socialLinks.youtube },
                  { label: "LinkedIn", href: personal.socialLinks.linkedin },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs border border-[#1e1e1e] text-[#606060] rounded-lg hover:border-[#d4a017]/40 hover:text-[#d4a017] transition-all"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <div className="card-premium p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#d4a017]/20 flex items-center justify-center text-2xl text-[#f9d423] mb-4">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-[#606060] text-sm">
                  Me pondré en contacto contigo en las próximas 24-48 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#606060] mb-1.5 uppercase tracking-wide">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#d4a017]/50 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#606060] mb-1.5 uppercase tracking-wide">
                      País
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#d4a017]/50 transition-colors"
                      placeholder="Tu país"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#606060] mb-1.5 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#d4a017]/50 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#606060] mb-1.5 uppercase tracking-wide">
                    Tipo de consulta
                  </label>
                  <select className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4a017]/50 transition-colors">
                    <option value="">Seleccionar...</option>
                    <option>Contratar como conferencista</option>
                    <option>Mentoría de negocios</option>
                    <option>Prensa y medios</option>
                    <option>Colaboración</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#606060] mb-1.5 uppercase tracking-wide">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#d4a017]/50 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto o pregunta..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-4 text-sm font-bold disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
