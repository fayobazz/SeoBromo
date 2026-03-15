import React from "react";
// import { FiArrowRight } from "react-icons/fi";

const SecondStory = () => {
  return (
    <section
      aria-label="Redeemed Story Section"
      className="relative py-28 bg-gray-50 overflow-hidden px-6 lg:px-8"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#e4ac43]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-white/50"></div>
        <div className="absolute top-1/4 -left-20 w-40 h-px bg-gradient-to-r from-transparent via-[#e4ac43]/30 to-transparent"></div>
        <div className="absolute bottom-1/3 -right-20 w-40 h-px bg-gradient-to-r from-transparent via-[#e4ac43]/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image with hover effects */}
        <div className="relative group animate-fade-in-up animate-delay-100">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#e4ac43]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              className="w-full h-auto transition-all duration-500 group-hover:scale-105"
              src="/assets/images/logog.jpg"
              alt="Redeemed manufacturing facility"
              loading="lazy"
              // fit="contain"
              decoding="async"
            />
            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#e4ac43]/50 rounded-bl-2xl"></div>
          </div>
          {/* Floating element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#e4ac43]/10 rounded-full blur-xl"></div>
        </div>
        {/* Text content with animations */}
        <article className="animate-fade-in-up space-y-6 text-center lg:text-left" aria-labelledby="our-story-title">
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#e4ac43]/10 text-[#e4ac43] mb-4">
              Our Story
            </span>
            <h1
              id="our-story-title"
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900">
                It All Started With A Dream
              </span>
            </h1>
            <div className="mt-4 w-16 h-1 bg-[#e4ac43] mx-auto lg:mx-0"></div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
           Redeemed trading is a fragrence raw material provider company operating in Ethiopia, specializing in high-quality fragrances.  We are committed to excellence, using the finest ingredients and traditional methods to craft our raw materials. Each fragrance tells a story, capturing the essence of our heritage and the beauty of our surroundings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* <button
              type="button"
              className="flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-[#e4ac43] rounded-lg hover:bg-[#d19a3a] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Our Craftsmanship
              <FiArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-8 py-3 text-lg font-medium text-[#e4ac43] bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 border border-[#e4ac43]"
            >
              Learn More
            </button> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default SecondStory;
