// components/sections/AboutTestimonial.tsx
export default function AboutTestimonial() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed mb-8">
          "Blue Ledger Capital transformed our business financing experience,
          making it seamless and efficient."
        </blockquote>

        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">JT</span>
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900 dark:text-white">
              Jordan Taylor
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Entrepreneur
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
