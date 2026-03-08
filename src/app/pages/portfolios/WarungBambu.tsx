import { motion } from "motion/react";
import { MessageCircle, Menu as MenuIcon, CheckCircle2, QrCode } from "lucide-react";

export function WarungBambuPortfolio() {
    return (
        <div className="prose prose-invert prose-emerald md:prose-lg max-w-none 
            prose-h2:font-urbanist prose-h2:text-4xl prose-h2:-tracking-[0.03em] prose-h2:text-white prose-h2:mb-8 prose-h2:mt-16
            prose-p:text-white/60 prose-p:leading-[1.8] prose-p:font-light prose-p:mb-8
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-emerald-500 prose-a:no-underline hover:prose-a:text-emerald-400">

            <h2>Sebuah Bisnis Kuliner Hebat yang "Tersembunyi" dari Turis</h2>
            <p>
                Banyak wisatawan datang ke Bali mencari pengalaman kuliner autentik, tetapi sering kali berakhir di tempat yang sekadar "viral" di internet. Inilah yang dialami <strong>Warung Bambu</strong>. Sebagai restoran dengan masakan luar biasa dan suasana tradisional yang kental, mereka menghadapi masalah klasik: <em>lokasi yang kurang strategis dan kurangnya visibilitas digital</em>.
            </p>

            <p>
                Mengandalkan papan nama di depan jalan gang dan <i>word-of-mouth</i> tidak lagi cukup. Apalagi saat musim sepi <i>(low season)</i>, meja-meja sering kosong padahal dapur siap menyajikan makanan terbaik mereka.
            </p>

            <div className="my-10 p-8 rounded-3xl bg-[#0a1510] border border-emerald-500/10">
                <h3 className="text-xl font-urbanist text-emerald-400 mb-6 uppercase tracking-widest text-[13px] font-bold">Tantangan Utama</h3>
                <ul className="space-y-4 mb-0 list-none pl-0">
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/20">
                            <span className="text-emerald-500 font-bold">1</span>
                        </div>
                        <span className="text-white/70">Turis kesulitan menemukan lokasi persis mereka di Google Maps karena berada di dalam gang.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/20">
                            <span className="text-emerald-500 font-bold">2</span>
                        </div>
                        <span className="text-white/70">Menu fisik beresiko rusak dan tidak bisa diakses calon pelanggan online sebelum mereka memutuskan berkunjung.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/20">
                            <span className="text-emerald-500 font-bold">3</span>
                        </div>
                        <span className="text-white/70">Proses reservasi manual via telepon sering merepotkan turis mancanegara yang terhalang kendala bahasa.</span>
                    </li>
                </ul>
            </div>

            <h2>Dari Papan Nama Kayu ke Etalase Digital yang Menjual</h2>
            <p>
                Tim BangBisnis tidak sekadar membuatkan website berbentuk "brosur online". Kami merancang sebuah <strong>sistem akuisisi pelanggan</strong> yang bekerja 24 jam untuk Warung Bambu.
            </p>

            <p>
                Pertama, kami melakukan sesi fotografi kuliner. Kemudian, kami membangun struktur halaman yang menuntun pengunjung dari menyadari <em>("Wah, tempatnya otentik")</em> menjadi menginginkan <em>("Saya mau makan Bebek Betutu ini")</em> hingga bertindak <em>("Saya reservasi meja sekarang")</em>.
            </p>

            {/* Interactive UI: Smart Menu & WA Booking */}
            <div className="not-prose my-16 bg-[#050a08] border border-emerald-500/20 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-1/2 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen" />

                <div className="text-center mb-12 relative z-10">
                    <h4 className="text-white text-2xl font-['Urbanist'] mb-3">Simulasi Smart Resto System</h4>
                    <p className="text-white/50 text-[15px] max-w-md mx-auto leading-relaxed">Dari melihat menu digital interaktif berujung pada reservasi otomatis via WhatsApp dalam hitungan detik.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 relative z-10">

                    {/* Step 1: Scan / Menu */}
                    <div className="flex flex-col items-center">
                        <motion.div
                            className="w-48 h-64 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col p-4 shadow-xl"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                                <MenuIcon size={18} className="text-white/40" />
                                <span className="text-[10px] font-bold tracking-wider text-emerald-500 uppercase">Warung Bambu</span>
                                <QrCode size={18} className="text-white/40" />
                            </div>

                            {/* Food Items */}
                            <div className="space-y-3 flex-1">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="w-12 h-12 bg-neutral-800 rounded-lg shrink-0"></div>
                                        <div className="flex-1">
                                            <div className="h-3 w-3/4 bg-white/20 rounded mb-2"></div>
                                            <div className="h-2 w-1/2 bg-white/10 rounded mb-2"></div>
                                            <div className="h-3 w-1/4 bg-emerald-500/50 rounded"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                className="w-full bg-emerald-600 text-white text-[11px] font-bold py-2.5 rounded-xl uppercase tracking-wider shadow-lg shadow-emerald-900/40 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                            >
                                <span className="relative z-10">Book a Table</span>
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            </motion.button>
                        </motion.div>
                        <span className="text-white/40 text-[13px] font-medium mt-6 bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/[0.05]">1. Turis Buka Menu Web</span>
                    </div>

                    {/* Arrow Connection */}
                    <div className="hidden md:flex flex-col items-center justify-center relative w-16 h-16">
                        <motion.div
                            className="absolute w-full h-0.5 bg-gradient-to-r from-emerald-500/10 via-emerald-500 to-emerald-500/10"
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                        <motion.div
                            className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)] absolute z-10"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 20, opacity: 0 }}
                            viewport={{ once: true }}
                            animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                        />
                    </div>

                    {/* Arrow Down Mobile */}
                    <div className="md:hidden w-0.5 h-10 bg-gradient-to-b from-emerald-500/20 to-emerald-500/50" />

                    {/* Step 2: WA Message */}
                    <div className="flex flex-col items-center">
                        <motion.div
                            className="w-56 bg-[#0b141a] border-[5px] border-neutral-800 rounded-[2rem] p-3 shadow-2xl relative"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <div className="bg-[#202c33] -mx-3 -mt-3 p-3 rounded-t-[1.6rem] flex items-center gap-2 mb-3 border-b border-white/5">
                                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] text-white font-bold">W</div>
                                <span className="text-white text-[11px] font-bold">Warung Bambu</span>
                            </div>

                            <motion.div
                                className="bg-[#005c4b] max-w-[90%] p-2.5 rounded-xl rounded-tr-sm ml-auto relative"
                                initial={{ scale: 0.8, opacity: 0, originX: 1, originY: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, delay: 1.5 }}
                            >
                                <p className="text-[#e9edef] text-[10px] leading-relaxed">
                                    Hello, I would like to reserve a table for <b>2 Persons</b>. <br /><br />
                                    Date: <b>Tomorrow</b><br />
                                    Time: <b>19:00</b>
                                </p>
                                <div className="text-[8px] text-white/50 text-right mt-1 flex justify-end gap-1">
                                    19:42 <CheckCircle2 size={10} className="text-[#53bdeb]" />
                                </div>
                            </motion.div>

                            {/* Decorative bubbles */}
                            <div className="mt-2 bg-[#202c33] max-w-[60%] p-2 rounded-xl rounded-tl-sm opacity-50">
                                <div className="h-1.5 w-full bg-white/20 rounded mb-1"></div>
                                <div className="h-1.5 w-1/2 bg-white/20 rounded"></div>
                            </div>
                        </motion.div>
                        <span className="text-white/40 text-[13px] font-medium mt-6 bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/[0.05] relative z-10 flex items-center gap-2">
                            <MessageCircle size={14} className="text-emerald-500" />
                            2. WA Otomatis Terisi
                        </span>
                    </div>

                </div>
            </div>

            <p>
                Fitur kunci yang kami implementasikan:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-3">
                <li><strong>Smart Digital Menu:</strong> Menu interaktif dua bahasa (Inggris/Indonesia) dengan foto menggugah selera dan harga transparan. <i>Bye-bye</i> PDF kusam dari Google Drive.</li>
                <li><strong>One-Click WhatsApp Booking:</strong> Tombol sticky yang memungkinkan turis langsung mem-booking meja dengan format template otomatis seperti simulasi di atas. Admin resto tidak perlu pusing menerka pesanan tamu.</li>
                <li><strong>Local SEO Dominance:</strong> Kami menyuntikkan kata kunci spesifik *"authentic balinese restaurant in [lokasi]* sehingga ketika turis mencari makanan terdekat, Warung Bambu tampil di deretan teratas di atas kompetitor yang lebih mewah.</li>
            </ul>

            <h2>Hasilnya: Meja Penuh Bahkan di Hari Kerja</h2>
            <p>
                Transformasi digital ini mengubah alur bisnis Warung Bambu secara drastis. Website bertindak sebagai jembatan yang menghubungkan pencarian niat tinggi di Google Maps menjadi konversi reservasi WA yang pasti.
            </p>

            <div className="relative my-14 w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
                <img src="/img-portfolio-1.webp" alt="Pemandangan asri Warung Bambu yang tadinya tersembunyi kini penuh didatangi konsumen dari website" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                <div className="absolute bottom-6 left-8 z-20">
                    <p className="text-emerald-400 font-bold text-lg mb-1 drop-shadow-lg">+40% Peningkatan Omset</p>
                    <p className="text-white drop-shadow-lg text-sm">Didominasi turis asing dari pencarian organik</p>
                </div>
            </div>

            <p>
                Hanya dalam waktu <strong>8 minggu setelah peluncuran</strong>, Warung Bambu mencetak angka manis. Peningkatan 40% dalam reservasi online (sebelumnya hampir nol) menstabilkan pendapatan restoran. Pemilik kini lebih fokus menjaga kualitas rasa masakan, sementara website menangani urusan mendatangkan tamu baru secara pasif.
            </p>
        </div>
    );
}
