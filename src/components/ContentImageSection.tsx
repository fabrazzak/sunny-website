"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Real-time price monitoring across all marketplaces",
  "Automated enforcement against MAP violations",
  "Detailed analytics and reporting dashboards",
  "Dedicated account manager for strategic guidance",
];

export default function ContentImageSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 50%, rgba(37,99,235,0.05), transparent)",
        }}
      />

      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-navy-950/85 to-navy-950" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-light text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-white mt-3 mb-6">
              Maximize Your Brand{" "}
              <span className="text-gradient">Potential</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our comprehensive Amazon brand management solutions help you
              protect, optimize, and grow your business. We combine cutting-edge
              technology with expert strategies to deliver measurable results.
            </p>

            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-brand-blue w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 px-8 py-4 bg-brand-blue hover:bg-brand-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/20"
            >
              Get Started Today
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pb-8 sm:pb-0"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop"
                alt="Team working on strategy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 left-3 sm:-bottom-6 sm:-left-6 glass-card rounded-xl p-4 sm:p-5 border border-brand-blue/30"
            >
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-slate-400 text-sm">Brands Protected</div>
            </motion.div>

            {/* Decorative elements — hidden on mobile to prevent horizontal overflow */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl" />
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}