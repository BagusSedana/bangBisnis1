import { Routes, Route, BrowserRouter } from "react-router";
import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ProblemSection } from "./components/ProblemSection";
import { ApproachSection } from "./components/ApproachSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProcessSection } from "./components/ProcessSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { JasaWebsiteBali } from "./pages/JasaWebsiteBali";
import ScrollToTop from "./components/ScrollToTop";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CompanyProfile } from "./pages/CompanyProfile";
import { LandingPage } from "./pages/LandingPage";
import { WebsiteUMKM } from "./pages/WebsiteUMKM";
import { IntegrasiWhatsApp } from "./pages/IntegrasiWhatsApp";
import { BlogPage } from "./pages/BlogPage";
import { BlogPost } from "./pages/BlogPost";

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6287701785344"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", bounce: 0.5 }}
      whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Ping animation */}
      <motion.span
        className="absolute inset-0 rounded-full bg-emerald-500"
        animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white relative z-10" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
}

function HomePage() {
  return (
    <div
      className="w-full min-h-screen bg-[#0a0a0a]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Marquee />
      <ProblemSection />
      <ApproachSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jasa-website-bali" element={<JasaWebsiteBali />} />
        <Route path="/jasa-website-company-profile" element={<CompanyProfile />} />
        <Route path="/jasa-landing-page-bali" element={<LandingPage />} />
        <Route path="/jasa-website-umkm-bali" element={<WebsiteUMKM />} />
        <Route path="/jasa-integrasi-whatsapp-bali" element={<IntegrasiWhatsApp />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

