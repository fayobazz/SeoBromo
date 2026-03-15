import React, { useState, useCallback } from "react";

// Map config outside component to avoid re-creation on every render
const mapConfig = {
  address: "1600+Amphitheatre+Parkway,+Mountain+View,+CA",
  zoom: "14",
  businessName: "Your+Business+Name",
  mapStyle: "grayscale(1) contrast(1.2) opacity(0.7)",
};

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // useCallback to memoize handlers
  const handleChange = useCallback(({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Ideally send to backend or API here
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We will get back to you soon.");
    },
    [formData]
  );

  return (
    <section
      className="bg-[#0a0a2a] relative min-h-screen" // Changed background to dark blue/black
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:py-20">
          {/* Removed SVG background entirely */}

          {/* Form Content */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Have questions or want to discuss a product? Reach out and we will
              get back to you within 24 hours.
            </p>

            {/* Contact Information */}
            <div className="mt-10 space-y-4 text-left">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-indigo-300" aria-hidden="true">
                  {/* Location Icon */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <address className="ml-4 not-italic text-base text-white">
                 Building name: 4 Killo infront of birhana selam printing press dink Sera complex, 2nd floor office number 29
<br/>Street name : 4 Killo, Adwa street
<br/>City: Addis Ababa
<br/>Country: Ethiopia
                  <br />
                  {/* Addis Ababa, Ethiopia */}
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-indigo-300" aria-hidden="true">
                  {/* Phone Icon */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+251912469645"
                  className="ml-4 text-base text-white underline"
                  aria-label="Call us at (251) 956-7890"
                >
                  <br/>Email: redeemedt24@gmail.com
<br/>Tell: +251912469645/+251912646646

                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    required
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    required
                    autoComplete="email"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#e4ac43] px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional content below the form */}
        <section
          aria-labelledby="location-heading"
          className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 max-w-4xl mx-auto"
        >
          <h3 id="location-heading" className="text-2xl font-bold text-gray-900 mb-6">
            Our Location
          </h3>

          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              title="Detailed Business Location"
              scrolling="no"
              loading="lazy"

              src={`https://maps.google.com/maps?width=100%&height=400&hl=en&q=$2QM6+FC8, Adwa St, Addis Ababa}(${mapConfig.businessName})&ie=UTF8&t=&z=16&iwloc=B&output=embed`}
              className="rounded-xl"
              aria-label="Google Maps showing business location"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Visit Us</h4>
              <address className="not-italic text-gray-600">
               Building name: 4 Killo infront of birhana selam printing press, dink Sera complex, 2nd floor office number 29
<br/>Street name : 4 Killo, Adwa street
<br/>City: Addis Ababa
              </address>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">City</h4>
              <p className="text-gray-600">
              <br/>Addis Ababa
                <br />
                Sat: 10AM-2PM
                <br />
                Sun: Closed
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Quick Contact</h4>
              <p className="text-gray-600">
                <a href="tel:+251912469645" className="underline">
<br/>Tell: +251912469645

                  </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:redeemedt24@gmail.com"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                                     <br/>Email: redeemedt24@gmail.com

                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactUsSection;