import React, { useState, useEffect, useCallback } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "/assets/images/logo/desktop-logo.png",
      name: "Bromochem",
      title: "Mumbai, India",
      quote:
        "We collaboratively work with a company called Brormochem industries based in Mumbai, India, who has more than 100 years of experience in the industry. ",
      country: "IND",
      rating: 5,
    },
    // {
    //   avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    //   name: "Raj Patel",
    //   title: "Perfume Distributor, Mumbai",
    //   quote:
    //     "Working with Bromochem has transformed our business. Their consistent quality and reliable delivery make them our top supplier.",
    //   country: "IN",
    //   rating: 4,
    // },
    // {
    //   avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    //   name: "Selamawit Gebre",
    //   title: "Spa Manager, Bahir Dar",
    //   quote:
    //     "The aromatic compounds have elevated our spa experience. Clients specifically ask for treatments using these fragrances.",
    //   country: "ET",
    //   rating: 5,
    // },
    // {
    //   avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    //   name: "Arjun Desai",
    //   title: "Manufacturing Director, Delhi",
    //   quote:
    //     "The technical support team helped us customize solutions for our production needs. Truly a partnership approach.",
    //   country: "IN",
    //   rating: 5,
    // },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNavigation = useCallback(
    (direction) => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => {
          if (direction === "next") {
            return prev === testimonials.length - 1 ? 0 : prev + 1;
          } else {
            return prev === 0 ? testimonials.length - 1 : prev - 1;
          }
        });
        setFade(true);
      }, 300);
    },
    [testimonials.length]
  );

  const handleDotClick = useCallback((idx) => {
    setFade(false);
    setTimeout(() => {
      setCurrentTestimonial(idx);
      setFade(true);
    }, 300);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-[#e4ac43]" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      className="relative py-24 bg-gray-50 overflow-hidden"
      aria-label="Testimonials from clients"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#e4ac43]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-white/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center animate-fade-in-up">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#e4ac43]/10 text-[#e4ac43] mb-4">
            Client Voices
          </span>
          <h2
            className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 sm:text-5xl"
            // tabIndex={0}
          >
            Trusted by Businesses Worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our valued partners in Ethiopia and India
          </p>
        </div>

        {/* Testimonial card */}
        <div className="mt-16 relative" aria-live="polite">
          <div
            className={`transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <article
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto"
              // tabIndex={-1}
              aria-label={`Testimonial from ${testimonials[currentTestimonial].name}`}
            >
              <div className="flex flex-col md:flex-row gap-8">
             <div className="flex-shrink-0 text-center md:text-left">
  <img
    src={testimonials[currentTestimonial].avatar}
    // alt={`Photo of ${testimonials[currentTestimonial].name}`}
    className="w-64 h-auto rounded-full object-cover border-4 border-[#e4ac43]/20 mx-auto md:mx-0"
    alt = "Loading"
    style={{
      width: "400px", // Increased width for wide logo
      height: "auto", // Maintain aspect ratio
      maxHeight: "120px", // Constrain height
      borderRadius: "0", // Remove rounded corners for logo
      objectFit: "contain" // Ensure full logo is visible
    }}
    loading="lazy"
  />
  <div className="mt-4 flex justify-center md:justify-start" aria-label={`${testimonials[currentTestimonial].rating} star rating`}>
    {renderStars(testimonials[currentTestimonial].rating)}
  </div>
</div>
                <div>
                  <blockquote>
                    <p className="text-lg md:text-xl text-gray-700 italic">
                      &quot;{testimonials[currentTestimonial].quote}&quot;
                    </p>
                  </blockquote>
                  <footer className="mt-6">
                    <p className="text-lg font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <span>{testimonials[currentTestimonial].title}</span>
                      <span className="mx-2" aria-hidden="true">•</span>
                      <span className="flex items-center">
                        <img
                          src={`https://flagcdn.com/24x18/${testimonials[currentTestimonial].country.toLowerCase()}.png`}
                          alt={testimonials[currentTestimonial].country}
                          className="mr-2"
                          loading="lazy"
                        />
                        {testimonials[currentTestimonial].country}
                      </span>
                    </p>
                  </footer>
                </div>
              </div>
            </article>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => handleNavigation("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
            type="button"
          >
            <FiArrowLeft className="w-6 h-6 text-[#e4ac43]" aria-hidden="true" />
          </button>
          <button
            onClick={() => handleNavigation("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
            type="button"
          >
            <FiArrowRight className="w-6 h-6 text-[#e4ac43]" aria-hidden="true" />
          </button>
        </div>

        {/* Dots navigation */}
        <nav
          className="mt-8"
          aria-label="Testimonials pagination"
        >
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((_, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleDotClick(idx)}
                  className={`w-3 h-3 rounded-full duration-150 focus:outline-none focus:ring-2 focus:ring-[#e4ac43] ${
                    currentTestimonial === idx
                      ? "bg-[#e4ac43] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  type="button"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Testimonials;
