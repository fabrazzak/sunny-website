"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, TrendingUp, Package } from "lucide-react";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), { ssr: false });

const badges = [
  { icon: Shield,     label: "Brand Protection" },
  { icon: TrendingUp, label: "MAP Compliant" },
  { icon: Package,    label: "Amazon FBA" },
];

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950 pointer-events-none" />
      <div className="absolute inset-0 z-[1] hero-gradient pointer-events-none"
           style={{
             background:
               "radial-gradient(ellipse 70% 60% at 55% 40%, rgba(37,99,235,0.18), transparent)",
           }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-12 md:pt-28 md:pb-16">

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/25 rounded-full px-4 py-1.5 text-xs sm:text-sm text-brand-light font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          Authorized Amazon Retail Partner · USA Based
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 text-white leading-[1.08] tracking-tight mb-6"
        >
          Your Strategic
          <br />
          <span className="text-gradient">Retail Partner</span>
          <br />
          on Amazon
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We specialize in scaling brands through expert listing optimization,
          dedicated brand protection, and seamless distribution — so your
          products win on Amazon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary flex items-center justify-center gap-2.5 text-base group w-full sm:w-auto"
          >
            Partner With Us
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="flex items-center justify-center gap-2 px-6 py-3.5 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all text-base font-medium w-full sm:w-auto"
          >
            Learn More
          </button>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl text-sm text-slate-300"
            >
              <Icon size={15} className="text-brand-light" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
