import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-gray-50">
      <TextParallaxContent
        imgUrl="assets/images/hero/3.webp"
        subheading="Our Guiding"
        heading="Vision"
      >
        <ContentSection
          title="Seeing Beyond"
          description="To be a worldwide recognized company for providing scents that enrich products, flavor the future, and reflect the unique character of every individual we serve."
          buttonText="Explore Our Vision"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="assets/images/hero/4.webp"
        subheading="Our"
        heading="Mission"
      >
        <ContentSection
          title="Purpose in Every Drop"
          description="To design, create, and supply high-quality raw materials that can be used for industrial, home, and body care products that inspire connection, elevate everyday experiences, and express individuality , all at an affordable price. We partner with manufacturers of laundry soap, detergents, dish wash, hand wash, cosmetics, and personal scents to bring their products to life with unique, lasting aromas."
          buttonText="Discover Our Process"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="assets/images/hero/6.webp"
        subheading="Our Core"
        heading="Values"
      >
        <ContentSection
          title="Quality, Innovation, Affordability"
          description="Quality without compromise is our motto because  We deliver raw materials crafted to meet the highest standards in scent, safety, and performance.


Innovation in every drop because we continually create new, inspiring raw materials for aromas tailored to customer needs and trends.


 Affordability & Accessibility is our slogan because we provide premium fragrence raw materials at prices that make excellence available to all markets.


 Partnership & Trust for Building long-term relationships with manufacturers based on reliability and shared success.

 Reflecting sustainability & responsibility becuase We care for people and the planet by sourcing responsibly and minimizing waste."
          buttonText="Our Sustainability Plan"
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl font-light tracking-wider text-gold-300 md:mb-4 md:text-2xl">
        {subheading}
      </p>
      <p className="text-center text-5xl font-bold leading-tight md:text-8xl">
        {heading}
        <span className="text-gold-400">.</span>
      </p>
    </motion.div>
  );
};

const ContentSection = ({ title, description, buttonText }) => (
  <div className="mx-auto max-w-5xl px-4 pb-24 pt-12">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 md:col-span-4 md:text-4xl">
        {title}
      </h2>
      <div className="md:col-span-8">
        <p className="mb-6 text-lg leading-relaxed text-gray-600 md:text-xl">
          {description}
        </p>

      </div>
    </div>
  </div>
);