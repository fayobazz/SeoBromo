import React, { useEffect } from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const Pricing = () => {
  const services = [
    {
      name: "",
      price: "",
      unit: "",
      description: "We Provide raw materials for these -",
      features: [
        "Concentrated Perfume Oils",
        "For body Perfume and body splash/mist production",
        "High quality grade perfume oils for soap industries",

      ],
      cta: "Book A Call",
      popular: false,
    },
    // {
    //   name: "Pro Package",
    //   price: "$120,000",
    //   unit: "/KG",
    //   description: "We Provide Diluted Fragrances",
    //   features: [
    //     "30% discount",
    //     "Highest quality ingredients",
    //     "Express shipping",
    //     "Priority support",
    //     "Custom formulations available",
    //   ],
    //   cta: "Call Now",
    //   popular: true,
    // },
  ];

  // SEO: set title and meta description
  useEffect(() => {
    document.title = "Our Services | Premium Fragrance Solutions | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem";

    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent =
      "Explore our premium fragrance service packages including Starter Pack and Pro Package tailored to your needs.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }
  }, []);

  // SEO: JSON-LD structured data for service offers
  useEffect(() => {
    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Premium Fragrance Services",
      "provider": {
        "@type": "Organization",
        "name": "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fragrance Packages",
        "itemListElement:": services.map((service) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description,
          },
          "price": service.price.replace(/[^0-9.]/g, ""),
          "priceCurrency": "USD", // adjust as needed
          "availability": "https://schema.org/InStock",
          "url": window.location.origin + "/contact",
        })),
      },
    };

    const scriptId = "jsonld-services";
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.id = scriptId;
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(serviceData);
  }, [services]);

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#e4ac43]/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center animate-fade-in-up">
          <h2
            className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 sm:text-4xl"
            tabIndex={-1}
          >
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Premium fragrance solutions tailored to your needs
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 animate-fade-in-up animate-delay-100">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-sm flex flex-col border-2 ${
                service.popular
                  ? "border-[#e4ac43] bg-white"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-4 py-1.5 px-4 bg-[#e4ac43] text-white rounded-full text-xs font-semibold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>

                <p className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                    {service.price}
                  </span>
                  <span className="ml-2 text-xl font-medium text-gray-500">
                    {service.unit}
                  </span>
                </p>

                <ul className="mt-8 space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="flex-shrink-0 w-5 h-5 text-[#e4ac43] mt-0.5" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/contact"
                className={`mt-8 flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                  service.popular
                    ? "bg-[#e4ac43] text-white hover:bg-[#d19a3a] shadow-md hover:shadow-lg"
                    : "bg-white text-[#e4ac43] border border-[#e4ac43] hover:bg-[#e4ac43]/10"
                }`}
              >
                {service.cta}
                {service.popular && <FiArrowRight className="ml-2 w-5 h-5" />}
              </a>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center text-gray-500 animate-fade-in-up animate-delay-200">
          <p>Custom formulations available upon request</p>
          <p className="mt-2">Volume discounts for bulk orders</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
