import { motion } from "motion/react";
import { TrendingUp, MousePointerClick, ShieldCheck, PieChart } from "lucide-react";

export function VillaSerenityPortfolio() {
    return (
        <div className="prose prose-invert prose-emerald md:prose-lg max-w-none 
            prose-h2:font-urbanist prose-h2:text-4xl prose-h2:-tracking-[0.03em] prose-h2:text-white prose-h2:mb-8 prose-h2:mt-16
            prose-p:text-white/60 prose-p:leading-[1.8] prose-p:font-light prose-p:mb-8
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-emerald-500 prose-a:no-underline hover:prose-a:text-emerald-400">

            <h2>Terjebak dalam Perang Harga di Online Travel Agent (OTA)</h2>
            <p>
                Sebagai properti eksklusif di jantung Ubud, <strong>Villa Serenity</strong> menonjol karena ketenangan dan kemewahannya. Namun, dari sisi bisnis, mereka sedang "berdarah". Mereka terlalu bergantung pada platform OTA besar (seperti Booking.com, Agoda, Airbnb) untuk mendatangkan tamu.
            </p>

            <p>
                Masalahnya jelas: setiap kali ada tamu yang menginap, OTA mengambil potongan komisi yang sangat besar (bisa mencapai 15-20%). Terlebih lagi, profil mereka di platform tersebut terlihat sama saja dengan ratusan villa pesaing lainnya. Harga menjadi satu-satunya faktor yang bersaing, memaksa mereka memangkas margin keuntungan.
            </p>

            <div className="my-10 p-8 rounded-3xl bg-indigo-950/20 border border-indigo-500/20">
                <h3 className="text-xl font-urbanist text-indigo-400 mb-4 uppercase tracking-widest text-[13px] font-bold">Tujuan Proyek</h3>
                <p className="text-white/80 font-medium leading-relaxed mb-0">
                    Membangun saluran pemesanan langsung <em>(direct channel)</em> yang kredibel untuk mengurangi ketergantungan OTA, mengembalikan margin keuntungan, dan memungkinkan Villa Serenity menampilkan karakter aslinya tanpa diatur oleh *template* aplikasi pihak ketiga.
                </p>
            </div>

            <h2>Mendesain Pengalaman Digital Semewah Villanya</h2>
            <p>
                Ketimbang membuat website standar berisi daftar kamar, BangBisnis merancang <strong>sebuah perjalanan emosional <em>(emotional journey)</em></strong>. Tujuannya adalah membuat calon tamu merasa sedemikian terhubung dengan nuansa villa sehingga mereka tidak peduli lagi untuk membandingkan harga di OTA.
            </p>

            {/* Interactive UI: OTA vs Direct Booking Graph */}
            <div className="not-prose my-16 bg-[#0a0f18] border border-indigo-500/20 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

                <div className="text-center mb-12 relative z-10">
                    <h4 className="text-white text-2xl font-['Urbanist'] mb-3">Simulasi Penghematan Komisi per Bulan</h4>
                    <p className="text-white/50 text-[15px] max-w-md mx-auto leading-relaxed">Asumsi: Pendapatan kotor Rp 100 Juta/Bulan. Bandingkan keuntungan bersih antara sistem OTA vs Web BangBisnis.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto relative z-10">
                    {/* Scenario 1: 100% OTA */}
                    <div className="bg-[#111827] border border-white/5 rounded-2xl p-6 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shrink-0">
                                <PieChart size={18} className="text-red-400" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-sm">Skenario Lama</h5>
                                <p className="text-white/40 text-[11px]">100% Booking via OTA (Potongan 18%)</p>
                            </div>
                        </div>

                        {/* Bar Graph OTA */}
                        <div className="w-full h-8 flex rounded-full overflow-hidden shrink-0">
                            <motion.div
                                className="h-full bg-emerald-500"
                                initial={{ width: 0 }} whileInView={{ width: "82%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                            />
                            <motion.div
                                className="h-full bg-red-500 relative flex items-center"
                                initial={{ width: 0 }} whileInView={{ width: "18%" }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.2 }}
                            >
                                <span className="absolute -top-7 right-0 text-red-400 text-[10px] font-bold whitespace-nowrap hidden sm:block">Komisi OTA Hilang</span>
                            </motion.div>
                        </div>

                        <div className="flex justify-between mt-3 text-[12px] shrink-0">
                            <span className="text-emerald-400 font-bold">Rp 82.000.000</span>
                            <span className="text-red-400 font-bold">- Rp 18.000.000</span>
                        </div>

                        <p className="text-white/40 text-[11px] mt-auto pt-6 text-center italic border-t border-white/5">Hampir 1/5 pendapatan bersih Anda diberikan ke aplikasi pihak ketiga setiap bulannya.</p>
                    </div>

                    {/* Scenario 2: With BangBisnis */}
                    <div className="bg-[#111827] border border-indigo-500/20 rounded-2xl p-6 flex flex-col h-full ring-1 ring-indigo-500/10 shadow-[0_0_30px_rgba(99,102,241,0.1)] relative">
                        <div className="absolute -top-3 -right-3 bg-indigo-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">New System</div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shrink-0">
                                <ShieldCheck size={18} className="text-indigo-400" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-sm">Skenario BangBisnis</h5>
                                <p className="text-white/40 text-[11px]">60% Direct Booking (Via Website)</p>
                            </div>
                        </div>

                        {/* Bar Graph BangBisnis */}
                        <div className="w-full h-8 flex rounded-full overflow-hidden shrink-0">
                            <motion.div
                                className="h-full bg-emerald-500 flex items-center relative overflow-hidden"
                                initial={{ width: 0 }} whileInView={{ width: "93%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
                            >
                                <motion.div
                                    className="absolute top-0 -left-10 h-full w-4 bg-white/30 skew-x-[30deg]"
                                    animate={{ left: "150%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 2, ease: "linear" }}
                                />
                            </motion.div>
                            <motion.div
                                className="h-full bg-red-500"
                                initial={{ width: 0 }} whileInView={{ width: "7%" }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.5 }}
                            />
                        </div>

                        <div className="flex justify-between mt-3 text-[12px] shrink-0">
                            <span className="text-emerald-400 font-bold">Rp 93.000.000</span>
                            <span className="text-red-400 font-bold">Rp 7.000.000</span>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-center gap-2">
                            <TrendingUp size={14} className="text-indigo-400" />
                            <span className="text-indigo-300 font-bold text-[12px] tracking-wide">+ Rp 11 Juta <span className="text-white/40 font-normal">Terselamatkan/Bulan</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                Ini adalah strategi yang kami terapkan:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-3">
                <li><strong>Immersive Visual Storytelling:</strong> Kami menggunakan ruang putih <i>(whitespace)</i> yang luas, palet warna alam, serta tipografi elegan. Begitu website dibuka, video latar belakang yang halus memperlihatkan embun padi di pagi hari. Hal ini tidak bisa dilakukan di OTA yang kaku.</li>
                <li><strong>Frictionless Direct Inquiry:</strong> Tidak seperti OTA yang memaksa user membuat akun, kami menyediakan formulir pemesanan ringkas. Calon tamu dapat meminta ketersediaan kamar yang langsung masuk ke WhatsApp manajer villa untuk respon personal dalam hitungan menit.</li>
                <li><strong>Sistem "Best Rate Guarantee":</strong> Kami menambahkan bagian khusus yang secara psikologis meyakinkan tamu bahwa memesan langsung melalui website akan selalu memberikan harga termurah dibandingkan lewat aplikasi mana pun (karena tidak ada biaya komisi di tengah).</li>
            </ul>

            <h2>Independensi Bisnis yang Sesungguhnya</h2>
            <p>
                Website diluncurkan bersamaan dengan kampanye media sosial kecil-kecilan. Tamu-tamu lama (yang biasanya kembali memesan lewat OTA) diinformasikan mengenai website baru dengan sebuah promosi diskon eksklusif.
            </p>

            <div className="flex flex-col md:flex-row gap-6 my-14">
                <div className="md:w-1/2 rounded-3xl overflow-hidden border border-white/10 relative">
                    <img src="/img-portfolio-2.webp" alt="Foto Premium Villa Serenity" className="w-full h-full object-cover min-h-[250px]" />
                </div>
                <div className="md:w-1/2 rounded-3xl bg-indigo-950/20 border border-indigo-500/20 p-8 flex flex-col justify-center">
                    <h3 className="text-indigo-400 font-['Urbanist'] text-4xl mb-2 font-bold leading-none">65%</h3>
                    <p className="font-bold text-white text-lg mb-2">Lonjakan Direct Booking</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-0">Dalam enam bulan pertama sejak peluncuran website. Uang komisi OTA berhasil dikonversi menjadi laba bersih operasional.</p>
                </div>
            </div>

            <p>
                Hasilnya sangat signifikan. Pendapatan mereka jauh lebih sehat karena uang dari komisi yang sebelumnya dibayarkan ke OTA kini dikonversi menjadi laba bersih operasional. Mereka kini memiliki sebuah identitas digital elegan yang 100% mereka kontrol harganya.
            </p>
        </div>
    );
}
