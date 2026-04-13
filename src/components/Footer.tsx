"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Shield, TrendingUp, Package, BarChart3 } from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home",        href: "#home" },
  { label: "About Us",    href: "#about" },
  { label: "Our Services",href: "#services" },
  { label: "Contact Us",  href: "#contact" },
];

const services = [
  { icon: Shield,     label: "Brand Protection" },
  { icon: TrendingUp, label: "MAP Compliance" },
  { icon: Package,    label: "FBA Management" },
  { icon: BarChart3,  label: "Listing Optimization" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-14">

          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              A premier Amazon wholesale and distribution firm. We protect,
              optimize, and grow your brand on the world's largest marketplace.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Currently accepting new partners
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-heading font-700 text-white text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-brand-light transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="font-heading font-700 text-white text-sm tracking-wider uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={13} className="text-brand-blue/70" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-heading font-700 text-white text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={15} className="text-brand-blue/70 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801<br />
                  United States
                </p>
              </div>
              <div className="flex gap-3">
                <Mail size={15} className="text-brand-blue/70 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@sunyllc.com"
                  className="text-slate-400 hover:text-brand-light transition-colors text-sm"
                >
                  info@sunyllc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} SUNY LLC. All Rights Reserved.
          </p>
          <p className="text-slate-600 text-sm text-center">
            Authorized Retail Partner · Amazon Wholesale Distributor
          </p>
          <div className="flex items-center gap-2">
            <div className="h-4 w-px bg-white/10" />
            <p className="text-slate-700 text-xs">
              Built with{" "}
              <span className="text-brand-blue/60">Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
