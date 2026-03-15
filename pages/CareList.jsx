import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../src/components/Navbar";
import PerfumeHero from "../src/components/care_list/hero";
import PerfumesPage from "../src/components/care_list/perfumeCards";
import Footer from "../src/components/layout/Footer";

const CareList = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Care Products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
        <meta
          name="description"
          content="Explore our premium collection of care products designed for your wellbeing. Discover quality, innovation, and style."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="care products, wellbeing, beauty, skin care, hair care" />
        <meta property="og:title" content="Care Products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem" />
        <meta
          property="og:description"
          content="Explore our premium collection of care products designed for your wellbeing."
        />
        <meta property="og:type" content="website" />
        {/* Add canonical URL if available */}
        {/* <link rel="canonical" href="https://redeemedeth.com/care-list" /> */}
      </Helmet>

      <Navbar />
      <PerfumeHero />
      <PerfumesPage expanded={expanded} setExpanded={setExpanded} />
      <Footer />
    </>
  );
};

export default CareList;
