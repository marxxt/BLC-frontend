// pages/analytics.tsx
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import AnalyticsHero from "@/components/sections/AnalyticsHero";
import LendingOverview from "@/components/sections/LendingOverview";
import PreApprovalEngine from "@/components/sections/PreApprovalEngine";
import CreditOptimization from "@/components/sections/CreditOptimization";
import CapitalTracker from "@/components/sections/CapitalTracker";
import SecuritySection from "@/components/sections/SecuritySection";
import AnalyticsCTA from "@/components/sections/AnalyticsCTA";
import Footer from "@/components/layout/Footer";

export default function AnalyticsPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <AnalyticsHero />
        <LendingOverview />
        <PreApprovalEngine />
        <CreditOptimization />
        <CapitalTracker />
        <SecuritySection />
        <AnalyticsCTA />
        <Footer />
      </div>
    </>
  );
}
