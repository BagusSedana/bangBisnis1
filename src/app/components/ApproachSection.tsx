import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const workImg = "/img-approach.webp";


const items = [
  {
    tag: "Strategi",
    title: "Analisis Bisnis Sebelum Desain",
    desc: "Kami memahami bisnis Anda lebih dulu, baru merancang solusi visual yang tepat sasaran.",
    color: "#10b981",
  },
  {
    tag: "Struktur",
    title: "Perencanaan Struktur Konten",
    desc: "Setiap halaman dirancang dengan alur yang jelas agar pengunjung mudah mengambil keputusan.",
    color: "#6366f1",
  },
  {
    tag: "Eksekusi",
    title: "Eksekusi Minimalis & Profesional",
    desc: "Tampilan bersih yang menonjolkan kekuatan bisnis Anda tanpa gangguan visual yang berlebihan.",
    color: "#f59e0b",
  },
];

export function ApproachSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [-6, 2]);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-44 bg-white overflow-hidden relative"
    >
      {/* Giant watermark */}
      <motion.span
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] tracking-[-0.05em] text-[#f7f7f5] select-none pointer-events-none"
        style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: 0.8 }}
      >
        02
      </motion.span>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="02" label="Pendekatan" />

        {/* Bento-style grid layout */}
        <div className="grid md:grid-cols-12 gap-5 md:gap-6">
          {/* Big text card */}
          <motion.div
            className="md:col-span-7 bg-[#fafaf9] rounded-[2rem] p-10 md:p-14 flex flex-col justify-between min-h-[340px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h2 className="sr-only">Mengapa Memilih BangBisnis</h2>
              <div className="overflow-hidden" aria-hidden="true">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#0a0a0a]"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Pendekatan Terstruktur,
                </motion.div>
              </div>
              <div className="overflow-hidden" aria-hidden="true">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline gap-3"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  <span className="italic text-[#bbb]">Bukan Sekadar Desain</span>
                  <motion.span
                    className="inline-block w-12 h-[3px] bg-[#0a0a0a] rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-[#aaa] max-w-sm mt-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.8,
              }}
            >
              Setiap proyek dimulai dengan pemahaman mendalam tentang bisnis Anda — bukan template kosong.
            </motion.p>
          </motion.div>

          {/* Parallax image card */}
          <motion.div
            className="md:col-span-5 rounded-[2rem] overflow-hidden relative min-h-[300px] md:min-h-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ y: imgY, scale: imgScale, rotate: imgRotate }}
            >
              <ImageWithFallback
                src={workImg}
                alt="Creative process"
                loading="lazy"
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span
                className="text-white/50 text-[10px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our Process
              </span>
            </div>
          </motion.div>

          {/* Three approach cards - bottom row */}
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="md:col-span-4 group bg-[#fafaf9] hover:bg-[#0a0a0a] rounded-[2rem] p-8 md:p-9 transition-colors duration-700 cursor-default relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
            >
              {/* Floating circle accent */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-700"
                style={{ backgroundColor: item.color }}
                whileHover={{ scale: 1.3 }}
              />

              <div className="relative z-10">
                {/* Tag */}
                <span
                  className="inline-block text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border mb-6 group-hover:border-white/10 group-hover:text-white/30 border-[#e5e5e0] text-[#bbb] transition-colors duration-500"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.tag}
                </span>

                {/* Dot */}
                <motion.div
                  className="w-2.5 h-2.5 rounded-full mb-5"
                  style={{ backgroundColor: item.color }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                />

                <h3
                  className="text-[#0a0a0a] group-hover:text-white mb-3 transition-colors duration-500"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "1.3rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-[#aaa] group-hover:text-white/35 transition-colors duration-500"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
