import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet";

const SendelHero = () => {
  return (
    <>
      <Helmet>
        <title>Premium Incense Collection | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
        <meta
          name="description"
          content="Discover our wide range of premium incense products for air care and spiritual well-being."
        />
        <meta
          property="og:title"
          content="Incense Collection | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem"
        />
        <meta
          property="og:description"
          content="Explore our premium incense selection for all your aromatic needs."
        />
      </Helmet>

      <section
        className="relative overflow-hidden"
        aria-labelledby="hero-heading"
        style={{ backgroundColor: '#0a0a2a' }}
      >
        {/* Decorative elements with reduced motion preference */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {/* Incense smoke pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(228, 172, 67, 0.1) 0%, transparent 25%),
                radial-gradient(circle at 80% 70%, rgba(228, 172, 67, 0.1) 0%, transparent 25%),
                linear-gradient(to bottom, transparent 0%, #0a0a2a 100%)
              `,
            }}
          ></div>

          {/* Floating incense smoke */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNlNGFjNDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTAsMTgwIEMyMCwxNjAgNDAsMTQwIDYwLDEzMCBDODAsMTIwIDEwMCwxMjAgMTIwLDEzMCBDMTQwLDE0MCAxNjAsMTYwIDE3MCwxODAiLz48L3N2Zz4=')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '200px',
                height: '200px',
                top: `${Math.random() * 60 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))
        }
          {/* Accent shapes */}
          <div
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#e4ac43]/10 blur-3xl motion-reduce:blur-xl opacity-20"
            style={{ willChange: 'transform' }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#e4ac43]/5 blur-3xl motion-reduce:blur-xl opacity-20"
            style={{ willChange: 'transform' }}
          ></div>
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
              id="hero-heading"
              className="animate-fade-in-up animate-delay-100 text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Incense Raw Materials Collection
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up animate-delay-200 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Explore our wide range of raw materials for incense.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                              href="/others"
                              className="flex items-center justify-center px-8 py-3 text-base font-medium text-[#0a0a2a] bg-[#e4ac43] rounded-lg hover:bg-[#d19a3a] transition-all duration-300 shadow hover:shadow-md"
                              aria-label="Explore our perfume collection"
                            >
                              Explore Our Products
                              <FiArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                              href="/contact"
                              className="flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/30"
                              aria-label="Contact us about perfumes"
                            >
                              Call Us
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
            role="img"
            aria-label="Decorative wave"
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

export default React.memo(SendelHero);