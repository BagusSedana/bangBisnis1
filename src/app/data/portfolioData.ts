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
      <h2>Tantangan</h2>
      <p>Warung Bambu membutuhkan cara yang lebih efektif untuk menampilkan menu mereka kepada turis yang sedang mencari tempat makan enak di Bali. Papan menu fisik tidak cukup untuk menjangkau audiens online yang mengandalkan Google Map dan Google Search sebelum berkunjung.</p>

      <h2>Solusi</h2>
      <p>Kami merancang website restoran dengan fokus pada visual makanan yang menarik (fotografi kuliner) dan sistem reservasi WhatsApp sekali klik. Website dioptimasi lokal untuk kata kunci "restoran di Bali" dan terintegrasi langsung dengan profil Google Business mereka.</p>

      <h2>Hasil</h2>
      <p>Dalam 2 bulan pertama, Warung Bambu melihat peningkatan 40% dalam reservasi meja secara online dan lebih banyak turis yang langsung menemukan lokasi mereka melalui Google.</p>
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
      <h2>Tantangan</h2>
      <p>Villa Serenity di Ubud ingin mengurangi ketergantungan pada Online Travel Agents (OTA) yang mengambil potongan komisi besar. Mereka membutuhkan website yang terlihat semewah fasilitas mereka untuk meyakinkan tamu memesan langsung.</p>

      <h2>Solusi</h2>
      <p>BangBisnis membangun company profile mewah dengan fokus pada "Visual Storytelling". Menggunakan galeri foto beresolusi tinggi yang cepat dimuat, struktur landing page konversi, dan form inquiry yang profesional.</p>

      <h2>Hasil</h2>
      <p>Villa Serenity berhasil meningkatkan "Direct Booking" hingga 65%, menghemat jutaan rupiah dalam bentuk komisi OTA bulanan.</p>
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
      <h2>Tantangan</h2>
      <p>Banyak penyedia jasa driver pribadi di Bali kesulitan mendapatkan turis tanpa perantara. TravelJimb membutuhkan "rumah digital" untuk menjual paket wisatanya langsung ke calon wisatawan.</p>

      <h2>Solusi</h2>
      <p>Website landing page tour & travel dengan rincian paket wisata (Ubud Tour, Uluwatu Tour, dll). Terdapat tombol WhatsApp yang langsung merangkum paket apa yang dipilih oleh pengguna.</p>

      <h2>Hasil</h2>
      <p>Website memberikan impresi brand yang lebih tepercaya dibandingkan hanya akun sosial media. TravelJimb memenangkan kepercayaan dari klien luar negeri jauh sebelum klien tiba di Bali.</p>
    `
    },
];
