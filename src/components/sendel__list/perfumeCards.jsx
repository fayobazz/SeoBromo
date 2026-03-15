import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utility
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Context
const MouseEnterContext = createContext(undefined);
const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) throw new Error("useMouseEnter must be used within context");
  return context;
};

// 3D Card Container
const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.1s ease";
    }
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)";
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={cn("py-4 sm:py-6 flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear hover:z-10",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// Card Body - Updated for responsive width
const CardBody = ({ children, className }) => (
  <div className={cn("w-full max-w-[280px] sm:w-[300px] mx-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>
    {children}
  </div>
);

// Card Item
const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.transform = isMouseEntered
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>
      {children}
    </Tag>
  );
};

const PerfumeCard = ({ perfume }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/product', {
      state: {
        product: {
          id: perfume.id,
          name: perfume.name,
          description: perfume.description,
          price: perfume.price,
          img: perfume.img,
          category: perfume.category,
        }
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${perfume.name}`}
      className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
    >
      <CardContainer>
        <CardBody className="bg-gradient-to-br from-white to-gray-50 relative group/card hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-100 rounded-2xl p-4 sm:p-6 h-[400px] sm:h-[440px] transition-all duration-300 hover:border-blue-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          <CardItem translateZ="50" className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900">
            {perfume.name}
          </CardItem>

          <CardItem as="p" translateZ="60" className="flex items-center text-xs sm:text-sm mt-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {perfume.category}
            </span>
            <span className="ml-2 text-amber-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
              </svg>
              <span className="ml-1 text-gray-600">{perfume.rating || 4.5}</span>
            </span>
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4 sm:mt-6">
            <div className="relative overflow-hidden rounded-xl h-48 sm:h-56">
              {perfume.img ? (
                <img
                  src={perfume.img}
                  alt={perfume.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm sm:text-base">No image available</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          </CardItem>

          <CardItem as="p" translateZ="60" className="text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4 line-clamp-2">
            {perfume.description}
          </CardItem>

          <div className="flex justify-between items-center mt-4 sm:mt-6">
            <CardItem translateZ={20} as="p" className="text-lg sm:text-xl font-bold text-gray-900">
              ${perfume.price}
            </CardItem>

          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

const Perfumes = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const response = await fetch('http://backend.bromo.bromochemredeemed.com/Incenses');
        if (!response.ok) {
          throw new Error('Failed to fetch Incenses');
        }
        const data = await response.json();
        setPerfumes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfumes();
  }, []);

  const categories = [...new Set(perfumes.map((perfume) => perfume.category))];

  const filteredPerfumes = perfumes.filter((perfume) => {
    const price = parseFloat(perfume.price);

    const matchesSearch =
      perfume.name.toLowerCase().includes(search.toLowerCase()) ||
      perfume.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(perfume.category);

    const matchesPrice =
      price >= priceRange[0] &&
      price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md mx-4">
          <svg className="mx-auto h-10 sm:h-12 w-10 sm:w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="mt-3 sm:mt-4 text-lg font-medium text-gray-900">Error loading Incenses</h3>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 sm:mt-6 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#e4ac43] text-white text-sm sm:text-base font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-8 sm:py-12 px-3 sm:px-4 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-4 sm:mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900">
          Our Incenses Collection
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-4">
          Discover signature scents crafted with exceptional ingredients and timeless elegance
        </p>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-2xl mx-auto mt-6 sm:mt-10 px-3 sm:px-0">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3.5 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-700 placeholder-gray-400"
            aria-label="Search for Incenses"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 sm:right-3 top-2.5 sm:top-3.5 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full max-w-6xl mx-auto mt-6 sm:mt-8 px-3 sm:px-0">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <h2 className="text-sm font-medium text-gray-700 mb-2 sm:mb-3">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg transition-all duration-200 ${
                      selectedCategories.includes(category)
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={selectedCategories.includes(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="flex-1 min-w-[250px] sm:min-w-[300px]">
              <h2 className="text-sm font-medium text-gray-700 mb-2 sm:mb-3">Price Range</h2>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="10"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-label="Minimum price"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-label="Maximum price"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="w-full max-w-7xl mt-4 sm:mt-6 px-3 sm:px-0">
        {search || selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 100000 ? (
          <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
            <span className="whitespace-nowrap">
              Showing {filteredPerfumes.length} fragrance{filteredPerfumes.length !== 1 ? 's' : ''}
              {search && ` matching "${search}"`}
              {selectedCategories.length > 0 && ` in ${selectedCategories.join(', ')}`}
              {priceRange[0] > 0 || priceRange[1] < 100000 ? ` ($${priceRange[0]} - $${priceRange[1]})` : ''}
            </span>
            {(search || selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 100000) && (
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategories([]);
                  setPriceRange([0, 100000]);
                }}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 flex items-center"
                aria-label="Clear all filters"
              >
                Clear all
                <svg className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        ) : null}
      </div>

      {/* Cards Display */}
      <div className="w-full max-w-7xl mt-4 sm:mt-6 px-3 sm:px-0">
        {filteredPerfumes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredPerfumes.map((perfume) => (
              <div key={perfume.id} className="w-full">
                <PerfumeCard perfume={perfume} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white rounded-2xl shadow-sm border border-gray-100 mx-3 sm:mx-0">
            <svg className="mx-auto h-10 sm:h-12 w-10 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-900">No fragrances found</h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategories([]);
                setPriceRange([0, 100000]);
              }}
              className="mt-4 sm:mt-6 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#e4ac43] text-white text-sm sm:text-base font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Reset all filters"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Perfumes;