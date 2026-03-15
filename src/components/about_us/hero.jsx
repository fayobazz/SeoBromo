import React from "react";
import { Helmet } from "react-helmet";
import FirstStory from "./first_story";
import SecondStory from "./second_story";
import CallToAction from "./cta";
// import TeamSection from "./team";
import Testimonials from "./feedback";
import Footer from "../layout/Footer";
import Navbar from "../Navbar";
import Pricing from "../home/pricing";
import { FiArrowRight } from "react-icons/fi";
import ContactUsSection from "../home/ContactUs";

const WaveSection = () => {
  return (
    <>
      <Helmet>
        <title>What Sets Us Apart | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
        <meta
          name="description"
          content="Discover how Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem combines innovation, quality, and global connections to redefine excellence in our industry."
        />
      </Helmet>

      <Navbar />

      <section
        className="relative overflow-hidden"
        role="banner"
        aria-label="Introduction and company values"
        style={{ backgroundColor: '#0a0a2a' }}
      >
        {/* Subtle cosmic pattern background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(228, 172, 67, 0.15) 0%, transparent 25%),
              radial-gradient(circle at 80% 70%, rgba(228, 172, 67, 0.15) 0%, transparent 25%),
              linear-gradient(to bottom, transparent 0%, #0a0a2a 100%)
            `,
          }}
        ></div>

        {/* Animated stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
            />
          ))}
        </div>

        {/* Accent light effects */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#e4ac43]/10 blur-3xl opacity-30"
        ></div>
        <div
          aria-hidden="true"
          className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-[#e4ac43]/5 blur-3xl opacity-40"
        ></div>

        {/* Content */}
        <div className="relative z-10 py-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up mb-6">
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#e4ac43]/10 text-[#e4ac43]"
                style={{ backdropFilter: 'blur(4px)' }}
              >
                Redeemed Trading
              </span>
            </div>

            <h1
              className="animate-fade-in-up animate-delay-100 text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              // tabIndex={0}
            >
              What Sets Us Apart
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We go beyond basic services by combining innovation, quality, and global connections. Discover how we redefine excellence in our industry.
            </p>

            <nav
              className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col sm:flex-row justify-center gap-4"
              aria-label="Call to action navigation"
            >
              <a
                href="/others"
                className="flex items-center justify-center px-8 py-3 text-base font-medium text-[#0a0a2a] bg-[#e4ac43] rounded-lg hover:bg-[#d19a3a] transition-all duration-300 shadow hover:shadow-md"
              >
                Explore Products
                <FiArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/30"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        {/* Wave SVG divider */}
        <div
          className="absolute bottom-0 w-full overflow-hidden leading-none"
          aria-hidden="true"
        >
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

      <main role="main">
        <FirstStory />
        <SecondStory />
        <CallToAction />
        <Pricing />
        {/* <TeamSection /> */}
        <Testimonials />
        <ContactUsSection />
      </main>

      <Footer />
    </>
  );
};

export default WaveSection;