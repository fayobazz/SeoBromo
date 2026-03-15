import React, { useMemo } from "react";
// import { FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet";

// Constants for metadata and structured data
const DOCUMENT_PROPS = {
  title: "Our Heritage |  Redeemed trading |Bromochem|የእኛ ቅርስ",
  description: "The heritage of Redeemed Tradings's fragrance manufacturing from Ethiopia to the world. | የሪዲምድ ትሬዲንግ ቀቅ የሽቶ አምራች ታሪክ ከኢትዮጵያ እስከ ዓለም",
  keywords: "Ethiopian heritage, fragrance history, perfume manufacturing, የሽቶ ታሪክ, ኢትዮጵያዊ ቅርስ",
  og: {
    title: "Redeemed Trading's Ethiopian Heritage in Fragrance Manufacturing",
    description: "From humble beginnings to becoming a trusted name in perfumery.",
    image: "/assets/images/hero/3.webp",
    url: "https://redeemedeth.com/",
    type: "article",
    locale: "en_US",
    alternateLocale: "am_ET"
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourBrand"
  }
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Our Heritage",
  "description": "The heritage of Redeemed Tradings's fragrance manufacturing from Ethiopia to the world.",
  "url": "https://redeemedeth.com/",
  "image": "/assets/images/hero/3.webp",
  "inLanguage": ["en-US", "am-ET"],
  "about": {
    "@type": "Organization",
    "name": "Redeemed Bromochem",
    "foundingLocation": "Ethiopia"
  },
  "keywords": ["Ethiopian perfume", "fragrance heritage"]
};

// Memoized components
const DecorativeBackground = React.memo(() => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#e4ac43]/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-1/3 h-full bg-white/50" />
    <div className="absolute top-1/4 -left-20 w-40 h-px bg-gradient-to-r from-transparent via-[#e4ac43]/30 to-transparent" />
    <div className="absolute bottom-1/3 -right-20 w-40 h-px bg-gradient-to-r from-transparent via-[#e4ac43]/30 to-transparent" />
  </div>
));
DecorativeBackground.displayName = "DecorativeBackground";


const FirstStory = React.memo(() => {
  const buttons = useMemo(() => {
    // const handlePrimaryClick = () => {
    //   // Navigation logic or analytics
    //   console.log("Primary button clicked");
    // };

    // const handleSecondaryClick = () => {
    //   // Navigation logic or analytics
    //   console.log("Secondary button clicked");
    // };

    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        {/* <PrimaryButton onClick={handlePrimaryClick} /> */}
        {/* <SecondaryButton onClick={handleSecondaryClick} /> */}
      </div>
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>{DOCUMENT_PROPS.title}</title>
        <meta name="description" content={DOCUMENT_PROPS.description} />
        <meta name="keywords" content={DOCUMENT_PROPS.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={DOCUMENT_PROPS.og.type} />
        <meta property="og:url" content={DOCUMENT_PROPS.og.url} />
        <meta property="og:title" content={DOCUMENT_PROPS.og.title} />
        <meta property="og:description" content={DOCUMENT_PROPS.og.description} />
        <meta property="og:image" content={DOCUMENT_PROPS.og.image} />
        <meta property="og:locale" content={DOCUMENT_PROPS.og.locale} />
        <meta property="og:locale:alternate" content={DOCUMENT_PROPS.og.alternateLocale} />

        {/* Twitter */}
        <meta name="twitter:card" content={DOCUMENT_PROPS.twitter.card} />
        <meta name="twitter:site" content={DOCUMENT_PROPS.twitter.site} />
        <meta name="twitter:title" content={DOCUMENT_PROPS.og.title} />
        <meta name="twitter:description" content={DOCUMENT_PROPS.og.description} />
        <meta name="twitter:image" content={DOCUMENT_PROPS.og.image} />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(JSON_LD)}
        </script>
      </Helmet>

      <section
        className="relative py-28 bg-gray-50 overflow-hidden px-6 lg:px-8"
        aria-labelledby="heritage-heading"
      >
        <DecorativeBackground />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up space-y-6 text-center lg:text-left">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#e4ac43]/10 text-[#e4ac43] mb-4">
                Our Journey
              </span>
              <h1
                id="heritage-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900">
                  Redeemed Trading&apos;s Heritage
                </span>
              </h1>
              <div className="mt-4 w-16 h-1 bg-[#e4ac43] mx-auto lg:mx-0"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">

              our journey has been built on innovation, quality, and dedication to excellence.
              Every product carries our commitment to craftsmanship and customer satisfaction.
            </p>

            {buttons}
          </div>

     <div className="relative group animate-fade-in-up animate-delay-100">
  <div className="absolute -inset-4 bg-gradient-to-tr from-[#e4ac43]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500"></div>
  <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ borderBottomRightRadius: '50px' }}>
    <img
      className="w-full h-auto transition-all duration-500 group-hover:scale-105"
      src="/assets/images/hero/2.webp"
      alt="Redeemed Trading manufacturing facility in Ethiopia"
      width={600}  // Reduced from 800
      height={450} // Reduced from 600 (maintaining 4:3 aspect ratio)
      loading="lazy"
      decoding="async"
    />
    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#e4ac43]/50" style={{ borderBottomRightRadius: '50px' }}></div>
  </div>
  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#e4ac43]/10 rounded-full blur-xl"></div>
</div>
        </div>
      </section>
    </>
  );
});
FirstStory.displayName = "FirstStory";
FirstStory.documentProps = DOCUMENT_PROPS;
FirstStory.jsonLd = JSON_LD;

export default FirstStory;