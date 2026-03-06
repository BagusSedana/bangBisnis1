import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama pengerjaan website?",
    a: "Estimasi pengerjaan berkisar antara 7–14 hari kerja, tergantung pada kompleksitas proyek dan kecepatan feedback dari Anda.",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "Pembayaran dibagi dua tahap: 50% di awal sebagai tanda jadi, dan 50% setelah website selesai dan siap diluncurkan. Tidak ada biaya tersembunyi.",
  },
  {
    q: "Apakah termasuk domain dan hosting?",
    a: "Harga paket belum termasuk biaya domain dan hosting. Kami akan membantu Anda memilih dan setup domain serta hosting yang sesuai dengan kebutuhan.",
  },
  {
    q: "Bagaimana proses revisi dilakukan?",
    a: "Revisi dilakukan secara terstruktur. Setelah desain awal selesai, Anda mendapat kesempatan untuk memberikan feedback. Setiap revisi dikerjakan dalam 2–3 hari kerja.",
  },
  {
    q: "Apakah website responsive di semua perangkat?",
    a: "Ya, semua website yang kami buat dioptimasi untuk tampil sempurna di desktop, tablet, dan smartphone. Responsivitas adalah standar dasar kami.",
  },
  {
    q: "Apakah bisa upgrade di masa depan?",
    a: "Tentu. Website yang kami bangun dirancang dengan struktur fleksibel, sehingga memudahkan penambahan fitur atau halaman baru di kemudian hari.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 md:py-44 bg-[#fafaf9] overflow-hidden relative">
      {/* Giant watermark */}
      <motion.span
        className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] tracking-[-0.05em] text-[#f0efe9] select-none pointer-events-none"
        style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: 0.8 }}
      >
        08
      </motion.span>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="08" label="FAQ" />

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              Pertanyaan yang
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              sering <span className="italic text-[#bbb]">ditanyakan</span>
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

        {/* FAQ items — full width editorial */}
        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-[#e8e8e3] last:border-b"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 md:gap-8 py-7 md:py-9 text-left group cursor-pointer"
                >
                  {/* Number */}
                  <motion.span
                    className={`text-[13px] tracking-[0.1em] shrink-0 w-8 transition-colors duration-500 ${isOpen ? "text-emerald-500" : "text-[#ddd] group-hover:text-[#999]"
                      }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    0{i + 1}
                  </motion.span>

                  {/* Question */}
                  <span
                    className={`flex-1 transition-colors duration-500 ${isOpen ? "text-[#0a0a0a]" : "text-[#777] group-hover:text-[#0a0a0a]"
                      }`}
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                      fontSize: "clamp(1rem, 2vw, 1.35rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* Toggle icon */}
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen
                      ? "bg-[#0a0a0a]"
                      : "bg-[#f0f0ed] group-hover:bg-[#0a0a0a]"
                      }`}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Plus
                      size={16}
                      className={`transition-colors duration-500 ${isOpen
                        ? "text-white"
                        : "text-[#999] group-hover:text-white"
                        }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.3, delay: 0.1 },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        className="pb-9 pl-12 md:pl-16 md:pr-20"
                      >
                        <motion.div
                          className="w-8 h-px bg-emerald-500/30 mb-4"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          style={{ transformOrigin: "left" }}
                        />
                        <p
                          className="text-[#999] max-w-xl"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.88rem",
                            lineHeight: 1.8,
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
