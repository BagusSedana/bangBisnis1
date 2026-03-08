import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Leaf, Globe, Palette } from "lucide-react";

export function Gianyar() {
    useEffect(() => {
        document.title = "Jasa Website Gianyar & Ubud | Kriya, Seni, Wellness, Ekspor";
        const metaDesc = document.querySelector('meta[name="description"]');
        const descText = "Jasa buat website galeri seni, kriya perak, dan retreat yoga di Gianyar/Ubud. Jual karya Anda ke kolektor internasional melalui e-commerce profesional.";
        if (metaDesc) {
            metaDesc.setAttribute("content", descText);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = descText;
            document.head.appendChild(meta);
        }
    }, []);

    const whatsappUrl = "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20butuh%20website%20untuk%20galeri%2Fbisnis%20saya%20di%20Gianyar.";

    return (
        <div className="w-full min-h-screen bg-[#FDFBF7]" style={{ fontFamily: "'Inter', sans-serif" }}>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#E6E2D8]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link to="/" className="text-[#887860] text-[13px] tracking-[0.06em] hover:text-[#504535] transition-colors">
                        ← Beranda
                    </Link>
                    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#607D67] text-white text-[12px] tracking-[0.04em] px-5 py-2.5 rounded-full flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <MessageCircle size={14} /> Kirim Pesan
                    </motion.a>
                </div>
            </nav>

            <section className="pt-36 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="bg-[#EBE7DF] text-[#607D67] px-4 py-1.5 rounded-sm text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                        <Leaf size={14} /> Gianyar, Ubud, Celuk
                    </div>

                    <h1 className="text-[#3A3834] mb-8 font-serif italic text-4xl md:text-6xl font-light leading-snug tracking-tight">
                        Pamerkan  Karya Seni & Spiritualitas Anda ke <span className="text-[#607D67] font-semibold">Seluruh Dunia.</span>
                    </h1>

                    <p className="text-[#665D4F] text-lg md:text-xl mb-12 leading-relaxed max-w-2xl font-light">
                        Gianyar adalah jantung budaya Bali. Jangan biarkan kerajinan perak, patung kayu, atau program wellness Anda hanya tertahan di pasar seni fisik. Jangkau kolektor dan pecinta yoga internasional lewat galeri digital premium.
                    </p>

                    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#3A3834] text-[#FDFBF7] px-8 py-4 text-sm font-medium tracking-wide uppercase transition-colors" whileHover={{ backgroundColor: "#222" }} whileTap={{ scale: 0.98 }}>
                        Bangun Galeri Digital Anda <ArrowRight size={16} />
                    </motion.a>
                </motion.div>
            </section>

            <section className="py-24 bg-[#EBE7DF] border-y border-[#D6CDBC]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#3A3834] mb-4">Mempromosikan Jiwa Gianyar</h2>
                        <p className="text-[#665D4F] max-w-2xl mx-auto text-lg leading-relaxed">Dari e-commerce kerajinan ekspor hingga integrasi sistem booking kelas meditasi, website kami menangkap filosofi bisnis Anda.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-[#FDFBF7] p-10 shadow-sm flex flex-col items-start">
                            <Palette size={40} strokeWidth={1} className="text-[#607D67] mb-6" />
                            <h3 className="text-2xl font-serif text-[#3A3834] mb-4">Galeri Ekspor & Kriya</h3>
                            <p className="text-[#665D4F] text-[0.95rem] leading-relaxed mb-6">
                                Membantu silver-smith di Celuk dan pemahat Ubud menjual langsung ke US & Eropa tanpa membagi margin dengan mediator. Lengkap dengan hitungan kurs dan opsi kargo.
                            </p>
                        </div>
                        <div className="bg-[#FDFBF7] p-10 shadow-sm flex flex-col items-start border-t-4 border-[#607D67]">
                            <Globe size={40} strokeWidth={1} className="text-[#607D67] mb-6" />
                            <h3 className="text-2xl font-serif text-[#3A3834] mb-4">Retreat & Healing Hub</h3>
                            <p className="text-[#665D4F] text-[0.95rem] leading-relaxed mb-6">
                                Sistem pendaftaran workshop, kalender yoga yang terintegrasi, dan penjualan paket retreat secara langsung dari website agar agenda studio Anda penuh berbulan-bulan sebelumnya.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 text-center px-6">
                <p className="text-[#665D4F] mb-6 tracking-wide uppercase text-sm font-semibold">Berkonsultasi dengan Spesialis Website Kami</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#607D67] hover:text-[#455A4A] text-2xl font-serif italic underline decoration-1 underline-offset-8">Mari diskusikan kebutuhan unik brand Anda secara gratis.</a>
            </section>
        </div>
    );
}
