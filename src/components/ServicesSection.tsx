"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  DollarSign,
  ShieldCheck,
  Search,
  Truck,
  BarChart3,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: DollarSign,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    title: "MAP Compliance",
    badge: "Brand Value",
    desc: "We strictly adhere to Minimum Advertised Price policies to maintain your brand's value, market stability, and competitive integrity across every channel.",
    color: "from-blue-600/20 to-blue-500/5",
    border: "hover:border-blue-500/40",
  },
  {
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    title: "Brand Protection",
    badge: "Marketplace Safety",
    desc: "We proactively identify and report unauthorized sellers, counterfeit listings, and policy violators to keep your Amazon presence clean and professional.",
    color: "from-indigo-600/20 to-indigo-500/5",
    border: "hover:border-indigo-500/40",
  },
  {
    icon: Search,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop",
    title: "Listing Optimization",
    badge: "Growth Engine",
    desc: "Our team crafts compelling product titles, keyword-rich bullet points, A+ content, and backend search terms to maximize your organic ranking and conversion rate.",
    color: "from-violet-600/20 to-violet-500/5",
    border: "hover:border-violet-500/40",
  },
  {
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
    title: "FBA Inventory Management",
    badge: "Fulfillment",
    desc: "Leveraging Amazon FBA, we ensure lightning-fast Prime shipping, smart inventory forecasting, and seamless restocking so you never miss a sale.",
    color: "from-cyan-600/20 to-cyan-500/5",
    border: "hover:border-cyan-500/40",
  },
  {
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    title: "Performance Analytics",
    badge: "Data-Driven",
    desc: "Transparent reporting on sales velocity, buy-box ownership, ranking trends, and competitor activity — so you always know where your brand stands.",
    color: "from-teal-600/20 to-teal-500/5",
    border: "hover:border-teal-500/40",
  },
  {
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
    title: "Dedicated Account Support",
    badge: "Partnership",
    desc: "A dedicated account manager is your single point of contact — responsive, knowledgeable, and committed to the long-term success of your brand.",
    color: "from-sky-600/20 to-sky-500/5",
    border: "hover:border-sky-500/40",
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="relative py-16 md:py-28 px-4 sm:px-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-navy-950/85 to-navy-950" />

      {/* BG accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.07), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-light text-sm font-semibold tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-white mt-3 mb-2">
            How We{" "}
            <span className="text-gradient">Protect &amp; Grow</span> Your Brand
          </h2>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            A comprehensive suite of services designed specifically for brands
            who want to win — and stay winning — on Amazon.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`relative glass-card ${svc.border} rounded-2xl p-7 flex flex-col gap-4 cursor-default transition-all duration-300 group overflow-hidden`}
              >
                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${svc.color} rounded-2xl`}
                />

                <div className="relative z-10">
                  <div className="w-full h-40 mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={svc.image} 
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center group-hover:bg-brand-blue/25 transition-colors">
                      <Icon size={22} className="text-brand-light" />
                    </div>
                    <span className="text-[0.65rem] tracking-widest uppercase font-semibold text-brand-blue/70 bg-brand-blue/10 px-2.5 py-1 rounded-full">
                      {svc.badge}
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-heading font-700 text-white text-xl mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue/0 via-brand-blue/50 to-brand-blue/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
