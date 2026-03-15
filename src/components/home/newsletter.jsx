import React, { memo } from "react";
import { RxChevronRight } from "react-icons/rx";

// Memoized Button for better performance if props are stable
const Button = memo(({ title, variant, size, iconRight, ...props }) => {
  let baseStyle =
    "inline-flex items-center justify-center rounded px-4 py-2 font-semibold transition";

  let variantStyle = "";
  if (variant === "secondary") {
    variantStyle = "bg-[#e4ac43] text-white hover:bg-indigo-700";
  } else if (variant === "link") {
    variantStyle = "text-[#e4ac43] hover:text-indigo-800 bg-transparent px-0";
  } else {
    variantStyle = "bg-gray-200 text-gray-800 hover:bg-gray-300";
  }

  let sizeStyle = "";
  if (size === "link") {
    sizeStyle = "text-sm";
  } else {
    sizeStyle = "text-base";
  }

  return (
    <button type="button" className={`${baseStyle} ${variantStyle} ${sizeStyle}`} {...props}>
      {title}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
});

const Layout1 = (props) => {
  const { tagline, heading, description, buttons } = {
    ...Layout1Defaults,
    ...props,
  };

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
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Quality Products",
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
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Affordable Prices",
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
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "International Partnerships",
    },
  ];

  return (
    <section
      id="features"
      className="px-6 py-20 md:py-28 bg-gray-50 overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Tagline - First element to appear */}
        <p
          className="text-[#e4ac43] font-semibold text-sm uppercase tracking-wider mb-3
           animate-fade-in animate-duration-500 animate-delay-100"
        >
          {tagline}
        </p>

        {/* Heading - Appears after tagline */}
        <h2
          id="features-heading"
          className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 mb-6
           animate-fade-in animate-duration-700 animate-delay-200"
        >
          {heading}
        </h2>

        {/* Description - Appears after heading */}
        <p
          className="max-w-2xl mx-auto text-gray-600 text-md md:text-lg mb-10
           animate-fade-in animate-duration-700 animate-delay-300"
        >
          {description}
        </p>

        {/* Buttons - Appear after description */}
        <div
          className="flex justify-center flex-wrap gap-4 mb-12
           animate-fade-in animate-duration-700 animate-delay-400"
        >
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>

        {/* Features - Semantic list */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1
                 animate-fade-in animate-duration-1000 animate-delay-500"
              style={{ animationDelay: `${500 + idx * 100}ms` }}
            >
              <div
                className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Layout1Defaults = {
  tagline: "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem",
  heading: "What Sets Us Apart",
  description:
    "We go beyond basic services by combining innovation, quality, and global connections. Discover how we redefine excellence in our industry.",
  buttons: [
    { title: "Explore More", variant: "secondary" },
    {
      title: "Get Started",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};

export default Layout1;
