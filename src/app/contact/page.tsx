// pages/contact.tsx
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import ContactHero from "@/components/sections/ContactHero";
import ContactFAQ from "@/components/sections/ContactFAQ";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <ContactHero />
        <ContactFAQ />
        <Footer />
      </div>
    </>
  );
}
