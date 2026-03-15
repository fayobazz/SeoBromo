// import React, { useState, lazy, Suspense } from 'react';
// import { Helmet } from 'react-helmet';

// // Lazy load non-critical components
// const Navbar = lazy(() => import('../src/components/Navbar'));
// const Footer = lazy(() => import('../src/components/layout/Footer'));
// const SendelHero = lazy(() => import('../src/components/sendel__list/hero'));
// const Perfumes = lazy(() => import('../src/components/sendel__list/perfumeCards'));

// // Loading placeholder component
// const LoadingPlaceholder = () => (
//   <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//     <div className="animate-pulse text-xl">Loading...</div>
//   </div>
// );

// const SendelList = () => {
//   const [expanded] = useState(false); // Removed unused setExpanded

//   return (
//     <>
//       {/* SEO Optimization */}
//       <Helmet>
//         <title>Premium Sendel Products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
//         <meta name="description" content="Discover our collection of premium Sendel products. High-quality solutions for your needs." />
//         <meta name="keywords" content="sendel, products, collection, premium, quality" />
//         <meta property="og:title" content="Sendel Products Collection | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem" />
//         <meta property="og:description" content="Explore our premium Sendel product collections" />
//         <link rel="canonical" href="https://redeemedeth.com/sendel" />

//         {/* Structured Data */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "CollectionPage",
//             "name": "Sendel Products Collection",
//             "description": "Premium collection of Sendel products",
//             "url": "https://redeemedeth.com/sendel"
//           })}
//         </script>
//       </Helmet>

//       <Suspense fallback={<LoadingPlaceholder />}>
//         <Navbar />
//         <main>
//           <SendelHero />
//           <Suspense fallback={<div className="min-h-[50vh] bg-gray-50" />}>
//             <Perfumes />
//           </Suspense>
//         </main>
//         <Footer />
//       </Suspense>
//     </>
//   );
// };

// export default React.memo(SendelList);
import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';

// Lazy load non-critical components
const Navbar = lazy(() => import('../src/components/Navbar'));
const Footer = lazy(() => import('../src/components/layout/Footer'));
const SendelHero = lazy(() => import('../src/components/sendel__list/hero'));
const Perfumes = lazy(() => import('../src/components/sendel__list/perfumeCards'));

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="animate-pulse text-xl">Loading...</div>
  </div>
);

const SendelList = () => {
  const [expanded] = useState(false);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Premium Sendel Products | Redeemed Trading Ethiopia | Bromochem</title>

        <meta
          name="description"
          content="Explore our premium Sendel product collection. High-quality, durable, and trusted Sendel products available across Ethiopia."
        />

        <meta
          name="keywords"
          content="sendel Ethiopia, sendel products, premium sendel, sendel collection, Redeemed Trading Ethiopia"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Premium Sendel Products | Redeemed Trading Ethiopia" />
        <meta property="og:description" content="Explore high-quality Sendel products available across Ethiopia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://redeemedeth.com/sendels" />
        <meta property="og:site_name" content="Redeemed Trading Ethiopia" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://redeemedeth.com/sendels" />

        {/* Important SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Redeemed Trading Ethiopia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Sendel Products Collection",
            "description": "Premium Sendel products offered by Redeemed Trading Ethiopia.",
            "url": "https://redeemedeth.com/sendels",
            "publisher": {
              "@type": "Organization",
              "name": "Redeemed Trading Ethiopia"
            }
          })}
        </script>
      </Helmet>

      {/* Layout */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <Navbar />
        <main>
          <SendelHero />
          <Suspense fallback={<div className="min-h-[50vh] bg-gray-50" />}>
            <Perfumes />
          </Suspense>
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default React.memo(SendelList);
