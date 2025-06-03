"use client";
// pages/faq.tsx
import { useState } from "react";
import CustomHead from "@/components/layout/Head";
import Navbar from "@/components/layout/Navbar";
import FAQHero from "@/components/sections/FAQHero";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function FAQPage() {
  return (
    <>
      <CustomHead />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <FAQHero />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
