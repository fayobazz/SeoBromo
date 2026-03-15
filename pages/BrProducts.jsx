import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import PerfumeHero from '../src/components/brproducts_list/hero';

// import PerfumeHero from './src/components/brproducts_list/hero'; // Critical component (above the fold)
// src\components\brproducts_list\hero.jsx
// Lazy load non-critical components
const Navbar = lazy(() => import('../src/components/Navbar'));
const PerfumesPage = lazy(() => import('../src/components/brproducts_list/perfumeCards'));
const Footer = lazy(() => import('../src/components/layout/Footer'));

const BrProducts = () => {
  const [expanded, setExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Perfume in Ethiopia | Premium Fragrances | Redeemed Trading | Bromochem</title>

        <meta
          name="description"
          content="Discover premium perfume in Ethiopia with Redeemed Trading | Bromochem. Shop luxury fragrances, high-quality perfumes, and long-lasting scents in Addis Ababa."
        />

        <meta
          name="keywords"
          content="perfume in Ethiopia, perfumes Addis Ababa, buy perfume Ethiopia, luxury perfume Ethiopia, Bromochem perfumes"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Perfume in Ethiopia | Premium Fragrances | Redeemed Trading" />
        <meta property="og:description" content="Shop high-quality, long-lasting perfumes in Ethiopia. Premium fragrances from Redeemed Trading | Bromochem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://redeemedeth.com/others" />
        <meta property="og:site_name" content="Redeemed Trading Ethiopia" />

        {/* Canonical */}
        <link rel="canonical" href="https://redeemedeth.com/others" />

        {/* Robots & Author */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Redeemed Trading Ethiopia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Perfume in Ethiopia",
          "description": "Premium perfume collection in Ethiopia offered by Redeemed Trading | Bromochem. High-quality fragrances and luxury scents in Addis Ababa.",
          "url": "https://redeemedeth.com/others",
          "publisher": {
            "@type": "Organization",
            "name": "Redeemed Trading Ethiopia"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": []
          }
        })}
      </script>

      {/* Conditional Rendering */}
      {isClient ? (
        <Suspense
          fallback={
            <div className="loading-skeleton">
              <div className="navbar-skeleton" />
              <div className="hero-skeleton" />
              <div className="content-skeleton" />
            </div>
          }
        >
          <Navbar />
          <main>
            <PerfumeHero/>
            {/* <PerfumeHero /> Critical content loads first */}
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

export default React.memo(BrProducts);
