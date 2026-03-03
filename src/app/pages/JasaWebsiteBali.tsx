import { motion } from "motion/react";
import { Check, ArrowRight, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router";

const faqs = [
    {
        q: "Berapa biaya jasa pembuatan website di Bali?",
        a: "Paket kami mulai dari Rp 2.000.000 untuk website profesional 5 halaman, hingga Rp 3.500.000 untuk paket Growth dengan 10 halaman dan fitur lengkap. Harga disesuaikan dengan kebutuhan bisnis Anda.",
    },
    {
        q: "Berapa lama proses pembuatan website?",
        a: "Rata-rata 7–14 hari kerja tergantung kompleksitas proyek. Kami memiliki proses terstruktur yang memastikan pengerjaan tepat waktu tanpa mengorbankan kualitas.",
    },
    {
        q: "Apakah website cocok untuk UMKM di Bali?",
        a: "Ya, kami khusus fokus membantu UMKM di Bali membangun kehadiran online yang profesional. Mulai dari warung, villa, laundry, spa, cafe, hingga tour operator.",
    },
    {
        q: "Apakah website yang dibuat mobile-friendly?",
        a: "Semua website yang kami buat 100% responsif dan mobile-friendly. Mengingat mayoritas pengguna internet di Indonesia mengakses via HP.",
    },
    {
        q: "Apa yang membedakan BangBisnis dari jasa website lain?",
        a: "Kami tidak hanya 'tukang bikin website'. Setiap proyek dimulai dengan analisis bisnis, perencanaan struktur konten, baru eksekusi desain. Hasilnya website yang bukan hanya cantik tapi efektif untuk bisnis Anda.",
    },
    {
        q: "Apakah ada garansi setelah website selesai?",
        a: "Ya. Kami memastikan website siap digunakan dengan baik sebelum diluncurkan. Setiap paket juga menyertakan support pasca-peluncuran.",
    },
];

const services = [
    { title: "Website Restoran & Kafe", desc: "Menu digital, reservasi, dan profil bisnis yang menarik." },
    { title: "Website Villa & Penginapan", desc: "Galeri foto premium, sistem inquiry, dan direct booking." },
    { title: "Website Tour & Travel", desc: "Paket wisata terstruktur dengan CTA yang mengkonversi." },
    { title: "Website Spa & Wellness", desc: "Jadwal layanan, booking online, dan portofolio perawatan." },
    { title: "Website Laundry & Jasa Lokal", desc: "Harga, area layanan, dan kontak yang mudah diakses." },
    { title: "Website Rental & Otomotif", desc: "Katalog armada, tarif, dan pemesanan langsung." },
];

export function JasaWebsiteBali() {
    const whatsappUrl =
        "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20ingin%20konsultasi%20jasa%20website%20untuk%20bisnis%20saya%20di%20Bali.";

    return (
        <div
            className="w-full min-h-screen bg-[#0a0a0a]"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-white/60 text-[13px] tracking-[0.06em] hover:text-white transition-colors"
                    >
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-white/30 text-[11px] tracking-[0.2em] uppercase">
                            Jasa Website Bali — UMKM Lokal
                        </span>
                    </div>

                    <h1
                        className="text-white mb-6"
                        style={{
                            fontFamily: "'Urbanist', sans-serif",
                            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.04em",
                        }}
                    >
                        Jasa Pembuatan{" "}
                        <span className="italic text-white/40">Website Profesional</span>
                        <br />
                        <span className="text-emerald-500">di Bali</span> untuk UMKM
                    </h1>

                    <p
                        className="text-white/35 mb-10 max-w-xl"
                        style={{ fontSize: "1rem", lineHeight: 1.85 }}
                    >
                        Kami membantu UMKM di Bali membangun kehadiran online yang kredibel
                        dan profesional. Proses terstruktur, desain minimalis, komunikasi
                        transparan — selesai dalam <span className="text-white/60">7–14 hari</span>.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {[
                            "✓ Proses terstruktur",
                            "✓ Desain minimalis & profesional",
                            "✓ Komunikasi transparan",
                            "✓ Support pasca-launch",
                        ].map((t) => (
                            <span
                                key={t}
                                className="text-white/40 text-[12px] tracking-[0.04em] px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.03]"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white text-[#0a0a0a] h-14 px-8 rounded-full text-[13px] tracking-[0.02em] overflow-hidden flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Konsultasi Gratis</span>
                            <ArrowRight size={15} className="relative z-10" />
                            <motion.div
                                className="absolute inset-0 bg-emerald-500"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.35 }}
                            />
                            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[13px]">
                                Konsultasi Gratis <ArrowRight size={15} />
                            </span>
                        </motion.a>
                        <Link
                            to="/#portfolio"
                            className="h-14 px-6 rounded-full border border-white/10 flex items-center text-white/40 hover:text-white hover:border-white/30 transition-all text-[13px] tracking-[0.04em]"
                        >
                            Lihat Portofolio
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Jenis UMKM yang Kami Layani */}
            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-[11px] tracking-[0.2em] uppercase text-[#bbb]">
                            Layanan
                        </span>
                        <h2
                            className="text-[#0a0a0a] mt-2"
                            style={{
                                fontFamily: "'Urbanist', sans-serif",
                                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                                letterSpacing: "-0.03em",
                                lineHeight: 1.1,
                            }}
                        >
                            Jasa Website Bali untuk{" "}
                            <span className="italic text-[#bbb]">berbagai bisnis</span>
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-[#fafaf9] rounded-2xl p-7 hover:bg-[#0a0a0a] group transition-colors duration-500 cursor-default"
                                whileHover={{ y: -6 }}
                            >
                                <div className="w-2 h-2 rounded-full bg-emerald-500 mb-5 group-hover:bg-emerald-400" />
                                <h3
                                    className="text-[#0a0a0a] group-hover:text-white mb-2 transition-colors duration-500"
                                    style={{
                                        fontFamily: "'Urbanist', sans-serif",
                                        fontSize: "1.1rem",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {s.title}
                                </h3>
                                <p
                                    className="text-[#aaa] group-hover:text-white/35 text-[0.83rem] leading-relaxed transition-colors duration-500"
                                >
                                    {s.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mengapa BangBisnis */}
            <section className="py-20 bg-[#fafaf9]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.2em] uppercase text-[#bbb]">
                                Mengapa Kami
                            </span>
                            <h2
                                className="text-[#0a0a0a] mt-2 mb-6"
                                style={{
                                    fontFamily: "'Urbanist', sans-serif",
                                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.1,
                                }}
                            >
                                Bukan sekadar{" "}
                                <span className="italic text-[#bbb]">tukang bikin</span>
                            </h2>
                            <p className="text-[#777] leading-relaxed mb-8 text-[0.9rem]">
                                Jasa website Bali banyak. Yang membedakan kami adalah pendekatan
                                berbasis bisnis — kami memahami kebutuhan UMKM Bali lebih dulu,
                                baru merancang solusi digital yang tepat sasaran.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Analisis bisnis sebelum design dimulai",
                                    "Struktur konten yang mendorong konversi",
                                    "Desain minimalis & profesional",
                                    "Website siap sebelum diluncurkan — tanpa pengecualian",
                                    "Support pasca-launch untuk ketenangan pikiran Anda",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Check size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-[#666] text-[0.88rem] leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {[
                                { num: "50+", label: "Proyek selesai" },
                                { num: "7–14", label: "Hari pengerjaan" },
                                { num: "100%", label: "Kepuasan klien" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-white rounded-2xl p-8 flex items-center gap-6 shadow-sm"
                                >
                                    <span
                                        className="text-[#0a0a0a]"
                                        style={{
                                            fontFamily: "'Urbanist', sans-serif",
                                            fontSize: "2.5rem",
                                            letterSpacing: "-0.04em",
                                        }}
                                    >
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
            <section className="py-20 bg-white">
                <div className="max-w-[900px] mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <span className="text-[11px] tracking-[0.2em] uppercase text-[#bbb]">FAQ</span>
                        <h2
                            className="text-[#0a0a0a] mt-2"
                            style={{
                                fontFamily: "'Urbanist', sans-serif",
                                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Pertanyaan yang sering ditanyakan
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="bg-[#fafaf9] rounded-2xl p-7"
                            >
                                <h3
                                    className="text-[#0a0a0a] mb-3"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "0.95rem",
                                        fontWeight: 500,
                                        lineHeight: 1.4,
                                    }}
                                >
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2rem] p-12 md:p-20 text-center"
                    >
                        <div className="flex items-center justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className="text-emerald-500"
                                    fill="currentColor"
                                />
                            ))}
                        </div>
                        <h2
                            className="text-[#0a0a0a] mb-4"
                            style={{
                                fontFamily: "'Urbanist', sans-serif",
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                letterSpacing: "-0.04em",
                                lineHeight: 1.05,
                            }}
                        >
                            Siap membangun website
                            <br />
                            <span className="italic text-[#bbb]">bisnis Anda?</span>
                        </h2>
                        <p className="text-[#aaa] mb-4 max-w-md mx-auto text-[0.9rem] leading-relaxed">
                            Konsultasi gratis, tanpa komitmen. Ceritakan bisnis Anda dan kami
                            bantu rancang solusi yang tepat.
                        </p>
                        <p className="text-emerald-600 text-[0.82rem] mb-10">
                            ✓ Kami memastikan website siap digunakan dengan baik sebelum diluncurkan.
                        </p>
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-10 py-5 rounded-full text-[14px] tracking-[0.02em]"
                            whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <MessageCircle size={18} />
                            Konsultasi via WhatsApp — Gratis
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Footer minimal */}
            <footer className="py-8 px-6 md:px-12 border-t border-white/[0.04]">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <span
                        className="text-white/20 text-[13px]"
                        style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.02em" }}
                    >
                        BangBisnis
                    </span>
                    <span className="text-white/15 text-[11px] tracking-[0.08em]">
                        Jasa Website Profesional di Bali untuk UMKM
                    </span>
                    <Link
                        to="/"
                        className="text-white/20 text-[11px] tracking-[0.08em] hover:text-white/40 transition-colors"
                    >
                        ← Beranda
                    </Link>
                </div>
            </footer>
        </div>
    );
}
