"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "mdsunyllc@gmail.com";
const EMAILJS_TEMPLATE_ID = "template_vfdjb4n";
const EMAILJS_PUBLIC_KEY = "RSg4mfgeqBaAWbEkD";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "30 N Gould St Ste R\nSheridan, WY 82801, USA",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@sunyllc.com",
    href: "mailto:info@sunyllc.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+1 (307) 000-0000",
    href: "tel:+13070000000",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({
    name: "", brand: "", email: "", phone: "", message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          brand_name: form.brand,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* ── Background image (Unsplash – free to use) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&fit=crop')",
        }}
      />

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-navy-950/80" />

      {/* Gradient overlay — fades top & bottom into the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/92 via-navy-950/65 to-navy-950/95" />

      {/* Blue accent glows */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-blue/6 rounded-full blur-3xl pointer-events-none" />

      {/* Content above all overlays */}
      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-light text-sm font-semibold tracking-widest uppercase">
            Start a Conversation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-white mt-3 mb-2">
            Get <span className="text-gradient">In Touch</span>
          </h2>
          <div className="section-divider mx-auto mt-4 mb-6" />
          <p className="text-slate-400 max-w-lg mx-auto">
            Interested in partnering with us? Fill out the form below and our
            team will get back to you within&nbsp;24&nbsp;hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ── Contact Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass-card rounded-2xl p-7">
              <h3 className="font-heading font-700 text-white text-xl mb-6">
                Contact Details
              </h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-blue/15 flex items-center justify-center">
                      <Icon size={18} className="text-brand-light" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-slate-200 hover:text-brand-light transition-colors text-sm whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-200 text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise card */}
            <div className="glass-card rounded-2xl p-6 border-l-2 border-brand-blue">
              <p className="text-white font-semibold mb-1">Our Commitment</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every partnership inquiry is reviewed personally by our team.
                We respond within 24 hours with a tailored proposal for your
                brand.
              </p>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-5 sm:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-heading text-2xl font-700 text-white">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 max-w-sm">
                    Thank you for reaching out. A member of our team will
                    contact you within 24 hours to discuss the next steps.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", brand: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-2 text-brand-light hover:text-white text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">
                        Full Name <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">
                        Brand Name <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="brand"
                        placeholder="Your Brand Name"
                        value={form.brand}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">
                        Email Address <span className="text-brand-blue">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@yourbrand.com"
                        value={form.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">
                      Message <span className="text-brand-blue">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us about your brand, product categories, and what you're looking for in a retail partner..."
                      value={form.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-2.5 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Partnership Inquiry
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-red-400 text-sm">
                      Something went wrong. Please try again or email us directly at{" "}
                      <a href="mailto:info@sunyllc.com" className="underline">
                        info@sunyllc.com
                      </a>
                      .
                    </p>
                  )}

                  <p className="text-center text-slate-600 text-xs">
                    By submitting, you agree to our privacy policy. We never
                    share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
