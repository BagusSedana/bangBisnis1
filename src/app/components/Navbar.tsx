import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const navLinks = [
  { label: "Mengapa", href: "#problem" },
  { label: "Layanan", href: "#layanan" },
  { label: "Proses", href: "#proses" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 z-[60]"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            <motion.div
              className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-[13px] font-bold">B</span>
            </motion.div>
            <span
              className={`text-[17px] tracking-[-0.02em] font-semibold transition-colors duration-500 ${scrolled ? "text-[#0a0a0a]" : "text-white"
                }`}
            >
              bangbisnis
            </span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-[12px] tracking-[0.06em] uppercase transition-colors duration-300 group ${scrolled
                  ? "text-[#777] hover:text-[#0a0a0a]"
                  : "text-white/60 hover:text-white"
                  }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ y: -1 }}
              >
                {link.label}
                <motion.span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full ${scrolled ? "bg-[#0a0a0a]" : "bg-white"
                    }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
          {/* Blog link - goes to /blog page */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <Link
              to="/blog"
              className={`relative px-4 py-2 text-[12px] tracking-[0.06em] uppercase transition-colors duration-300 inline-flex items-center gap-1 ${scrolled ? "text-[#777] hover:text-[#0a0a0a]" : "text-white/60 hover:text-white"
                }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Blog
              <span className="text-emerald-500 text-[9px] font-bold tracking-wider">NEW</span>
            </Link>
          </motion.div>

          {/* CTA button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => scrollTo("#cta")}
            className="hidden md:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold tracking-[0.01em] transition-colors duration-200"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Konsultasi</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >→</motion.span>
          </motion.button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center ${scrolled ? "text-[#0a0a0a]" : "text-white"
              }`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-white text-[28px] tracking-[-0.02em]"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
              {/* Blog in mobile menu */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.08 }}
              >
                <Link
                  to="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 text-[28px] tracking-[-0.02em] flex items-center gap-3"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  Blog
                  <span className="text-emerald-500 text-[14px] font-bold tracking-wider">NEW</span>
                </Link>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={() => scrollTo("#cta")}
                className="mt-4 bg-emerald-500 text-white px-8 py-3.5 rounded-xl text-[14px] font-semibold"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Konsultasi Gratis
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
