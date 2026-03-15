import React, { useEffect } from "react";
import {
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  const footerNavs = [
    {
      label: "Products",
      items: [
        { href: "/perfumes", name: "Perfumes Raw Materials" },
        { href: "/sendels", name: "Incenses Raw Materials" },
        { href: "/detergents", name: "Detergents Raw Materials" },
        { href: "/care", name: "Personal Care Raw Materials" },
        { href: "/others", name: "Our Products" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "/about", name: "About Us" },
        { href: "/contact", name: "Contact Us" },
        { href: "/services", name: "Our Services" },
        { href: "/team", name: "Our Team" },
      ],
    },

    {
      label: "Contact",
      items: [
        { href: "tel:+251912469645", name: "+251912469645" },
        { href: "mailto:redeemedt24@gmail.com", name: "redeemedt24@gmail.com" },
        { name: "Adwa street, Dink Sera complex, 2nd floor office number 29 " },
        { name: "Addis Ababa, Ethiopia" },
      ],
    },
  ];

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem Trading | Quality Perfumes, Incenses & More";

    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent =
      "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem offers premium perfumes, incenses, detergents, and personal care products in Addis Ababa, Ethiopia. Contact us for the best fragrance solutions.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }

    // Add JSON-LD structured data for Organization
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem",
      url: window.location.origin,
      telephone: "+251911234567",
      email: "info@bromochem.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "",
        addressLocality: "Addis Ababa",
        addressRegion: "",
        postalCode: "",
        addressCountry: "Ethiopia",
      },
      sameAs: [
        // Add social profiles URLs if available
        "https://facebook.com/bromochem",
        "https://twitter.com/bromochem",
        "https://instagram.com/bromochem",
        "https://linkedin.com/company/bromochem",
      ],
    };

    const scriptId = "jsonld-organization";
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.id = scriptId;
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(organizationData);
  }, []);

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-10 border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-500 mb-6 max-w-md">
              Subscribe to our newsletter for the latest product updates and
              offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3 text-gray-800 bg-gray-100 rounded-lg focus:ring-2 focus:ring-[#e4ac43] outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#e4ac43] hover:bg-[#d19a3a] text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerNavs.map((nav, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {nav.label}
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  {nav.items.map((item, index) => (
                    <li key={index}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-[#e4ac43] transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="opacity-80">{item.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
      </div>
    </footer>
  );
};

export default Footer;
