import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    num: "01",
    title: "Diskusi",
    sub: "Kebutuhan",
    desc: "Karena website yang baik dimulai dari pemahaman bisnis Anda — bukan dari template kosong.",
    timeline: "Hari 1–2",
    color: "#10b981",
  },
  {
    num: "02",
    title: "Penyusunan",
    sub: "Struktur",
    desc: "Struktur yang benar menghemat waktu revisi dan memastikan setiap pesan tersampaikan tepat.",
    timeline: "Hari 3–4",
    color: "#6366f1",
  },
  {
    num: "03",
    title: "Desain &",
    sub: "Development",
    desc: "Dibangun dengan kode bersih agar website cepat, stabil, dan mudah dikelola ke depannya.",
    timeline: "Hari 5–10",
    color: "#f59e0b",
  },
  {
    num: "04",
    title: "Review &",
    sub: "Peluncuran",
    desc: "Kami pastikan semua berjalan sempurna sebelum website Anda ditayangkan ke publik.",
    timeline: "Hari 11–14",
    color: "#ec4899",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineProgress = useTransform(scrollYProgress, [0.15, 0.75], ["0%", "100%"]);

  return (
    <section
      id="proses"
      ref={sectionRef}
      className="py-28 md:py-44 bg-[#fafaf9] overflow-hidden relative"
    >
      {/* Giant watermark */}
      <motion.span
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] tracking-[-0.05em] text-[#f0efe9] select-none pointer-events-none"
        style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: 0.8 }}
      >
        04
      </motion.span>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="04" label="Proses" />

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-6">
          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#0a0a0a]"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                }}
              >
                Dari diskusi
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#0a0a0a]"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                }}
              >
                hingga <span className="italic text-[#bbb]">peluncuran</span>
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

          {/* Timeline badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
            className="flex items-center gap-3 bg-[#0a0a0a] text-white px-6 py-3 rounded-full self-start md:self-auto"
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="text-[13px] tracking-[0.02em]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              7–14 hari pengerjaan
            </span>
          </motion.div>
        </div>

        {/* Steps — horizontal on desktop with progress line */}
        <div className="relative">
          {/* Horizontal progress line (desktop) */}
          <div className="hidden md:block absolute top-[4rem] left-0 right-0 h-px bg-[#e8e8e3]">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#0a0a0a]"
              style={{ width: lineProgress }}
            />
          </div>

          {/* Vertical progress line (mobile) */}
          <div className="md:hidden absolute left-[1.1rem] top-0 bottom-0 w-px bg-[#e8e8e3]">
            <motion.div
              className="absolute left-0 top-0 w-full bg-[#0a0a0a]"
              style={{ height: lineProgress }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-12 md:pl-0 pb-12 md:pb-0 group cursor-default"
              >
                {/* Node */}
                <div className="absolute left-0 top-0 md:relative md:mb-8 flex items-center">
                  <motion.div
                    className="w-9 h-9 rounded-full bg-white border-2 border-[#e8e8e3] flex items-center justify-center z-10 group-hover:border-[#0a0a0a] group-hover:bg-[#0a0a0a] transition-all duration-500"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full group-hover:bg-white transition-colors duration-500"
                      style={{ backgroundColor: step.color }}
                    />
                  </motion.div>
                </div>

                <div className="md:pr-10">
                  {/* Timeline tag */}
                  <span
                    className="inline-block text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-[#e8e8e3] text-[#ccc] mb-4 group-hover:border-[#0a0a0a] group-hover:text-[#0a0a0a] transition-colors duration-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.timeline}
                  </span>

                  {/* Large step number */}
                  <motion.span
                    className="block text-[3rem] md:text-[4rem] tracking-[-0.04em] text-[#f0efe9] group-hover:text-[#0a0a0a] transition-colors duration-700"
                    style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: 0.9 }}
                    whileHover={{ x: 5 }}
                  >
                    {step.num}
                  </motion.span>

                  <h3
                    className="text-[#0a0a0a] mt-3"
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                      fontSize: "1.2rem",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                    <br />
                    <span className="italic text-[#999]">{step.sub}</span>
                  </h3>

                  <p
                    className="text-[#aaa] mt-2 max-w-[220px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
