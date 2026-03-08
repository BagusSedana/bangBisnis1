import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Check, Target, Building } from "lucide-react";

export function Denpasar() {
    useEffect(() => {
        document.title = "Jasa Pembuatan Website Denpasar | Spesialis Retail & Korporat";
        const metaDesc = document.querySelector('meta[name="description"]');
        const descText = "Jasa pembuatan website profesional di Denpasar. Kami merancang website khusus untuk toko retail, perkantoran, dan B2B yang mendominasi pencarian lokal Google.";
        if (metaDesc) {
            metaDesc.setAttribute("content", descText);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = descText;
            document.head.appendChild(meta);
        }
    }, []);

    const whatsappUrl = "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20butuh%20website%20untuk%20perusahaan%2Ftoko%20saya%20di%20Denpasar.";

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link to="/" className="text-white/60 text-[13px] tracking-[0.06em] hover:text-white transition-colors">
                        ← Kembali ke Beranda
                    </Link>
                    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white text-[12px] tracking-[0.04em] px-5 py-2.5 rounded-full flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <MessageCircle size={14} /> Konsultasi Gratis
                    </motion.a>
                </div>
            </nav>

            {/* Denpasar Hero: Focus on Corporate & Competition */}
            <section className="pt-36 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 mb-6">
                            <Building size={16} className="text-emerald-500" />
                            <span className="text-emerald-500 text-[11px] tracking-[0.2em] uppercase font-bold">
                                Khusus Eksekutif & Pemilik Usaha Denpasar
                            </span>
                        </div>
                        <h1 className="text-white mb-6" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
                            Denpasar Makin Padat. <span className="italic text-emerald-400">Pastikan Bisnis Anda yang Paling Terlihat.</span>
                        </h1>
                        <p className="text-white/50 mb-8 max-w-xl text-[1.05rem]" style={{ lineHeight: 1.85 }}>
                            Sebagai jantung ekonomi Bali, ratusan toko retail, distributor, dan perkantoran berebut klien di Denpasar. Kami membangun website company profile dan e-katalog yang dirancang khusus memenangkan persaingan lokal di Teuku Umar, Sudirman, hingga Gatsu.
                        </p>
                        <div className="flex gap-4">
                            <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group relative bg-emerald-500 text-white h-14 px-8 rounded-full text-[13px] tracking-[0.02em] font-medium flex items-center gap-2" whileHover={{ scale: 1.05, backgroundColor: "#059669" }} whileTap={{ scale: 0.95 }}>
                                Dominasi Denpasar Sekarang <ArrowRight size={15} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pain Point for Denpasar */}
            <section className="py-20 bg-[#111] border-y border-white/[0.05]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-white text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                        Masih Simpan Katalog di PDF? <span className="text-emerald-500 italic">Itu Kuno.</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-[1.05rem] leading-relaxed mb-12">
                        Pembeli B2B, kontraktor, dan warga Denpasar tidak mau repot mengunduh file PDF yang berat. Mereka ingin membuka link website di HP, melihat harga, dan langsung menekan tombol WhatsApp.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            { title: "Katalog Selalu Update", desc: "Tidak perlu cetak ulang brosur setiap kali harga barang/jasa naik. Ubah langsung di website." },
                            { title: "Ditemukan di Google Maps", desc: "Kami bantu sinkronisasikan website Anda dengan peta lokal agar muncul teratas di pencarian 'Near Me'." },
                            { title: "Tampilan Elegan Korporat", desc: "Tingkatkan *trust issue* klien pengadaan barang dengan desain website kelas enterprise." }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-2xl">
                                <h3 className="text-emerald-400 font-bold mb-3">{item.title}</h3>
                                <p className="text-white/50 text-[0.95rem]">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="text-white text-4xl mb-6" style={{ fontFamily: "'Urbanist', sans-serif" }}>Siap Tinggalkan Kompetitor Anda?</h2>
                    <p className="text-white/40 mb-10">Jadwalkan konsultasi dengan spesialis web developer kami di Denpasar.</p>
                    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex bg-white text-black font-bold px-10 py-4 rounded-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Konsultasi Tatap Muka / Online
                    </motion.a>
                </div>
            </section>
        </div>
    );
}
