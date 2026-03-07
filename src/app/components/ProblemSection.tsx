import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "./SectionLabel";

const withoutWebsite = [
  "Terlihat kurang kredibel di mata calon pelanggan",
  "Bergantung pada media sosial yang tidak stabil",
  "Sulit ditemukan pelanggan baru lewat Google",
];

const withWebsite = [
  "Citra bisnis lebih kuat dan terpercaya",
  "Informasi terstruktur dan mudah diakses",
  "Tampil lebih serius dan profesional",
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative py-28 md:py-44 bg-[#fafaf9] overflow-hidden"
    >
      {/* Giant watermark number */}
      <motion.span
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] tracking-[-0.05em] text-[#f0efe9] select-none pointer-events-none"
        style={{
          fontFamily: "'Urbanist', sans-serif",
          lineHeight: 0.8,
          x: bgX,
        }}
      >
        01
      </motion.span>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="01" label="Mengapa Website" />

        {/* Big statement */}
        <div className="mb-16 md:mb-20">
          <h2 className="sr-only">Website untuk UMKM dan Bisnis Lokal</h2>
          <div className="overflow-hidden" aria-hidden="true">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              Bisnis tanpa website
            </motion.div>
          </div>
          <div className="overflow-hidden" aria-hidden="true">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#0a0a0a] flex items-baseline gap-3 md:gap-5 flex-wrap"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              <span>seperti toko</span>
              <span className="italic text-[#777]">tanpa papan nama</span>
              <motion.span
                className="text-emerald-500"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                .
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* 2-column contrast: Before vs After */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* WITHOUT website */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f0efe9] rounded-[2rem] p-10 md:p-12"
          >
            <span
              className="inline-block text-[11px] tracking-[0.18em] uppercase text-[#777] mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Tanpa Website
            </span>
            <ul className="space-y-5">
              {withoutWebsite.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#888] text-[18px] mt-0.5 flex-shrink-0">✕</span>
                  <span
                    className="text-[#444]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", lineHeight: 1.6 }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* WITH website */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0a0a0a] rounded-[2rem] p-10 md:p-12"
          >
            <span
              className="inline-block text-[11px] tracking-[0.18em] uppercase text-emerald-500 mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Dengan Website Profesional
            </span>
            <ul className="space-y-5">
              {withWebsite.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-emerald-500 text-[18px] mt-0.5 flex-shrink-0">✓</span>
                  <span
                    className="text-white/80"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", lineHeight: 1.6 }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
