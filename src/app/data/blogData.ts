export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readTime: number; // in minutes
  publishDate: string;
  excerpt: string;
  content: string; // HTML string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "biaya-website-warung-makan-bali",
    title: "Berapa Biaya Buat Website untuk Warung Makan di Bali?",
    metaTitle: "Biaya Buat Website Warung Makan di Bali 2026 | BangBisnis",
    metaDescription:
      "Rincian lengkap harga jasa website untuk warung makan dan restoran di Bali. Mulai dari Rp 800.000 hingga Rp 3.500.000. Cari tahu mana yang sesuai budget Anda.",
    category: "Panduan Harga",
    readTime: 5,
    publishDate: "2026-03-06",
    excerpt:
      "Punya warung makan di Bali dan ingin bikin website tapi bingung soal harga? Artikel ini membahas secara jujur semua komponen biaya, mulai dari domain hingga desain, dan paket mana yang cocok untuk bisnis kuliner Anda.",
    content: `
      <p>Banyak pemilik warung makan dan restoran di Bali bertanya: <strong>"Berapa sih biaya buat website?"</strong> Jawaban jujurnya — tergantung kebutuhan. Tapi artikel ini akan membedah semua komponennya supaya kamu bisa planning budget dengan tepat.</p>

      <h2>Komponen Biaya Website Warung Makan</h2>
      <p>Secara garis besar, ada tiga komponen utama dalam biaya pembuatan website untuk bisnis kuliner:</p>

      <h3>1. Jasa Desain & Pembuatan Website</h3>
      <p>Ini adalah biaya terbesar. Di Bali, harga jasa website profesional berkisar antara:</p>
      <ul>
        <li><strong>Paket Starter (Rp 800.000 – Rp 1.200.000):</strong> Cocok untuk warung yang baru mulai online. Biasanya 3–5 halaman: Beranda, Menu, Tentang Kami, Kontak.</li>
        <li><strong>Paket Profesional (Rp 1.800.000 – Rp 2.500.000):</strong> Untuk restoran yang ingin tampil lebih serius. Sudah termasuk galeri foto, form reservasi, dan integrasi WhatsApp.</li>
        <li><strong>Paket Growth (Rp 2.500.000 – Rp 3.500.000):</strong> Website lengkap dengan SEO on-page, blog, dan fitur pemesanan online.</li>
      </ul>

      <h3>2. Domain & Hosting (Tahunan)</h3>
      <p>Domain <code>.com</code> sekitar <strong>Rp 150.000–200.000/tahun</strong>. Hosting berkualitas mulai dari <strong>Rp 400.000–800.000/tahun</strong>. Banyak jasa website di Bali sudah menyertakan ini di paket pertama.</p>

      <h3>3. Maintenance Bulanan (Opsional tapi Penting)</h3>
      <p>Website butuh perawatan: update konten, keamanan, dan backup. Biaya maintenance bulanan biasanya <strong>Rp 200.000–500.000/bulan</strong>. Ini investasi yang sangat worth it dibanding website yang error tiba-tiba.</p>

      <h2>Rekomendasi Paket untuk Warung Makan di Bali</h2>
      <p>Untuk warung makan dan restoran kecil-menengah di Bali, kami merekomendasikan <strong>Paket Profesional</strong>. Ini alasannya:</p>
      <ul>
        <li>Wisatawan dan tamu lokal sering mencari restoran via Google sebelum datang</li>
        <li>Foto menu yang profesional meningkatkan kepercayaan dan appetite calon tamu</li>
        <li>Integrasi WhatsApp memudahkan reservasi tanpa perlu sistem yang kompleks</li>
        <li>Tampilan mobile-friendly krusial karena 80%+ pencarian dilakukan via HP</li>
      </ul>

      <h2>Apakah Website Benar-Benar Worth It untuk Warung Makan?</h2>
      <p>Bayangkan skenario ini: setiap hari ada 10 orang yang search "warung makan enak di Bali" di Google. Tanpa website, nama warungmu tidak akan muncul. Dengan website yang teroptimasi, minimal ada 1–2 orang yang bisa jadi tamu baru setiap harinya.</p>
      <p>Kalau rata-rata spending per tamu Rp 80.000, dan website kamu menghasilkan 1 tamu baru per hari — itu sudah <strong>Rp 2.400.000 revenue tambahan per bulan</strong>. Jauh melebihi biaya website yang sekali bayar.</p>

      <h2>Tips Menghemat Biaya Website</h2>
      <ul>
        <li><strong>Siapkan foto makanan yang bagus</strong> sebelum mulai — ini menghemat biaya revisi</li>
        <li><strong>Tulis deskripsi menu sendiri</strong> — kamu yang paling tahu cerita di balik setiap hidangan</li>
        <li><strong>Pilih jasa yang transparan soal harga</strong> — hindari vendor yang abu-abu dalam scope pekerjaan</li>
        <li><strong>Tanyakan apakah termasuk pelatihan</strong> — idealnya kamu bisa update menu dan konten sendiri</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Biaya buat website untuk warung makan di Bali mulai dari <strong>Rp 800.000</strong> untuk yang paling dasar, hingga <strong>Rp 3.500.000</strong> untuk yang paling lengkap. Untuk bisnis kuliner, kami sangat menyarankan setidaknya paket menengah yang sudah termasuk foto menu, integrasi WhatsApp, dan tampilan mobile-friendly.</p>
      <p>Masih bingung paket mana yang paling cocok? Pelajari <a href="/jasa-pembuatan-website-bali"><strong>Layanan Pembuatan Website Profesional</strong></a> kami, atau <a href="https://wa.me/6287701785344"><strong>Konsultasi gratis via WhatsApp</strong></a> — ceritakan bisnis kamu dan kami bantu tentukan paket yang paling efisien.</p>
    `,
  },
  {
    slug: "alasan-umkm-bali-wajib-punya-website-2026",
    title: "5 Alasan UMKM Bali Wajib Punya Website di 2026",
    metaTitle: "5 Alasan UMKM Bali Wajib Punya Website di 2026 | BangBisnis",
    metaDescription:
      "Di era digital 2026, UMKM Bali tanpa website rugi besar. Ini 5 alasan kenapa website bukan lagi opsional, tapi keharusan untuk bisnis lokal Bali yang mau bertahan dan berkembang.",
    category: "Strategi Bisnis",
    readTime: 4,
    publishDate: "2026-03-06",
    excerpt:
      "Instagram dan WhatsApp Business sudah cukup? Ternyata tidak. Di 2026, UMKM Bali tanpa website ketinggalan kompetitor yang sudah bergerak lebih cepat. Ini 5 alasan yang perlu kamu ketahui sekarang.",
    content: `
      <p>Di 2026, hampir semua konsumen — baik wisatawan asing maupun lokal — melakukan riset online sebelum membeli. Kalau bisnis kamu tidak muncul di pencarian Google, artinya kamu sedang <strong>secara aktif menolak calon pelanggan</strong>.</p>
      <p>Banyak pelaku UMKM di Bali masih berpikir: <em>"Saya sudah punya Instagram, sudah cukup."</em> Sayangnya, mindset ini memiliki celah besar. Berikut 5 alasan mengapa website wajib di 2026:</p>

      <h2>1. Google Tidak Mengindeks Instagram Dengan Baik</h2>
      <p>Ketika calon pelanggan mengetik "spa di Ubud" atau "villa murah Seminyak" di Google, yang muncul adalah <strong>website</strong> — bukan feed Instagram. Algoritma Google dirancang untuk menjawab pertanyaan, dan hanya halaman web yang bisa diindeks secara optimal untuk kata kunci spesifik.</p>
      <p>Dengan website, kamu bisa muncul di pencarian untuk puluhan kata kunci yang relevan dengan bisnis kamu. Dengan Instagram saja? Visibilitasmu di Google hampir nol.</p>

      <h2>2. Website Membangun Kepercayaan yang Lebih Kuat</h2>
      <p>Bayangkan dua bisnis: satu hanya punya Instagram dengan 500 followers, satu lagi punya website profesional dengan harga transparan, foto layanan yang rapi, dan testimonial klien. Mana yang lebih kamu percaya?</p>
      <p>Penelitian dari Stanford menunjukkan bahwa <strong>75% konsumen menilai kredibilitas bisnis dari tampilan websitenya</strong>. Di Bali, di mana persaingan bisnis sangat tinggi, website adalah sinyal kepercayaan yang tidak bisa diabaikan.</p>

      <h2>3. Kontrol Penuh Atas Informasi Bisnis Anda</h2>
      <p>Instagram dan platform media sosial lain bisa mengubah algoritma kapan saja. Reach organik bisa turun drastis dalam semalam. Tapi <strong>website kamu adalah aset yang 100% milikmu</strong>.</p>
      <p>Kamu bisa update harga, tambah layanan baru, ubah jam operasional, atau pasang promo spesial — tanpa bergantung pada platform lain. Informasi yang akurat = lebih sedikit missed inquiry dari calon pelanggan.</p>

      <h2>4. Buka Peluang dari Wisatawan Asing</h2>
      <p>Bali dikunjungi jutaan wisatawan setiap tahun. Mereka tidak punya Instagram Indonesia, tapi mereka <strong>pasti pakai Google</strong>. Wisatawan asing yang mencari "villa rental in Bali" atau "traditional spa Ubud" hanya akan menemukan bisnis yang punya website.</p>
      <p>Dengan website berbahasa Indonesia dan Inggris, kamu membuka pintu untuk segmen pasar yang jauh lebih luas dan biasanya memiliki daya beli lebih tinggi.</p>

      <h2>5. Data dan Analitik yang Bisa Dipakai untuk Keputusan Bisnis</h2>
      <p>Berbeda dengan Instagram yang memberikan insights terbatas, website memberikanmu data mendalam: halaman mana yang paling banyak dikunjungi, dari kota mana pengunjung datang, kata kunci apa yang mereka pakai untuk menemukan kamu, dan jam berapa traffic tertinggi.</p>
      <p>Data ini sangat berharga untuk memutuskan: kapan waktu terbaik untuk promosi, layanan mana yang paling diminati, dan area mana yang perlu diperkuat dalam marketing.</p>

      <h2>Mulai Dari Mana?</h2>
      <p>Kabar baiknya, membuat website profesional untuk UMKM di Bali tidak harus mahal. Dengan investasi mulai dari <strong>Rp 800.000</strong>, kamu sudah bisa punya website yang tampil profesional, mobile-friendly, dan siap muncul di pencarian Google.</p>
      <p>Jangan biarkan kompetitor selangkah lebih maju. Lihat <a href="/jasa-website-umkm-bali"><strong>Paket Website UMKM Bali</strong></a> kami, atau hubungi untuk <a href="https://wa.me/6287701785344"><strong>konsultasi gratis</strong></a> dan temukan paket yang paling sesuai dengan kebutuhan bisnis kamu di Bali.</p>
    `,
  },
  {
    slug: "website-vs-instagram-bisnis-kuliner-bali",
    title: "Website vs Instagram: Mana yang Lebih Efektif untuk Bisnis Kuliner Bali?",
    metaTitle: "Website vs Instagram untuk Bisnis Kuliner Bali | BangBisnis",
    metaDescription:
      "Perdebatan klasik: website atau Instagram untuk promosi bisnis kuliner di Bali? Temukan perbandingan jujur dan strategi terbaik yang sudah terbukti efektif untuk restoran dan kafe di Bali.",
    category: "Strategi Digital",
    readTime: 6,
    publishDate: "2026-03-06",
    excerpt:
      "Restoran dan kafe di Bali sering dihadapkan pada pilihan: fokus ke Instagram atau bikin website dulu? Jawabannya tidak sesederhana memilih salah satu. Ini analisis lengkapnya.",
    content: `
      <p>Pertanyaan ini selalu muncul saat kami konsultasi dengan pemilik bisnis kuliner di Bali: <em>"Lebih baik fokus Instagram atau bikin website dulu?"</em> Setelah membantu puluhan bisnis kuliner go-online, kami punya jawabannya — dan mungkin tidak seperti yang kamu bayangkan.</p>

      <h2>Apa yang Instagram Lakukan dengan Sangat Baik</h2>
      <p>Instagram adalah raja konten visual. Untuk bisnis kuliner, ini adalah kekuatan besar:</p>
      <ul>
        <li><strong>Foto makanan yang menggiurkan</strong> langsung ke feed calon pelanggan</li>
        <li><strong>Stories dan Reels</strong> untuk behind-the-scenes dan promosi flash</li>
        <li><strong>Komunitas dan engagement</strong> — komentar, DM, tag lokasi</li>
        <li><strong>Hashtag</strong> untuk jangkauan organik ke audiens baru</li>
        <li><strong>Gratis</strong> — tidak ada biaya platform</li>
      </ul>
      <p>Banyak warung makan di Bali berhasil membangun basis pelanggan setia hanya dari Instagram. Ini nyata dan tidak bisa diremehkan.</p>

      <h2>Tapi Instagram Punya Kelemahan Kritis</h2>
      <p>Di sinilah banyak bisnis kuliner terjebak:</p>

      <h3>Tidak Terindeks Google</h3>
      <p>Ketika wisatawan dari Jakarta atau Eropa search "warung makan vegetarian di Canggu" di Google, Instagram kamu tidak akan muncul di halaman pertama. <strong>Website-lah yang tampil</strong>. Dan jika kamu tidak punya website, kompetitor yang punya website lah yang mendapat tamu itu.</p>

      <h3>Algoritma Bisa Berubah Kapan Saja</h3>
      <p>Reach organik Instagram turun signifikan dalam beberapa tahun terakhir. Bisnis yang dulu dapat ribuan tayangan per post, kini berjuang di angka ratusan — tanpa boost berbayar. Kamu tidak punya kontrol atas ini.</p>

      <h3>Informasi Tidak Terstruktur</h3>
      <p>Calon pelanggan yang ingin tahu jam buka, lokasi persis, menu lengkap, dan harga — harus scroll ratusan post atau DM dulu. Ini friction yang sering membuat mereka pergi ke kompetitor yang informasinya lebih mudah ditemukan.</p>

      <h2>Apa yang Website Lakukan yang Instagram Tidak Bisa</h2>
      <ul>
        <li><strong>Muncul di Google Search</strong> untuk kata kunci spesifik</li>
        <li><strong>Menampilkan menu lengkap</strong> yang rapi dan mudah diakses</li>
        <li><strong>Reservasi dan inquiry langsung</strong> tanpa harus DM dulu</li>
        <li><strong>Membangun kepercayaan</strong> dengan tampilan profesional</li>
        <li><strong>Aset digital permanen</strong> yang 100% milik kamu</li>
        <li><strong>Data analitik mendalam</strong> tentang perilaku pengunjung</li>
      </ul>

      <h2>Perbandingan Langsung</h2>
      <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse border border-white/10 mt-6 mb-10">
            <thead>
              <tr class="bg-emerald-950/30">
                <th class="p-4 border border-white/10 font-medium">Aspek</th>
                <th class="p-4 border border-white/10 font-medium text-white/50">Instagram</th>
                <th class="p-4 border border-white/10 font-medium text-emerald-400">Website</th>
              </tr>
            </thead>
            <tbody class="text-[0.95em]">
              <tr>
                <td class="p-4 border border-white/10">Visibilitas Google</td>
                <td class="p-4 border border-white/10">❌ Sangat terbatas</td>
                <td class="p-4 border border-white/10">✅ Optimal dengan SEO</td>
              </tr>
              <tr>
                <td class="p-4 border border-white/10">Kontrol konten</td>
                <td class="p-4 border border-white/10">⚠️ Tergantung algoritma</td>
                <td class="p-4 border border-white/10">✅ 100% milik kamu</td>
              </tr>
              <tr>
                <td class="p-4 border border-white/10">Menu lengkap</td>
                <td class="p-4 border border-white/10">⚠️ Harus scroll lama</td>
                <td class="p-4 border border-white/10">✅ Tersusun rapi</td>
              </tr>
            </tbody>
          </table>
      </div>

      <h2>Strategi Terbaik: Keduanya, Tapi dengan Peran Berbeda</h2>
      <p>Pemenangnya bukan Instagram atau website — melainkan <strong>kombinasi keduanya dengan peran yang jelas</strong>:</p>
      <ul>
        <li><strong>Instagram</strong> = mesin engagement dan komunitas. Bagikan foto harian, promo flash, cerita di balik dapur, dan testimonial pelanggan.</li>
        <li><strong>Website</strong> = rumah digital resmi. Tempat calon pelanggan mendapat informasi lengkap, memesan, dan menemukan kamu via Google.</li>
      </ul>
      <p>Ideal flow-nya: seseorang menemukan foto kamu di Instagram → tertarik → cek website → baca menu dan ulasan → langsung pesan via WhatsApp. Ini funnel yang terbukti efektif untuk bisnis kuliner di Bali.</p>

      <h2>Kapan Harus Prioritaskan Website?</h2>
      <p>Prioritaskan website lebih dulu jika:</p>
      <ul>
        <li>Kamu ingin menjangkau wisatawan yang search di Google</li>
        <li>Menu/layananmu kompleks dan perlu dijelaskan secara detail</li>
        <li>Kamu butuh sistem reservasi atau pemesanan online</li>
        <li>Kamu ingin tampil lebih profesional dari kompetitor</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Untuk bisnis kuliner di Bali, <strong>Instagram efektif untuk membangun komunitas dan engagement, tapi website adalah aset jangka panjang yang mendatangkan pelanggan baru dari Google setiap hari</strong>. Keduanya saling melengkapi, bukan saling menggantikan.</p>
      <p>Dengan investasi di <a href="/jasa-pembuatan-website-bali"><strong>Jasa Pembuatan Website</strong></a> kami mulai dari Rp 800.000, kamu sudah bisa mulai muncul di pencarian Google dan memberikan pengalaman yang lebih baik kepada calon pelanggan. <a href="https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20tertarik%20konsultasi%20pembuatan%20website%20kuliner" target="_blank" rel="noopener noreferrer"><strong>Konsultasi gratis</strong></a> sekarang dan kami bantu strategi digital yang tepat untuk warung atau restoran kamu.</p>
    `,
  },
  {
    slug: "cara-mendapatkan-klien-dari-google-seo-freelancer",
    title: "Bukan Sekadar Traffic: Cara Praktis Mendapatkan Klien Pertama dari Google via SEO",
    metaTitle: "Cara Dapat Klien dari Google (SEO) untuk Freelancer & Bisnis | BangBisnis",
    metaDescription:
      "Strategi praktis SEO B2B yang anti ribet. Cara membuat struktur website yang tidak hanya mendatangkan traffic, tapi mendatangkan klien berkualitas yang butuh jasamu.",
    category: "Strategi SEO",
    readTime: 7,
    publishDate: "2026-03-07",
    excerpt:
      "Punya website dengan ribuan pengunjung per bulan tapi nol klien yang chat via WhatsApp? Artinya kamu mengundang orang yang salah. Ini bedanya traffic asal-asalan dengan traffic 'buyer intent'.",
    content: `
      <p>Mitos terbesar dalam dunia SEO adalah: <em>"Asal traffic tinggi, pasti klien datang."</em> Pada kenyataannya, banyak freelancer, konsultan, dan penyedia jasa B2B (termasuk biro tour, arsitek, dan agensi lokal) frustrasi karena websitenya ramai dibaca, namun HP-nya sepi orderan.</p>
      <p>Mengapa? Karena mereka menargetkan audiens pencari informasi gratis, bukan audiens yang membawa dompet (sedang mencari jasa untuk disewa). Di artikel ini, saya akan membedah strategi <strong>Buyer-Intent SEO</strong> yang mendatangkan prospek berkualitas.</p>

      <h2>1. Tinggalkan Kata Kunci "Cara" (How-To), Fokus ke "Jasa" (Service)</h2>
      <p>Banyak penyedia jasa menghabiskan waktu menulis artikel panjang seperti <em>"Cara mendesain logo sendiri"</em> atau <em>"Cara membersihkan AC di rumah"</em>. Traffic-nya pasti meledak, tapi siapa yang membaca artikel itu?</p>
      <p>Jawabannya: <strong>Orang yang ingin melakukannya sendiri (Do-It-Yourself) bukan orang yang ingin membayar jasa orang lain.</strong></p>
      <p>Bandingkan dengan seseorang yang mengetik: <em>"Jasa service AC murah di Denpasar"</em> atau <em>"Harga jasa desain logo perusahaan"</em>. Volume pencariannya jauh lebih kecil, tapi mereka yang mengetik ini sudah berada di fase akhir (bottom of funnel) dan siap mentransfer uang ke vendor terbaik yang mereka temukan di halaman pertama Google.</p>

      <div class="my-10 p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
        <h3 class="text-xl font-urbanist text-emerald-400 mb-4 tracking-widest text-sm">Action Plan:</h3>
        <p class="text-white/80">Buatlah <strong>Halaman Layanan (Service Pages)</strong> spesifik untuk setiap variasi jasa kamu. Satu URL untuk satu jasa. Misalnya: <code><a href="/jasa-pembuatan-website-bali" class="text-emerald-400 hover:underline">/jasa-pembuatan-website-bali</a></code>, atau <code><a href="/jasa-website-umkm-bali" class="text-emerald-400 hover:underline">/jasa-website-umkm-bali</a></code>.</p>
      </div>

      <h2>2. Rahasia SEO Lokal (Sebutkan Geografismu!)</h2>
      <p>Google semakin pintar mencocokkan hasil pencarian dengan lokasi pembaca. Jika seseorang di Bali mencari pembuat website, Google akan memprioritaskan penyedia jasa lokal Bali terlepas sekuat apa pun agensi nasional di Jakarta.</p>
      <p>Jika pasar utamamu menarget kawasan tertentu, sinyal lokal ini wajib ditanamkan di DNA websitemu:</p>
      <ul>
        <li>Sisipkan Nama Kota di Judul Halaman (Title Tag)</li>
        <li>Sematkan peta Google Maps kantormu di Footer</li>
        <li>Buat akun <strong>Google Business Profile</strong> (Google Maps) yang terhubung ke websitemu. Listing lokal ini sering muncul DI ATAS hasil pencarian organik biasa.</li>
      </ul>

      <h2>3. Jangan Hanya Pajang "Tentang Kami", Buktikan dengan "Portofolio Spesifik"</h2>
      <p>Ketika pencari jasa mengklik website kamu dari Google, kredibilitasmu dinilai dalam 3 detik pertama. Mereka tidak peduli dengan visi misi perusahaanmu; mereka ingin tahu: <em>"Pernahkah orang ini mengerjakan proyek sejenis milikku?"</em></p>
      <p>Strategi SEO cerdas: Buat halaman studi kasus terpisah untuk setiap proyek suksesmu. Gunakan URL yang mengandung keyword spesifik. Alih-alih <code>/portofolio-1</code>, buatlah <code>/website-restoran-warung-bambu</code>. Ini akan menarik kueri super-spesifik <em>("contoh desain website restoran")</em>.</p>

      <h2>4. Permudah Langkah "Next Step" (Frictionless Conversion)</h2>
      <p>Pernahkah kamu menemukan jasa yang bagus, tapi kamu malas menghubungi karena harus mengisi form kontak 15 kolom yang berbelit?</p>
      <p>Di era sekarang, konversi terbaik terjadi di platform chating. Gunakan <strong>Floating WhatsApp Button</strong>. Hubungkan URL WhatsApp dengan teks pesan yang sudah terisi otomatis (Pre-filled text) seperti: <em>"Halo, saya melihat website Anda di Google dan tertarik berkonsultasi tentang Jasa X"</em>. Ini menurunkan beban kognitif klien secara drastis.</p>

      <h2>Kesimpulan: Kualitas Jauh Mengalahkan Kuantitas</h2>
      <p>Mendapatkan 30 pengunjung per bulan yang menghasilkan 2 order (Closing) jauh lebih bernilai dibanding 3.000 pengunjung namun nol pembelian. SEO untuk konversi berarti memahami pikiran klien yang sudah siap membeli.</p>
      
      <p>Jika kamu penyedia layanan lokal, UMKM, atau korporasi yang merasa traffic website saat ini salah sasaran, tim ahli di layanan <a href="/jasa-pembuatan-website-bali"><strong>Jasa Pembuatan Website Bali</strong></a> kami siap menstruktur ulang arsitektur logis websitemu. <a href="https://wa.me/6287701785344?text=Halo%20BangBisnis%2C%20saya%20perlu%20bantuan%20struktur%20SEO%20dan%20website%20untuk%20menarik%20klien" target="_blank" rel="noopener noreferrer"><strong>Diskusikan kebutuhan SEO On-Page websitemu bersama kami hari ini secara gratis.</strong></a></p>
    `
  }
];
