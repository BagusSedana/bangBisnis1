import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Professional",
    price: "2.000.000",
    desc: "Untuk UMKM yang ingin mulai memiliki website profesional.",
    features: [
      "Hingga 5 halaman utama (Home, Tentang, Layanan, dll.)",
      "Desain minimalis & responsif (mobile-friendly)",
      "Struktur konten yang rapi & terarah",
      "Integrasi WhatsApp",
      "1x revisi penyempurnaan",
      "Panduan penggunaan",
    ],
    note: "Cocok untuk bisnis yang ingin mulai tampil lebih serius secara online.",
  },
  {
    name: "Growth",
    price: "3.500.000",
    desc: "Untuk bisnis yang ingin meningkatkan kredibilitas dan terlihat lebih profesional dibanding kompetitor.",
    popular: true,
    features: [
      "Hingga 10 halaman terstruktur",
      "Desain responsif & tampilan premium",
      "Penyesuaian visual sesuai brand",
      "Galeri foto / portfolio",
      "Integrasi WhatsApp & Google Maps",
      "Setup Google Analytics",
      "2x revisi penyempurnaan",
    ],
    note: "Dirancang untuk bisnis yang ingin tampil lebih meyakinkan dan terstruktur.",
  },
  {
    name: "Custom Solution",
    price: "5.000.000",
    pricePrefix: "Mulai",
    desc: "Untuk kebutuhan bisnis dengan fitur dan pengembangan lebih lanjut.",
    features: [
      "Struktur halaman sesuai kebutuhan",
      "Desain kustom penuh",
      "Pengembangan fitur khusus",
      "Revisi hingga finalisasi",
      "Konsultasi arah digital",
    ],
    note: "Cocok untuk bisnis yang membutuhkan solusi lebih fleksibel dan scalable.",
  },
];

const maintenancePlans = [
  {
    name: "Basic Care",
    price: "350.000",
    period: "/ bulan",
    features: [
      "Update minor konten (teks/foto)",
      "Backup rutin",
      "Monitoring performa dasar",
      "Dukungan teknis ringan",
    ],
  },
  {
    name: "Advanced Care",
    price: "750.000",
    period: "/ bulan",
    popular: true,
    features: [
      "Update konten rutin",
      "Optimasi performa",
      "Monitoring keamanan",
      "Backup terjadwal",
      "Laporan perkembangan",
      "Prioritas dukungan",
    ],
  },
];

export function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWaClick = (packageName: string, isMaintenance: boolean = false) => {
    const phoneNumber = "6287701785344";
    let message = "";

    if (isMaintenance) {
      message = `Halo BangBisnis, saya tertarik dengan layanan *${packageName}* (Dukungan & Pemeliharaan). Boleh saya konsultasi dulu mengenai kebutuhan website saya?`;
    } else {
      message = `Halo BangBisnis, saya tertarik dengan Layanan Jasa Website paket *${packageName}*. Boleh saya konsultasi dulu mengenai kebutuhan website saya?`;
    }

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-28 md:py-44 bg-[#0a0a0a] overflow-hidden relative">
      {/* Giant watermark */}
      <motion.span
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] tracking-[-0.05em] text-white/[0.015] select-none pointer-events-none"
        style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: 0.8, x: bgX }}
      >
        07
      </motion.span>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="07" label="Harga" light />

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
                Investasi yang
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-white"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                }}
              >
                <span className="italic text-[#444]">transparan</span>
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
            className="text-white/50 max-w-xs"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.7 }}
          >
            Setiap paket dirancang untuk membantu bisnis Anda tampil lebih profesional dan terpercaya.
          </motion.p>
        </div>

        {/* SEO H2 + internal link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/[0.05] pt-10"
        >
          <h2
            className="text-white/50"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
              lineHeight: 1.5,
            }}
          >
            Jasa Pembuatan Website Profesional & SEO Friendly
          </h2>
          <a
            href="/jasa-website-bali"
            className="text-emerald-500/60 hover:text-emerald-400 text-[12px] tracking-[0.08em] uppercase transition-colors duration-300 flex items-center gap-1.5 shrink-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Pelajari lebih lanjut →
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => {
            const isActive = plan.popular || hoveredIndex === i;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-[2rem] p-8 md:p-10 transition-all duration-700 group cursor-default ${plan.popular
                  ? "bg-white text-[#0a0a0a]"
                  : "bg-white/[0.03] border border-white/[0.06] hover:bg-white hover:border-transparent"
                  }`}
                whileHover={{ y: -12 }}
              >
                {/* Popular sparkle */}
                {plan.popular && (
                  <motion.div
                    className="absolute top-6 right-6"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles size={16} className="text-emerald-500" />
                  </motion.div>
                )}

                {/* Popular tag */}
                {plan.popular && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-3 left-8 text-[10px] tracking-[0.15em] uppercase bg-emerald-500 text-white px-4 py-1 rounded-full"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Populer
                  </motion.span>
                )}

                <div>
                  <h3
                    className={`mb-2 transition-colors duration-500 ${plan.popular
                      ? "text-[#999]"
                      : "text-white/30 group-hover:text-[#999]"
                      }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
                  >
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-1">
                    {plan.pricePrefix && (
                      <span
                        className={`text-[0.75rem] transition-colors duration-500 ${plan.popular ? "text-[#ccc]" : "text-white/40 group-hover:text-[#ccc]"
                          }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {plan.pricePrefix}
                      </span>
                    )}
                    <motion.span
                      className={`tracking-[-0.03em] transition-colors duration-500 ${plan.popular
                        ? "text-[#0a0a0a]"
                        : "text-white group-hover:text-[#0a0a0a]"
                        }`}
                      style={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      }}
                      whileHover={{ scale: 1.03 }}
                    >
                      Rp {plan.price}
                    </motion.span>
                  </div>

                  <p
                    className={`mb-8 transition-colors duration-500 ${plan.popular ? "text-[#aaa]" : "text-white/50 group-hover:text-[#aaa]"
                      }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.6 }}
                  >
                    {plan.desc}
                  </p>

                  {/* Divider */}
                  <motion.div
                    className={`h-px mb-8 transition-colors duration-500 ${plan.popular ? "bg-[#f0f0ed]" : "bg-white/[0.06] group-hover:bg-[#f0f0ed]"
                      }`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    style={{ transformOrigin: "left" }}
                  />

                  <ul className="space-y-3.5 mb-10">
                    {plan.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + fi * 0.04 }}
                      >
                        <Check
                          size={15}
                          className={`flex-shrink-0 mt-0.5 transition-colors duration-500 ${plan.popular
                            ? "text-emerald-500"
                            : "text-white/40 group-hover:text-emerald-500"
                            }`}
                        />
                        <span
                          className={`transition-colors duration-500 ${plan.popular
                            ? "text-[#666]"
                            : "text-white/30 group-hover:text-[#666]"
                            }`}
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", lineHeight: 1.5 }}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {(plan as any).note && (
                    <div className={`mb-8 p-4 rounded-xl transition-colors duration-500 ${plan.popular ? "bg-[#f5f5f5]" : "bg-white/[0.02] border border-white/[0.04]"}`}>
                      <p className={`text-[0.8rem] italic leading-relaxed ${plan.popular ? "text-[#666]" : "text-[#999]"}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                        "{(plan as any).note}"
                      </p>
                    </div>
                  )}

                  <motion.button
                    onClick={() => handleWaClick(plan.name)}
                    className={`w-full py-4 rounded-full text-[13px] tracking-[0.02em] transition-all duration-500 relative overflow-hidden group/btn ${plan.popular
                      ? "bg-[#0a0a0a] text-white"
                      : "bg-white/[0.06] text-white/50 border border-white/[0.08] group-hover:bg-[#0a0a0a] group-hover:text-white group-hover:border-transparent"
                      }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="relative z-10">Pilih Paket</span>
                    <motion.div
                      className="absolute inset-0 bg-emerald-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.35 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Maintenance Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-28 border-t border-white/[0.05] pt-16"
        >
          <div className="text-center mb-12 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              <Sparkles size={12} />
              <span>Opsional</span>
            </div>
            <h3 className="text-white text-3xl md:text-4xl mb-4 tracking-[-0.02em]" style={{ fontFamily: "'Urbanist', sans-serif" }}>Dukungan & Pemeliharaan</h3>
            <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Agar website tetap optimal, aman, dan terjaga performanya setelah selesai dikembangkan. Fokus pada bisnis Anda, biar kami yang urus teknisnya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {maintenancePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-6 md:p-8 rounded-[1.5rem] border transition-colors duration-500 ${(plan as any).popular ? "bg-white/[0.04] border-emerald-500/30 hover:bg-white/[0.06]" : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-white/80 text-lg mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.name}</h4>
                    <div className="flex items-baseline gap-1" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                      <span className="text-white text-2xl tracking-[-0.02em]">Rp {plan.price}</span>
                      <span className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.period}</span>
                    </div>
                  </div>
                  {(plan as any).popular && (
                    <span className="text-[10px] tracking-[0.1em] uppercase bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30 font-medium">Bestseller</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={14} className="text-emerald-500/80 flex-shrink-0 mt-0.5" />
                      <span className="text-white/60 text-[0.85rem]" style={{ fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => handleWaClick(plan.name, true)}
                  className={`w-full py-3.5 rounded-xl text-[13px] tracking-[0.02em] transition-all duration-300 relative overflow-hidden group/btn ${(plan as any).popular
                    ? "bg-white/[0.08] text-white hover:bg-white/[0.12]"
                    : "bg-white/[0.03] text-white/50 border border-white/[0.05] hover:bg-white/[0.08] hover:text-white"
                    }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Pilih Paket</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
