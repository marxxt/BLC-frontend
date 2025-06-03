// pages/consulting.tsx
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import ConsultingHero from "@/components/sections/ConsultingHero";
import StrategicFunding from "@/components/sections/StrategicFunding";
import RealEstateAdvisory from "@/components/sections/RealEstateAdvisory";
import BusinessCreditCoaching from "@/components/sections/BusinessCreditCoaching";
import DocumentationPrep from "@/components/sections/DocumentationPrep";
import WhyWorkWithUs from "@/components/sections/WhyWorkWithUs";
import ConsultingCTA from "@/components/sections/ConsultingCTA";
import Footer from "@/components/layout/Footer";

export default function ConsultingPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <ConsultingHero />
        <StrategicFunding />
        <RealEstateAdvisory />
        <BusinessCreditCoaching />
        <DocumentationPrep />
        <WhyWorkWithUs />
        <ConsultingCTA />
        <Footer />
      </div>
    </>
  );
}
