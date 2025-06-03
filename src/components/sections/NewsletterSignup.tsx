"use client";
// components/sections/NewsletterSignup.tsx
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // Handle newsletter signup
    setEmail("");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Decorative dots and shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 dark:bg-blue-600 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-blue-500 dark:bg-blue-500 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 right-60 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full opacity-50"></div>
        <div className="absolute top-60 right-80 w-6 h-6 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20"></div>

        {/* Right side decorative bars */}
        <div className="absolute bottom-20 right-10 space-y-2">
          <div className="w-16 h-2 bg-blue-500 dark:bg-blue-400 opacity-30"></div>
          <div className="w-12 h-2 bg-blue-600 dark:bg-blue-500 opacity-40"></div>
          <div className="w-20 h-2 bg-blue-400 dark:bg-blue-600 opacity-25"></div>
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-10 left-1/4 flex space-x-2">
          <div className="w-8 h-2 bg-blue-400 dark:bg-blue-600 opacity-30"></div>
          <div className="w-4 h-2 bg-blue-500 dark:bg-blue-500 opacity-40"></div>
          <div className="w-12 h-2 bg-blue-600 dark:bg-blue-400 opacity-35"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Unlock Your Financial
            <br />
            Future
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover how our innovative credit and lending solutions can
            transform your business's potential and drive growth like never
            before.
          </p>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Client Count */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="w-10 h-10 bg-green-500 dark:bg-green-400 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="w-10 h-10 bg-purple-500 dark:bg-purple-400 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <span className="text-gray-600 dark:text-gray-400 font-medium">
              3.2 million clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
