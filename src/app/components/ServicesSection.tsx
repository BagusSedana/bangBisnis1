import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Globe, Layers, Store, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router";

const thumbCompany =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=60";
const thumbLanding =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=60";
const thumbUmkm =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=60";
const thumbWa =
  "https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=60";
const thumbSeo =
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=60";

const services = [
  {
    icon: Globe,
    title: "Company Profile",
    desc: "Website profil perusahaan yang menampilkan identitas bisnis secara profesional dan terpercaya.",
    thumb: thumbCompany,
    href: "/layanan/company-profile"
  },
  {
    icon: Layers,
    title: "Landing Page",
    desc: "Halaman tujuan yang dirancang khusus untuk konversi — jelas, fokus, dan efektif.",
    thumb: thumbLanding,
    href: "/layanan/landing-page"
  },
  {
    icon: Store,
    title: "Website UMKM",
    desc: "Solusi website lengkap untuk usaha kecil dan menengah di Bali.",
    thumb: thumbUmkm,
    href: "/layanan/website-umkm"
  },
  {
    icon: MessageCircle,
    title: "Integrasi WhatsApp",
    desc: "Tombol kontak langsung di website agar pelanggan bisa menghubungi Anda dengan mudah.",
    thumb: thumbWa,
    href: "/layanan/integrasi-whatsapp"
  },
];

export function ServicesSection() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="layanan"
      ref={sectionRef}
      className="py-28 md:py-44 bg-[#0a0a0a] overflow-hidden relative"
    >
      {/* Giant watermark */}
      <motion.span
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] tracking-[-0.05em] text-white/[0.015] select-none pointer-events-none"
        style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: 0.8, x: bgX }}
      >
        03
      </motion.span>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="03" label="Layanan" light />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-white"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                }}
              >
                Layanan yang kami
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-3"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                }}
              >
                <span className="italic text-[#444]">tawarkan</span>
                <motion.span
                  className="text-emerald-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  .
                </motion.span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/60 max-w-xs"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.7 }}
          >
            Setiap layanan dirancang untuk memperkuat kehadiran digital bisnis Anda.
          </motion.p>
        </div>

        {/* Services — text list with image reveal on hover */}
        <div className="relative">
          {/* Floating preview image (desktop) */}
          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:block absolute right-0 top-0 w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 pointer-events-none z-20 border border-white/10"
                style={{ top: `${hovered * 110 + 20}px` }}
              >
                <ImageWithFallback
                  src={services[hovered].thumb}
                  alt={services[hovered].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/20" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* List */}
          <div className="md:max-w-[65%]">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navigate(service.href)}
                className="group border-t border-white/[0.06] last:border-b cursor-pointer"
              >
                <div className="flex items-center gap-5 md:gap-8 py-7 md:py-9">
                  {/* Number */}
                  <span
                    className="text-[13px] text-white/30 group-hover:text-emerald-500/50 transition-colors duration-500 shrink-0 w-8"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <service.icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-white/30 group-hover:text-emerald-500 transition-colors duration-500"
                    />
                  </motion.div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className="text-white/70 group-hover:text-white transition-colors duration-500"
                      style={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontSize: "clamp(1.15rem, 2.5vw, 1.8rem)",
                        letterSpacing: "-0.02em",
                      }}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    <p
                      className="text-white/40 group-hover:text-white/30 transition-colors duration-500 mt-1 hidden md:block max-w-md"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.6 }}
                    >
                      {service.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    className="text-white/30 group-hover:text-white/50 text-[20px] shrink-0 transition-colors duration-500"
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                  >
                    &rarr;
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
