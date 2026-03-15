import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/layout/Footer';
import Pricing from '../src/components/home/pricing';

const ProductPage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Our products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem - Premium Product Solutions</title>
        <meta
          name="description"
          content="Explore Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem's comprehensive products including premium perfumes, detergents, and specialized care products. Discover our quality solutions."
        />
        <meta name="keywords" content="Bromochem products, premium perfumes, quality detergents, product solutions, care products" />
        <meta property="og:title" content="products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem - Product Solutions" />
        <meta property="og:description" content="Discover our range of premium product products and solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://redeemedeth.com/brproducts" />
        <link rel="canonical" href="https://redeemedeth.com/brproducts" />

        {/* Structured data for products Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Product Manufacturing",
            "provider": {
              "@type": "Organization",
              "name": "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem",
              "url": "https://redeemedeth.com"
            },
            "description": "Manufacturer of premium perfumes and detergents",
            "offers": {
              "@type": "Offer",
              "price": "Varies",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content" role="main" className="min-h-screen scroll-mt-16">
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(ProductPage);