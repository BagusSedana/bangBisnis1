import { motion } from "motion/react";
import { Check, ArrowRight, MessageCircle, Target, BarChart, MousePointerClick, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export function LandingPage() {
    useEffect(() => {
        document.title = "Jasa Pembuatan Landing Page Profesional di Bali | BangBisnis";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Jasa pembuatan landing page konversi tinggi di Bali. Tingkatkan ROI iklan Meta/TikTok Anda dengan copywriting persuasif dan desain yang memaksa pengunjung beli.");
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = "Jasa pembuatan landing page konversi tinggi di Bali. Tingkatkan ROI iklan Meta/TikTok Anda dengan copywriting persuasif dan desain yang memaksa pengunjung beli.";
            document.head.appendChild(meta);
        }
    }, []);
    const whatsappUrl =
        "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20ingin%20konsultasi%20pembuatan%20Landing%20Page%20untuk%20meningkatkan%20penjualan.";

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
                            <TrendingUp size={14} /> Jasa Pembuatan Website
                        </div>
                        <h1
                            className="text-white mb-6"
                            style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
                        >
                            Bakar Uang Iklan Tapi <br /><span className="italic text-emerald-400">Nggak Ada yang Beli?</span>
                        </h1>
                        <p className="text-white/40 mb-8 max-w-xl text-[1.1rem] leading-relaxed">
                            Mendatangkan ribuan klik dari Meta Ads atau TikTok itu mudah. Masalahnya, jika pengunjung kabur dalam 3 detik pertama karena halaman Anda lambat atau membingungkan, Anda sedang membuang uang. Berhenti mensponsori Mark Zuckerberg secara cuma-cuma.
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
                                <span className="relative z-10 font-bold">Ubah Klik Jadi Pembeli</span>
                                <ArrowRight size={15} className="relative z-10" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                            alt="Landing Page Design"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10"
                        />
                    </motion.div>
                </div>

                {/* Benefits & Marketing */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.03em" }}>Mesin Pencetak ROI Positif</h2>
                        <p className="text-white/50 max-w-2xl mx-auto text-[1.05rem] leading-relaxed">Kami merancang *Landing Page* bukan sekadar agar terlihat cantik, tapi menggunakan struktur psikologi *copywriting* yang terbukti memaksa pengunjung menekan tombol beli.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: "Formula PAS (Pain Agitation Solution)", desc: "Setiap kalimat dilahirkan dengan tujuan. Dari *headline* yang menekan masalah (pain points) pelanggan, mengaduk emosi mereka, lalu menawarkan produk Anda sebagai satu-satunya pahlawan." },
                            { icon: BarChart, title: "Siap Pasang Facebook Pixel & TikTok", desc: "Beriklan tanpa data ibarat setir mobil tutup mata. Landing Page kami dirancang khusus agar Pixel tracking dan API konversi 100% akurat menyuapi algoritma Meta." },
                            { icon: MousePointerClick, title: "Call-to-Action (CTA) Hipnotis", desc: "Kami tidak sekadar menaruh tombol. Tombol Checkout diletakkan secara mikrostatik dengan kontras yang telah lulus uji *heat-map* demi menaikkan CTR hingga lipat tiga." },
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

                {/* Deep-Dive Article Section */}
                <div className="mt-32 pt-20 border-t border-white/[0.06] max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] tracking-[0.15em] uppercase">
                        <BookOpen size={14} /> BangBisnis Insights
                    </div>
                    <h2 className="text-white text-3xl md:text-4xl mb-8 font-['Urbanist'] leading-tight tracking-tight">
                        Anatomi <span className="text-emerald-400 italic">Landing Page</span> Penghasil Konversi Tinggi di 2026
                    </h2>

                    <div className="space-y-6 text-white/50 text-[1.05rem] leading-relaxed font-light">
                        <p>
                            Menguasai Facebook Ads, Instagram Ads, atau Google Ads hanyalah separuh dari pertempuran. Anda bisa mendatangkan 10,000 klik ke website Anda, tapi jika 9,900 orang langsung menekan tombol "Back" (kembali) karena struktur <i>landing page</i> yang berantakan, maka Anda membuang anggaran pemasaran sia-sia.
                        </p>

                        <h3 className="text-white text-2xl font-['Urbanist'] mt-10 mb-4 tracking-tight">Mengapa Orang Beli? (Psikologi Konversi)</h3>
                        <p>
                            <i>Landing Page</i> yang sukses tidak dibuat berdasarkan <i>"feeling"</i> (perasaan) desain yang bagus. Ia diarsiteki berdasarkan psikologi pembelian manusia.
                        </p>
                        <ul className="list-disc pl-5 space-y-3 mt-4 text-white/60 text-[0.95rem]">
                            <li><strong className="text-white/80">3 Detik Pertama (Attention):</strong> <i>Headline</i> (judul utama) harus secara akurat dan agresif menjawab pertanyaan di benak pembeli: "Apa untungnya ini buat saya?". Jika <i>headline</i> Anda hanya berkata "Selamat Datang di Toko Kami", Anda sudah gagal.</li>
                            <li><strong className="text-white/80">Menggaruk Rasa Sakit (Pain Agitation):</strong> Pembeli tidak peduli dengan fitur spesifikasi produk Anda. Mereka peduli pada masalah yang sedang mereka alami. Kami merancang <i>copywriting</i> yang mendemonstrasikan bahwa *Anda mengerti beban mereka*.</li>
                            <li><strong className="text-white/80">Penyajian Solusi & Bukti Sosial:</strong> Setelah mereka setuju bahwa mereka memiliki masalah, barulah kami menyodorkan produk Anda sebagai solusi absolut—didukung oleh testimoni riil (bukan <i>fake reviews</i>) untuk meredam rasa skeptis.</li>
                        </ul>

                        {/* Interactive UI: Animated Funnel */}
                        <div className="my-14 bg-[#0a0f0d] border border-emerald-500/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_-15px_rgba(16,185,129,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-1/2 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen" />

                            <div className="text-center mb-10 relative z-10">
                                <h4 className="text-white text-xl font-['Urbanist'] mb-2">Simulasi Kebocoran Konversi</h4>
                                <p className="text-white/40 text-sm max-w-sm mx-auto">Lihat bagaimana 10,000 klik menghilang karena desain yang buruk vs Arsitektur Landing Page BangBisnis.</p>
                            </div>

                            <div className="flex flex-col gap-3 relative z-10 max-w-md mx-auto">
                                {/* Funnel Step 1 */}
                                <motion.div
                                    className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center justify-between"
                                    initial={{ opacity: 0, y: -20, width: "110%" }}
                                    whileInView={{ opacity: 1, y: 0, width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                            <MousePointerClick size={16} />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-bold">Traffic dari Iklan Masuk</p>
                                            <p className="text-white/40 text-[10px]">Klik dari Meta/TikTok Ads</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white font-bold">10,000</p>
                                        <p className="text-white/40 text-[10px]">Pengunjung</p>
                                    </div>
                                </motion.div>

                                {/* Arrow Down */}
                                <motion.div
                                    className="mx-auto w-0.5 h-6 bg-gradient-to-b from-neutral-800 to-transparent"
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                                />

                                {/* Funnel Step 2 */}
                                <motion.div
                                    className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center justify-between mx-auto w-[90%]"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                                            <TrendingUp size={16} />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-bold">Bertahan &gt; 3 Detik</p>
                                            <p className="text-white/40 text-[10px]">Membaca penawaran Anda</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white font-bold text-orange-400 opacity-50 line-through text-xs mb-0.5">800</p>
                                        <p className="text-white font-bold">4,500</p>
                                    </div>
                                </motion.div>

                                {/* Arrow Down */}
                                <motion.div
                                    className="mx-auto w-0.5 h-6 bg-gradient-to-b from-neutral-800 to-transparent"
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}
                                />

                                {/* Funnel Step 3 */}
                                <motion.div
                                    className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between mx-auto w-[80%] relative overflow-hidden"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1.3 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-emerald-500/20"
                                        initial={{ x: "-100%" }}
                                        whileInView={{ x: "100%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                                    />
                                    <div className="flex items-center gap-3 relative z-10">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                            <Check size={16} />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-bold">Konversi (Membeli)</p>
                                            <p className="text-emerald-400/60 text-[10px] uppercase tracking-wider font-bold">Hasil BangBisnis</p>
                                        </div>
                                    </div>
                                    <div className="text-right flex flex-col items-end relative z-10">
                                        <p className="text-white/40 text-xs line-through mb-0.5">50 (*Web Biasa*)</p>
                                        <motion.p
                                            className="text-emerald-400 font-bold text-lg"
                                            initial={{ scale: 1 }}
                                            whileInView={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 0.5, delay: 1.8 }}
                                        >
                                            1,200
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <h3 className="text-white text-2xl font-['Urbanist'] mt-10 mb-4 tracking-tight">Perang Melawan Kinerja Muat (Loading Speed)</h3>
                        <p>
                            Tahukah Anda bahwa *Bounce Rate* (rasio pengunjung yang langsung kabur) meningkat sebesar 32% setiap penambahan detik saat website *loading*? Pengguna TikTok dan Instagram memiliki rentang perhatian yang sangat pendek.
                        </p>
                        <p>
                            Itulah sebabnya tim BangBisnis tidak menggunakan pembangun halaman (<i>page builder</i>) murahan yang sarat dengan kode sampah. Kami menggunakan teknologi pengembangan web modern, memastikan <i>Landing Page</i> meledak tampil seketika (dibawah 1.5 detik) bahkan dalam koneksi seluler di Bali yang terkadang kurang stabil.
                        </p>
                    </div>
                </div>

                {/* CTA Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 bg-emerald-950/30 border border-emerald-500/20 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20"
                >
                    <div className="absolute top-0 right-10 w-64 h-64 bg-emerald-500/20 blur-[120px] rounded-full mix-blend-screen" />
                    <h2 className="text-white text-3xl md:text-5xl mb-6 relative z-10" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}>Berhenti Membakar <br /><span className="italic text-emerald-400">Budget Iklan!</span></h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto relative z-10 text-[1.1rem]">Jangan biarkan *traffic* maha-mahal yang Anda beli terbuang sia-sia pada halaman yang loyo. Ganti *sales page* Anda sekarang dan lupakan Boncos.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-bold text-[15px] hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] relative z-10">
                        Cetak Untung Dari Iklan <MessageCircle size={20} />
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
                        "serviceType": "Jasa Pembuatan Landing Page",
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
                        "description": "Jasa pembuatan landing page konversi tinggi di Bali untuk memaksimalkan ROI iklan Meta dan TikTok Anda."
                    })
                }}
            />
        </div>
    );
}
