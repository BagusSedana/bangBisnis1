import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const baliImg =
  "https://images.unsplash.com/photo-1759162311028-2cbc94e50abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwYWVyaWFsJTIwZHJvbmUlMjB0cm9waWNhbHxlbnwxfHx8fDE3NzI0NTY5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const laptopImg = "/img-hero-laptop.webp";

/* ─── Animated counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frame = requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Circular rotating text ─── */
function RotatingBadge() {
  const text = "BANGBISNIS • BALI WEBSITE • PROFESIONAL • ";
  return (
    <motion.div
      className="w-28 h-28 md:w-36 md:h-36 relative"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
          />
        </defs>
        <text
          className="fill-white/20"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.15em" }}
        >
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
        >
          <span className="text-white text-[10px] md:text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            &#8599;
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Cursor-following spotlight (desktop only) ─── */
function CursorSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
      }}
    />
  );
}

/* ─── Main Hero ─── */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const img1Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const img1Rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const img2Rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0a] overflow-hidden"
    >
      <CursorSpotlight />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated diagonal line */}
      <motion.div
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent origin-top"
        style={{ right: "38%" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-center">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between pt-28 md:pt-32 mb-8 md:mb-12"
        >
          <div className="flex items-center gap-3">
            <motion.span
              className="w-2.5 h-2.5 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="text-white/30 text-[11px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Bali-based Web Studio
            </span>
          </div>
          <span
            className="hidden md:block text-white/40 text-[11px] tracking-[0.15em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Est. 2024
          </span>
        </motion.div>

        {/* ─── Main Grid: Massive typography + Floating images ─── */}
        <div className="grid md:grid-cols-12 gap-0 items-center flex-1">
          {/* LEFT: Giant stacked typography */}
          <motion.div className="md:col-span-7 relative" style={{ y: textY }}>
            <h1 className="sr-only">Jasa Pembuatan Website Profesional di Bali</h1>
            {/* Line 1: "Jasa Website" */}
            <div className="overflow-hidden" aria-hidden="true">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="text-white"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "clamp(2.8rem, 8vw, 7rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Jasa Website
                </div>
              </motion.div>
            </div>

            {/* Line 2: "Profesional" with underline */}
            <div className="overflow-hidden -mt-1 md:-mt-2" aria-hidden="true">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="text-white relative inline-block"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "clamp(2.8rem, 8vw, 7rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Profesional
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </motion.div>
            </div>

            {/* Line 3: "untuk UMKM di Bali." */}
            <div className="overflow-hidden -mt-1 md:-mt-2" aria-hidden="true">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-2 md:gap-4 flex-wrap"
              >
                <span
                  className="text-white/60"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.85rem, 1.6vw, 1.2rem)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  untuk
                </span>
                <span
                  className="text-white"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "clamp(2.4rem, 6.5vw, 5.8rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                  }}
                >
                  UMKM
                </span>
                <span
                  className="text-white/60"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.85rem, 1.6vw, 1.2rem)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  di
                </span>
                <span
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "clamp(2.4rem, 6.5vw, 5.8rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                    color: "#10b981",
                  }}
                >
                  Bali
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    .
                  </motion.span>
                </span>
              </motion.div>
            </div>

            {/* Subtext + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 md:mt-14"
            >
              {/* Micro-trust bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5"
              >
                {["Proses terstruktur", "Desain minimalis & profesional", "Komunikasi transparan"].map((trust) => (
                  <div key={trust} className="flex items-center gap-1.5">
                    <span className="text-emerald-500 text-[11px]">✓</span>
                    <span
                      className="text-white/50 text-[11px] tracking-[0.04em]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {trust}
                    </span>
                  </div>
                ))}
              </motion.div>

              <p
                className="text-white/50 max-w-[320px] mb-8"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.8,
                }}
              >
                Khusus UMKM di Bali — kami rancang website yang membangun
                <span className="text-white/75"> kepercayaan</span> dan mendatangkan
                <span className="text-white/75"> klien baru</span>.
              </p>

              {/* Buttons — inline row, no wrap */}
              <div className="flex flex-row items-center gap-3">
                <motion.button
                  onClick={() => scrollTo("#cta")}
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3.5 rounded-xl text-[14px] font-semibold transition-colors duration-200 shadow-lg shadow-emerald-500/25"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>Konsultasi Gratis</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>

                <motion.button
                  onClick={() => scrollTo("#portfolio")}
                  className="flex-shrink-0 inline-flex items-center px-6 py-3.5 rounded-xl border border-white/20 text-white/70 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 text-[14px] font-medium"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Lihat Portofolio
                </motion.button>
              </div>
            </motion.div>
          </motion.div>


          {/* RIGHT: Floating image composition + rotating badge */}
          <div className="md:col-span-5 relative mt-16 md:mt-0 h-[400px] md:h-[550px]">
            {/* Primary image card - tilted */}
            <motion.div
              className="absolute top-0 right-0 md:right-4 w-[65%] md:w-[280px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
              style={{ y: img1Y, rotate: img1Rotate }}
              initial={{ opacity: 0, y: 80, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
            >
              <ImageWithFallback
                src={baliImg}
                alt="Bali temple"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <span
                  className="text-white/60 text-[10px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Bali, Indonesia
                </span>
              </div>
            </motion.div>

            {/* Secondary image card - different tilt */}
            <motion.div
              className="absolute bottom-4 left-0 md:left-0 w-[55%] md:w-[230px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5"
              style={{ y: img2Y, rotate: img2Rotate }}
              initial={{ opacity: 0, y: 80, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
            >
              <ImageWithFallback
                src={laptopImg}
                alt="Website design"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent" />
            </motion.div>

            {/* Rotating badge */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5, type: "spring", bounce: 0.4 }}
            >
              <RotatingBadge />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -left-4 md:left-[30%] top-[20%] bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(16,185,129,0.3)" }}
            >
              <span
                className="block text-white text-[1.3rem] tracking-[-0.03em]"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                <Counter target={50} suffix="+" />
              </span>
              <span
                className="text-white/60 text-[10px] tracking-[0.1em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Proyek
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom animated divider line */}
        <motion.div
          className="mt-12 md:mt-0 mb-8 h-px bg-white/5 relative overflow-hidden"
        >
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500/40 via-emerald-500/20 to-transparent"
            style={{ width: lineWidth }}
          />
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="pb-10 flex flex-wrap items-center gap-x-12 gap-y-4 md:gap-x-20"
        >
          {[
            { num: 50, suffix: "+", label: "Proyek Selesai" },
            { num: 14, suffix: " Hari", label: "Maks Pengerjaan" },
            { num: 100, suffix: "%", label: "Kepuasan Klien" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + i * 0.12 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <motion.span
                className="text-white/80 text-[1.4rem] tracking-[-0.03em] tabular-nums"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
                whileHover={{ color: "#10b981" }}
                transition={{ duration: 0.3 }}
              >
                <Counter target={stat.num} suffix={stat.suffix} />
              </motion.span>
              <span
                className="text-white/50 text-[11px] tracking-[0.08em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div >

      {/* Scroll indicator - side vertical */}
      < motion.div
        initial={{ opacity: 0 }
        }
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute right-6 md:right-12 bottom-10 hidden md:flex flex-col items-center gap-3"
      >
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/15"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: "top" }}
        />
        <span
          className="text-white/40 text-[9px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </motion.div >
    </section >
  );
}
