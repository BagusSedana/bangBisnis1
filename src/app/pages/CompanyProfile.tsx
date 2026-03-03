import { motion } from "motion/react";
import { Check, ArrowRight, MessageCircle, Star, Globe, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

export function CompanyProfile() {
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
                            Klien Besar Anda Sedang Mencari di Google. <span className="italic text-white/40">Apakah Website Anda Siap Dilihat?</span>
                        </h1>
                        <p className="text-white/40 mb-8 max-w-xl text-[1.05rem] leading-relaxed">
                            Fakta pahitnya: Kualitas bisnis Anda sering dinilai dari sebagus apa website Anda. Jangan sampai Anda kehilangan proyek jutaan Rupiah hanya karena website perusahaan terlihat "murahan" atau ketinggalan zaman.
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
                            alt="Company Profile Website Design"
                            className="w-full aspect-[4/3] object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10"
                        />
                    </motion.div>
                </div>

                {/* Benefits & Marketing */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.02em" }}>Website Adalah "Kantor Digital" Anda</h2>
                        <p className="text-white/40 max-w-2xl mx-auto">Jika kantor fisik Anda lux dan rapi, mengapa kantor digital Anda berantakan? Ini yang Anda dapatkan dengan investasi Company Profile di BangBisnis.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: ShieldCheck, title: "Kredibilitas Instan (Authority)", desc: "Investor dan klien premium tidak akan deal sebelum mengecek portofolio online Anda. Desain website kami dirancang untuk membuat mereka berkata 'Wow, perusahaan ini bonafid'." },
                            { icon: TrendingUp, title: "Etalase Profesional 24 Jam", desc: "Sales Anda butuh tidur, website Anda tidak. Tampilkan profil perusahaan, sejarah, legalitas, dan pencapaian Anda dalam satu halaman elegan yang bisa diakses kapan saja." },
                            { icon: Star, title: "Dominasi Kompetitor Lokal", desc: "Masih pakai blog gratisan? Atau sekadar linktree? Tinggalkan kompetitor Anda jauh di belakang dengan UI/UX premium kelas korporat global." },
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
                    className="mt-32 bg-emerald-950/30 border border-emerald-500/20 rounded-[2.5rem] p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen" />
                    <h2 className="text-white text-3xl md:text-4xl mb-6 relative z-10" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.02em" }}>Jangan Biarkan First Impression Menghancurkan Deal Anda</h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">Kami hanya menerima slot proyek terbatas setiap bulannya untuk menjaga kualitas premium. Amankan jadwal konsultasi Anda sekarang sebelum kompetitor mendahului.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-colors shadow-xl shadow-emerald-500/20 relative z-10">
                        Konsultasi & Minta Penawaran Harga <MessageCircle size={18} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
