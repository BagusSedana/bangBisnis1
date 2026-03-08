import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Plane, Coffee, ShieldCheck } from "lucide-react";

export function Badung() {
    useEffect(() => {
        document.title = "Jasa Website Badung (Kuta, Seminyak, Canggu) | Booking & Hospitality";
        const metaDesc = document.querySelector('meta[name="description"]');
        const descText = "Tarik tamu luar negeri dengan website profesional untuk Villa, Hotel, dan Restoran di Badung. Bebas komisi OTA, fitur booking langsung.";
        if (metaDesc) {
            metaDesc.setAttribute("content", descText);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = descText;
            document.head.appendChild(meta);
        }
    }, []);

    const whatsappUrl = "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20butuh%20website%20untuk%20villa%2Fresto%20di%20Badung.";

    return (
        <div className="w-full min-h-screen bg-[#fafaf9]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Navbar (Light Theme) */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-xl border-b border-black/[0.04]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link to="/" className="text-gray-500 text-[13px] tracking-[0.06em] hover:text-black transition-colors">
                        ← Beranda
                    </Link>
                    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white text-[12px] tracking-[0.04em] px-5 py-2.5 rounded-full flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <MessageCircle size={14} /> Tanya Harga
                    </motion.a>
                </div>
            </nav>

            <section className="pt-36 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-6 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                        <Plane size={15} /> Kuta, Seminyak, Canggu, Uluwatu
                    </div>

                    <h1 className="text-slate-900 mb-6" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.04em" }}>
                        Villa Sebelah Kebanjiran Bule. <br />
                        <span className="italic text-emerald-600">Kenapa Kalender Anda Masih Kosong?</span>
                    </h1>

                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-[1.1rem]" style={{ lineHeight: 1.7 }}>
                        Turis asing tidak membuka Instagram untuk mencari akomodasi serius. Mereka mencari di Google dalam bahasa Inggris. Berhenti bergantung 100% pada OTA yang memotong komisi besar. Saatnya bangun "Mesin Booking" Anda sendiri.
                    </p>

                    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Bangun Direct Booking Anda <ArrowRight size={16} />
                    </motion.a>
                </motion.div>
            </section>

            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-slate-900 text-3xl md:text-4xl mb-6 font-bold" style={{ fontFamily: "'Urbanist', sans-serif" }}>Penyakit Bisnis Hospitality di Badung</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Mengandalkan *walk-in guest* sudah mati. Algoritma social media tidak menggaransi *booking* pasti. Di zona persaingan paling berdarah di Bali, website adalah benteng pertahanan terakhir hotel, spa, dan *coworking* Anda.
                            </p>
                            <ul className="space-y-5 mt-8">
                                <li className="flex gap-4">
                                    <div className="bg-emerald-100 p-2 rounded-lg h-fit"><ShieldCheck className="text-emerald-600" size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Menghindari Potongan Komisi 15-20%</h4>
                                        <p className="text-gray-500 text-sm mt-1">Website kami dilengkapi *form booking* bawaan yang masuk langsung ke WhatsApp atau email Anda.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-emerald-100 p-2 rounded-lg h-fit"><Coffee className="text-emerald-600" size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Menu Resto/Spa Multi Bahasa</h4>
                                        <p className="text-gray-500 text-sm mt-1">Kami rancang struktur bilingual untuk menangkap klien expatriat maupun lokalan Jakarta.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
                            <h3 className="text-3xl font-bold mb-4 font-['Urbanist']">Selesai Dalam 14 Hari.</h3>
                            <p className="text-gray-400 mb-8">Sebelum musim liburan berikutnya tiba, pastikan mesin kasir digital Anda sudah menyala dan terindeks di halaman pertama Google mencari "best villa in Seminyak".</p>
                            <a href={whatsappUrl} className="block text-center w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl transition-colors">
                                Konsultasi Sekarang
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
