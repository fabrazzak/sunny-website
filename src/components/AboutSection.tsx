"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, Award, Users2, Globe2 } from "lucide-react";

const highlights = [
  "Long-term brand partnerships built on trust",
  "Strict MAP policy enforcement",
  "Transparent reporting & communication",
  "USA-based operations with nationwide reach",
];

const pillars = [
  {
    icon: Award,
    title: "Premium Standards",
    desc: "We represent only high-quality brands and maintain strict quality benchmarks across every partnership.",
  },
  {
    icon: Users2,
    title: "Relationship First",
    desc: "We believe sustainable success comes from genuine collaboration, not transactional interactions.",
  },
  {
    icon: Globe2,
    title: "E-Commerce Expertise",
    desc: "Deep knowledge of Amazon's ecosystem lets us navigate challenges others can't.",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* ── Background image (Unsplash – free to use) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop')",
        }}
      />

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-navy-950/78" />

      {/* Gradient overlay — fades edges into the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/60 to-navy-950/95" />

      {/* Left blue accent glow */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none" />

      {/* Content above all overlays */}
      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* ── Left: Text ── */}
          <div>
            <motion.div variants={item}>
              <span className="text-brand-light text-sm font-semibold tracking-widest uppercase">
                About SUNY LLC
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-white mt-3 mb-2 leading-tight">
                Who <span className="text-gradient">We Are</span>
              </h2>
              <div className="section-divider mt-4 mb-8" />
            </motion.div>

            <motion.p
              variants={item}
              className="text-slate-300 text-lg leading-relaxed mb-6"
            >
              SUNY LLC is a premier retail and distribution firm dedicated to
              representing high-quality brands in the e-commerce marketplace.
              Based in the USA, we focus on building{" "}
              <span className="text-white font-medium">
                sustainable, long-term partnerships
              </span>{" "}
              with manufacturers.
            </motion.p>

            <motion.p
              variants={item}
              className="text-slate-400 leading-relaxed mb-10"
            >
              Our mission is to add measurable value to your brand while
              ensuring your products reach customers with the highest level of
              service and integrity. We don't just distribute — we protect,
              optimize, and grow.
            </motion.p>

            <motion.ul variants={item} className="space-y-3">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2
                    size={18}
                    className="text-brand-blue mt-0.5 flex-shrink-0"
                  />
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Right: Pillars ── */}
          <motion.div variants={item} className="space-y-5">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card glass-card-hover rounded-2xl p-6 flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center">
                  <Icon size={22} className="text-brand-light" />
                </div>
                <div>
                  <h3 className="font-heading font-600 text-white text-lg mb-1">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            {/* Quote card */}
            <div className="glass-card rounded-2xl p-6 border-l-2 border-brand-blue">
              <p className="text-slate-300 italic leading-relaxed text-sm">
                "We don't just sell your products — we become stewards of your
                brand, protecting its reputation and growing its presence on
                the world's largest marketplace."
              </p>
              <p className="text-brand-light font-semibold text-sm mt-3">
                — SUNY LLC Leadership
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
