import { motion } from "motion/react";
import { Check, ArrowRight, MessageCircle, Star, Globe, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export function CompanyProfile() {
    useEffect(() => {
        document.title = "Jasa Pembuatan Website Company Profile di Bali | BangBisnis";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Jasa pembuatan website company profile premium di Bali. Tampilkan citra profesional perusahaan Anda untuk memenangkan kepercayaan klien dan investor global.");
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = "Jasa pembuatan website company profile premium di Bali. Tampilkan citra profesional perusahaan Anda untuk memenangkan kepercayaan klien dan investor global.";
            document.head.appendChild(meta);
        }
    }, []);
    const whatsappUrl =
        "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20ingin%20konsultasi%20jasa%20website%20Company%20Profile%20untuk%20bisnis%20saya.";

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link to="/#layanan" className="text-white/60 text-[13px] tracking-[0.06em] hover:text-white transition-colors">
                        ← Kembali ke Layanan
                    </Link>
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 text-white text-[12px] tracking-[0.04em] px-5 py-2.5 rounded-full flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MessageCircle size={14} />
                        Konsultasi Gratis
                    </motion.a>
                </div>
            </nav>

            <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                {/* Service Hero */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] tracking-[0.15em] uppercase">
                            <Globe size={14} /> Jasa Pembuatan Website
                        </div>
                        <h1
                            className="text-white mb-6"
                            style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
                        >
                            Klien Besar Sedang Mencari Anda. <br /><span className="italic text-emerald-400">Apakah Anda Siap Dilihat?</span>
                        </h1>
                        <p className="text-white/40 mb-8 max-w-xl text-[1.1rem] leading-relaxed">
                            Berapa banyak proyek jutaan rupiah yang melayang ke kompetitor hanya karena website perusahaan Anda terlihat "murahan" dan meragukan? Di ranah B2B dan investasi, *first impression* adalah segalanya. Amankan reputasi Anda dengan Company Profile kelas dunia.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-emerald-500 text-white h-14 px-8 rounded-full text-[13px] tracking-[0.02em] flex items-center gap-2 overflow-hidden shadow-lg shadow-emerald-500/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 font-bold">Amankan Citra Bisnis Saya</span>
                                <ArrowRight size={15} className="relative z-10" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                            alt="Company Profile Design"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10"
                        />
                    </motion.div>
                </div>

                {/* Benefits & Marketing */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.03em" }}>Website Adalah <span className="text-emerald-400 italic">"Kantor Digital"</span> Anda</h2>
                        <p className="text-white/50 max-w-2xl mx-auto text-[1.05rem] leading-relaxed">Jika lobi kantor fisik Anda mewah dan rapi, haram hukumnya menelantarkan wajah digital Anda. Kami merancang Company Profile yang memancarkan otoritas dan kepercayaan mutlak.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: ShieldCheck, title: "Kredibilitas Instan (Authority)", desc: "Investor dan klien premium tidak akan *deal* sebelum menginvestigasi rekam jejak Anda. Desain arsitektur informasi kami dirancang untuk membuat mereka bergumam, 'Perusahaan ini sangat bonafid'." },
                            { icon: TrendingUp, title: "Etalase Profesional 24 Jam", desc: "Tim *Sales* Anda butuh istirahat, website Anda tidak. Tampilkan profil direksi, legalitas, hingga mahakarya proyek Anda dalam satu *flow* presentasi yang elegan tak henti." },
                            { icon: Star, title: "Tinggalkan Lawan Jauh di Belakang", desc: "Masih bergantung pada brosur PDF kaku atau sosial media biasa? Raih dominasi absolut di industri Anda dengan standar UI/UX premium yang biasa dipakai korporasi multinasional." },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.04] transition-colors duration-300"
                            >
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                                    <item.icon size={22} className="text-emerald-500" />
                                </div>
                                <h3 className="text-white text-xl mb-3" style={{ fontFamily: "'Urbanist', sans-serif" }}>{item.title}</h3>
                                <p className="text-white/40 text-[0.9rem] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 bg-emerald-950/30 border border-emerald-500/20 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[120px] rounded-full mix-blend-screen" />
                    <h2 className="text-white text-3xl md:text-5xl mb-6 relative z-10" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}>Kesan Pertama <span className="italic text-emerald-400">Menentukan Proyek</span></h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto relative z-10 text-[1.1rem]">Demi menjaga kualitas *craftsmanship* premium, kami hanya menerima klien terbatas setiap bulannya. Amankan slot konsultasi Anda sekarang sebelum kalender kami penuh.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-bold text-[15px] hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] relative z-10">
                        Amankan Citra Bisnis Anda <MessageCircle size={20} />
                    </a>
                </motion.div>
            </div>

            {/* Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Jasa Pembuatan Website Company Profile",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "BangBisnis",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Denpasar",
                                "addressRegion": "Bali",
                                "addressCountry": "ID"
                            }
                        },
                        "areaServed": {
                            "@type": "State",
                            "name": "Bali"
                        },
                        "description": "Jasa pembuatan website company profile premium untuk perusahaan di Bali yang ingin membangun kredibilitas dan memenangkan kepercayaan klien."
                    })
                }}
            />
        </div>
    );
}
