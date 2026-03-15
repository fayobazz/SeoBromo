import React, { useState, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Lazy load non-critical components
const Navbar = lazy(() => import('../src/components/Navbar'));
const Footer = lazy(() => import('../src/components/layout/Footer'));

const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product || {
    id: 0,
    name: "Product Name",
    description: "No description available",
    price: "0",
    img: "",
    lang: "Eng",
    category: "Category"
  };

  const [quantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.img || "https://via.placeholder.com/800");
  const price = parseFloat(product.price) || 0;

  // Generate structured data for SEO
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": mainImage,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>{`${product.name} | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem`}</title>
        <meta name="description" content={product.description || "Premium product details"} />
        <meta name="keywords" content={`${product.name}, ${product.category}, product details`} />
        <meta property="og:title" content={`${product.name} | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem`} />
        <meta property="og:description" content={product.description || "Check out this premium product"} />
        <meta property="og:image" content={mainImage} />
        <meta property="og:type" content="product.item" />
        <link rel="canonical" href={`https://redeemedeth.com/products/${product.id}`} />
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      </Helmet>

      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <Navbar />
      </Suspense>

      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb - Improved accessibility */}
        <div className="bg-white py-3 sm:py-4 shadow-sm" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 sm:space-x-4 overflow-x-auto py-1 sm:py-0 whitespace-nowrap">
                <li className="inline-flex items-center">
                  <a href="/" className="text-gray-400 hover:text-gray-500" aria-label="Home">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </a>
                </li>
                <li className="inline-flex items-center">
                  <svg className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a href="/products" className="ml-2 sm:ml-4 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-700">Products</a>
                </li>
                <li className="inline-flex items-center" aria-current="page">
                  <svg className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <span className="ml-2 sm:ml-4 text-xs sm:text-sm font-medium text-gray-700">{product.category}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Product Section */}
        <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
            {/* Image Gallery */}
            <section aria-labelledby="product-images-heading">
              <h2 id="product-images-heading" className="sr-only">Product images</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden aspect-square flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    width="800"
                    height="800"
                  />
                </div>
                {product.img && (
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    <button
                      onClick={() => setMainImage(product.img)}
                      className={`bg-white rounded-lg overflow-hidden aspect-square flex items-center justify-center p-2 sm:p-3 md:p-4 border-2 ${mainImage === product.img ? 'border-[#e4ac43]' : 'border-transparent'}`}
                      aria-label="View main product image"
                    >
                      <img
                        src={product.img}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Product Info */}
            <section aria-labelledby="product-info-heading">
              <h2 id="product-info-heading" className="sr-only">Product information</h2>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{product.name}</h1>
                  <p className="text-base sm:text-lg text-gray-600 mt-1 sm:mt-2 capitalize">{product.category}</p>
                </div>

                {/* Price */}
                <div className="mt-3 sm:mt-4">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                    ${price.toFixed(2)}
                    <span className="sr-only">USD</span>
                  </p>
                </div>

                {/* Description */}
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Description</h3>
                  <p className="mt-1 sm:mt-2 text-gray-700 leading-relaxed">{product.description}</p>
                </div>

                {/* Call to Action Button */}
                <div className="mt-6 sm:mt-8">
                  <button
                    className="w-full bg-[#e4ac43] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
                    aria-label={`Call to order this product for $${(price * quantity).toFixed(2)}`}
                  >
                    Call to order - ${(price * quantity).toFixed(2)}
                  </button>
                </div>

                {/* Details */}
                <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900">Product Details</h3>
                  <dl className="mt-2 sm:mt-4 space-y-3 sm:space-y-4">
                    <div className="flex">
                      <dt className="text-gray-500 w-20 sm:w-24">Category</dt>
                      <dd className="text-gray-700 capitalize">{product.category}</dd>
                    </div>
                    <div className="flex">
                      <dt className="text-gray-500 w-20 sm:w-24">Language</dt>
                      <dd className="text-gray-700">{product.lang}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default React.memo(ProductDetails);