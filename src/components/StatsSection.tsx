"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const stats = [
  { value: 98,  suffix: "%",  label: "MAP Compliance Rate",      desc: "Strict policy enforcement" },
  { value: 50,  suffix: "+",  label: "Brand Partnerships",       desc: "Across diverse categories" },
  { value: 24,  suffix: "h",  label: "Response Time",            desc: "Dedicated account support" },
  { value: 5,   suffix: "★",  label: "Amazon Seller Feedback",   desc: "Consistent 5-star rating" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-gradient">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Full-width gradient band */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800/60 via-navy-700/40 to-navy-800/60" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&h=1080&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-navy-950/60" />
      
      <div className="absolute inset-0 border-y border-white/5" />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="font-semibold text-white text-sm sm:text-base mt-2 mb-1">{stat.label}</p>
              <p className="text-slate-500 text-xs sm:text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
