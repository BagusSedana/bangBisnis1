import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowLeft, ExternalLink, ChevronRight, CheckCircle2 } from "lucide-react";
import { portfolioProjects } from "../data/portfolioData";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WarungBambuPortfolio } from "./portfolios/WarungBambu";
import { VillaSerenityPortfolio } from "./portfolios/VillaSerenity";
import { TravelJimbPortfolio } from "./portfolios/TravelJimb";

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
                <Navbar />
                <h1 className="text-3xl font-urbanist mb-4 pt-20">Proyek tidak ditemukan</h1>
                <Link to="/portofolio" className="text-emerald-500 hover:text-emerald-400 font-medium flex items-center gap-2">
                    <ArrowLeft size={16} /> Kembali ke Portofolio
                </Link>
            </div>
        );
    }

    // Process content to make it look much better with custom styles
    // Here we're mainly relying on typography classes, but we could parse HTML if needed

    return (
        <div className="w-full min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-emerald-500/30 selection:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar />

            {/* Premium Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-full md:w-[600px] h-[600px] opacity-20 pointer-events-none" style={{
                    background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
                    transform: 'translate(20%, -20%)',
                    filter: 'blur(100px)'
                }} />

                <div className="flex items-center gap-2 text-white/40 text-[12px] uppercase tracking-[0.1em] font-medium mb-10 z-10 relative">
                    <Link to="/portofolio" className="hover:text-emerald-400 transition-colors">Portofolio</Link>
                    <ChevronRight size={12} />
                    <span className="text-white/80">{project.category}</span>
                </div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 relative z-10">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-[5rem] mb-8 font-urbanist tracking-[-0.03em] leading-[1.05]"
                        >
                            {project.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-2xl"
                        >
                            {project.desc}
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 backdrop-blur-md self-start"
                    >
                        <h3 className="text-white/40 text-[11px] uppercase tracking-[0.15em] mb-6">Ringkasan Proyek</h3>
                        <div className="space-y-6">
                            <div>
                                <span className="block text-white/40 text-[12px] mb-1">Klien / Bisnis</span>
                                <span className="block text-lg font-urbanist">{project.title}</span>
                            </div>
                            <div>
                                <span className="block text-white/40 text-[12px] mb-1">Lokasi</span>
                                <span className="block text-lg font-urbanist">{project.location}</span>
                            </div>
                            <div>
                                <span className="block text-white/40 text-[12px] mb-1">Pencapaian Utama</span>
                                <span className="inline-flex items-center gap-2 text-lg font-urbanist font-medium" style={{ color: project.color }}>
                                    <CheckCircle2 size={18} />
                                    {project.result}
                                </span>
                            </div>
                            {project.link && (
                                <div className="pt-4 mt-4 border-t border-white/5">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                                        <span className="text-[14px] text-white/70 group-hover:text-white transition-colors">Lihat Website Live</span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <ExternalLink size={14} />
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Showcase Image */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24"
            >
                <div className="w-full rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl relative">
                    <img src={project.img} alt={`Desain website ${project.title}`} className="w-full h-auto object-cover" />
                </div>
            </motion.section>

            {/* Case Study Content */}
            <section className="px-6 md:px-12 max-w-[800px] mx-auto pb-32">
                <div className="prose prose-invert prose-emerald md:prose-lg max-w-none 
                    prose-h2:font-urbanist prose-h2:text-4xl prose-h2:-tracking-[0.03em] prose-h2:text-white prose-h2:mb-8 prose-h2:mt-16
                    prose-p:text-white/60 prose-p:leading-[1.8] prose-p:font-light prose-p:mb-8
                    prose-strong:text-white prose-strong:font-semibold
                    prose-a:text-emerald-500 prose-a:no-underline hover:prose-a:text-emerald-400">

                    {project.slug === "website-restoran-warung-bambu" ? (
                        <WarungBambuPortfolio />
                    ) : project.slug === "website-villa-serenity-ubud" ? (
                        <VillaSerenityPortfolio />
                    ) : project.slug === "website-travel-tour-traveljimb" ? (
                        <TravelJimbPortfolio />
                    ) : project.content ? (
                        <div dangerouslySetInnerHTML={{ __html: project.content }} />
                    ) : (
                        <p>Detail studi kasus untuk proyek ini sedang dalam tahap dokumentasi. Silakan hubungi kami untuk informasi lebih lanjut mengenai proses pembuatan website ini.</p>
                    )}
                </div>
            </section>

            {/* CTA specific to portfolio */}
            <section className="border-t border-white/[0.04] py-32 bg-[#020202] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

                <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
                    <span className="text-emerald-500 font-medium text-[13px] tracking-[0.1em] uppercase mb-4 block">Siap Mulai?</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-urbanist tracking-tight mb-8 leading-[1.1]">
                        Ingin hasil yang sama untuk <span className="italic text-white/50">bisnis Anda?</span>
                    </h2>
                    <p className="text-white/50 text-lg mb-12 font-light">
                        Setiap bisnis memiliki tantangan unik. Mari diskusikan bagaimana website profesional dapat membantu meningkatkan penjualan dan kredibilitas bisnis Anda di Bali.
                    </p>
                    <a href="https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20tertarik%20membuat%20website%20seperti%20project%20portofolio." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#0a0a0a] px-10 py-5 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                        <MessageCircle size={20} /> Konsultasi Gratis via WhatsApp
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
