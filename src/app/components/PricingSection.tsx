import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "1.500.000",
    desc: "Cocok untuk UMKM yang ingin mulai terlihat profesional di internet.",
    features: [
      "1 halaman website profesional (landing page)",
      "Desain modern dan mobile friendly",
      "Tombol langsung ke WhatsApp",
      "Integrasi Google Maps lokasi bisnis",
      "Optimasi kecepatan website",
      "Setup Google Business Profile",
      "Setup SEO dasar agar mudah ditemukan di Google",
      "Bantuan upload konten awal (foto, teks, dll)",
      "Gratis domain .web.id 1 tahun",
      "Gratis hosting 1 tahun",
    ],
    note: "Bisnis sudah punya website resmi dan mudah ditemukan pelanggan.",
  },
  {
    name: "Business Website",
    price: "2.750.000",
    desc: "Untuk bisnis yang ingin terlihat lebih terpercaya dan informatif.",
    popular: true,
    features: [
      "Hingga 5 halaman website",
      "Desain profesional dan responsif",
      "Struktur website yang rapi dan mudah dipahami",
      "Integrasi WhatsApp chat langsung",
      "Integrasi Google Maps",
      "Optimasi kecepatan website",
      "Setup Google Analytics (tracking pengunjung)",
      "SEO dasar pada setiap halaman",
      "Setup Google Business Profile",
      "Bantuan upload konten awal",
      "Gratis domain .web.id 1 tahun",
      "Gratis hosting 1 tahun",
    ],
    note: "Website terlihat lebih profesional dan meningkatkan kepercayaan pelanggan.",
  },
  {
    name: "Growth Website",
    price: "4.500.000",
    desc: "Untuk bisnis yang ingin mulai mendapatkan pelanggan dari Google.",
    features: [
      "Hingga 10 halaman website",
      "Struktur website SEO-friendly",
      "Halaman layanan yang dioptimasi untuk pencarian Google",
      "Blog / artikel untuk meningkatkan trafik",
      "Integrasi WhatsApp & form lead pelanggan",
      "Setup Google Analytics + Search Console",
      "Optimasi kecepatan website",
      "Setup Google Business Profile",
      "Optimasi SEO dasar pada semua halaman",
      "Bantuan upload konten awal",
      "Gratis domain .com / .id 1 tahun",
      "Gratis hosting 1 tahun",
    ],
  },
];

const maintenancePlans = [
  {
    name: "Basic Care",
    price: "250.000",
    period: "/ bulan",
    desc: "Untuk memastikan website tetap aktif dan bisa digunakan pelanggan tanpa gangguan.",
    features: [
      "Perubahan kecil konten (teks atau foto) hingga 2x per bulan",
      "Backup website setiap minggu",
      "Monitoring uptime website",
      "Perbaikan error ringan jika terjadi masalah",
      "Dukungan teknis via WhatsApp",
    ],
    note: "Website tetap berjalan lancar tanpa harus mengurus hal teknis.",
  },
  {
    name: "Advanced Care",
    price: "650.000",
    period: "/ bulan",
    popular: true,
    desc: "Untuk bisnis yang ingin website terus berkembang dan tetap optimal.",
    features: [
      "Update konten rutin (hingga 5x per bulan)",
      "Backup website terjadwal",
      "Monitoring keamanan website",
      "Optimasi kecepatan website",
      "Laporan performa website bulanan",
      "Prioritas support jika terjadi kendala",
    ],
  },
];

export function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [includeMaintenance, setIncludeMaintenance] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWaClick = (packageName: string, isMaintenance: boolean = false, index?: number) => {
    const phoneNumber = "6287701785344";
    let message = "";

    if (isMaintenance) {
      message = `Halo BangBisnis, saya tertarik dengan layanan *${packageName}* (Dukungan & Pemeliharaan). Boleh saya konsultasi dulu mengenai kebutuhan website saya?`;
    } else {
      const withMaintenance = index !== undefined && includeMaintenance[index];
      const maintenanceText = withMaintenance ? " + Dukungan & Pemeliharaan" : "";
      message = `Halo BangBisnis, saya tertarik dengan Layanan Jasa Website paket *${packageName}*${maintenanceText}. Boleh saya konsultasi dulu mengenai kebutuhan website saya?`;
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
                    {(plan as any).pricePrefix && (
                      <span
                        className={`text-[0.75rem] transition-colors duration-500 ${(plan as any).popular ? "text-[#ccc]" : "text-white/40 group-hover:text-[#ccc]"
                          }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {(plan as any).pricePrefix}
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
                    <div className={`mb-8 p-4 rounded-xl transition-colors duration-500 ${(plan as any).popular ? "bg-[#f5f5f5]" : "bg-white/[0.02] border border-white/[0.04]"}`}>
                      <p className={`text-[0.8rem] italic leading-relaxed ${(plan as any).popular ? "text-[#666]" : "text-[#999]"}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                        "{(plan as any).note}"
                      </p>
                    </div>
                  )}

                  {/* Optional Maintenance toggle */}
                  <div className="mb-6">
                    <label
                      className={`flex items-start gap-3 cursor-pointer p-3 rounded-xl border transition-all duration-300 ${includeMaintenance[i] ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-white/10 hover:border-white/20'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIncludeMaintenance(prev => ({ ...prev, [i]: !prev[i] }));
                      }}
                    >
                      <div
                        className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${includeMaintenance[i] ? 'bg-emerald-500 border-emerald-500 text-[#0a0a0a]' : 'border-white/30 text-transparent'}`}
                      >
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <div className="flex-1 select-none">
                        <p className={`text-[0.82rem] font-medium leading-tight mb-1 transition-colors ${(plan as any).popular ? (includeMaintenance[i] ? "text-[#333]" : "text-[#777]") : (includeMaintenance[i] ? "text-white/90" : "text-white/60")}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                          Tambah Dukungan & Pemeliharaan
                        </p>
                        <p className={`text-[0.7rem] transition-colors ${(plan as any).popular ? "text-[#999]" : "text-white/40"}`} style={{ fontFamily: "'Inter', sans-serif" }}>+Rp 250.000 / bulan</p>
                      </div>
                    </label>
                  </div>

                  <motion.button
                    onClick={() => handleWaClick(plan.name, false, i)}
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
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h4 className="text-white/80 text-lg mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.name}</h4>
                    <div className="flex items-baseline gap-1 mb-2" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                      <span className="text-white text-2xl tracking-[-0.02em]">Rp {plan.price}</span>
                      <span className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.period}</span>
                    </div>
                    {plan.desc && (
                      <p className="text-white/50 text-[0.82rem] leading-relaxed max-w-[90%]" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {plan.desc}
                      </p>
                    )}
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

                {(plan as any).note && (
                  <div className="mt-auto mb-8 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.03]">
                    <p className="text-[#999] text-[0.78rem] italic leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      "{(plan as any).note}"
                    </p>
                  </div>
                )}

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
