// services/page.tsx
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import ServicesHero from "@/components/sections/ServicesHero";
import FinancingOptions from "@/components/sections/FinancingOptions";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
import ServicesBottomCTA from "@/components/sections/ServicesBottomCTA";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <ServicesHero />
        <FinancingOptions />
        <ClientTestimonials />
        <ServicesBottomCTA />
        <Footer />
      </div>
    </>
  );
}
