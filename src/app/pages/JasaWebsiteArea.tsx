import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Check, Star } from "lucide-react";

type AreaData = {
    [key: string]: {
        name: string;
        target: string;
        desc: string;
    };
};

const areaData: AreaData = {
    denpasar: {
        name: "Denpasar",
        target: "Pusat Bisnis & Perkantoran",
        desc: "Bantu bisnis Anda di Denpasar menjangkau lebih banyak klien lokal dan korporat dengan website yang kredibel."
    },
    ubud: {
        name: "Ubud",
        target: "Villa, Yoga, & Wellness",
        desc: "Tampilkan keunikan akomodasi dan wellness retreat Anda di Ubud ke audiens global dengan galeri premium."
    },
    canggu: {
        name: "Canggu",
        target: "Cafe, Coworking, & Lifestyle",
        desc: "Buat brand lifestyle Anda di Canggu makin stand-out dengan website estetik, cepat, dan fungsional."
    },
    seminyak: {
        name: "Seminyak",
        target: "Butik, Restoran, & Nightlife",
        desc: "Tingkatkan kehadiran online bisnis Anda di Seminyak untuk menarik lebih banyak wisatawan premium."
    },
    kuta: {
        name: "Kuta",
        target: "Hotel & Pariwisata",
        desc: "Tingkatkan direct booking hotel dan layanan wisata Anda di Kuta tanpa harus bergantung penuh pada OTA."
    },
    jimbaran: {
        name: "Jimbaran",
        target: "Restoran Seafood & Resort",
        desc: "Hadirkan pengalaman kuliner dan menginap mewah di Jimbaran secara online untuk mengunci reservasi."
    },
    nusa_dua: {
        name: "Nusa Dua",
        target: "Luxury Resort & Watersport",
        desc: "Tingkatkan profesionalitas bisnis Anda di kawasan elite Nusa Dua melalui website bertaraf internasional."
    },
    uluwatu: {
        name: "Uluwatu",
        target: "Beach Club, Surfing & Resort",
        desc: "Jangkau wisatawan dari seluruh dunia yang mencari pengalaman tak terlupakan di Uluwatu."
    },
    gianyar: {
        name: "Gianyar",
        target: "Seni, Kriya, & Ekowisata",
        desc: "Bawa karya seni, kriya, dan bisnis ekowisata Anda di Gianyar ke audiens internasional melalui website."
    }
};

const faqs = (areaName: string) => [
    {
        q: `Apakah BangBisnis bisa melayani klien di ${areaName}?`,
        a: `Tentu saja. Kami melayani pembuatan website untuk seluruh area di Bali, termasuk ${areaName}. Komunikasi bisa dilakukan via WhatsApp, Zoom, atau meeting langsung jika memungkinkan.`,
    },
    {
        q: "Berapa biaya jasa pembuatan website?",
        a: "Paket kami mulai dari Rp 1.500.000 untuk starter website UMKM, hingga Rp 4.500.000 untuk paket Growth dengan fitur lengkap. Harga transparan dan disesuaikan dengan kebutuhan.",
    },
    {
        q: "Berapa lama proses pembuatan website?",
        a: "Rata-rata 7–14 hari kerja tergantung kompleksitas proyek. Kami memastikan pengerjaan tepat waktu tanpa mengorbankan kualitas.",
    },
    {
        q: "Apakah website yang dibuat mobile-friendly?",
        a: "Semua website yang kami buat 100% responsif dan mobile-friendly, sangat penting untuk wisatawan di Bali yang sering menggunakan smartphone.",
    },
];

export function JasaWebsiteArea() {
    const { lokasi } = useParams();
    const areaKey = (lokasi || "denpasar").toLowerCase().replace("-", "_");

    // Fallback if not in predefined list
    const area = areaData[areaKey] || {
        name: (lokasi ? lokasi.charAt(0).toUpperCase() + lokasi.slice(1).replace("-", " ") : "Bali"),
        target: "UMKM Lokal",
        desc: `Tingkatkan skala bisnis Anda di ${lokasi ? lokasi.replace("-", " ") : "Bali"} dengan website profesional.`
    };

    useEffect(() => {
        document.title = `Jasa Pembuatan Website di ${area.name} Profesional & Murah | BangBisnis`;
        const metaDesc = document.querySelector('meta[name="description"]');
        const descText = `Jasa pembuatan website profesional dan murah di ${area.name} untuk UMKM, toko, villa, dan perusahaan. Desain modern, SEO friendly, dan siap membantu bisnis berkembang.`;
        if (metaDesc) {
            metaDesc.setAttribute("content", descText);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = descText;
            document.head.appendChild(meta);
        }
    }, [area.name]);

    const whatsappUrl = `https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20ingin%20konsultasi%20jasa%20website%20untuk%20bisnis%20saya%20di%20${area.name}.`;

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link to="/" className="text-white/60 text-[13px] tracking-[0.06em] hover:text-white transition-colors">
                        ← Kembali ke Beranda
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

            {/* Hero */}
            <section className="pt-36 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-white/30 text-[11px] tracking-[0.2em] uppercase">
                            Jasa Website {area.name} — {area.target}
                        </span>
                    </div>

                    <h1 className="text-white mb-6" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
                        Jasa Pembuatan <span className="italic text-white/40">Website Profesional</span>
                        <br />
                        <span className="text-emerald-500">di {area.name}</span>
                    </h1>

                    <p className="text-white/35 mb-10 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.85 }}>
                        {area.desc} Kami melayani pembuatan website untuk bisnis spesifik di area {area.name}. Proses cepat, harga transparan, dan fokus pada konversi.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {["✓ SEO Area Lokal", "✓ Loading Cepat", "✓ Mobile Friendly", "✓ Integrasi WA"].map((t) => (
                            <span key={t} className="text-white/40 text-[12px] tracking-[0.04em] px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.03]">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group relative bg-white text-[#0a0a0a] h-14 px-8 rounded-full text-[13px] tracking-[0.02em] overflow-hidden flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <span className="relative z-10">Hubungi Kami</span>
                            <ArrowRight size={15} className="relative z-10" />
                            <motion.div className="absolute inset-0 bg-emerald-500" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.35 }} />
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            {/* Mengapa Membuka Target Area */}
            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="text-[11px] tracking-[0.2em] uppercase text-[#bbb]">Digitalisasi Lokal</span>
                            <h2 className="text-[#0a0a0a] mt-2 mb-6" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                                Persaingan bisnis di <span className="italic text-[#bbb]">{area.name}</span> makin ketat
                            </h2>
                            <p className="text-[#777] leading-relaxed mb-8 text-[0.9rem]">
                                Apakah pelanggan di sekitar {area.name} sudah bisa menemukan bisnis Anda saat mereka mencari di Google? Dengan website yang teroptimasi secara lokal, bisnis Anda akan lebih mudah ditemukan dibanding kompetitor.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    `Target spesifik pencarian di ${area.name}`,
                                    "Tingkatkan profesionalitas brand Anda",
                                    "Mudahkan turis dan warga lokal menemukan Anda",
                                    "Terintegrasi sempurna dengan Google Maps"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Check size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-[#666] text-[0.88rem] leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
                            {[
                                { num: "80%", label: "Pencarian lokal dari HP" },
                                { num: "24/7", label: "Bisnis selalu buka online" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-[#fafaf9] rounded-2xl p-8 flex items-center gap-6 shadow-sm border border-black/5">
                                    <span className="text-[#0a0a0a]" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.04em" }}>
                                        {stat.num}
                                    </span>
                                    <span className="text-[#aaa] text-[0.85rem] tracking-[0.06em] uppercase">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-[#fafaf9]">
                <div className="max-w-[900px] mx-auto px-6 md:px-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
                        <span className="text-[11px] tracking-[0.2em] uppercase text-[#bbb]">FAQ</span>
                        <h2 className="text-[#0a0a0a] mt-2" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
                            Pertanyaan Seputar Jasa Website
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs(area.name).map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white border border-[#eee] rounded-2xl p-7">
                                <h3 className="text-[#0a0a0a] mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 500, lineHeight: 1.4 }}>
                                    {faq.q}
                                </h3>
                                <p className="text-[#888] text-[0.87rem] leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-12 md:p-20 text-center">
                        <div className="flex items-center justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-emerald-500" fill="currentColor" />)}
                        </div>
                        <h2 className="text-[#0a0a0a] mb-4" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                            Siap bersaing di pasar <span className="italic text-[#bbb]">{area.name}?</span>
                        </h2>
                        <p className="text-[#aaa] mb-8 max-w-md mx-auto text-[0.9rem] leading-relaxed">
                            Konsultasikan kebutuhan website Anda hari ini. Prosesnya gampang, harganya bersahabat.
                        </p>
                        <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-10 py-5 rounded-full text-[14px] tracking-[0.02em]" whileHover={{ scale: 1.05, backgroundColor: "#10b981" }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                            <MessageCircle size={18} /> Konsultasi via WhatsApp (Gratis)
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
