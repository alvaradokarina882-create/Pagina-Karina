"use client";

import { useState } from "react";

interface Props {
  buttonLabel?: string;
  placeholder?: string;
  successMessage?: string;
  tipo?: string;
}

export function NewsletterForm({
  buttonLabel = "Suscribirme",
  placeholder = "tu@email.com",
  successMessage = "¡Listo! Te notificaremos pronto.",
  tipo = "Newsletter",
}: Props) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: "Suscriptora",
          email,
          tipo,
          mensaje: `Solicitud de ${tipo} — email: ${email}`,
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError("Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setError("No se pudo enviar. Verifica tu conexión.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <p className="text-[#f9d423] text-sm font-medium py-3">{successMessage}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        name="email"
        type="email"
        placeholder={placeholder}
        required
        className="flex-1 bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#d4a017]/50"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-gold px-6 py-3 text-sm font-bold shrink-0 disabled:opacity-60"
      >
        {loading ? "Enviando..." : buttonLabel}
      </button>
      {error && <p className="text-red-400 text-xs mt-1 w-full">{error}</p>}
    </form>
  );
}
