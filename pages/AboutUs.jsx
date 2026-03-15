import React from "react";
import { Helmet } from "react-helmet";
import WaveSection from "../src/components/about_us/hero";
import Navbar from "../src/components/navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem | Our Story & Mission</title>
        <meta
          name="description"
          content="Discover Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem's journey - from our humble beginnings to becoming a trusted name in premium perfumes and detergents. Learn about our values and commitment to quality."
        />
        <meta name="keywords" content="about Bromochem, company history, perfume manufacturer, detergent company, our mission" />
        <meta property="og:title" content="About Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem | Our Story & Mission" />
        <meta property="og:description" content="Learn about Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem's journey and commitment to quality products" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://redeemedeth.com/about" />
        <link rel="canonical" href="https://redeemedeth.com/about" />

        {/* Structured data for About Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem",
            "description": "The story behind our premium products",
            "url": "https://redeemedeth.com/about",
            "publisher": {
              "@type": "Organization",
              "name": "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem"
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content" role="main" className="scroll-mt-16">
        <WaveSection />
        {/* Consider adding these sections with lazy loading if they're heavy */}
        {/*
        <Suspense fallback={<div className="min-h-[300px]"></div>}>
          <Layout1 />
        </Suspense>
        */}
      </main>
    </>
  );
};

export default React.memo(AboutUs);