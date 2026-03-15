import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/layout/Footer';
import ContactUsSection from '../src/components/home/ContactUs';

const ContactPage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact Us | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem - Get in Touch</title>
        <meta
          name="description"
          content="Reach out to Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem for inquiries about our premium perfumes and detergents. We're here to answer your questions and assist you."
        />
        <meta name="keywords" content="contact Bromochem, customer support, product inquiries, perfume questions, detergent information" />
        <meta property="og:title" content="Contact Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem | Premium Product Inquiries" />
        <meta property="og:description" content="Get in touch with Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem for product information and support" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://redeemedeth.com/contact" />
        <link rel="canonical" href="https://redeemedeth.com/contact" />

        {/* Structured data for Contact Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem",
            "description": "Contact information for product inquiries",
            "url": "https://redeemedeth.com/contact",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+123-456-7890",
              "contactType": "customer service",
              "email": "info@bromochemredeemed.com",
              "areaServed": "Worldwide"
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content" role="main" className="min-h-screen scroll-mt-16">
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(ContactPage);