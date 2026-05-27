"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/lib/data/personal";

const navLinks = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/libros", label: "Libros" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/blog", label: "Blog" },
  { href: "/prensa", label: "Prensa" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f9d423] to-[#b8860b] flex items-center justify-center text-black font-bold text-sm group-hover:scale-110 transition-transform">
            K
          </div>
          <span className="font-serif text-lg font-bold text-gold-gradient hidden sm:block">
            Karina Alvarado
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  pathname === link.href
                    ? "text-[#f9d423]"
                    : "text-[#a8a8a8] hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#f9d423] to-[#b8860b]"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/en" className="text-xs text-[#606060] hover:text-[#a8a8a8] transition-colors">
            EN
          </Link>
          <Link
            href="/#contacto"
            className="btn-gold px-5 py-2 text-sm font-semibold"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#a8a8a8] transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#a8a8a8] transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#a8a8a8] transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-[#1e1e1e] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 border-b border-[#1e1e1e] transition-colors ${
                    pathname === link.href ? "text-[#f9d423]" : "text-[#a8a8a8]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contacto"
                className="btn-gold px-5 py-3 text-sm font-semibold text-center mt-2"
              >
                Contacto
              </Link>
              <Link href="/en" className="text-center text-sm text-[#606060]">
                Ver en inglés →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
