import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet";

const PerfumeHero = () => {
  return (
    <>
      <Helmet>
        <title>More Products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
        <meta
          name="description"
          content="Explore our wide range of producs redeemed trading provides suited for your specific needs at Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem. Quality products for home and industrial use."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://redeemedeth.com/others" />
      </Helmet>

      <section
        className="relative overflow-hidden"
        aria-label="Detergents Collection Hero Section"
        style={{ backgroundColor: '#0a0a2a' }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {/* Bubble pattern background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(228, 172, 67, 0.15) 0%, transparent 20%),
                radial-gradient(circle at 80% 70%, rgba(228, 172, 67, 0.15) 0%, transparent 20%),
                linear-gradient(to bottom, transparent 0%, #0a0a2a 100%)
              `,
            }}
          ></div>

          {/* Animated bubbles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#e4ac43]/20 animate-float"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}

          {/* Accent shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#e4ac43]/10 blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#e4ac43]/5 blur-3xl opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Tagline */}
            <div className="animate-fade-in-up mb-6">
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#e4ac43]/10 text-[#e4ac43]"
                style={{ backdropFilter: 'blur(4px)' }}
              >
                Redeemed Trading
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up animate-delay-100 text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              tabIndex={-1}
            >
             Our Products
            </h1>

            {/* Description */}
            <p
              className="animate-fade-in-up animate-delay-200 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
              aria-label="Description of detergents collection"
            >
              We have wide range of products suited for your specific needs
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/about"
                className="flex items-center justify-center px-8 py-3 text-base font-medium text-[#0a0a2a] bg-[#e4ac43] rounded-lg hover:bg-[#d19a3a] transition-all duration-300 shadow hover:shadow-md"
                aria-label="explore products from Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem"
              >
                About Us
                <FiArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/30"
                aria-label="Contact Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none" aria-hidden="true">
          <svg
            className="w-full h-20 md:h-28"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f3f4f6"
              d="M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default PerfumeHero;