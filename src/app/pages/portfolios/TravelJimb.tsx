import { motion } from "motion/react";
import { CalendarDays, BellRing, PlaneTakeoff, ShieldCheck } from "lucide-react";

export function TravelJimbPortfolio() {
    return (
        <div className="prose prose-invert prose-sky md:prose-lg max-w-none 
            prose-h2:font-urbanist prose-h2:text-4xl prose-h2:-tracking-[0.03em] prose-h2:text-white prose-h2:mb-8 prose-h2:mt-16
            prose-p:text-white/60 prose-p:leading-[1.8] prose-p:font-light prose-p:mb-8
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-sky-500 prose-a:no-underline hover:prose-a:text-sky-400">

            <h2>Menghadapi Raksasa di Industri Pariwisata Bali</h2>
            <p>
                Industri tur dan layanan transportasi pribadi di Bali luar biasa kompetitif. Ratusan sopir independen memperebutkan perhatian turis yang sama di grup Facebook maupun forum internet. Itulah tantangan yang dihadapi <strong>TravelJimb</strong>.
            </p>

            <p>
                Sebelum kami campur tangan, TravelJimb hanya mengandalkan profil Instagram dan kartu nama fisik di bandara. Meskipun pelayanannya sangat luar biasa (bintang 5 di TripAdvisor rata-rata), mereka kalah cepat bersaing dengan perusahaan besar yang mendominasi mesin pencari ketika turis asing mengetik *"Bali private driver"* sebelum mereka naik pesawat.
            </p>

            <div className="my-10 p-8 rounded-3xl bg-sky-950/20 border border-sky-500/20 text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                    <ShieldCheck size={28} className="text-red-400" />
                </div>
                <h3 className="text-xl font-urbanist text-sky-400 mb-2 font-bold">Masalah Mendasar: <i>Trust Issue</i></h3>
                <p className="text-white/70 max-w-2xl mx-auto mb-0 leading-relaxed text-[15px]">
                    Turis barat (Australia/Eropa) memiliki tingkat kecurigaan tinggi terhadap layanan informal tak berlabel. Mereka memilih untuk "main aman" dengan vendor mahal asalkan ada jaminan komitmen dan profesionalisme via sebuah website yang kredibel.
                </p>
            </div>

            <h2>Struktur Halaman yang Menghapus Keraguan Pelanggan</h2>
            <p>
                BangBisnis merancang sebuah <em>"Professional Landing Page"</em> yang secara instan mengangkat derajat brand TravelJimb dari <em>"sekadar supir sewaan"</em> menjadi <strong>"partner travel eksklusif Anda di Pulau Dewata"</strong>.
            </p>

            <p>
                Daripada hanya memberikan daftar harga harian yang membosankan, kami merombak pendekatannya menjadi berbasis "Pengalaman Liburan yang Terencana":
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-3">
                <li><strong>Paket Kurasi Visual:</strong> Kami mengelompokkan layanan menjadi "Ubud Cultural Tour", "South Bali Beach Hopping", dan "Custom Itinerary". Setiap paket memiliki landing section sendiri dengan foto hero besar yang menakjubkan.</li>
                <li><strong>Sistem Pemesanan Cerdas-Cepat:</strong> Kami meninggalkan sistem formulir panjang. Alih-alih, kami mengikat setiap tombol "Pesan Sekarang" dengan parameter WhatsApp yang terisi otomatis (mengurangi friksi drop-off).</li>
                <li><strong>Social Proof Sekali Lirik:</strong> Kami menempatkan cuplikan ulasan asli (dengan wajah bahagia pelanggan asing) tepat di bawah section Hero, membangun rasa aman pada detik ke-3 turis mengunjungi website.</li>
            </ul>

            {/* Interactive UI: Booking Auto-Pilot Simulation */}
            <div className="not-prose my-16 bg-[#050a12] border border-sky-500/20 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

                <div className="text-center mb-12 relative z-10">
                    <h4 className="text-white text-2xl font-['Urbanist'] mb-3">Simulasi <i>Booking Auto-Pilot</i></h4>
                    <p className="text-white/50 text-[15px] max-w-md mx-auto leading-relaxed">Bagaimana website profesional memungkinkan TravelJimb mengamankan jadwal sebulan penuh selagi pemiliknya menyetir.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative z-10">

                    {/* Phone Notification Mockup */}
                    <div className="w-64 h-[400px] bg-[#111827] border-[6px] border-[#1e293b] rounded-[2.5rem] p-3 shadow-2xl relative overflow-hidden flex flex-col pt-8">
                        {/* Status Bar Fake */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20"></div>
                        <div className="absolute top-3 right-5 flex gap-1 items-center z-20">
                            <div className="w-3 h-2 bg-white/50 rounded-sm"></div>
                            <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                        </div>

                        {/* Wallpaper */}
                        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 to-[#111827] z-0" />

                        {/* Notifications */}
                        <div className="flex-1 relative z-10 flex flex-col gap-3 py-4">
                            {[
                                { name: "Mark (AUS)", date: "Aug 12-15", delay: 0.5 },
                                { name: "Sarah (UK)", date: "Aug 18", delay: 2 },
                                { name: "Kenzo (JP)", date: "Aug 22-25", delay: 3.5 },
                            ].map((notif, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg"
                                    initial={{ y: -20, opacity: 0, scale: 0.9 }}
                                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: notif.delay }}
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <div className="w-5 h-5 bg-[#25D366] rounded-md flex items-center justify-center">
                                            <BellRing size={10} className="text-white" />
                                        </div>
                                        <span className="text-white text-[10px] font-bold">New Booking Request!</span>
                                    </div>
                                    <p className="text-white/80 text-[11px] leading-tight">
                                        <b>{notif.name}</b> membidik paket <b>Ubud Tour</b> untuk tanggal <span className="text-sky-300 font-bold">{notif.date}</span>.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Arrow Connection */}
                    <div className="hidden md:flex flex-col items-center justify-center relative w-16 h-16">
                        <motion.div
                            className="absolute w-full h-0.5 bg-gradient-to-r from-sky-500/10 via-sky-500 to-sky-500/10"
                            initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        />
                        <motion.div
                            className="w-3 h-3 bg-sky-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)] absolute z-10"
                            initial={{ x: -20, opacity: 0 }} whileInView={{ x: 20, opacity: 0 }} viewport={{ once: true }} animate={{ x: [-20, 20], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                        />
                    </div>

                    {/* Arrow Down Mobile */}
                    <div className="md:hidden w-0.5 h-10 bg-gradient-to-b from-sky-500/20 to-sky-500/50" />

                    {/* Calendar View Mockup */}
                    <div className="w-64 bg-[#1e293b] rounded-3xl p-5 border border-white/5 shadow-2xl relative">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-white font-bold text-sm">August 2026</h5>
                            <CalendarDays size={16} className="text-sky-400" />
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-white/40 mb-2">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => <span key={d}>{d}</span>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {/* Dummy Calendar Grid */}
                            {[...Array(31)].map((_, i) => {
                                const day = i + 1;
                                const isBookedMark = day >= 12 && day <= 15;
                                const isBookedSarah = day === 18;
                                const isBookedKenzo = day >= 22 && day <= 25;

                                let bgClass = "bg-white/5";
                                let textClass = "text-white/60";
                                let delayAnim = 0;

                                if (isBookedMark) { bgClass = "bg-sky-500"; textClass = "text-white font-bold"; delayAnim = 0.8; }
                                else if (isBookedSarah) { bgClass = "bg-sky-500"; textClass = "text-white font-bold"; delayAnim = 2.3; }
                                else if (isBookedKenzo) { bgClass = "bg-sky-500"; textClass = "text-white font-bold"; delayAnim = 3.8; }


                                return (
                                    <motion.div
                                        key={i}
                                        className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] ${bgClass} ${textClass}`}
                                        initial={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                                        whileInView={delayAnim ? { backgroundColor: "#0ea5e9" } : {}}
                                        viewport={{ once: true }}
                                        transition={{ delay: delayAnim, duration: 0.3 }}
                                    >
                                        {day}
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-5 p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 flex gap-3 text-left items-start">
                            <PlaneTakeoff size={14} className="text-sky-400 shrink-0 mt-0.5" />
                            <p className="text-sky-100 text-[11px] font-medium m-0 leading-tight">Tamunya masih di negaranya, tapi jadwal tur sudah terkunci lunas.</p>
                        </div>
                    </div>

                </div>
            </div>

            <h2>Memenangkan Klien Saat Mereka Masih Berada di Negaranya</h2>
            <p>
                Kini, TravelJimb menduduki posisi tawar yang jauh lebih baik. Sang pemilik bercerita bahwa banyak tamunya sekarang mem-booking jadwal <strong>1 sampai 2 bulan sebelum mereka tiba di Bali</strong>. Mereka tidak perlu lagi berebut berebut tamu dadakan di bandara atau hotel.
            </p>

            <div className="relative my-14 w-full rounded-3xl overflow-hidden border border-white/10 p-8 md:p-12 bg-gradient-to-br from-slate-900 to-black">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-['Urbanist'] text-white mb-2 font-bold">Lompatan Kualitas yang Drastis</h3>
                        <p className="text-sky-200/60 max-w-lg mb-0">Lebih dari sekadar website pesanan naik; branding ini mengizinkan supir Bali lokal menaikkan harga jual jasa yang layak dengan kualitas pelayanannya.</p>
                    </div>
                    <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10 w-full md:w-auto">
                        <span className="block text-sky-400 font-bold text-3xl mb-1">Tanpa Tawar-Menawar</span>
                        <span className="text-white/50 text-sm">Turis percaya harga yang dipasang adalah Premium & Fixed.</span>
                    </div>
                </div>
            </div>

            <p>
                Lebih baik lagi, memiliki website profesional memungkinkan TravelJimb menetapkan harga layanan (rate harian) sesuai kualitas kerjanya sungguhan, <strong>tanpa ditawar habis-habisan</strong> oleh turis bule. Kesan mewah dan mapan berhasil ditangkap pertama kali, mengubah tamu <i>"hit-and-run"</i> menjadi langganan loyal.
            </p>
        </div>
    );
}
