import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Anchor, Star, HeartHandshake } from "lucide-react";

export function Sanur() {
    useEffect(() => {
        document.title = "Jasa Website Sanur | Spesialis Wisata Keluarga & Senior";
        const metaDesc = document.querySelector('meta[name="description"]');
        const descText = "Buat website di Sanur yang membangun kepercayaan turis senior dan keluarga. Desain tenang, elegan, dan profesional.";
        if (metaDesc) {
            metaDesc.setAttribute("content", descText);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = descText;
            document.head.appendChild(meta);
        }
    }, []);

    const whatsappUrl = "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20butuh%20website%20untuk%20bisnis%20saya%20di%20Sanur.";

    return (
        <div className="w-full min-h-screen bg-neutral-50" style={{ fontFamily: "'Inter', sans-serif" }}>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link to="/" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm font-medium">
                        ← Kembali
                    </Link>
                    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-sky-600 text-white text-[13px] font-medium px-6 py-2 rounded-full flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <MessageCircle size={14} /> Hubungi Kami
                    </motion.a>
                </div>
            </nav>

            <section className="pt-36 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto flex flex-col items-center">
                    <div className="bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
                        <Anchor size={14} /> Jasa Website Sanur
                    </div>

                    <h1 className="text-neutral-900 mb-6 font-['Urbanist'] text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                        Bangun <span className="text-sky-600 italic">Rasa Percaya</span> <br /> Turis Keluarga & Senior.
                    </h1>

                    <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
                        Karakter pengunjung Sanur berbeda. Mereka mencari kedamaian, keamanan, dan kepastian. Jika website fast-boat, villa, atau restoran Anda berantakan dan sulit digunakan, mereka akan mencari opsi lain yang lebih meyakinkan.
                    </p>

                    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-neutral-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Amankan Reputasi Digital Anda <ArrowRight size={16} />
                    </motion.a>
                </motion.div>
            </section>

            <section className="py-20 bg-white border-y border-neutral-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-['Urbanist'] text-neutral-900 mb-4">Mengapa Desain Kami Bekerja Ekstra di Sanur?</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">Kami tidak sekadar memasukkan gambar laut. Kami menanamkan psikologi warna khusus dan memastikan navigasi intuitif bagi segala usia.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: HeartHandshake, title: "Fokus Trust & Kredibilitas", desc: "Sematkan ulasan TripAdvisor yang jujur, galeri aktivitas yang aman, dan alamat kontak jelas untuk meyakinkan kepala keluarga yang akan mem-booking untuk 5 orang." },
                            { icon: Anchor, title: "Pemesanan Nyebrang Tanpa Ribet", desc: "Sistem e-ticketing *Fast Boat* kami dirancang semudah mungkin. Tak ada form rumit. 3 klik menuju WhatsApp reservasi tiket Penida/Lembongan." },
                            { icon: Star, title: "Ramah Segala Usia (Accessibility)", desc: "Font yang mudah dibaca, kontras warna yang nyaman untuk mata (eye-friendly) untuk turis ekspatriat kelas menengah ke atas." },
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
                                <div className="bg-sky-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon size={24} className="text-sky-600" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                                <p className="text-neutral-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 text-center">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Punya Layanan di Sanur?</h3>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-medium underline underline-offset-4 decoration-2">Mari Ngobrol Kebutuhan Website Anda Gratis!</a>
            </section>
        </div>
    );
}
