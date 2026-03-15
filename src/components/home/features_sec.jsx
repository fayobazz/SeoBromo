import React from "react";
import { Helmet } from "react-helmet";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Quality Products",
    description: "Premium materials and craftsmanship for lasting durability",
    ariaLabel: "Quality assurance icon"
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Affordable Prices",
    description: "Competitive pricing without compromising on quality",
    ariaLabel: "Affordable pricing icon"
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
        />
      </svg>
    ),
    title: "International Partnerships",
    description: "Global network ensuring the best resources and innovation",
    ariaLabel: "Global network icon"
  },
];

const FeatureCard = ({ feature }) => {
  const cardRef = React.useRef(null);

  const handleMouseMove = React.useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`;
    card.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    card.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
  }, []);

  return (
    <li
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="space-y-4 border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 ease-out cursor-pointer flex flex-col items-center justify-center h-full bg-white relative overflow-hidden"
      style={{
        willChange: "transform",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }}
      aria-label={`Feature: ${feature.title}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center relative z-10 transform transition-transform duration-300 group-hover:scale-110"
        aria-label={feature.ariaLabel}
      >
        {feature.icon}
      </div>
      <h3 className="text-xl text-gray-800 font-bold relative z-10">{feature.title}</h3>
      <p className="text-gray-600 text-sm relative z-10">{feature.description}</p>
    </li>
  );
};

export const Features = () => {
  return (
    <>
      <Helmet>
        <title>Our Competitive Advantages | Company Name</title>
        <meta name="description" content="Discover what sets us apart - quality products, affordable prices, and global partnerships that deliver exceptional value." />
        <meta name="keywords" content="quality products, affordable pricing, global partnerships, company advantages" />
        <meta property="og:title" content="What Makes Us Unique | Company Name" />
        <meta property="og:description" content="Learn about our competitive advantages in quality, pricing, and global reach." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": features.map((feature, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": feature.title,
              "description": feature.description
            }))
          })}
        </script>
      </Helmet>

      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="features-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              id="features-heading"
              className="text-gray-800 text-4xl font-extrabold sm:text-5xl mb-6"
            >
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Discover the unique advantages that make us your ideal partner
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <FeatureCard key={`feature-${idx}`} feature={item} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};