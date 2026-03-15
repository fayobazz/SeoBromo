import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins only once
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cursorRef = useRef(null);
  const buttonsRef = useRef(null);
  const heroBgRef = useRef(null);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        // Preload hero image
        const img = new Image();
        img.src = '/assets/images/hero/2.webp';
        await img.decode();
      // src="/assets/images/hero/2.webp"

        // Start animations after image is loaded
        initAnimations();
      } catch (error) {
        console.error('Error loading hero image:', error);
        initAnimations(); // Fallback if image fails to load
      }
    };

    const initAnimations = () => {
      const titleText = "Redemeed Trading PLC";
      const subtitleText = `"Essence of Elegance" Supplying the world's most exquisite raw materials for perfumes,detergents and many more products that are curated from rare ingredients and master fragrences.`;

      // Create cursor element
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      cursor.textContent = '|';
      cursorRef.current = cursor;

      // Clear elements and setup
      const titleEl = titleRef.current;
      const subtitleEl = subtitleRef.current;
      titleEl.textContent = '';
      subtitleEl.textContent = '';
      titleEl.appendChild(cursor);

      // GSAP timeline for coordinated animations
      const masterTL = gsap.timeline();

      // Background fade-in
      masterTL.fromTo(heroBgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.inOut" }
      );

      // Title typing effect
      let titleChars = [];
      for (let i = 0; i < titleText.length; i++) {
        const char = document.createElement('span');
        char.textContent = titleText[i];
        char.style.opacity = '0';
        titleChars.push(char);
        titleEl.insertBefore(char, cursor);
      }

      masterTL.to(titleChars, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.1,
        ease: "power1.in"
      });

      // Subtitle typing effect
      let subtitleChars = subtitleText.split('');
      let currentSubtitleText = '';

      subtitleChars.forEach((char) => {
        masterTL.to({}, {
          duration: 0.03,
          onComplete: () => {
            currentSubtitleText += char;
            subtitleEl.textContent = currentSubtitleText;
          }
        }, `+=0.03`);
      });

      // Button animations
      masterTL.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out"
        },
        "-=0.5"
      );

      // Background scroll effect
      // ScrollTrigger.create({
      //   trigger: heroBgRef.current,
      //   start: "top bottom",
      //   end: "bottom top",
      //   scrub: true,
      //   onUpdate: (self) => {
      //     const progress = self.progress;
      //     const yPos = progress * 30;
      //     gsap.to(heroBgRef.current, {
      //       backgroundPosition: `right ${30 + yPos}%`,
      //       duration: 0.1
      //     });
      //   }
      // });

      // Cursor blink animation
      // const cursorBlink = gsap.to(cursor, {
      //   opacity: 0,
      //   duration: 0.5,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: "none"
      // });

      // return () => {
      //   cursorBlink.kill();
      //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // };
    };

    loadAssets();

    // return () => {
    //   // Cleanup
    //   if (ScrollTrigger) {
    //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //   }
    // };
  }, []);

  return (
    <>
      <Helmet>
        <title>Premium Fragrances | Bromochem Redemeed - Luxury Perfume Collections</title>
        <meta name="description" content="Experience the art of luxury perfumery with Bromochem Redemeed's exclusive collections crafted by master perfumers using rare ingredients." />
        <meta property="og:image" content="/assets/images/hero/hero1-social.jpg" />
        <link rel="preload" href="/assets/images/hero/hero1.webp" as="image" />
      </Helmet>

      <section className="relative overflow-hidden h-screen">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />

        {/* Background image with lazy loading */}
        <div
          ref={heroBgRef}
          // className="hero-bg relative h-full w-full flex items-center bg-cover bg-no-repeat bg-right px-4 sm:px-6 lg:px-8 opacity-0"
          // style={{
          //   backgroundImage: "url('/assets/images/hero/5.webp')",
          //   backgroundSize: "cover"
          // }}
           className="relative w-full h-screen overflow-y-auto flex items-center px-4 sm:px-6 lg:px-8 "
          style={{
            background: `

              url('/assets/images/hero/5.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-7xl mx-auto w-full relative z-20 py-20">
            <div className="hero-content max-w-2xl">
              {/* Animated title */}
              <h1
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white pb-4 leading-tight"
              />

              {/* Animated subtitle */}
              <p
                ref={subtitleRef}
                className="mt-6 md:mt-8 text-base md:text-lg font-light leading-relaxed text-white/90 backdrop-blur-sm bg-black/20 p-4 md:p-6 rounded-xl border border-white/10 max-w-xl min-h-[120px] md:min-h-[150px]"
              />

              {/* Action buttons */}
              <div ref={buttonsRef} className="flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-12">
                <a
                  href="/contact"
                  className="hero-btn relative overflow-hidden group"
                  aria-label="Contact Us"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest font-bold text-white group-hover:text-black transition-colors duration-300">
                    Call Us
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
                <a
                  href="/others"
                  className="hero-btn border-2 border-gold-500 hover:bg-gold-500/10 transition-colors duration-300"
                  aria-label="Explore Products"
                >
                  <span className="flex items-center justify-center px-6 py-2 md:px-8 md:py-3 text-xs md:text-sm uppercase tracking-widest font-bold text-white">
                    Explore Collection
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

        {/* Animated wave effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              fill="url(#gold-gradient)"
              fillOpacity="0.2"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,128C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                values="
                  M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,128C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,128C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                "
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f9f3e6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <style jsx global>{`
        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.3), transparent 70%);
          pointer-events: none;
          opacity: 0;
          animation: fadeIn 2s forwards 1s;
        }
        @keyframes fadeIn {
          to { opacity: 0.4; }
        }
        .typing-cursor {
          color: #d4af37;
          font-weight: normal;
          display: inline-block;
          width: 0.1em;
        }
        .hero-btn {
          transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
          will-change: transform, opacity;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default React.memo(Hero);