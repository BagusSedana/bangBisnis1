import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { SectionLabel } from "./SectionLabel";

const testimonials = [
    {
        name: "Made Suarsana",
        role: "Owner",
        business: "Warung Bambu — Restoran",
        location: "Canggu, Bali",
        avatar: "MS",
        color: "#10b981",
        rating: 5,
        text: "Sebelum punya website, pelanggan hanya dari mulut ke mulut. Sekarang ada yang booking langsung dari Google. Proses pembuatannya cepat, komunikasinya jelas, dan hasilnya jauh lebih profesional dari yang saya bayangkan.",
        result: "+40% reservasi dalam 2 bulan",
    },
    {
        name: "Nyoman Ayu Pertiwi",
        role: "Pemilik",
        business: "Villa Serenity — Hospitality",
        location: "Ubud, Bali",
        avatar: "NA",
        color: "#6366f1",
        rating: 5,
        text: "Tim BangBisnis benar-benar memahami kebutuhan bisnis saya, bukan cuma bikin website cantik. Hasilnya? Direct booking meningkat drastis, dan saya tidak perlu bayar komisi ke OTA sebesar dulu. Worth every rupiah.",
        result: "+65% direct booking",
    },
    {
        name: "Wayan Darma",
        role: "Direktur",
        business: "Bali Sacred Tours — Travel",
        location: "Denpasar, Bali",
        avatar: "WD",
        color: "#f59e0b",
        rating: 5,
        text: "Saya sudah coba beberapa jasa website sebelumnya, dan ini yang paling beda. Mereka tanya dulu strategi bisnis saya, baru desain. Bukan cuma copy-paste template. Leads dari landing page naik signifikan.",
        result: "+80% konversi leads",
    },
    {
        name: "Ketut Sari Dewi",
        role: "Owner",
        business: "Dewi Spa & Wellness",
        location: "Seminyak, Bali",
        avatar: "KS",
        color: "#ec4899",
        rating: 5,
        text: "Prosesnya sangat terstruktur — ada brief, ada revisi yang jelas, dan selesai tepat waktu. Tidak ada drama. Sekarang klien bisa baca semua info layanan dan langsung chat WhatsApp dari website. Sangat membantu.",
        result: "3x lebih banyak inquiry",
    },
];

function StarRating({ count = 5 }: { count?: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(count)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

function TestimonialCard({
    testimonial,
    index,
}: {
    testimonial: (typeof testimonials)[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="relative bg-[#111] border border-white/[0.06] hover:border-white/[0.12] rounded-3xl p-8 flex flex-col gap-6 transition-colors duration-300 cursor-default group"
        >
            {/* Glow on hover */}
            <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${testimonial.color}0a 0%, transparent 70%)`,
                }}
            />

            {/* Rating */}
            <StarRating count={testimonial.rating} />

            {/* Quote */}
            <p
                className="text-white/55 text-[0.9rem] leading-[1.85] flex-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                "{testimonial.text}"
            </p>

            {/* Result chip */}
            <div
                className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-[0.03em]"
                style={{
                    backgroundColor: `${testimonial.color}15`,
                    color: testimonial.color,
                    fontFamily: "'Inter', sans-serif",
                }}
            >
                <motion.span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: testimonial.color }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                />
                {testimonial.result}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06]" />

            {/* Author */}
            <div className="flex items-center gap-3.5">
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: `${testimonial.color}25`, fontFamily: "'Urbanist', sans-serif" }}
                >
                    <span style={{ color: testimonial.color }}>{testimonial.avatar}</span>
                </div>
                <div>
                    <p
                        className="text-white/80 text-[0.88rem] font-semibold"
                        style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.01em" }}
                    >
                        {testimonial.name}
                    </p>
                    <p
                        className="text-white/30 text-[0.78rem]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        {testimonial.role}, {testimonial.business}
                    </p>
                </div>
                <div className="ml-auto">
                    <span
                        className="text-white/20 text-[10px] tracking-[0.06em]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        {testimonial.location}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export function TestimonialsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    // Inject Review schema markup
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "testimonials-schema";
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "BangBisnis",
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: testimonials.length.toString(),
                bestRating: "5",
                worstRating: "5",
            },
            review: testimonials.map((t) => ({
                "@type": "Review",
                author: { "@type": "Person", name: t.name },
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: t.rating.toString(),
                    bestRating: "5",
                },
                reviewBody: t.text,
                itemReviewed: {
                    "@type": "LocalBusiness",
                    name: "BangBisnis",
                },
            })),
        });
        document.head.appendChild(script);
        return () => {
            const s = document.getElementById("testimonials-schema");
            if (s) s.remove();
        };
    }, []);

    return (
        <section
            id="testimoni"
            ref={containerRef}
            className="py-28 md:py-40 bg-[#0a0a0a] overflow-hidden relative"
        >
            {/* Ambient glow bg */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: bgY }}
            >
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.06]"
                    style={{
                        background:
                            "radial-gradient(ellipse, #10b981 0%, transparent 70%)",
                        filter: "blur(40px)",
                    }}
                />
            </motion.div>

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <SectionLabel number="06" label="Testimoni" light />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
                    <div>
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="text-white"
                                style={{
                                    fontFamily: "'Urbanist', sans-serif",
                                    fontSize: "clamp(2rem, 5vw, 3.8rem)",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                Apa Kata Klien
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    fontFamily: "'Urbanist', sans-serif",
                                    fontSize: "clamp(2rem, 5vw, 3.8rem)",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                <span className="italic text-white/30">Yang Pernah</span>
                                <span className="text-emerald-500"> Bekerja</span>
                                <motion.span
                                    className="text-emerald-500"
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    .
                                </motion.span>
                            </motion.h2>
                        </div>
                    </div>

                    {/* Aggregate rating badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-6 py-4 self-start"
                    >
                        <div>
                            <span
                                className="text-white block"
                                style={{
                                    fontFamily: "'Urbanist', sans-serif",
                                    fontSize: "2rem",
                                    letterSpacing: "-0.04em",
                                    lineHeight: 1,
                                }}
                            >
                                5.0
                            </span>
                            <StarRating count={5} />
                        </div>
                        <div className="h-10 w-px bg-white/[0.08]" />
                        <div>
                            <p
                                className="text-white/70 text-[0.8rem]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {testimonials.length} ulasan
                            </p>
                            <p
                                className="text-white/30 text-[0.72rem]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                rata-rata rating
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Grid: 2 cols on md, 4 on xl */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={t.name} testimonial={t} index={i} />
                    ))}
                </div>

                {/* Bottom trust line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
                >
                    <div className="flex items-center gap-2">
                        <motion.span
                            className="w-2 h-2 rounded-full bg-emerald-500"
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span
                            className="text-white/30 text-[12px] tracking-[0.06em]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Semua testimoni adalah klien nyata BangBisnis
                        </span>
                    </div>
                    <span className="hidden sm:block text-white/15">·</span>
                    <span
                        className="text-white/20 text-[12px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Nama dan bisnis di-verifikasi
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
