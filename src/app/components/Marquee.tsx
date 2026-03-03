import { motion } from "motion/react";

const row1 = [
  "Company Profile",
  "Landing Page",
  "Website UMKM",
  "Integrasi WhatsApp",
  "Desain Minimalis",
  "Mobile Responsive",
];

export function Marquee() {
  return (
    <div className="relative py-10 md:py-14 bg-[#0a0a0a] overflow-hidden border-y border-white/[0.04]">
      {/* Row 1: Large outlined text */}
      <div className="flex mb-4">
        <motion.div
          className="flex shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...row1, ...row1].map((item, i) => (
            <span
              key={i}
              className="shrink-0 px-6 md:px-10 text-[2rem] md:text-[3.5rem] tracking-[-0.03em] whitespace-nowrap"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                WebkitTextStroke: "1px rgba(255,255,255,0.08)",
                color: "transparent",
              }}
            >
              {item}
              <span className="inline-block mx-4 md:mx-8 text-emerald-500/20 text-[0.5em] align-middle">
                &#9679;
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Reverse direction, filled text, smaller */}
      <div className="flex">
        <motion.div
          className="flex shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...row1, ...row1].map((item, i) => (
            <span
              key={i}
              className="shrink-0 px-6 md:px-10 text-[11px] md:text-[13px] tracking-[0.2em] uppercase whitespace-nowrap text-white/[0.06]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item}
              <span className="inline-block mx-6 md:mx-10 text-white/[0.04]">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
