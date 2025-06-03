// components/sections/TestimonialsHero.tsx
import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialsHero() {
  const testimonials = [
    {
      id: 1,
      quote: "Blue Ledger Capital has changed the landscape of our business!",
      author: "Jordan Taylor",
      role: "Business Owner",
      featured: true,
    },
    {
      id: 2,
      quote:
        "Our experience with Blue Ledger significantly improved our financial position and opportunities.",
      author: "Casey Morgan",
      role: "Financial Analyst",
      featured: false,
    },
    {
      id: 3,
      quote:
        "The team at Blue Ledger Capital provided exceptional service and guidance throughout our funding process.",
      author: "Alex Rodriguez",
      role: "Real Estate Investor",
      featured: false,
    },
    {
      id: 4,
      quote:
        "Professional, efficient, and results-driven. Blue Ledger Capital exceeded all our expectations.",
      author: "Sam Chen",
      role: "Startup Founder",
      featured: false,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Side - Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                Client Testimonials
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Real Experiences
                <br />
                from Our Clients
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover the transformative power of our lending solutions
                through the voices of those who experienced it firsthand. Our
                clients have realized remarkable growth and success.
              </p>
            </div>
          </div>

          {/* Right Side - Testimonials Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  featured={testimonial.featured}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Testimonials Section */}
        {/* <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* More testimonial placeholders 
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center h-32">
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                LOGO
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center h-32">
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                LOGO
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center h-32">
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                LOGO
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center h-32">
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                LOGO
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots 
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>*/}
      </div>
    </section>
  );
}
