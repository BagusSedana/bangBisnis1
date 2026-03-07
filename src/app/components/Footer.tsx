import { motion } from "motion/react";
import { Link } from "react-router";

const links = [
  { label: "Layanan", id: "layanan" },
  { label: "Proses", id: "proses" },
  { label: "Portfolio", id: "/portofolio" },
  { label: "Harga", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] overflow-hidden relative">
      {/* Big brand text */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <span
            className="text-white/[0.08] block"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontSize: "clamp(4rem, 12vw, 12rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
            }}
          >
            bangbisnis
          </span>
        </motion.div>

        {/* Content row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 pb-10 border-b border-white/[0.06]">
          {/* Logo + tagline */}
          <div>
            <motion.div
              className="flex items-center gap-2.5 mb-5"
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white text-[12px] font-bold" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                  B
                </span>
              </motion.div>
              <span
                className="text-white text-[17px] tracking-[-0.02em] font-semibold"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                bangbisnis
              </span>
            </motion.div>
            <p
              className="text-white/60 max-w-xs mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.7 }}
            >
              Jasa pembuatan website profesional untuk UMKM di Bali. Terstruktur, minimalis, dan fokus pada konversi.
            </p>
            <motion.a
              href="https://wa.me/6287701785344"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-300 transition-all duration-300 text-[13px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>0877-0178-5344</span>
            </motion.a>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  if (link.id.startsWith('/')) {
                    window.location.href = link.id;
                  } else {
                    document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-[13px] text-white/60 hover:text-white/80 transition-colors duration-300 relative group"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-emerald-500/50"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            {/* Blog link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: links.length * 0.05 }}
            >
              <Link
                to="/blog"
                className="text-[13px] text-white/60 hover:text-white/80 transition-colors duration-300 relative group flex items-center gap-1.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Blog
                <span className="text-emerald-500 text-[9px] font-bold tracking-wider">NEW</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-emerald-500/50"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 pb-6">
          <p
            className="text-[11px] text-white/50 tracking-[0.05em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            &copy; 2026 BangBisnis. Bali, Indonesia. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="text-[11px] text-white/50 tracking-[0.05em]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Online &amp; Aktif
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
