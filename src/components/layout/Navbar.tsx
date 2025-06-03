"use client";

// components/layout/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Light theme logo */}
              <div className="block dark:hidden">
                <Image
                  src="/images/logos/light_logo.png"
                  alt="Blue Ledger Capital"
                  width={180}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              {/* Dark theme logo */}
              <div className="hidden dark:block">
                <Image
                  src="/images/logos/dark_logo.png"
                  alt="Blue Ledger Capital"
                  width={180}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/chat-apply"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800">
            <div className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
              >
                Services
              </Link>
              <Link
                href="/testimonials"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
              >
                Contact Us
              </Link>
              <div className="px-4 pt-2">
                <Link
                  href="/chat-apply"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
