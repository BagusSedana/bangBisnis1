import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { blogArticles } from "../data/blogData";

function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export function BlogPage() {
    useEffect(() => {
        document.title = "Blog | Tips & Strategi Digital untuk UMKM Bali | BangBisnis";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute(
                "content",
                "Artikel dan panduan strategi digital untuk UMKM Bali. Tips SEO, website, dan pemasaran online untuk bisnis lokal di Bali."
            );
        }
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-white/60 text-[13px] tracking-[0.06em] hover:text-white transition-colors"
                    >
                        ← Kembali ke Beranda
                    </Link>
                    <motion.a
                        href="https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20ingin%20konsultasi%20jasa%20website."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 text-white text-[12px] tracking-[0.04em] px-5 py-2.5 rounded-full flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Konsultasi Gratis
                    </motion.a>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-36 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-white/30 text-[11px] tracking-[0.2em] uppercase">
                            Blog & Panduan
                        </span>
                    </div>
                    <h1
                        className="text-white mb-4"
                        style={{
                            fontFamily: "'Urbanist', sans-serif",
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            lineHeight: 1.1,
                            letterSpacing: "-0.04em",
                        }}
                    >
                        Tips & Strategi Digital
                        <br />
                        <span className="text-emerald-500">untuk UMKM Bali</span>
                    </h1>
                    <p
                        className="text-white/35 max-w-xl"
                        style={{ fontSize: "0.95rem", lineHeight: 1.85 }}
                    >
                        Panduan praktis membangun kehadiran online yang efektif. Dari SEO lokal, harga website,
                        hingga strategi digital yang terbukti untuk bisnis di Bali.
                    </p>
                </motion.div>
            </section>

            {/* Articles Grid */}
            <section className="pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogArticles.map((article, i) => (
                        <motion.article
                            key={article.slug}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                        >
                            <Link
                                to={`/blog/${article.slug}`}
                                className="block h-full bg-[#111] hover:bg-[#161616] border border-white/[0.06] hover:border-emerald-500/20 rounded-2xl p-7 transition-all duration-300 group"
                            >
                                {/* Category + read time */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className="text-emerald-500 text-[11px] tracking-[0.15em] uppercase font-medium">
                                        {article.category}
                                    </span>
                                    <span className="text-white/25 text-[11px]">{article.readTime} mnt baca</span>
                                </div>

                                {/* Title */}
                                <h2
                                    className="text-white group-hover:text-emerald-400 transition-colors duration-300 mb-3"
                                    style={{
                                        fontFamily: "'Urbanist', sans-serif",
                                        fontSize: "1.15rem",
                                        lineHeight: 1.35,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {article.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-white/35 text-[0.83rem] leading-relaxed mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                                    <span className="text-white/25 text-[11px]">{formatDate(article.publishDate)}</span>
                                    <span className="text-emerald-500 text-[12px] flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Baca
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center"
                >
                    <p className="text-emerald-400 text-[11px] tracking-[0.2em] uppercase mb-3">BangBisnis</p>
                    <h2
                        className="text-white mb-4"
                        style={{
                            fontFamily: "'Urbanist', sans-serif",
                            fontSize: "clamp(1.5rem, 3vw, 2rem)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Siap bikin website untuk bisnis kamu di Bali?
                    </h2>
                    <p className="text-white/40 text-[0.88rem] mb-8 max-w-md mx-auto leading-relaxed">
                        Konsultasi gratis, tanpa komitmen. Ceritakan bisnis kamu dan kami bantu rancang solusi yang tepat.
                    </p>
                    <motion.a
                        href="https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20ingin%20konsultasi%20jasa%20website%20untuk%20bisnis%20saya%20di%20Bali."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl text-[14px] font-semibold transition-colors duration-200"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Konsultasi via WhatsApp
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </motion.a>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 md:px-12 border-t border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <span
                        className="text-white/20 text-[13px]"
                        style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.02em" }}
                    >
                        BangBisnis
                    </span>
                    <span className="text-white/15 text-[11px] tracking-[0.08em]">
                        Jasa Website Profesional di Bali untuk UMKM
                    </span>
                    <Link
                        to="/"
                        className="text-white/20 text-[11px] tracking-[0.08em] hover:text-white/40 transition-colors"
                    >
                        ← Beranda
                    </Link>
                </div>
            </footer>
        </div>
    );
}
