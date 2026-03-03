import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.9, 1, 1]);

  return (
    <section id="cta" ref={sectionRef} className="py-16 md:py-24 bg-[#f5f4f0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          className="relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden"
          style={{ scale }}
        >
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald-500/15 blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-500/10 blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Rotating decoration */}
          <motion.div
            className="absolute top-10 right-10 md:top-16 md:right-16 w-20 h-20 md:w-28 md:h-28 border border-white/[0.04] rounded-full"
            style={{ rotate }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full" />
          </motion.div>

          <div className="relative z-10 px-10 py-20 md:px-24 md:py-32">
            <div className="max-w-2xl">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <MessageCircle size={22} className="text-emerald-500" />
                </motion.div>
              </motion.div>

              {/* Big headline */}
              <div className="overflow-hidden mb-2">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Siap memulai
                </motion.h2>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline gap-3"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                  }}
                >
                  <span className="italic text-[#444]">proyek Anda</span>
                  <motion.span
                    className="text-emerald-500"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ?
                  </motion.span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/60 mb-6 max-w-md"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8 }}
              >
                Konsultasikan kebutuhan website Anda bersama kami.
                <br />
                <span className="text-white/40">Tanpa komitmen, tanpa biaya.</span>
              </motion.p>

              {/* Risk reversal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-2.5 mb-10 max-w-sm"
              >
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                <span
                  className="text-white/35 text-[0.84rem] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Kami memastikan website siap digunakan dengan baik sebelum diluncurkan — tanpa pengecualian.
                </span>
              </motion.div>

              {/* CTA button */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/6287701785344"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full text-[15px] tracking-[0.02em] overflow-hidden"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                />
                <svg viewBox="0 0 24 24" className="w-5 h-5 relative z-10" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10">Konsultasi via WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
