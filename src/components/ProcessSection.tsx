"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, BarChart3, Shield, TrendingUp, Users } from "lucide-react";

const steps = [
  {
    icon: Shield,
    title: "Audit & Assessment",
    desc: "We analyze your current Amazon presence, identify vulnerabilities, and create a customized brand protection strategy tailored to your goals.",
    number: "01",
  },
  {
    icon: BarChart3,
    title: "Implement Solutions",
    desc: "Our team sets up MAP monitoring, brand registry, and listing optimization tools to protect your products and boost visibility.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Scale & Optimize",
    desc: "We continuously refine your strategy based on performance data, helping you scale sales while maintaining brand integrity.",
    number: "03",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    desc: "Your dedicated account manager provides regular reports, strategic insights, and proactive support to ensure long-term success.",
    number: "04",
  },
];

export default function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* ── Background image (Unsplash – free to use) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80&fit=crop')",
        }}
      />

      {/* Solid dark base — kills most of the image brightness */}
      <div className="absolute inset-0 bg-navy-950/75" />
      {/* Gradient layer on top for top/bottom edge fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/60 to-navy-950/95" />

      {/* Subtle blue radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 100%, rgba(37,99,235,0.08), transparent)",
        }}
      />

      {/* All content sits above the overlays */}
      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-light text-sm font-semibold tracking-widest uppercase">
            Our Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-white mt-3 mb-2">
            How We{" "}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            A proven four-step methodology that transforms your Amazon business
            from struggling to thriving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="glass-card rounded-2xl p-6 h-full border border-white/5 hover:border-brand-blue/30 transition-all duration-300">
                  <span className="text-6xl font-bold text-brand-blue/10 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-brand-blue/15 flex items-center justify-center mb-5 group-hover:bg-brand-blue/25 transition-colors">
                    <Icon size={26} className="text-brand-light" />
                  </div>
                  <h3 className="font-heading font-700 text-white text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-navy-950 border border-brand-blue/30 flex items-center justify-center">
                      <ArrowRight size={12} className="text-brand-blue" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-brand-blue hover:bg-brand-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/20 inline-flex items-center gap-2">
            Start Your Journey
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}