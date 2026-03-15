// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { Helmet } from 'react-helmet';
// import PerfumeHero from '../src/components/perfume_list/hero'; // Critical above-the-fold component

// // Lazy load non-critical components
// const Navbar = lazy(() => import('../src/components/Navbar'));
// const PerfumesPage = lazy(() => import('../src/components/perfume_list/perfumeCards'));
// const Footer = lazy(() => import('../src/components/layout/Footer'));

// const PerfumeList = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <>
//       {/* SEO Optimization */}
//       <Helmet>
//         <title>Premium Perfume Collection | Your Brand</title>
//         <meta name="description" content="Discover our luxury perfume collection. Exquisite fragrances for every occasion." />
//         <meta name="keywords" content="perfume, fragrance, luxury scents, eau de parfum" />
//         <meta property="og:title" content="Luxury Perfume Collection | Your Brand" />
//         <meta property="og:description" content="Explore our exclusive perfume collection" />
//         <meta property="og:type" content="website" />
//         <link rel="canonical" href="https://redeemedeth.com/perfumes" />
//       </Helmet>

//       {/* Structured Data for SEO */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "CollectionPage",
//           "name": "Luxury Perfume Collection",
//           "description": "Premium collection of designer fragrances",
//           "url": "https://redeemedeth.com/perfumes",
//           "mainEntity": {
//             "@type": "ItemList",
//             "itemListElement": []
//           }
//         })}
//       </script>

//       {/* Client-side rendering with loading states */}
//       {isClient ? (
//         <Suspense fallback={
//           <div className="loading-skeleton">
//             <div className="navbar-placeholder" style={{ height: '80px', background: '#f5f5f5' }} />
//             <div className="hero-placeholder" style={{ height: '60vh', background: '#eaeaea' }} />
//             <div className="content-placeholder" style={{ height: '100vh', background: '#f0f0f0' }} />
//           </div>
//         }>
//           <Navbar />
//           <PerfumeHero />
//           <main className="perfume-list-container">
//             <PerfumesPage />
//           </main>
//           <Footer />
//         </Suspense>
//       ) : (
//         <div className="initial-load" style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//           fontSize: '1.2rem'
//         }}>
//           Loading fragrance collection...
//         </div>
//       )}
//     </>
//   );
// };

// export default React.memo(PerfumeList);
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import PerfumeHero from '../src/components/perfume_list/hero'; // Critical above-the-fold component

// Lazy load non-critical components
const Navbar = lazy(() => import('../src/components/Navbar'));
const PerfumesPage = lazy(() => import('../src/components/perfume_list/perfumeCards'));
const Footer = lazy(() => import('../src/components/layout/Footer'));

const PerfumeList = () => {
  const [expanded, setExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Premium Perfumes in Ethiopia | Buy Luxury Fragrances in Addis Ababa</title>

        <meta
          name="description"
          content="Shop premium perfumes in Ethiopia. Luxury fragrances, long-lasting scents, and high-quality perfume oils available in Addis Ababa. Redeemed Trading | Bromochem."
        />

        <meta
          name="keywords"
          content="perfume in ethiopia, perfumes addis ababa, buy perfume ethiopia, long lasting perfumes ethiopia, fragrance shop ethiopia, bromochem redeemed perfumes"
        />

        <meta property="og:title" content="Premium Perfumes in Ethiopia | Luxury Fragrances" />
        <meta
          property="og:description"
          content="Discover Ethiopia’s premium perfume collection. Long-lasting, designer-inspired fragrances crafted with quality."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://redeemedeth.com/perfumes" />
        <meta property="og:image" content="https://redeemedeth.com/og-perfume.jpg" />

        <link rel="canonical" href="https://redeemedeth.com/perfumes" />

        {/* Local SEO */}
        <meta name="geo.region" content="ET" />
        <meta name="geo.placename" content="Addis Ababa" />
        <meta name="geo.position" content="9.03;38.74" />
        <meta name="ICBM" content="9.03, 38.74" />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Premium Perfumes in Ethiopia",
          "description":
            "Buy premium long-lasting perfumes in Ethiopia. Shop high-quality fragrances and perfume oils in Addis Ababa from Redeemed Trading | Bromochem.",
          "url": "https://redeemedeth.com/perfumes",
          "publisher": {
            "@type": "Organization",
            "name": "Redeemed Trading | Bromochem",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Addis Ababa",
              "addressCountry": "ET"
            }
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "itemListElement": []
          }
        })}
      </script>

      {/* Client-side rendering with loading states */}
      {isClient ? (
        <Suspense
          fallback={
            <div className="loading-skeleton">
              <div className="navbar-placeholder" style={{ height: '80px', background: '#f5f5f5' }} />
              <div className="hero-placeholder" style={{ height: '60vh', background: '#eaeaea' }} />
              <div className="content-placeholder" style={{ height: '100vh', background: '#f0f0f0' }} />
            </div>
          }
        >
          <Navbar />
          <PerfumeHero />
          <main className="perfume-list-container">
            <PerfumesPage />
          </main>
          <Footer />
        </Suspense>
      ) : (
        <div
          className="initial-load"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '1.2rem'
          }}
        >
          Loading fragrance collection...
        </div>
      )}
    </>
  );
};

export default React.memo(PerfumeList);
