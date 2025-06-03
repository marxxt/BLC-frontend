// testimonials/page.tsx
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import TestimonialsHero from "@/components/sections/TestimonialsHero";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import Footer from "@/components/layout/Footer";

export default function TestimonialsPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <TestimonialsHero />
        <NewsletterSignup />
        <Footer />
      </div>
    </>
  );
}
