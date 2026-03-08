import { motion } from "motion/react";
import { ArrowRight, MessageCircle, PhoneCall, Bot, FastForward, CheckCircle2, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export function IntegrasiWhatsApp() {
    useEffect(() => {
        document.title = "Jasa Integrasi WhatsApp Chat Website di Bali | BangBisnis";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Jasa integrasi WhatsApp ke website untuk bisnis di Bali. Mudahkan pelanggan menghubungi Anda secara instan dan tingkatkan konversi penjualan dengan tombol chat floating.");
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = "Jasa integrasi WhatsApp ke website untuk bisnis di Bali. Mudahkan pelanggan menghubungi Anda secara instan dan tingkatkan konversi penjualan dengan tombol chat floating.";
            document.head.appendChild(meta);
        }
    }, []);
    const whatsappUrl =
        "https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20butuh%20bantuan%20terkait%20Integrasi%20WhatsApp%20untuk%20website%20saya.";

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
                            <PhoneCall size={14} /> Fitur & Integrasi
                        </div>
                        <h1
                            className="text-white mb-6"
                            style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
                        >
                            Pembeli Pergi Karena Anda <span className="italic text-white/40">Telat Balas?</span>
                        </h1>
                        <p className="text-white/40 mb-8 max-w-xl text-[1.05rem] leading-relaxed">
                            Di era serba instan, 78% pelanggan membeli dari bisnis yang membalas paling cepat. Jangan biarkan *leads* panas menguap karena menunggu email balasan. Integrasikan WhatsApp di website Anda sekarang dan sulap pengunjung menjadi pembeli detik ini juga.
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
                                <span className="relative z-10 font-bold">Tangkap Leads Sekarang</span>
                                <ArrowRight size={15} className="relative z-10" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
                        <img
                            src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                            alt="WhatsApp Integration on Websites"
                            loading="lazy"
                            className="w-full aspect-[4/3] object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10"
                        />
                    </motion.div>
                </div>

                {/* Benefits & Marketing */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.02em" }}>Jembatan Langsung ke Kantong Pelanggan</h2>
                        <p className="text-white/45 max-w-2xl mx-auto text-[1.05rem] leading-relaxed">Menghilangkan semua hambatan (*friction*) saat pelanggan sedang ragu. Kami rancang sistem WhatsApp dinamis yang membuat mereka merasa dibantu, bukan dijual.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: CheckCircle2, title: "Pesan Otomatis (Pre-filled)", desc: "Customer zaman sekarang malas mengetik. Begitu mereka klik tombol WhatsApp di web, chat sudah otomatis terisi (misal: 'Halo Admin, saya tertarik dengan Layanan A'). Konversi naik drastis karena mereka tinggal kirim." },
                            { icon: FastForward, title: "Tombol Floating Menggoda", desc: "Berikan rasa aman dengan ikon WhatsApp elegan yang selalu mengikuti layar saat pembeli *scroll* halaman. Kapan pun mereka punya pertanyaan fatal yang menahan pembelian, bantuan hanya berjarak 1 klik." },
                            { icon: Bot, title: "Sistem Multi-Agent Cerdas", desc: "Punya 3 Admin (Sales, Support, Info)? Daripada pelanggan bingung, kami buatkan menu cabang WhatsApp. Pesan masuk ke divisi yang tepat, pembeli dilayani lebih cepat, admin bebas *burnout*." },
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
                        Menyulap WhatsApp Menjadi <span className="text-emerald-400 italic">Mesin Kasir Otomatis</span> 24 Jam
                    </h2>

                    <div className="space-y-6 text-white/50 text-[1.05rem] leading-relaxed font-light">
                        <p>
                            Bagi sebagian besar masyarakat Indonesia, transaksi e-commerce konvensional (*tambah ke keranjang, isi form panjang, transfer virtual account*) terkadang terasa terlalu kaku dan impersonal. Budaya konsumen lokal sangat kental dengan tawar-menawar, bertanya soal stok spesifik, dan membangun "rasa cocok" dengan penjual sebelum mentransfer uang. Disinilah *Conversational Commerce* (Perdagangan Berbasis Obrolan) lewat WhatsApp mendikte pasar.
                        </p>

                        <h3 className="text-white text-2xl font-['Urbanist'] mt-10 mb-4 tracking-tight">Lubang Bocor di Saluran Penjualan Anda</h3>
                        <p>
                            Namun, mengandalkan WhatsApp biasa saja tanpa integrasi di website adalah sebuah kesalahan fatal. Mengapa? Karena calon pelanggan (*leads*) jarang mau repot:
                        </p>
                        <ol className="list-decimal pl-5 space-y-3 mt-4 text-white/60 text-[0.95rem]">
                            <li>Melihat nomor HP di *bio* Instagram.</li>
                            <li>Menyalin nomor tersebut, atau lebih parah, mengetiknya ulang secara manual.</li>
                            <li>Menyimpannya ke buku kontak agar muncul di WhatsApp.</li>
                            <li>Mengetik pesan "Halo Kak, mau tanya harga botol A".</li>
                        </ol>
                        <p>
                            <strong className="text-white/80">Setiap langkah ekstra adalah peluang *Drop Off* (pelanggan batal membeli).</strong> Sistem kami memangkas 4 langkah menyiksa ini menjadi <strong className="text-emerald-400">1 kali klik</strong>.
                        </p>

                        {/* Interactive UI: Simulated Live Chat */}
                        <div className="my-14 bg-[#081a12] border border-emerald-500/20 rounded-3xl p-6 md:p-10 relative overflow-hidden flex flex-col items-center">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                            <div className="text-center mb-8 relative z-20">
                                <h4 className="text-white text-xl font-['Urbanist'] mb-2"><span className="text-emerald-400 font-bold">1-Click</span> Conversational Commerce</h4>
                                <p className="text-white/40 text-sm max-w-sm mx-auto">Simulasi apa yang terjadi ketika pelanggan menekan tombol Beli di website Anda.</p>
                            </div>

                            {/* Phone Mockup Window */}
                            <div className="w-full max-w-sm bg-[#0b141a] rounded-[2rem] border-[6px] border-neutral-800 shadow-2xl overflow-hidden relative z-10 flex flex-col h-[400px]">
                                {/* Chat Header */}
                                <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
                                    <ArrowRight size={16} className="text-white/60" />
                                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold shrink-0">B</div>
                                    <div className="flex-1">
                                        <p className="text-white text-[13px] font-bold">Admin BangBisnis</p>
                                        <p className="text-white/60 text-[10px]">online</p>
                                    </div>
                                    <PhoneCall size={14} className="text-white/60" />
                                </div>

                                {/* Chat Body Area */}
                                <div className="flex-1 bg-[#0b141a] p-4 flex flex-col gap-3 overflow-hidden relative">
                                    {/* Web Pre-filled message (Right) */}
                                    <motion.div
                                        className="self-end max-w-[85%] bg-[#005c4b] text-[#e9edef] p-2.5 rounded-xl rounded-tr-none text-[13px] shadow-sm relative group"
                                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                    >
                                        <p>Halo Admin, saya mau pesan <b>Paket Premium Website</b> via promo mendarat dari Google. Apakah slot masih ada?</p>
                                        <span className="text-white/40 text-[9px] float-right mt-1 ml-2 flex items-center gap-1">10:45 <CheckCircle2 size={10} className="text-[#53bdeb]" /></span>
                                        {/* Tooltip hint */}
                                        <div className="absolute -left-32 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur text-white/50 text-[10px] px-2 py-1 rounded border border-white/10 whitespace-nowrap pointer-events-none">
                                            Teks ini terisi otomatis!
                                        </div>
                                    </motion.div>

                                    {/* Typing Indicator (Left) */}
                                    <motion.div
                                        className="self-start bg-[#202c33] text-[#e9edef] p-3 rounded-xl rounded-tl-none w-14 flex gap-1 justify-center items-center shadow-sm"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: [1, 1, 0], display: ["flex", "flex", "none"] }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 1.5, delay: 1.2, times: [0, 0.9, 1] }}
                                    >
                                        <motion.div className="w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                                        <motion.div className="w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                                        <motion.div className="w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                                    </motion.div>

                                    {/* Admin Auto-Reply (Left) */}
                                    <motion.div
                                        className="self-start max-w-[85%] bg-[#202c33] text-[#e9edef] p-2.5 rounded-xl rounded-tl-none text-[13px] shadow-sm"
                                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.3, delay: 2.7 }}
                                    >
                                        <p>Halo Kak! 👋 Terimakasih sudah menghubungi BangBisnis.</p>
                                        <p className="mt-1">Wah, kebetulan banget. Slot untuk Paket Premium bulan ini sisa <b>2 antrean</b> lagi.</p>
                                        <p className="mt-1 text-emerald-400">Mau kita kunci slotnya sekarang agar tidak diambil kompetitor?</p>
                                        <span className="text-white/40 text-[9px] float-right mt-1 ml-2">10:45</span>
                                    </motion.div>
                                </div>
                                {/* Input Bar */}
                                <div className="bg-[#202c33] px-3 py-2 flex items-center gap-2">
                                    <div className="flex-1 bg-[#2a3942] rounded-full h-8 flex items-center px-4">
                                        <span className="text-white/30 text-[12px]">Ketik pesan...</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-white text-2xl font-['Urbanist'] mt-10 mb-4 tracking-tight">Keranjang Belanja Langsung ke Chat (*Abandoned Cart Killer*)</h3>
                        <p>
                            Untuk toko online skala besar, tombol WhatsApp sekadar untuk "tanya-tanya" tidak efisien. Di *BangBisnis*, kami merancang integrasi level *e-commerce*:
                        </p>
                        <p>
                            Pembeli bisa menekan tombol "Beli via WA" di halaman produk, dan seketika aplikasi WhatsApp mereka akan terbuka dengan teks pesan yang sudah terotomatisasi secara cantik membawa nama produk, varian ukuran, hingga kode SKU. Admin Anda tidak perlu repot menebak apa yang ditanyakan pelanggan, dan pesanan bisa langsung direkap.
                        </p>
                    </div>
                </div>

                {/* CTA Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 bg-emerald-950/30 border border-emerald-500/20 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/10"
                >
                    <div className="absolute top-0 right-1/2 w-64 h-64 bg-emerald-500/20 blur-[120px] rounded-full mix-blend-screen" />
                    <h2 className="text-white text-3xl md:text-5xl mb-6 relative z-10" style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}>Banjir Chat Pelanggan<br /><span className="italic text-emerald-400">Hari Ini Juga</span></h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto relative z-10 text-[1.1rem]">Setiap detik website Anda tayang tanpa kemudahan akses WhatsApp, Anda sedang membocorkan anggaran iklan ke kompetitor. Ubah website Anda menjadi mesin penangkap *leads* sekarang.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-bold text-[15px] hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] relative z-10">
                        Integrasikan WhatsApp ke Web <MessageCircle size={20} />
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
                        "serviceType": "Jasa Integrasi WhatsApp Website",
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
                        "description": "Jasa pengaturan dan integrasi tombol chat WhatsApp langsung ke website bisnis Anda untuk mempercepat komunikasi dengan pelanggan."
                    })
                }}
            />
        </div>
    );
}
