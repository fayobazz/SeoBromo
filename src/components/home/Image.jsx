import React from "react";
import { Link } from "react-router-dom";

const ImgBreak = () => (
  <section
    className="w-full bg-gray-50 text-black relative py-16 px-0 font-['Roboto_Condensed'] overflow-hidden"
    aria-label="Newsletter subscription section"
  >
    {/* Section Title */}
    <header className="text-center mb-12 px-6">
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide"
        tabIndex={-1}
      >
        {/* Intentionally left blank as per original */}
      </h2>
    </header>

    {/* Parallax Section with Solid Blue-Black */}
    <div
      className="relative w-full h-[480px] md:h-[600px] rounded-b-3xl shadow-lg overflow-hidden"
      role="img"
      aria-label="Blue-black parallax background"
    >
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 bg-[#0a0a2a] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "none", // No image, just solid color
          transform: "translateZ(0)", // Force hardware acceleration
          willChange: "transform", // Optimize for parallax
        }}
        aria-hidden="true"
      ></div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-20">
        <article
          className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-xl max-w-xl text-white space-y-6 shadow-xl animate-fadeInUp max-w-full mx-auto"
          aria-label="Newsletter subscription call to action"
        >
          <p className="text-2xl md:text-3xl font-bold uppercase leading-snug">
            Subscribe to our Newsletter
          </p>
          <div className="text-center mt-12">
            {/* <Link
              to="/about"
              className="inline-block px-6 py-3 bg-[#e4ac43] text-black uppercase font-semibold tracking-wide rounded hover:bg-[#f1c859] transition-colors"
            > */}

<a href="mailto:redeemedt24@gmail.com" className="inline-block px-6 py-3 bg-[#e4ac43] text-black uppercase font-semibold tracking-wide rounded hover:bg-[#f1c859] transition-colors">
              Subscribe Now

</a>
              {/* Subscribe Now */}
            {/* </Link> */}
          </div>
        </article>
      </div>

      {/* Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20"
        aria-hidden="true"
      >
        <svg
          className="relative block w-full h-24 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          role="img"
          aria-label="Decorative wave at bottom of section"
          focusable="false"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,202.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  </section>
);

export default ImgBreak;