import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import PerfumeHero from '../src/components/others_list/hero'; // Critical component (above the fold)

// Lazy load non-critical components
const Navbar = lazy(() => import('../src/components/Navbar'));
const PerfumesPage = lazy(() => import('../src/components/others_list/perfumeCards'));
const Footer = lazy(() => import('../src/components/layout/Footer'));

const OthersList = () => {
  const [expanded, setExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Premium Other Products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
        <meta name="description" content="Discover our collection of other premium products. High-quality solutions for your needs." />
        <meta name="keywords" content="products, collection, premium, quality" />
        <meta property="og:title" content="Other Products Collection | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem" />
        <meta property="og:description" content="Explore our other premium product collections" />
        <link rel="canonical" href="https://redeemedeth.com/others" />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Other Products Collection",
          "description": "Premium collection of other products",
          "url": "https://redeemedeth.com/others"
        })}
      </script>

      {/* Conditional Rendering */}
      {isClient ? (
        <Suspense fallback={
          <div className="loading-skeleton">
            {/* Skeleton loading animation */}
            <div className="navbar-skeleton" />
            <div className="hero-skeleton" />
            <div className="content-skeleton" />
          </div>
        }>
          <Navbar />
          <main>
            <PerfumeHero /> {/* Critical content loads first */}
            <PerfumesPage />
          </main>
          <Footer />
        </Suspense>
      ) : (
        <div className="initial-loader">Loading...</div>
      )}
    </>
  );
};

export default React.memo(OthersList);