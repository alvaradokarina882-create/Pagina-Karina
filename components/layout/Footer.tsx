import Link from "next/link";
import { personal } from "@/lib/data/personal";

const footerLinks = {
  Páginas: [
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/libros", label: "Libros" },
    { href: "/conferencias", label: "Conferencias" },
    { href: "/blog", label: "Blog" },
    { href: "/prensa", label: "Prensa" },
  ],
  Recursos: [
    { href: "/blog", label: "Artículos" },
    { href: "/#ecosistema", label: "Cursos" },
    { href: "/#ecosistema", label: "Mentoría" },
    { href: "/#contacto", label: "Contrataciones" },
  ],
  Contacto: [
    { href: `mailto:${personal.contact.email}`, label: personal.contact.email },
    { href: `mailto:${personal.contact.booking}`, label: "Conferencista" },
    { href: `mailto:${personal.contact.press}`, label: "Prensa" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1e1e1e] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f9d423] to-[#b8860b] flex items-center justify-center text-black font-bold">
                K
              </div>
              <span className="font-serif text-xl font-bold text-gold">
                Karina Alvarado
              </span>
            </Link>
            <p className="text-[#606060] text-sm leading-relaxed max-w-xs mb-6">
              Emprendedora, autora y conferencista especializada en la intersección
              de belleza y negocios. Transformando vidas a través del emprendimiento
              consciente.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { href: personal.socialLinks.instagram, icon: "IG", label: "Instagram" },
                { href: personal.socialLinks.tiktok, icon: "TK", label: "TikTok" },
                { href: personal.socialLinks.youtube, icon: "YT", label: "YouTube" },
                { href: personal.socialLinks.linkedin, icon: "IN", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#606060] text-xs font-bold hover:border-[#d4a017] hover:text-[#f9d423] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#f9d423] mb-4">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#606060] hover:text-[#a8a8a8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#404040]">
          <p>© {new Date().getFullYear()} Karina Alvarado. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/en" className="hover:text-[#606060] transition-colors">
              English version
            </Link>
            <span>Hecho con pasión y estrategia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
