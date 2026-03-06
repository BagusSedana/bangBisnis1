import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioImg1 = "/img-portfolio-1.webp";
const portfolioImg2 = "/img-portfolio-2.webp";
const portfolioImg3 = "/img-portfolio-3.webp";

const projects = [
  {
    img: portfolioImg1,
    category: "Restoran & Kafe",
    title: "Warung Bambu",
    location: "Bali",
    desc: "Website restoran dengan menu digital dan integrasi reservasi langsung via WhatsApp.",
    result: "+40% reservasi online",
    color: "#10b981",
  },
  {
    img: portfolioImg2,
    category: "Hospitality",
    title: "Villa Serenity",
    location: "Ubud",
    desc: "Company profile villa dengan galeri foto premium dan sistem inquiry langsung.",
    result: "+65% direct booking",
    color: "#6366f1",
  },
  {
    img: "/img-portfolio-travel.png",
    category: "Tour & Travel",
    title: "TravelJimb",
    location: "Bali",
    desc: "Website driver pribadi Bali dengan desain premium dan landing page informasi wisata.",
    result: "Live Project",
    color: "#0ea5e9",
    link: "https://traveljimb.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.a
      href={project.link || "#"}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      ref={cardRef}
      className={`group relative rounded-3xl overflow-hidden bg-[#111] ${project.link ? "cursor-pointer" : "cursor-default"}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y }}>
          <ImageWithFallback
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-5 left-5">
          <span
            className="inline-block text-[10px] tracking-[0.15em] uppercase bg-white/10 backdrop-blur-md text-white/80 px-3 py-1.5 rounded-full border border-white/10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3
              className="text-white"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: "1.35rem",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              {project.title}
            </h3>
            <span
              className="text-white/30 text-[12px] tracking-[0.08em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.location}
            </span>
          </div>
          <motion.div
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-white/30 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-all duration-300"
            whileHover={{ rotate: 45 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.div>
        </div>

        <p
          className="text-white/35 text-[0.83rem] leading-relaxed mb-5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {project.desc}
        </p>

        {/* Result */}
        <div className="flex items-center gap-2.5 pt-4 border-t border-white/[0.06]">
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: project.color }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
          />
          <span
            className="text-[0.82rem] font-medium"
            style={{ fontFamily: "'Urbanist', sans-serif", color: project.color }}
          >
            {project.result}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 md:py-40 bg-[#0d0d0d] overflow-hidden relative">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="05" label="Portfolio" light />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
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
                Proyek yang Telah
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                }}
              >
                <span className="italic text-white/30">Kami Kerjakan</span>
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
            transition={{ delay: 0.3 }}
            className="text-white/60 max-w-xs"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.8 }}
          >
            Setiap proyek dirancang dengan strategi yang tepat untuk bisnis spesifik Anda.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
