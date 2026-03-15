import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const API_ENDPOINT = "http://backend.bromo.bromochemredeemed.com/brproducts";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Update container height on resize
  useEffect(() => {
    const updateHeight = () => setContainerHeight(window.innerHeight - 160);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Fetch all products and extract categories
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error(`Failed to fetch products`);
        }
        const data = await response.json();
        setAllProducts(data);

        // Extract unique categories from products
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);

        // Set the first category as active by default
        if (uniqueCategories.length > 0) {
          setActiveTab(uniqueCategories[0]);
        }

        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products when activeTab changes
  useEffect(() => {
    if (activeTab && allProducts.length > 0) {
      const filtered = allProducts.filter(product => product.category === activeTab);
      setFilteredProducts(filtered);
    }
  }, [activeTab, allProducts]);

  // Navigate handler
  const handleProductClick = useCallback(
    (product) => {
      navigate("/product", { state: { product } });
    },
    [navigate]
  );

  // Keyboard handler
  const handleKeyDown = useCallback(
    (e, product) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleProductClick(product);
      }
    },
    [handleProductClick]
  );

  const midpoint = Math.ceil(filteredProducts.length / 2);
  const leftProducts = filteredProducts.slice(0, midpoint);
  const rightProducts = filteredProducts.slice(midpoint);

  // Reusable ProductCard component
  const ProductCard = React.memo(({ product, height }) => (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
      className="relative rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#e4ac43]"
      style={{ height }}
      onClick={() => handleProductClick(product)}
      onKeyDown={(e) => handleKeyDown(e, product)}
    >
      {product.img ? (
        <img
          src={product.img}
          alt={product.name || "Product image"}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500">No image available</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start text-white p-6">
        <h3 className="text-xl font-bold mb-1">{product.name}</h3>
        <p className="text-sm font-light mb-2">{product.category}</p>
        <p className="font-semibold text-lg mb-3">${product.price}</p>
        <p className="text-sm font-light line-clamp-2">{product.description}</p>
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-[#e4ac43] text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  ));

  if (error) {
    return (
      <section
        className="flex flex-col items-center justify-center px-6 py-12 min-h-screen bg-gray-50"
        role="alert"
        aria-live="polite"
      >
        <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200 max-w-md">
          <svg
            className="mx-auto h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Error loading products</h3>
          <p className="mt-2 text-gray-600">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="flex flex-col items-center px-6 py-12 bg-gray-50"
      style={{ minHeight: "100vh", width: "100vw" }}
      aria-live="polite"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900">
          Some Of Our Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are premium products we sell
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12 relative max-w-4xl w-full">
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#e4ac43]" />
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-full">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                className={`relative px-6 py-2 font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {loading && isActive && (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {category}
                {isActive && (
                  <span className="absolute left-1/2 -bottom-1 h-0.5 w-8 bg-[#e4ac43] transform -translate-x-1/2" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" aria-label="Loading products" role="status" />
        </div>
      ) : (
        <div
          className="max-w-6xl w-full grid grid-cols-3 gap-8 flex-grow"
          style={{ height: containerHeight }}
        >
          {/* Left Column */}
          <div className="col-span-2 flex flex-col gap-8 h-full">
            {leftProducts.length > 0 ? (
              leftProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  height={containerHeight / leftProducts.length}
                />
              ))
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">No products found</p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 h-full">
            {rightProducts.length > 0 ? (
              rightProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  height={containerHeight / rightProducts.length}
                />
              ))
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;