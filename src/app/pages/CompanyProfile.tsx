import { motion } from "motion/react";
import { Check, ArrowRight, MessageCircle, Star, Globe, TrendingUp, ShieldCheck, BookOpen } from "lucide-react";
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
                    {/* Deep-Dive Article Section */}
                    <div className="mt-32 pt-20 border-t border-white/[0.06] max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] tracking-[0.15em] uppercase">
                            <BookOpen size={14} /> BangBisnis Insights
                        </div>
                        <h2 className="text-white text-3xl md:text-4xl mb-8 font-['Urbanist'] leading-tight tracking-tight">
                            Membongkar Rahasia <span className="text-emerald-400 italic">Company Profile</span> yang Menghasilkan Kontrak Miliaran
                        </h2>

                        <div className="space-y-6 text-white/50 text-[1.05rem] leading-relaxed font-light">
                            <p>
                                Dalam dunia B2B (Business-to-Business) di Bali, tender proyek korporat atau investasi skala besar seringkali diputuskan bukan hanya dari kualitas produk, melainkan dari <strong className="text-white/80 font-medium">seberapa besar rasa aman (trust)</strong> yang bisa diberikan oleh vendor.
                            </p>
                            <p>
                                Banyak perusahaan konstruksi, firma hukum, atau distributor besar di Denpasar yang masih mengirimkan <i>Company Profile</i> dalam bentuk PDF sebesar 25MB via WhatsApp. Masalahnya? Proyek-proyek bernilai tinggi digawangi oleh eksekutif yang sibuk. Mereka tidak punya waktu untuk mengunduh dan membaca brosur kaku di layar ponsel mereka.
                            </p>

                            <h3 className="text-white text-2xl font-['Urbanist'] mt-10 mb-4 tracking-tight">Anatomi Kesan Pertama Digital</h3>
                            <p>
                                Website <i>Company Profile</i> yang dirancang oleh BangBisnis bertindak sebagai lobi kantor bintang lima di dunia maya. Kami menerapkan tiga elemen krusial:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 mt-4 text-white/60 text-[0.95rem]">
                                <li><strong className="text-white/80">Struktur Bukti Sosial (Social Proof Architecture):</strong> Kami tidak sekadar menaruh logo klien. Kami merancang desain tata letak yang memaksa mata pengunjung melihat langsung ke portofolio mahakarya Anda dan testimoni tokoh-tokoh kunci.</li>
                                <li><strong className="text-white/80">Navigasi Tanpa Friksi:</strong> Klien potensial bisa melihat legalitas perusahaan, struktur tim direksi, dan mengontak *Project Manager* Anda dalam 2 kali klik. Tanpa *loading* panjang.</li>
                                <li><strong className="text-white/80">Desain Monolitik & Kredibel:</strong> Alih-alih menggunakan template ceria hasil *drag-and-drop* murahan, kami menggunakan hierarki tipografi tegas, *white-space* yang bernapas, dan palet warna korporat yang memancarkan dominasi.</li>
                            </ul>

                            {/* Interactive UI: Animated ROI Chart */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="my-12 bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full mix-blend-screen transition-all duration-700 group-hover:bg-emerald-500/10" />

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 relative z-10">
                                    <div>
                                        <h4 className="text-white text-lg font-['Urbanist'] mb-1">Trajektori Kepercayaan Klien (Trust ROI)</h4>
                                        <p className="text-white/40 text-sm">Presentasi PDF vs Website Premium Interaktif</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                        <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Tingkat Penutupan Deal +300%</p>
                                    </div>
                                </div>

                                {/* Graph Area */}
                                <div className="relative h-48 md:h-64 w-full border-b border-l border-white/10 pt-4 pb-0 pl-0 mt-4 flex items-end">
                                    {/* Y-Axis Labels */}
                                    <div className="absolute -left-8 top-0 bottom-0 flex flex-col justify-between text-[10px] text-white/30 h-full py-2">
                                        <span>Tinggi</span>
                                        <span>Sedang</span>
                                        <span>Rendah</span>
                                    </div>

                                    {/* SVG Drawing Area */}
                                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="roiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                                            </linearGradient>
                                            <linearGradient id="pdfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#525252" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#262626" stopOpacity="0.8" />
                                            </linearGradient>
                                        </defs>

                                        {/* Grid Lines */}
                                        <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />
                                        <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />
                                        <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />

                                        {/* Web Premium Line (Animated) */}
                                        <motion.path
                                            d="M0,90 C30,85 50,40 100,10"
                                            fill="none"
                                            stroke="url(#roiGradient)"
                                            strokeWidth="3"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                        />

                                        {/* Status Quo PDF Line (Static/Slightly animated) */}
                                        <motion.path
                                            d="M0,85 C40,85 70,80 100,75"
                                            fill="none"
                                            stroke="url(#pdfGradient)"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                                        />

                                        {/* Data Points */}
                                        <motion.circle
                                            cx="100" cy="10" r="2.5" fill="#10b981"
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 1.7 }}
                                        />
                                    </svg>

                                    {/* X-Axis Labels */}
                                    <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-white/30 px-2">
                                        <span>Kirim Profil</span>
                                        <span>Proses Review</span>
                                        <span>Keputusan Deal</span>
                                    </div>
                                </div>
                                <div className="mt-10 flex gap-6 text-xs text-white/40 justify-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500" /> Web BangBisnis
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-neutral-600 border border-neutral-500" /> Brosur PDF
                                    </div>
                                </div>
                            </motion.div>

                            <h3 className="text-white text-2xl font-['Urbanist'] mt-10 mb-4 tracking-tight">Biaya vs Investasi Reputasi</h3>
                            <p>
                                Menghemat beberapa juta rupiah untuk menyewa "tukang ketik web" pemula demi membuat <i>Company Profile</i> adalah keputusan bunuh diri secara bisnis. Mengapa? Karena ketika klien korporat Anda membandingkan presentasi Anda dengan kompetitor yang memiliki website setara standar luar negeri, Anda sudah kalah sebelum meja negosiasi dibuka.
                            </p>
                            <p>
                                Kehadiran online yang premium bukanlah pengeluaran operasional; ia adalah aset tenaga *sales* yang tidak pernah tidur, tidak pernah sakit, dan tidak pernah gagal mempresentasikan wajah terbaik dari perusahaan Anda.
                            </p>
                        </div>
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
