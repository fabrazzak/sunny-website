"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About Us",     href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Contact Us",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Scroll tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "services", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ── Close on resize to desktop ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        try {
          window.scrollTo({ top, behavior: "smooth" });
        } catch {
          window.scrollTo(0, top);
        }
      }
    }, 50);
  };

  return (
    <>
      {/* ─────────────────── Header bar ─────────────────── */}
      {/*
        Plain <header>, NOT motion.header.
        Framer Motion applies CSS transforms which create a new stacking
        context — this traps fixed children and breaks touch routing on
        mobile. We use a CSS transition instead.
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="relative group flex items-center"
          >
            <div className="absolute -inset-3 bg-brand-blue/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Logo className="relative" />
          </button>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-brand-light"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-blue rounded-full"
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-4 btn-primary text-sm"
            >
              Partner With Us
            </button>
          </nav>

          {/* ── Hamburger (mobile only) ── */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ─────────────────── Mobile menu overlay ─────────────────── */}
      {/*
        Rendered as a SIBLING of the header, NOT inside it.
        z-[200] ensures it is above every other element on the page.
        This avoids all stacking-context and touch-routing issues.
      */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[200] md:hidden"
          >
            {/* Backdrop — tap outside to close */}
            <div
              className="absolute inset-0 bg-navy-950/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Links panel */}
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.06 }}
              className="relative flex flex-col items-center justify-center h-full gap-2 px-6"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  style={{ touchAction: "manipulation" }}
                  className="w-full max-w-xs text-center px-6 py-4 text-xl text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                style={{ touchAction: "manipulation" }}
                className="mt-6 btn-primary text-base w-full max-w-xs text-center"
              >
                Partner With Us
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
