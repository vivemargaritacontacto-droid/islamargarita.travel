import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AlojamientoSection from "@/components/sections/AlojamientoSection";
import FotosSection from "@/components/sections/FotosSection";
import ServiciosSection from "@/components/sections/ServiciosSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TarifasSection from "@/components/sections/TarifasSection";
import LocationSection from "@/components/sections/LocationSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ReservarSection from "@/components/sections/ReservarSection";
import FAQSection from "@/components/sections/FAQSection";
import CTAFinalSection from "@/components/sections/CTAFinalSection";
import WhatsappFloat from "@/components/ui/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AlojamientoSection />
        <FotosSection />
        <ServiciosSection />
        <WhyUsSection />
        <TarifasSection />
        <LocationSection />
        <ReviewsSection />
        <ReservarSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
