import React, { useState, lazy, Suspense } from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/home/Hero";
import Footer from "../src/components/layout/Footer";
import { Helmet } from "react-helmet";

// Lazy-load below-the-fold components with prefetch hints
const TextParallaxContentExample = lazy(() =>
  import(/* webpackPrefetch: true */ "../src/components/home/features").then((m) => ({
    default: m.TextParallaxContentExample,
  }))
);
const Products = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/products"));
// const Layout1 = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/newsletter"));
const Pricing = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/pricing"));
const FloatingCard = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/PerfumeCards"));
const SendelCard = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/SendelCards"));
const DetergentCard = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/Detergents"));
const ImgBreak = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/Image"));
const OrderNow = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/OrderNow"));
const FirstStory = lazy(() => import(/* webpackPrefetch: true */ "../src/components/about_us/first_story"));
const SecondStory = lazy(() => import(/* webpackPrefetch: true */ "../src/components/about_us/second_story"));
const ResponsiveImageGallery = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/Videos"));
const ContactUsSection = lazy(() => import(/* webpackPrefetch: true */ "../src/components/home/ContactUs"));
const Testimonials = lazy(() => import(/* webpackPrefetch: true */ "../src/components/about_us/feedback"));

// Enhanced loading component with better UX
const LoadingFallback = () => (
  <div
    role="status"
    aria-live="polite"
    className="min-h-[50vh] flex items-center justify-center"
  >
    <div className="text-center">
      <div className="spinner animate-spin h-12 w-12 mx-auto border-4 border-blue-500 rounded-full border-t-transparent mb-4"></div>
      <p className="text-lg font-medium text-gray-700">Loading content...</p>
    </div>
  </div>
);

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Premium Products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem - Quality Perfumes & Detergents</title>
        <meta
          name="description"
          content="Discover Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem's premium collection of perfumes, detergents, and home care products. Handcrafted quality with traditional expertise."
        />
        <meta name="keywords" content="premium perfumes, quality detergents, home care products, Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem" />
        <meta property="og:title" content="Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem | Premium Home & Personal Care Products" />
        <meta property="og:description" content="Experience the finest quality perfumes and detergents from Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://redeemedeth.com" />
        <link rel="canonical" href="https://redeemedeth.com" />

        {/* Structured data for better search results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem",
            "url": "https://redeemedeth.com",
            "logo": "https://redeemedeth.com/logo.png",
            "description": "Manufacturer of premium perfumes and detergents",
            "sameAs": [
              "https://facebook.com/bromochemredeemed",
              "https://instagram.com/bromochemredeemed"
            ]
          })}
        </script>
      </Helmet>

      {/* Above-the-fold content */}
      <Navbar />
      <Hero />

      {/* Lazy loaded content with proper landmark roles */}
      <Suspense fallback={<LoadingFallback />}>
        <main id="main-content" role="main" className="scroll-mt-16">
          <SecondStory />
          <FirstStory />
          {/* <Layout1 /> */}
          <div className="mt-1">
            <TextParallaxContentExample />
          </div>
          <Products />
          <FloatingCard />
          <OrderNow />
          <ResponsiveImageGallery />
          <SendelCard />
          <ImgBreak />
          <DetergentCard />
          <Pricing />
          <Testimonials />
          <ContactUsSection />
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default React.memo(Home);