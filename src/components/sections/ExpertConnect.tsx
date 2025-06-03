"use client";
// components/sections/ExpertConnect.tsx
import { useState } from "react";

export default function ExpertConnect() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Expert connect signup:", email);
    setEmail("");
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Left side dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 dark:bg-blue-600 rounded-full opacity-40"></div>
        <div className="absolute top-40 left-32 w-3 h-3 bg-blue-500 dark:bg-blue-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-16 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full opacity-50"></div>

        {/* Right side decorative bars */}
        <div className="absolute top-32 right-20 space-y-2">
          <div className="w-12 h-2 bg-blue-400 dark:bg-blue-600 opacity-30"></div>
          <div className="w-16 h-2 bg-blue-500 dark:bg-blue-500 opacity-40"></div>
          <div className="w-8 h-2 bg-blue-600 dark:bg-blue-400 opacity-35"></div>
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-20 right-1/4 flex space-x-2">
          <div className="w-6 h-2 bg-blue-400 dark:bg-blue-600 opacity-30"></div>
          <div className="w-10 h-2 bg-blue-500 dark:bg-blue-500 opacity-40"></div>
          <div className="w-4 h-2 bg-blue-600 dark:bg-blue-400 opacity-35"></div>
        </div>

        {/* Additional scattered dots */}
        <div className="absolute top-60 right-60 w-3 h-3 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20"></div>
        <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-blue-500 dark:bg-blue-500 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-left relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Connect with Our
              <br />
              Experts Today
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover how Blue Ledger Capital can assist you in achieving your
              financial dreams. Our dedicated team is eager to provide
              personalized solutions tailored to your needs.
            </p>
          </div>

          {/* Right Side - Newsletter Signup */}
          <div className="space-y-6">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            {/* Subscriber Count */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
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
                <div className="w-10 h-10 bg-green-500 dark:bg-green-400 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
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
                <div className="w-10 h-10 bg-purple-500 dark:bg-purple-400 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
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
                27 thousand subscribers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
