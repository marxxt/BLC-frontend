// components/sections/AboutHero.tsx
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-left">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Empowering Your
            <br />
            Financial Future
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Discover our commitment to innovative finance solutions that
            transform business credit and real estate lending.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/chat-apply"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
