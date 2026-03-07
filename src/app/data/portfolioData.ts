export interface PortfolioProject {
  slug: string;
  img: string;
  category: string;
  title: string;
  location: string;
  desc: string;
  result: string;
  color: string;
  link?: string;
  content?: string;
  metaTitle?: string;
  metaDesc?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "website-restoran-warung-bambu",
    img: "/img-portfolio-1.webp",
    category: "Restoran & Kafe",
    title: "Warung Bambu",
    location: "Bali",
    desc: "Website restoran dengan menu digital dan integrasi reservasi langsung via WhatsApp.",
    result: "+40% reservasi online",
    color: "#10b981",
    metaTitle: "Website Restoran Warung Bambu Bali | Portofolio BangBisnis",
    metaDesc: "Studi kasus pembuatan website untuk restoran Warung Bambu di Bali. Meningkatkan reservasi online secara signifikan.",
    content: `
      <h2>Sebuah Bisnis Kuliner Hebat yang "Tersembunyi" dari Turis</h2>
      <p>Banyak wisatawan datang ke Bali mencari pengalaman kuliner autentik, tetapi sering kali berakhir di tempat yang sekadar "viral" di internet. Inilah yang dialami <strong>Warung Bambu</strong>. Sebagai restoran dengan masakan luar biasa dan suasana tradisional yang kental, mereka menghadapi masalah klasik: <em>lokasi yang kurang strategis dan kurangnya visibilitas digital</em>.</p>

      <p>Mengandalkan papan nama di depan jalan gang dan <i>word-of-mouth</i> tidak lagi cukup. Apalagi saat musim sepi <i>(low season)</i>, meja-meja sering kosong padahal dapur siap menyajikan makanan terbaik mereka.</p>

      <div class="my-10 p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
        <h3 class="text-xl font-urbanist text-emerald-400 mb-4 uppercase tracking-widest text-sm">Tantangan Utama</h3>
        <ul class="space-y-3 mb-0">
            <li class="flex items-start gap-3"><span class="text-emerald-500 mt-1">✦</span> <span>Turis kesulitan menemukan lokasi persis mereka di Google Maps.</span></li>
            <li class="flex items-start gap-3"><span class="text-emerald-500 mt-1">✦</span> <span>Menu fisik tidak bisa diakses calon pelanggan sebelum mereka memutuskan berkunjung.</span></li>
            <li class="flex items-start gap-3"><span class="text-emerald-500 mt-1">✦</span> <span>Proses reservasi manual via telepon sering merepotkan turis mancanegara.</span></li>
        </ul>
      </div>

      <h2>Dari Papan Nama Kayu ke Etalase Digital yang Menjual</h2>
      <p>Tim BangBisnis tidak sekadar membuatkan website berbentuk "brosur online". Kami merancang sebuah <strong>sistem akuisisi pelanggan</strong> yang bekerja 24 jam untuk Warung Bambu.</p>

      <p>Pertama, kami melakukan sesi fotografi kuliner untuk memastikan setiap hidangan terlihat sama lezatnya di layar HP seperti aslinya. Kemudian, kami membangun struktur halaman yang menuntun pengunjung dari menyadari <em>("Wah, tempatnya bagus")</em> menjadi menginginkan <em>("Saya mau makan menu ini")</em> hingga akhirnya bertindak <em>("Saya reservasi meja sekarang")</em>.</p>

      <p>Fitur kunci yang kami implementasikan:</p>
      <ul>
        <li><strong>Smart Digital Menu:</strong> Menu interaktif dua bahasa (Inggris/Indonesia) dengan foto menggugah selera dan harga transparan.</li>
        <li><strong>One-Click WhatsApp Booking:</strong> Tombol sticky di bawah layar HP yang memungkinkan turis langsung mem-booking meja dengan format template otomatis (Jumlah orang, waktu, tanggal).</li>
        <li><strong>Local SEO Dominance:</strong> Struktur HTML dan kata kunci yang dioptimalkan spesifik untuk "authentic balinese restaurant in [lokasi]" sehingga muncul di halaman pertama pencarian turis.</li>
      </ul>

      <h2>Hasilnya: Meja Penuh Bahkan di Hari Kerja</h2>
      <p>Transformasi digital ini mengubah alur bisnis Warung Bambu secara drastis. Website bertindak sebagai jembatan antara pencarian Google Maps yang bingung menjadi konversi reservasi yang pasti.</p>

      <img src="/img-portfolio-1.webp" alt="Screenshot performa website restoran" class="rounded-2xl border border-white/10 w-full my-10 opacity-80" />

      <p>Hanya dalam waktu <strong>8 minggu setelah peluncuran</strong>, Warung Bambu mencetak angka manis. Peningkatan 40% dalam reservasi online (sebelumnya hampir nol) menstabilkan pendapatan restoran. Pemilik kini lebih fokus menjaga kualitas rasa masakan, sementara website menangani urusan mendatangkan tamu baru dari internet.</p>
    `
  },
  {
    slug: "website-villa-serenity-ubud",
    img: "/img-portfolio-2.webp",
    category: "Hospitality",
    title: "Villa Serenity",
    location: "Ubud",
    desc: "Company profile villa dengan galeri foto premium dan sistem inquiry langsung.",
    result: "+65% direct booking",
    color: "#6366f1",
    metaTitle: "Website Villa Serenity Ubud | Portofolio BangBisnis",
    metaDesc: "Portofolio pembuatan desain website untuk Villa Serenity di Ubud, Bali. Fokus pada direct booking tanpa komisi OTA.",
    content: `
      <h2>Terjebak dalam Perang Harga di Online Travel Agent (OTA)</h2>
      <p>Sebagai properti eksklusif di jantung Ubud, <strong>Villa Serenity</strong> menonjol karena ketenangan dan kemewahannya. Namun, dari sisi bisnis, mereka sedang "berdarah". Mereka terlalu bergantung pada platform OTA besar (seperti Booking.com, Agoda, Airbnb) untuk mendatangkan tamu.</p>

      <p>Masalahnya jelas: setiap kali ada tamu yang menginap, OTA mengambil potongan komisi yang sangat besar (bisa mencapai 15-20%). Terlebih lagi, profil mereka di platform tersebut terlihat sama saja dengan ratusan villa pesaing lainnya. Harga menjadi satu-satunya faktor yang bersaing, memaksa mereka memangkas margin keuntungan.</p>

      <div class="my-10 p-8 rounded-2xl bg-indigo-950/30 border border-indigo-500/20">
        <h3 class="text-xl font-urbanist text-indigo-400 mb-4 uppercase tracking-widest text-sm">Tujuan Proyek</h3>
        <p class="text-white/80 font-medium">Membangun saluran pemesanan langsung <em>(direct channel)</em> yang kredibel untuk mengurangi ketergantungan OTA, mengembalikan margin keuntungan, dan memungkinkan Villa Serenity menampilkan karakter aslinya.</p>
      </div>

      <h2>Mendesain Pengalaman Digital Semewah Villanya</h2>
      <p>Ketimbang membuat website standar berisi daftar kamar, BangBisnis merancang <strong>sebuah perjalanan emosional <em>(emotional journey)</em></strong>. Tujuannya adalah membuat calon tamu merasa sedemikian terhubung dengan nuansa villa sehingga mereka tidak peduli lagi untuk membandingkan harga di OTA.</p>

      <p>Ini adalah strategi yang kami terapkan:</p>
      <ul>
        <li><strong>Immersive Visual Storytelling:</strong> Kami menggunakan ruang putih <i>(whitespace)</i> yang luas, palet warna alam (hijau daun dan coklat kayu), serta tipografi elegan. Begitu website dibuka, video latar belakang yang halus memperlihatkan embun padi di pagi hari dari kolam renang infinity mereka.</li>
        <li><strong>Frictionless Direct Inquiry:</strong> Tidak seperti OTA yang memaksa user membuat akun, kami menyediakan formulir pemesanan ringkas. Calon tamu dapat meminta ketersediaan kamar yang langsung masuk ke WhatsApp manajer villa untuk respon personal dalam hitungan menit.</li>
        <li><strong>Sistem "Best Rate Guarantee":</strong> Kami menambahkan bagian khusus yang secara psikologis meyakinkan tamu bahwa memesan langsung melalui website akan selalu memberikan harga termurah dibandingkan lewat aplikasi mana pun (karena tidak ada biaya komisi di tengah).</li>
      </ul>

      <h2>Independensi Bisnis yang Sesungguhnya</h2>
      <p>Website diluncurkan bersamaan dengan kampanye media sosial kecil-kecilan. Tamu-tamu lama (yang biasanya kembali memesan lewat OTA) diinformasikan mengenai website baru dengan sebuah promosi diskon eksklusif.</p>

      <p>Hasilnya sangat signifikan. Dalam enam bulan pertama, Villa Serenity mencatatkan pergeseran dramatis: <strong>lonjakan 65% dalam Direct Booking</strong>. Pendapatan mereka jauh lebih sehat karena uang dari komisi yang sebelumnya dibayarkan ke OTA kini dikonversi menjadi laba bersih operasional. Mereka kini memiliki sebuah identitas digital yang 100% mereka kontrol.</p>
    `
  },
  {
    slug: "website-travel-tour-traveljimb",
    img: "/img-portfolio-travel.webp",
    category: "Tour & Travel",
    title: "TravelJimb",
    location: "Bali",
    desc: "Website driver pribadi Bali dengan desain premium dan landing page informasi wisata.",
    result: "Live Project",
    color: "#0ea5e9",
    link: "https://traveljimb.vercel.app/",
    metaTitle: "Website Tour TravelJimb Bali | Portofolio BangBisnis",
    metaDesc: "Website tour & travel profesional untuk driver pribadi di Bali. Memudahkan turis memesan paket liburan.",
    content: `
      <h2>Menghadapi Raksasa di Industri Pariwisata Bali</h2>
      <p>Industri tur dan layanan transportasi pribadi di Bali luar biasa kompetitif. Ratusan sopir independen memperebutkan perhatian turis yang sama di grup Facebook maupun forum internet. Itulah tantangan yang dihadapai <strong>TravelJimb</strong>.</p>

      <p>Sebelum kami campur tangan, TravelJimb hanya mengandalkan profil Instagram dan kartu nama fisik di bandara. Meskipun pelayanannya sangat luar biasa (bintang 5 di TripAdvisor rata-rata), mereka kalah cepat bersaing dengan perusahaan besar yang mendominasi mesin pencari ketika turis asing mengetik "Bali private driver" sebelum mereka naik pesawat.</p>

      <div class="my-10 p-8 rounded-2xl bg-sky-950/30 border border-sky-500/20">
        <h3 class="text-xl font-urbanist text-sky-400 mb-4 uppercase tracking-widest text-sm">Masalah Mendasar</h3>
        <p class="text-white/80 font-medium">Turis barat (Australia/Eropa) memiliki tingkat kecurigaan tinggi terhadap layanan informal tak berlabel. Mereka memilih untuk "main aman" dengan vendor mahal asalkan ada jaminan komitmen dan profesionalisme via sebuah website yang kredibel.</p>
      </div>

      <h2>Struktur Halaman yang Menghapus Keraguan Pelanggan</h2>
      <p>BangBisnis merancang sebuah "Professional Landing Page" yang secara instan mengangkat derajat brand TravelJimb dari <em>"sekadar supir sewaan"</em> menjadi <em>"partner travel premium Anda di Pulau Dewata"</em>.</p>

      <p>Daripada hanya memberikan daftar harga harian yang membosankan, kami merombak pendekatannya menjadi berbasis <strong>"Pengalaman Liburan yang Terencana"</strong>:</p>
      <ul>
        <li><strong>Paket Kurasi Visual:</strong> Kami mengelompokkan layanan menjadi "Ubud Cultural Tour", "South Bali Beach Hopping", dan "Custom Itinerary". Setiap paket memiliki landing section sendiri dengan foto hero besar yang menakjubkan.</li>
        <li><strong>Sistem Pemesanan Cerdas-Cepat:</strong> Kami meninggalkan sistem formulir panjang. Alih-alih, kami mengikat setiap tombol "Pesan Sekarang" dengan parameter WhatsApp yang terisi otomatis. Ketika tombol diklik, pesan WA yang muncul di HP turis sudah menyebutkan: "Hi Bli, saya ingin memesan paket [Nama Paket]". Ini menurunkan angka batal pesan secara drastis.</li>
        <li><strong>Social Proof Sekali Lirik:</strong> Kami menempatkan cuplikan ulasan asli (dengan wajah bahagia pelanggan bule) tepat di bawah section Hero, membangun rasa aman pada detik ke-3 turis mengunjungi website.</li>
      </ul>

      <h2>Memenangkan Klien Saat Mereka Masih Berada di Negaranya</h2>
      <p>Kini, TravelJimb menduduki posisi tawar yang jauh lebih baik. Sang pemilik bercerita bahwa banyak tamunya sekarang mem-booking jadwal <strong>1 sampai 2 bulan sebelum mereka tiba di Bali</strong>. </p>

      <p>Lebih baik lagi, memiliki website profesional memungkinkan TravelJimb menetapkan harga layanan (rate harian) sesuai kualitas kerjanya, <strong>tanpa ditawar habis-habisan</strong> oleh turis, karena kesan mewah dan profesional yang berhasil ditangkap pertama kali melalui layar smartphone pelanggan.</p>
    `
  },
];
