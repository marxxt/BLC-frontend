// pages/about.tsx
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/sections/AboutHero";
import AboutStats from "@/components/sections/AboutStats";
import TeamSection from "@/components/sections/TeamSection";
import AboutTestimonial from "@/components/sections/AboutTestimonial";
import ExpertConnect from "@/components/sections/ExpertConnect";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <AboutHero />
        <AboutStats />
        {/* <TeamSection /> */}
        <AboutTestimonial />
        <ExpertConnect />
        <Footer />
      </div>
    </>
  );
}
