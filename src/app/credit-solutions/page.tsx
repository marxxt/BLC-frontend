// credit-solutions/pages.tsx
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import CreditHero from "@/components/sections/CreditHero";
import BusinessCreditLines from "@/components/sections/BusinessCreditLines";
import TermLoans from "@/components/sections/TermLoans";
import RealEstateCredit from "@/components/sections/RealEstateFinancing";
import BuildBusinessCredit from "@/components/sections/BuildBusinessCredit";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CreditCTA from "@/components/sections/CreditCTA";
import Footer from "@/components/layout/Footer";

export default function CreditSolutionsPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <CreditHero />
        <BusinessCreditLines />
        <TermLoans />
        <RealEstateCredit />
        <BuildBusinessCredit />
        <WhyChooseUs />
        <CreditCTA />
        <Footer />
      </div>
    </>
  );
}
