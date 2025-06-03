"use client";
// components/sections/ContactHero.tsx
import { useState } from "react";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    select: "",
    message: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Get in Touch for
                <br />
                Support
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Fill out the form below so we can assist you with your business
                credit or lending inquiries.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Select Dropdown */}
              <div>
                <label
                  htmlFor="select"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Select
                </label>
                <select
                  id="select"
                  name="select"
                  value={formData.select}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="business-credit">Business Credit</option>
                  <option value="real-estate-loans">Real Estate Loans</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="support">Support</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message is important to us. Let us know how we can assist you."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* Terms Agreement */}
              <div>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-1"
                    required
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    I agree to the terms.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.agreeToTerms}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Image with Office Locations */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 relative">
                {/* Professional woman at desk simulation */}
                <div className="absolute inset-0">
                  {/* Background office setting */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>

                  {/* Window frames */}
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-300 dark:bg-gray-600 opacity-30"></div>
                  <div className="absolute top-0 right-0 w-1/3 h-1/2 border-2 border-gray-400 dark:border-gray-500 opacity-20"></div>

                  {/* Person silhouette */}
                  <div className="absolute bottom-1/4 left-1/4 w-32 h-40 bg-gray-800 dark:bg-gray-600 rounded-t-full opacity-60"></div>

                  {/* Desk */}
                  <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gray-400 dark:bg-gray-600 opacity-40"></div>

                  {/* Laptop */}
                  <div className="absolute bottom-1/5 left-1/3 w-16 h-12 bg-gray-700 dark:bg-gray-500 rounded opacity-50"></div>

                  {/* Plant */}
                  <div className="absolute bottom-1/5 right-1/4 w-8 h-12 bg-green-500 dark:bg-green-600 rounded-t-full opacity-40"></div>
                </div>
              </div>
            </div>

            {/* Office Location Cards */}
            <div className="absolute bottom-8 left-8 right-8 space-y-4">
              {/* Main Office 
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Main Office
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      123 Finance Ave, Suite 100
                    </div>
                  </div>
                </div>
              </div>*/}

              {/* Branch Office 
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Branch Office
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      456 Lending Blvd, 2nd Floor
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
