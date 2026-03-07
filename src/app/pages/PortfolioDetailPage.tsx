import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { portfolioProjects } from "../data/portfolioData";

export function PortfolioDetailPage() {
    const { slug } = useParams();
    const project = portfolioProjects.find(p => p.slug === slug);

    useEffect(() => {
        if (project) {
            document.title = project.metaTitle || `${project.title} - Portofolio Jasa Website Bali`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", project.metaDesc || project.desc);
            } else {
                const meta = document.createElement("meta");
                meta.name = "description";
                meta.content = project.metaDesc || project.desc;
                document.head.appendChild(meta);
            }
        }
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white font-inter">
                <h1 className="text-3xl font-urbanist mb-4">Proyek tidak ditemukan</h1>
                <Link to="/portofolio" className="text-emerald-500 hover:text-emerald-400">
                    Kembali ke Portofolio
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Navbar Simple */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link to="/portofolio" className="text-white/60 text-[13px] tracking-[0.06em] hover:text-white transition-colors flex items-center gap-2">
                        <ArrowLeft size={14} /> Kembali
                    </Link>
                </div>
            </nav>

            <article className="pt-32 pb-24 px-6 md:px-12 max-w-[900px] mx-auto text-white">
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[11px] font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">
                            {project.category}
                        </span>
                        <span className="text-white/40 text-[12px] tracking-[0.05em] uppercase">
                            {project.location}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-urbanist tracking-tight leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                        {project.desc}
                    </p>
                </header>

                <div className="aspect-video w-full rounded-3xl overflow-hidden mb-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />

                    <div className="absolute bottom-6 left-6 z-20">
                        <span className="text-sm font-urbanist font-medium" style={{ color: project.color }}>
                            Hasil: {project.result}
                        </span>
                    </div>
                </div>

                <div className="prose prose-invert prose-emerald max-w-none 
                    prose-h2:font-urbanist prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:-tracking-[0.02em]
                    prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-[1.05rem]">
                    {project.content ? (
                        <div dangerouslySetInnerHTML={{ __html: project.content }} />
                    ) : (
                        <p>Detail proyek sedang diperbarui.</p>
                    )}
                </div>

                {project.link && (
                    <div className="mt-12">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors font-medium text-sm">
                            Kunjungi Website Live <ArrowLeft size={14} className="rotate-135" />
                        </a>
                    </div>
                )}

                <hr className="border-white/10 my-16" />

                <div className="text-center pb-10">
                    <h2 className="text-2xl font-urbanist mb-4">Tertarik dengan hasil seperti ini?</h2>
                    <p className="text-white/50 mb-8">Konsultasikan kebutuhan bisnis Anda. Gratis, tanpa biaya tersembunyi.</p>
                    <a href="https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20tertarik%20dengan%20jasa%20website%20seperti%20project%20portofolio." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                        <MessageCircle size={18} /> Hubungi via WhatsApp
                    </a>
                </div>
            </article>
        </div>
    );
}
