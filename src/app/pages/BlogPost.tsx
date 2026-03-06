import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
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

export function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const article = blogArticles.find((a) => a.slug === slug);

    useEffect(() => {
        if (!article) {
            navigate("/blog", { replace: true });
            return;
        }
        document.title = article.metaTitle;
        let meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute("content", article.metaDescription);
        }

        // Add BlogPosting structured data
        const existingScript = document.getElementById("blog-post-schema");
        if (existingScript) existingScript.remove();

        const script = document.createElement("script");
        script.id = "blog-post-schema";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.metaDescription,
            author: {
                "@type": "Organization",
                name: "BangBisnis",
                url: "https://bangbisnis.id",
            },
            publisher: {
                "@type": "Organization",
                name: "BangBisnis",
                url: "https://bangbisnis.id",
            },
            datePublished: article.publishDate,
            dateModified: article.publishDate,
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://bangbisnis.id/blog/${article.slug}`,
            },
        });
        document.head.appendChild(script);

        return () => {
            const s = document.getElementById("blog-post-schema");
            if (s) s.remove();
        };
    }, [article, navigate]);

    if (!article) return null;

    const otherArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 2);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="text-white/40 text-[12px] tracking-[0.06em] hover:text-white transition-colors"
                        >
                            Beranda
                        </Link>
                        <span className="text-white/20 text-[12px]">/</span>
                        <Link
                            to="/blog"
                            className="text-white/40 text-[12px] tracking-[0.06em] hover:text-white transition-colors"
                        >
                            Blog
                        </Link>
                        <span className="text-white/20 text-[12px]">/</span>
                        <span className="text-white/60 text-[12px] tracking-[0.06em] truncate max-w-[180px] md:max-w-xs">
                            {article.title}
                        </span>
                    </div>
                    <motion.a
                        href="https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20ingin%20konsultasi%20jasa%20website."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 text-white text-[12px] tracking-[0.04em] px-5 py-2.5 rounded-full hidden md:flex items-center gap-2"
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

            {/* Article */}
            <article className="pt-28 pb-20 max-w-[760px] mx-auto px-6 md:px-8">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-emerald-500 text-[11px] tracking-[0.15em] uppercase font-medium">
                            {article.category}
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="text-white/30 text-[11px]">{article.readTime} menit baca</span>
                        <span className="text-white/20">·</span>
                        <span className="text-white/30 text-[11px]">{formatDate(article.publishDate)}</span>
                    </div>

                    <h1
                        className="text-white mb-6"
                        style={{
                            fontFamily: "'Urbanist', sans-serif",
                            fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        {article.title}
                    </h1>

                    <p
                        className="text-white/40 text-[1rem] leading-relaxed border-l-2 border-emerald-500/40 pl-5"
                    >
                        {article.excerpt}
                    </p>
                </motion.header>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-12" />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* CTA after article */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center"
                >
                    <p className="text-emerald-400 text-[11px] tracking-[0.2em] uppercase mb-3">BangBisnis</p>
                    <h2
                        className="text-white mb-3"
                        style={{
                            fontFamily: "'Urbanist', sans-serif",
                            fontSize: "1.4rem",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Siap bikin website untuk bisnis kamu di Bali?
                    </h2>
                    <p className="text-white/40 text-[0.85rem] mb-6 max-w-sm mx-auto leading-relaxed">
                        Konsultasi gratis, tanpa komitmen. Selesai 7–14 hari.
                    </p>
                    <motion.a
                        href="https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20ingin%20konsultasi%20jasa%20website%20untuk%20bisnis%20saya%20di%20Bali."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-xl text-[13px] font-semibold transition-colors duration-200"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Konsultasi Sekarang — Gratis
                    </motion.a>
                </motion.div>
            </article>

            {/* Related Articles */}
            {otherArticles.length > 0 && (
                <section className="pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                    <div className="h-px bg-white/[0.06] mb-12" />
                    <h2
                        className="text-white mb-8"
                        style={{
                            fontFamily: "'Urbanist', sans-serif",
                            fontSize: "1.3rem",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Artikel Lainnya
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {otherArticles.map((other) => (
                            <Link
                                key={other.slug}
                                to={`/blog/${other.slug}`}
                                className="block bg-[#111] hover:bg-[#161616] border border-white/[0.06] hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 group"
                            >
                                <span className="text-emerald-500 text-[10px] tracking-[0.15em] uppercase font-medium">
                                    {other.category}
                                </span>
                                <h3
                                    className="text-white group-hover:text-emerald-400 transition-colors duration-300 mt-2 mb-2"
                                    style={{
                                        fontFamily: "'Urbanist', sans-serif",
                                        fontSize: "1rem",
                                        lineHeight: 1.4,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {other.title}
                                </h3>
                                <p className="text-white/30 text-[0.8rem] leading-relaxed line-clamp-2">
                                    {other.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

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
                        to="/blog"
                        className="text-white/20 text-[11px] tracking-[0.08em] hover:text-white/40 transition-colors"
                    >
                        ← Semua Artikel
                    </Link>
                </div>
            </footer>

            {/* Blog content styles */}
            <style>{`
        .blog-content p { color: rgba(255,255,255,0.5); font-size: 0.95rem; line-height: 1.9; margin-bottom: 1.4rem; }
        .blog-content h2 { color: rgba(255,255,255,0.9); font-family: 'Urbanist', sans-serif; font-size: 1.5rem; font-weight: 700; letter-spacing: -0.03em; margin-top: 2.5rem; margin-bottom: 1rem; }
        .blog-content h3 { color: rgba(255,255,255,0.75); font-family: 'Urbanist', sans-serif; font-size: 1.1rem; font-weight: 600; letter-spacing: -0.02em; margin-top: 2rem; margin-bottom: 0.7rem; }
        .blog-content ul { margin-bottom: 1.4rem; padding-left: 0; list-style: none; }
        .blog-content ul li { color: rgba(255,255,255,0.5); font-size: 0.95rem; line-height: 1.8; padding-left: 1.2rem; position: relative; margin-bottom: 0.5rem; }
        .blog-content ul li::before { content: '—'; position: absolute; left: 0; color: #10b981; }
        .blog-content strong { color: rgba(255,255,255,0.8); font-weight: 600; }
        .blog-content em { color: rgba(255,255,255,0.6); font-style: italic; }
        .blog-content code { background: rgba(255,255,255,0.06); color: #10b981; padding: 0.1em 0.4em; border-radius: 4px; font-size: 0.88em; }
        .blog-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.4rem; border-radius: 10px; overflow: hidden; }
        .blog-content thead { background: rgba(255,255,255,0.04); }
        .blog-content th { color: rgba(255,255,255,0.6); font-size: 0.82rem; font-weight: 600; text-align: left; padding: 0.75rem 1rem; letter-spacing: 0.05em; text-transform: uppercase; }
        .blog-content td { color: rgba(255,255,255,0.45); font-size: 0.88rem; padding: 0.75rem 1rem; border-top: 1px solid rgba(255,255,255,0.05); }
        .blog-content tr:hover td { background: rgba(255,255,255,0.02); }
      `}</style>
        </div>
    );
}
