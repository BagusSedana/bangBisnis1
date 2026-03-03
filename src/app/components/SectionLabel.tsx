import { motion } from "motion/react";

interface SectionLabelProps {
  number: string;
  label: string;
  light?: boolean;
}

export function SectionLabel({ number, label, light }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-4 mb-12"
    >
      <motion.span
        className={`text-[11px] tracking-[0.2em] uppercase ${light ? "text-white/50" : "text-[#777]"}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: true }}
      >
        {number}
      </motion.span>
      <motion.span
        className={`h-px ${light ? "bg-white/10" : "bg-[#ccc]"}`}
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.span
        className={`text-[11px] tracking-[0.2em] uppercase ${light ? "text-white/50" : "text-[#777]"}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
