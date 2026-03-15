import React, {  Suspense } from "react";
import { Helmet } from "react-helmet";
import { FiArrowRight } from "react-icons/fi";

// Lazy load non-critical components
// const Navbar = lazy(() => import("../Navbar"));
// const Footer = lazy(() => import("../layout/Footer"));

const PerfumeHero = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Premium Perfume Collection | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
        <meta name="description" content="Explore our elegant and classy perfume collection. Discover exquisite fragrances for every occasion." />
        <meta name="keywords" content="perfume collection, luxury fragrances, Bromochem perfumes, elegant scents" />
        <meta property="og:title" content="Premium Perfume Collection | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem" />
        <meta property="og:description" content="Discover our elegant and classy collection of perfumes" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://redeemedeth.com/perfumes" />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Perfume Collection",
          "description": "Elegant and classy collection of perfumes",
          "url": "https://redeemedeth.com/perfumes",
          "publisher": {
            "@type": "Organization",
            "name": "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem"
          }
        })}
      </script>

      <Suspense fallback={
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          Loading...
        </div>
      }>
        {/* <Navbar /> */}

        <section
          className="relative overflow-hidden"
          aria-label="Perfume Collection Introduction"
          style={{ backgroundColor: '#0a0a2a' }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            {/* Subtle perfume-inspired pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `
                radial-gradient(circle at 30% 30%, rgba(228, 172, 67, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 70% 70%, rgba(228, 172, 67, 0.1) 0%, transparent 20%),
                linear-gradient(to bottom, transparent 0%, #0a0a2a 100%)
              `,
            }}></div>

            {/* Floating perfume bottle silhouettes */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-5"
                style={{
                  backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2U0YWM0MyIgZD0iTTEyLDMgQzE1LjMxLDMgMTgsNS42OSAxOCw5IEMxOCwxMS45NyAxNiwxMy44OCAxMy4xNCwxNS42NiBDMTMuMDQsMTUuNzIgMTMsMTUuODMgMTMsMTYgVjIxIEgxMSBWMTYgQzExLDE1LjgzIDEwLjk2LDE1LjcyIDEwLjg2LDE1LjY2IEM4LDEzLjg4IDYsMTEuOTcgNiw5IEM2LDUuNjkgOC42OSwzIDEyLDMgTTEyLDEgQzcuNTgsMSA0LDQuNTggNCw5IEM0LDExLjg4IDUuNjQsMTQuNDQgOC4zNCwxNi4yNCBDOC41MywxNi4zNyA4LjY2LDE2LjYyIDguNjYsMTYuOTEgVjIzIEgxNS4zNCBWMjEgSDE3LjM0IFYyMyBIMTkuMzQgVjE2LjkxIEMxOS4zNCwxNi42MiAxOS40NywxNi4zNyAxOS42NiwxNi4yNCBDMjIuMzYsMTQuNDQgMjQsMTEuODggMjQsOSBDMjQsNC41OCAyMC40MiwxIDEyLDEgTTEyLDcgQzExLjQ1LDcgMTEsNy40NSAxMSw4IEMxMSw4LjU1IDExLjQ1LDkgMTIsOSBDMTIuNTUsOSAxMyw4LjU1IDEzLDggQzEzLDcuNDUgMTIuNTUsNyAxMiw3IFoiLz48L3N2Zz4=')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  width: '100px',
                  height: '150px',
                  top: `${Math.random() * 60 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Accent light effects */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#e4ac43]/10 blur-3xl opacity-20"
          ></div>
          <div
            aria-hidden="true"
            className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-[#e4ac43]/5 blur-3xl opacity-20"
          ></div>

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

              {/* Headline with semantic h1 */}
             <h1
              className="animate-fade-in-up animate-delay-100 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 mb-6"
              tabIndex={-1} // Helps screen readers focus on heading when navigating to page
            >
              Care Raw Materials Collection
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Here you can find raw materials that can be used to manufacture beauty care, Air Care, House care and many more...
            </p>

              {/* CTA buttons */}
              <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/others"
                  className="flex items-center justify-center px-8 py-3 text-base font-medium text-[#0a0a2a] bg-[#e4ac43] rounded-lg hover:bg-[#d19a3a] transition-all duration-300 shadow hover:shadow-md"
                  aria-label="Explore our products collection"
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

        {/* <Footer /> */}
      </Suspense>
    </>
  );
};

export default React.memo(PerfumeHero);