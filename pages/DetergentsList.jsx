// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';

// // Lazy load non-critical components
// const Navbar = React.lazy(() => import('../src/components/Navbar'));
// const Footer = React.lazy(() => import('../src/components/layout/Footer'));

// // Static imports for critical components
// import PerfumeHero from '../src/components/detergents_list/hero';
// import PerfumesPage from '../src/components/detergents_list/perfumeCards';

// const DetergentsList = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>Premium Detergents Collection | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
//         <meta name="description" content="Explore our high-quality detergent collection. Eco-friendly, powerful cleaning solutions for all your laundry needs." />
//         <meta name="keywords" content="detergents, laundry, cleaning products, eco-friendly detergents, stain removal" />
//         <meta property="og:title" content="Premium Detergents Collection | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem" />
//         <meta property="og:description" content="Explore our high-quality detergent collection for all your laundry needs." />
//         <meta property="og:type" content="website" />
//         <link rel="canonical" href="https://redeemedeth.com/detergents" />
//       </Helmet>

//       {/* Structured Data for SEO */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "CollectionPage",
//           "name": "Detergents Collection",
//           "description": "Premium collection of cleaning detergents",
//           "url": "https://redeemedeth.com/detergents",
//           "mainEntity": {
//             "@type": "ItemList",
//             "itemListElement": []
//           }
//         })}
//       </script>

//       {/* Client-side rendering check */}
//       {isClient ? (
//         <React.Suspense fallback={<div className="loading-indicator">Loading...</div>}>
//           <Navbar />
//           <main>
//             <PerfumeHero />
//             <PerfumesPage />
//           </main>
//           <Footer />
//         </React.Suspense>
//       ) : (
//         <div className="loading-indicator">Loading...</div>
//       )}
//     </>
//   );
// };

// // Memoize component to prevent unnecessary re-renders
// export default React.memo(DetergentsList);
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Lazy load non-critical components
const Navbar = React.lazy(() => import('../src/components/Navbar'));
const Footer = React.lazy(() => import('../src/components/layout/Footer'));

// Static imports for critical components
import PerfumeHero from '../src/components/detergents_list/hero';
import PerfumesPage from '../src/components/detergents_list/perfumeCards';

const DetergentsList = () => {
  const [expanded, setExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Premium Detergents Collection | Redeemed Trading Ethiopia | Bromochem</title>

        <meta
          name="description"
          content="Discover our premium detergents collection from Redeemed Trading. High-quality, powerful, and eco-friendly cleaning solutions available in Ethiopia."
        />

        <meta
          name="keywords"
          content="detergents Ethiopia, cleaning products Ethiopia, laundry detergent, eco-friendly detergent, stain remover Ethiopia"
        />

        {/* Open Graph SEO */}
        <meta property="og:title" content="Premium Detergents Collection | Redeemed Trading Ethiopia" />
        <meta property="og:description" content="Powerful and eco-friendly detergents for homes and businesses in Ethiopia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://redeemedeth.com/detergents" />
        <meta property="og:site_name" content="Redeemed Trading Ethiopia" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://redeemedeth.com/detergents" />

        {/* Additional SEO Improvements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Redeemed Trading Ethiopia" />

        {/* Mobile-friendly */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Detergents Collection",
          "description": "Premium collection of cleaning detergents",
          "url": "https://redeemedeth.com/detergents",
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

      {/* Render */}
      {isClient ? (
        <React.Suspense fallback={<div className="loading-indicator">Loading...</div>}>
          <Navbar />
          <main>
            <PerfumeHero />
            <PerfumesPage />
          </main>
          <Footer />
        </React.Suspense>
      ) : (
        <div className="loading-indicator">Loading...</div>
      )}
    </>
  );
};

export default React.memo(DetergentsList);
