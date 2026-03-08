import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Store, MapPin, ScanHeart, Headphones, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export function WebsiteUMKM() {
    useEffect(() => {
        document.title = "Jasa Website UMKM & Bisnis Lokal di Bali | BangBisnis";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Jasa pembuatan website murah dan profesional untuk UMKM di Bali. Tingkatkan penjualan lokal Anda dengan website yang mudah ditemukan di Google Maps & Pencarian.");
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = "Jasa pembuatan website murah dan profesional untuk UMKM di Bali. Tingkatkan penjualan lokal Anda dengan website yang mudah ditemukan di Google Maps & Pencarian.";
            document.head.appendChild(meta);
        }
    }, []);
    const whatsappUrl =
        "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20punya%20UMKM%20di%20Bali%20dan%20ingin%20konsultasi%20pembuatan%20website.";

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
                            <Store size={14} /> Jasa Pembuatan Website
                        </div>
                        <h1
                            className="text-white mb-6"
                            style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
                        >
                            Toko Sebelah Lebih Ramai Karena Mereka <br /><span className="italic text-emerald-400">Ada di Google.</span>
                        </h1>
                        <p className="text-white/40 mb-8 max-w-xl text-[1.1rem] leading-relaxed">
                            Fakta pahit: Di Bali, sebagus apapun produk Anda, turis dan warga lokal akan pergi ke kompetitor yang muncul pertama di Google Maps. Jangan biarkan omset bulanan Anda direbut hanya karena bisnis Anda "gaib" di internet. Bangun kehadiran digital yang solid sekarang.
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
                                <span className="relative z-10 font-bold">Ambil Alih Pasar Lokal</span>
                                <ArrowRight size={15} className="relative z-10" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                            alt="UMKM Bali Website Optimization"
                            loading="lazy"
                            className="w-full aspect-[4/3] object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10"
                        />
                    </motion.div>
                </div>

                {/* Benefits & Marketing */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.03em" }}>Saatnya Usaha Kecil <span className="text-emerald-400 italic">Tampil Raksasa</span></h2>
                        <p className="text-white/50 max-w-2xl mx-auto text-[1.05rem] leading-relaxed">Lupakan bayar influencer mahal. Kami merangkai website kasir dan portofolio cerdas yang menjaring pelanggan sekitar lokasi Anda secara otomatis 24 jam sehari.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: MapPin, title: "Merajai Pencarian Lokal", desc: "Punya Laundry di Canggu atau rental motor di Seminyak? Kami tanamkan Local SEO brutal agar turis bule dan warga sekitar melihat bisnis Anda di urutan pertama pencarian Google." },
                            { icon: ScanHeart, title: "Katalog & Menu Tanpa Ribet", desc: "Berhenti kirim menu PDF buram di WA! Kami buatkan katalog produk digital elegan. Klien tinggal sentuh layar untuk melihat harga, dan langsung terhubung ke kasir Anda." },
                            { icon: Headphones, title: "Anti Gaptek, Kami Kawal Penuh", desc: "Takut website rusak? Bingung pakenya? Santai. Paket UMKM kami sudah termasuk pendampingan eksklusif. Anda fokus urus pelanggan, biar kami yang urus teknisnya." },
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
                        Panduan Transformasi Digital UMKM Bali: Dari Offline ke <span className="text-emerald-400 italic">Dominasi Google Maps</span>
                    </h2>

                    <div className="space-y-6 text-white/50 text-[1.05rem] leading-relaxed font-light">
                        <p>
                            Banyak pelaku UMKM di Bali yang frustrasi; produk mereka bagus, harga kompetitif, restoran mereka memiliki resep rahasia keluarga, tetapi toko tetap sepi. Sementara itu, kafe kompetitor yang rasanya biasa saja justru antre panjang karena diulas oleh bule di Google Maps. Inilah kenyataan bisnis modern: <strong className="text-white/80 font-medium">Kualitas produk Anda tidak penting jika tidak ada yang tahu Anda ada.</strong>
                        </p>

                        <h3 className="text-white text-2xl font-['Urbanist'] mt-10 mb-4 tracking-tight">Menggeser Paradigma "Sosial Media Saja Cukup"</h3>
                        <p>
                            Instagram dan TikTok memang bagus untuk menjaring <i>brand awareness</i>. Akan tetapi, ketika seorang turis sedang lapar di Canggu pada pukul 7 malam, mereka tidak akan membuka TikTok. Mereka membuka Google dan mengetik: <i>"Best local warung near me"</i> atau <i>"Seafood in Jimbaran"</i>.
                        </p>
                        <p>
                            Platform sosial media bersifat impulsif (orang sekadar melihat-lihat). Sedangkan <strong>Mesin Pencari (Google)</strong> berorientasi pada intensi (orang memang sedang mencari solusi/ingin merealisasikan pembelian). Jika UMKM Anda hanya hidup di Instagram dan tidak memiliki website yang terindeks Google khusus lokal, Anda kehilangan 80% calon pelanggan *high-intent* ini.
                        </p>

                        <h3 className="text-white text-2xl font-['Urbanist'] mt-10 mb-4 tracking-tight">Senjata Rahasia Kami: Local SEO</h3>
                        <p>
                            Membangun website untuk UMKM bukanlah sekadar menaruh foto produk di internet. BangBisnis menggunakan strategi khusus:
                        </p>
                        <ul className="list-disc pl-5 space-y-3 mt-4 text-white/60 text-[0.95rem]">
                            <li><strong className="text-white/80">Optimasi Kata Kunci Hiper-Lokal:</strong> Kami menargetkan kata kunci mutlak seperti "Sewa Motor Murah Seminyak" bukan hanya "Sewa Motor", agar Anda tidak bersaing dengan raksasa nasional, melainkan merajai kota Anda sendiri.</li>
                            <li><strong className="text-white/80">Integrasi Google Business Profile:</strong> Kami mengawinkan website Anda dengan titik Google Maps. Setiap ulasan baru, foto produk, dan artikel yang kita masukkan akan mengangkat ranking peta Anda naik di atas kompetitor tetangga.</li>
                            <li><strong className="text-white/80">Tampilan Mobile-First:</strong> 92% turis di Bali mencari makan dan layanan lewat layar HP sambil berjalan atau di atas motor. Website ringan yang pas di genggaman, dengan tombol klik-ke-Gojek atau WhatsApp adalah keharusan.</li>
                        </ul>
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
                    <h2 className="text-white text-3xl md:text-5xl mb-6 relative z-10" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.03em" }}>Jadilah Pilihan Pertama di <span className="italic text-emerald-400">Kota Anda</span></h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto relative z-10 text-[1.1rem] leading-relaxed">Paket starter web UMKM kami ciptakan sangat terjangkau karena misi kami adalah melihat bisnis lokal Bali melompat berkelas global. Buka pintu kasir Anda sekarang.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-bold text-[15px] hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] relative z-10">
                        Kembangkan Usaha Saya <MessageCircle size={20} />
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
                        "serviceType": "Jasa Pembuatan Website UMKM",
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
                        "description": "Jasa pembuatan website murah dan profesional khusus untuk UMKM dan bisnis lokal di Bali agar mudah ditemukan pelanggan di Google."
                    })
                }}
            />
        </div>
    );
}
