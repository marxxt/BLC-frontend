// pages/business-loans.tsx
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import BusinessLoansHero from "@/components/sections/BusinessLoansHero";
import WorkingCapital from "@/components/sections/WorkingCapital";
import TermLoansSection from "@/components/sections/TermLoansSection";
import BusinessCreditLines from "@/components/sections/BusinessCreditLinesSection";
import RevenueBasedFinancing from "@/components/sections/RevenueBasedFinancing";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import LoanRequirements from "@/components/sections/LoanRequirements";
import BusinessLoansCTA from "@/components/sections/BusinessLoansCTA";
import Footer from "@/components/layout/Footer";

export default function BusinessLoansPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <BusinessLoansHero />
        <WorkingCapital />
        <TermLoansSection />
        <BusinessCreditLines />
        <RevenueBasedFinancing />
        <WhoWeHelp />
        <LoanRequirements />
        <BusinessLoansCTA />
        <Footer />
      </div>
    </>
  );
}
