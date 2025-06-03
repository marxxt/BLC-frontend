// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logos/dark_logo.png"
                alt="Blue Ledger Capital"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Transformative financial solutions for modern businesses.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://linkedin.com/company/blue-ledger-capital"
                className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://x.com/blueledgercap"
                className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">X (formerly Twitter)</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link
                href="https://facebook.com/blueledgercapital"
                className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://instagram.com/blueledgercapital"
                className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.017 5.5a.5.5 0 00-.5-.5h-3.034a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h3.034a.5.5 0 00.5-.5v-9zm-1.517 1.5c.966 0 1.75.784 1.75 1.75S11.466 10.5 10.5 10.5s-1.75-.784-1.75-1.75S9.534 6.5 10.5 6.5zm0 1c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75zM5.5 2A3.5 3.5 0 002 5.5v9A3.5 3.5 0 005.5 18h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0014.5 2h-9zm0 1h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://youtube.com/@blueledgercapital"
                className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM8.5 7.5C8.5 7.22386 8.72386 7 9 7H11C11.2761 7 11.5 7.22386 11.5 7.5V12.5C11.5 12.7761 11.2761 13 11 13H9C8.72386 13 8.5 12.7761 8.5 12.5V7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/credit-solutions"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Credit Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/analytics"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/business-loans"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Business Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400 dark:text-gray-500">
              <p>hello@blueledgercapital.com</p>
              <p className="pt-2">
                <Link
                  href="/privacy"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link
                  href="/terms"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 dark:text-gray-500">
          <p>&copy; 1997 Blue Ledger Capital. All rights reserved.</p>
          <Link href={"/contact"}>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Stay Connected</span>

              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-700 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-700 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
