"use client";
import { useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "The professionals and expertise at Blue Ledger Capital have truly made a difference.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      rating: 5,
    },
    {
      quote:
        "Our business credit score improved by 150 points in just 6 months. The results speak for themselves.",
      author: "Michael Chen",
      role: "Founder",
      company: "Growth Dynamics",
      rating: 5,
    },
    {
      quote:
        "Cobalt's financial analytics helped us identify $2M in untapped opportunities. Game-changing!",
      author: "Emily Rodriguez",
      role: "CFO",
      company: "Innovative Solutions",
      rating: 5,
    },
    {
      quote:
        "The credit optimization strategies were exactly what our growing company needed. Highly recommend!",
      author: "David Park",
      role: "VP Finance",
      company: "NextGen Industries",
      rating: 5,
    },
    {
      quote:
        "From startup to scale-up, Cobalt has been our trusted financial partner every step of the way.",
      author: "Lisa Thompson",
      role: "Co-Founder",
      company: "Digital Ventures",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-white dark:bg-zinc-900 py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Client Feedback
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Transformative Financial Solutions Offered
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our clients have experienced remarkable results with our financial
              solutions, seeing immediate improvements in their business
              operations and growth metrics.
            </p>
            <div className="pt-4">
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                Service Law
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Testimonial card */}
          <div className="relative">
            <div className="bg-gray-50 dark:bg-zinc-800 rounded-2xl p-8 min-h-[300px] transition-all overflow-hidden">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="text-lg text-gray-900 dark:text-white leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  — {testimonials[currentIndex].author}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].role} at{" "}
                  {testimonials[currentIndex].company}
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonials[currentIndex].rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-zinc-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center space-x-6 mt-6">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 bg-white dark:bg-zinc-700 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-blue-600"
                        : "bg-gray-300 dark:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-10 h-10 bg-white dark:bg-zinc-700 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-600 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="mt-4 w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-1">
              <div
                className="bg-blue-600 h-1 rounded-full transition-all duration-300 ease-linear"
                style={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
