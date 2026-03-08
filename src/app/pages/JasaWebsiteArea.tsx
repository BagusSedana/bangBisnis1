import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Check, Star, TrendingUp, Users, Target, ShieldCheck } from "lucide-react";
import { Denpasar } from "./areas/Denpasar";
import { Badung } from "./areas/Badung";
import { Sanur } from "./areas/Sanur";
import { Gianyar } from "./areas/Gianyar";

type AreaData = {
    [key: string]: {
        name: string;
        target: string;
        desc: string;
        uniqueInfo?: string;
        caseStudy?: { name: string, desc: string, result: string };
        testimonial?: { text: string, author: string, role: string };
        faqs?: { q: string, a: string }[];
    };
};

const areaData: AreaData = {
    denpasar: {
        name: "Denpasar",
        target: "Pusat Bisnis, Perkantoran, & Retail",
        desc: "Bantu bisnis Anda di ibu kota Denpasar menjangkau lebih banyak klien lokal dan korporat dengan website yang kredibel.",
        uniqueInfo: "Sebagai pusat pemerintahan dan ekonomi Bali, Denpasar dipenuhi perkantoran, toko retail, dan layanan profesional. Website Anda harus tampil formal, cepat, dan mudah ditemukan oleh warga lokal yang mencari jasa atau produk sehari-hari di sekitar mereka.",
        caseStudy: {
            name: "Toko Material Bangunan XYZ Denpasar",
            desc: "Pembuatan website company profile dan katalog online",
            result: "Peningkatan permintaan 40% dari kontraktor lokal Denpasar dalam 3 bulan"
        },
        testimonial: {
            text: "Sangat puas dengan hasilnya. Dulu susah bersaing dengan toko lain di Teuku Umar, sekarang pelanggan lebih sering nanya lewat WA karena lihat katalog di website.",
            author: "Bapak Made",
            role: "Pemilik Toko Retail di Denpasar"
        },
        faqs: [
            { q: "Apakah BangBisnis melayani pembuatan website untuk toko retail di Denpasar?", a: "Ya, kami sangat berpengalaman membuat website e-commerce atau katalog online untuk toko retail di area Denpasar, seperti Teuku Umar, Renon, dan Gatot Subroto." },
            { q: "Berapa lama pembuatan website company profile untuk perusahaan di Renon?", a: "Untuk company profile standar, biasanya memakan waktu 7–10 hari kerja. Jika butuh fitur custom seperti portal karyawan, bisa mencapai 3–4 minggu." },
            { q: "Apakah ada biaya bulanan untuk maintenance server?", a: "Kami menyediakan gratis maintenance dan hosting di tahun pertama. Tahun berikutnya hanya biaya perpanjangan domain dan hosting mulai dari Rp 800.000/tahun." },
            { q: "Bisa meeting langsung di kantor kami di Denpasar?", a: "Tentu bisa. Tim kami bisa mengunjungi kantor atau tempat usaha Anda di area Denpasar untuk diskusi kebutuhan website lebih detail." }
        ]
    },
    badung: {
        name: "Badung",
        target: "Pariwisata, Villa, & Hospitality",
        desc: "Tingkatkan okupansi villa dan layanan wisata Anda di Kabupaten Badung dengan website premium yang menarik turis internasional.",
        uniqueInfo: "Badung adalah jantung pariwisata Bali, membentang dari Kuta, Seminyak, Canggu, hingga Uluwatu. Persaingan di industri hospitality sangat brutal. Website Anda tidak hanya butuh desain mewah, tapi juga fitur direct booking tanpa komisi OTA dan SEO internasional yang kuat.",
        caseStudy: {
            name: "Villa Tropis Private Badung",
            desc: "Website booking engine terintegrasi untuk properti villa mewah",
            result: "Direct booking naik 60%, mengurangi ketergantungan pada agensi perjalanan online pihak ketiga"
        },
        testimonial: {
            text: "Investasi website ini sangat balik modal. Tamu dari Eropa sekarang banyak yang booking langsung dari web, lumayan hemat potongan komisi booking yang biasanya besar.",
            author: "Ibu Kadek",
            role: "Villa Manager di Badung"
        },
        faqs: [
            { q: "Apakah bisa buat website untuk sistem booking villa di Badung?", a: "Sangat bisa. Kami menyediakan fitur direct booking untuk villa, homestay, atau hotel yang bebas potongan komisi per transaksi." },
            { q: "Sistem pembayaran apa yang digunakan untuk tamu asing?", a: "Kami mengintegrasikan payment gateway yang mendukung pembayaran kartu kredit internasional (Visa/Mastercard) dan metode e-wallet." },
            { q: "Bagaimana cara agar website saya muncul di Google untuk bule yang cari di negaranya?", a: "Kami menerapkan optimasi SEO multi-bahasa (English & Indonesia) dan memastikan kecepatan website tinggi agar direkomendasikan Google secara global." },
            { q: "Berapa lama waktu pembuatan website untuk agen travel di Badung?", a: "Sekitar 14-21 hari kerja, karena kami perlu memasukkan paket-paket wisata, foto, dan sistem booking itinerary yang interaktif." }
        ]
    },
    sanur: {
        name: "Sanur",
        target: "Wisata Keluarga, Restoran, & Tour Guide",
        desc: "Pikat turis keluarga dan ekspatriat di Sanur dengan website informatif, elegan, dan menonjolkan suasana santai khas Sanur.",
        uniqueInfo: "Sanur memiliki karakter audiens yang berbeda dari kawasan lain: lebih tenang, didominasi turis senior, keluarga, dan pusat pelabuhan kapal cepat ke Nusa Penida. Website untuk wilayah Sanur perlu menonjolkan trust, keamanan, dan testimoni untuk meyakinkan calon pelanggan.",
        caseStudy: {
            name: "Layanan Fast Boat & Snorkeling Sanur",
            desc: "Sistem reservasi online tiket kapal dan paket wisata laut",
            result: "Omset pemesanan turis Eropa naik signifikan dengan sistem booking otomatis"
        },
        testimonial: {
            text: "Sejak punya web sendiri, tamu luar negeri langsung reservasi tiket nyebrang dan snorkeling dari jauh-jauh hari. Tampilannya bersih, pas banget buat target pasar Sanur.",
            author: "Bapak Wayan",
            role: "Operator Wisata Laut Sanur"
        },
        faqs: [
            { q: "Bisakah membuat website ticketing untuk penyeberangan dari pelabuhan Sanur?", a: "Tentu. Kami bisa membuat form pemesanan dan konfirmasi e-tiket otomatis via email untuk layanan tour atau fastboat Anda." },
            { q: "Saya punya restoran di Sanur, apakah butuh website atau cukup Google Maps?", a: "Google Maps penting, tapi website membantu Anda punya menu digital yang lebih rapi, formulir reservasi meja, dan meningkatkan citra eksklusif restoran Anda di mata turis asing." },
            { q: "Apakah website sudah termasuk opsi bahasa Inggris?", a: "Paket pembuatan website kami sangat mendukung fungsionalitas multi-bahasa untuk menjangkau wisatawan internasional yang banyak menginap di Sanur." },
            { q: "Bisa sekalian bantu foto menu atau lokasi di Sanur?", a: "Kami bisa merekomendasikan tim fotografer profesional di Bali. Keberadaan materi visual yang bagus sangat penting untuk web." }
        ]
    },
    gianyar: {
        name: "Gianyar",
        target: "Seni, Kriya, & Ekowisata",
        desc: "Bawa karya seni, kriya perak, dan bisnis ekowisata Anda di Gianyar ke audiens internasional melalui website profesional.",
        uniqueInfo: "Gianyar adalah pusat seni, budaya, dan kerajinan tangan Bali, meliputi Ubud hingga Celuk. Banyak pengrajin lokal yang masih bergantung pada pasar atau art market fisik. Dengan website e-commerce atau galeri online, Anda bisa menjual furnitur, lukisan, patung, atau perhiasan perak langsung ke kolektor luar negeri.",
        caseStudy: {
            name: "Galeri Perak & Kriya Celuk Gianyar",
            desc: "Website E-commerce dengan fitur hitung ongkos kirim internasional",
            result: "Berhasil mengekspor 200+ pesanan ke US & Eropa di tahun pertama berkat website"
        },
        testimonial: {
            text: "Dulu cuma ngandelin tamu yang datang pakai bus ke toko di Gianyar. Sekarang pesanan perak saya banyak dikirim ke luar negeri karena webnya gampang dipakai orang asing.",
            author: "Bapak I Made",
            role: "Pengrajin & Galeri Perak Celuk"
        },
        faqs: [
            { q: "Saya pengrajin di Gianyar, apakah bisa diajari cara upload produk ke website?", a: "Pasti. Kami memberikan panduan dan support setelah rilis agar Anda bisa menambah, mengedit, atau menghapus produk secara mandiri tanpa harus butuh skill coding." },
            { q: "Apakah bisa pakai hitungan ongkos kirim internasional?", a: "Ya, kami bisa mengintegrasikan sistem ongkos kirim seperti DHL, EMS, atau layanan kargo lainnya untuk pengiriman kerajinan ke luar negeri." },
            { q: "Kalau tidak jualan barang, tapi kelas memahat/melukis, apa bisa?", a: "Sangat bisa. Kami buatkan fitur booking kelas (Workshop Booking) dengan kalender interaktif untuk wisatawan yang ingin belajar seni di Gianyar." },
            { q: "Website e-commerce harganya berapa?", a: "Untuk online shop lengkap dengan fitur keranjang belanja, integrasi payment gateway, dan dashboard admin, investasi umumnya mulai dari Rp 3.500.000 ke atas." }
        ]
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
    }
};

const defaultFaqs = (areaName: string) => [
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
    const pathSegments = window.location.pathname.split('-');
    const lokasi = pathSegments[pathSegments.length - 1] || "denpasar";
    const areaKey = lokasi.toLowerCase().replace("-", "_");

    if (areaKey === "denpasar") return <Denpasar />;
    if (areaKey === "badung") return <Badung />;
    if (areaKey === "sanur") return <Sanur />;
    if (areaKey === "gianyar") return <Gianyar />;

    // Fallback if not in predefined list
    const area = areaData[areaKey] || {
        name: (lokasi ? lokasi.charAt(0).toUpperCase() + lokasi.slice(1).replace("-", " ") : "Bali"),
        target: "UMKM Lokal",
        desc: `Tingkatkan skala bisnis Anda di ${lokasi ? lokasi.replace("-", " ") : "Bali"} dengan website profesional.`
    };

    const faqs = area.faqs || defaultFaqs(area.name);

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

            {/* Mengapa Membuka Target Area + Unique Selling Point */}
            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="text-[11px] tracking-[0.2em] uppercase text-[#bbb] font-semibold">Pasar Lokal & Digitalisasi</span>
                            <h2 className="text-[#0a0a0a] mt-2 mb-6" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                                Persaingan bisnis di <span className="italic text-[#888]">{area.name}</span> makin ketat
                            </h2>
                            <p className="text-[#666] leading-relaxed mb-6 text-[1rem]">
                                Apakah pelanggan di sekitar {area.name} sudah bisa menemukan bisnis Anda saat mereka mencari di Google? Dengan website yang teroptimasi secara lokal, bisnis Anda akan lebih mudah ditemukan dibanding kompetitor.
                            </p>

                            {area.uniqueInfo && (
                                <div className="bg-[#f0fdf4] border left-4 border-emerald-100 p-6 rounded-2xl mb-8 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                                    <p className="text-[#065f46] text-[0.95rem] leading-relaxed font-medium">
                                        <TrendingUp className="inline-block mr-2 text-emerald-600 w-5 h-5 mb-1" />
                                        Insight Lokal: {area.uniqueInfo}
                                    </p>
                                </div>
                            )}

                            <ul className="space-y-4">
                                {[
                                    `Mendominasi pencarian lokal "Jasa/Toko di ${area.name}"`,
                                    "Tingkatkan profesionalitas brand Anda di mata klien",
                                    "Mudahkan turis dan warga lokal menemukan informasi bisnis",
                                    "Terintegrasi sempurna dengan Google Maps Perusahaan"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Check size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-[#555] text-[0.95rem] font-medium leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">

                            {/* Local Case Study if available */}
                            {area.caseStudy ? (
                                <div className="bg-[#fafaf9] border border-[#eaeaea] p-8 rounded-3xl shadow-sm">
                                    <div className="flex items-center gap-2 text-emerald-600 font-semibold text-[13px] tracking-wider uppercase mb-5">
                                        <Target size={18} />
                                        Studi Kasus Klien {area.name}
                                    </div>
                                    <h3 className="text-[#111] text-xl font-bold mb-2 font-['Urbanist']">
                                        {area.caseStudy.name}
                                    </h3>
                                    <p className="text-[#666] text-[0.9rem] mb-6">
                                        Layanan: {area.caseStudy.desc}
                                    </p>
                                    <div className="bg-white border border-[#eee] rounded-xl p-5 border-l-4 border-l-emerald-500">
                                        <span className="block text-xs uppercase tracking-widest text-[#aaa] font-bold mb-1">Hasil & Dampak</span>
                                        <span className="text-[#222] font-semibold text-[0.95rem]">
                                            {area.caseStudy.result}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
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
                                </div>
                            )}

                            {/* Local Testimonial if available */}
                            {area.testimonial && (
                                <div className="bg-[#111] text-white p-8 rounded-3xl relative overflow-hidden shadow-lg mt-2">
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <MessageCircle size={80} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex gap-1 mb-5">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />)}
                                        </div>
                                        <p className="text-[#ccc] text-[0.95rem] italic mb-6 leading-relaxed">
                                            "{area.testimonial.text}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white uppercase text-sm">
                                                {area.testimonial.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white text-[0.95rem]">{area.testimonial.author}</h4>
                                                <p className="text-[#888] text-[0.8rem]">{area.testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-[#fafaf9] border-t border-[#eaeaea]">
                <div className="max-w-[900px] mx-auto px-6 md:px-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
                        <span className="text-[11px] tracking-[0.2em] uppercase text-[#bbb] font-semibold">Tanya Jawab</span>
                        <h2 className="text-[#0a0a0a] mt-3" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.04em" }}>
                            Pertanyaan Seputar Website di {area.name}
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white border border-[#eee] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-[#0a0a0a] mb-3 flex items-start gap-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4 }}>
                                    <span className="text-emerald-500 mt-1"><ShieldCheck size={20} /></span>
                                    {faq.q}
                                </h3>
                                <p className="text-[#666] text-[0.95rem] leading-relaxed pl-9">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2.5rem] p-12 md:p-24 text-center border border-[#eaeaea] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-emerald-500" fill="currentColor" />)}
                        </div>
                        <h2 className="text-[#0a0a0a] mb-5" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                            Siap mendominasi <span className="italic text-[#aaa]">{area.name}?</span>
                        </h2>
                        <p className="text-[#555] mb-10 max-w-lg mx-auto text-[1.05rem] leading-relaxed">
                            Konsultasikan kebutuhan website Anda hari ini bersama tim ahli kami. Proses perancangan terukur, biaya transparan, fitur premium.
                        </p>
                        <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-10 py-5 rounded-full text-[15px] font-medium tracking-[0.02em] shadow-lg shadow-black/10" whileHover={{ scale: 1.05, backgroundColor: "#10b981", boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)" }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
                            <MessageCircle size={20} /> Konsultasi via WhatsApp (Gratis)
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
