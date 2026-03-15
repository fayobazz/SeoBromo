import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  // useCallback,
  
} from "react";
import { Link } from "react-router-dom";

// Utility: classnames joiner moved out of component
const cn = (...classes) => classes.filter(Boolean).join(" ");

const MouseEnterContext = createContext(undefined);

// Hook moved outside component to avoid recreation
const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// Debounced/throttled mouse move handler with requestAnimationFrame
const useMouseMoveTransform = (ref) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const animationFrameId = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    if (animationFrameId.current) return; // throttle calls

    animationFrameId.current = requestAnimationFrame(() => {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      ref.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
      animationFrameId.current = null;
    });
  };

  const handleMouseEnter = () => setIsMouseEntered(true);

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setIsMouseEntered(false);
    ref.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return {
    isMouseEntered,
    setIsMouseEntered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
};

const CardContainer = React.memo(({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const {
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    isMouseEntered,
  } = useMouseMoveTransform(containerRef);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered]}>
      <div
        className={cn("py-20 flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
});

CardContainer.displayName = "CardContainer";
const CardBody = React.memo(({ children, className }) => (
  <div
    className={cn(
      "w-[280px] [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
      className
    )}
  >
    {children}
  </div>
));

CardBody.displayName = "CardBody";
const CardItem = React.memo(
  ({
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

      const tz = typeof translateZ === "number" ? `${translateZ}px` : translateZ;

      if (isMouseEntered) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${tz}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
    }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

    return (
      <Tag
        ref={ref}
        className={cn("w-fit transition duration-200 ease-linear", className)}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

CardItem.displayName = "CardItem";
const DetergentCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incenses, setIncenses] = useState([]);
  const sliderRef = useRef(null);

  const cardsToShow = 3;
  const cardWidth = 320;

  useEffect(() => {
    const fetchIncenses = async () => {
      try {
        const res = await fetch(
          "http://backend.bromo.bromochemredeemed.com/detergents"
        );
        const data = await res.json();
        setIncenses(data);
      } catch (error) {
        console.error("Error fetching incenses:", error);
      }
    };
    fetchIncenses();
  }, []);

  // Auto slide with one setInterval and functional update to avoid resetting interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < incenses.length - cardsToShow ? prev + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [incenses.length]);

  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, incenses.length - cardsToShow));

  // SEO meta tags handled ideally by server or React Helmet (example below)
  useEffect(() => {
    document.title =
      "Detergents - Sustainable & Premium Products | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover our range of premium detergents crafted with sustainability and quality. Explore product details and buy now."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Discover our range of premium detergents crafted with sustainability and quality. Explore product details and buy now.";
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    if (!incenses.length) return;

    const productData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Detergents",
      description: "Premium sustainable detergents offered by Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem.",
      offers: incenses.map(({ name, price, id, description }) => ({
        "@type": "Offer",
        url: window.location.origin + `/product?id=${id}`,
        price: parseFloat(price.replace(/[^0-9.]/g, "")) || 0,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Product",
          name,
          description,
        },
      })),
    };

    let scriptTag = document.getElementById("jsonld-products");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.id = "jsonld-products";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(productData);
  }, [incenses]);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 overflow-hidden">
      <div>
        {/* Use h1 for main page heading */}
        <h1
          className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 font-bold text-center mt-12 sm:text-5xl"
          // tabIndex={0}
        >
          Detergent Raw Materials
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
          Here Are Some of the Detergent Raw Materials we provide
        </p>
      </div>

      <div className="relative w-full max-w-6xl mt-12">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={cn(
            "absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all",
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          )}
          aria-label="Previous detergents"
        >
          &lt;
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= incenses.length - cardsToShow}
          className={cn(
            "absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all",
            currentIndex >= incenses.length - cardsToShow
              ? "opacity-50 cursor-not-allowed"
              : ""
          )}
          aria-label="Next detergents"
        >
          &gt;
        </button>

        <div ref={sliderRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-12"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {incenses.map(
              ({ name, description, price, img, id, lang, category }, idx) => (
                <div key={id ?? idx} className="flex-shrink-0">
                  <Link
                    to="/product"
                    state={{
                      product: { name, description, price, img, id, lang, category },
                    }}
                    aria-label={`View details of detergent ${name}`}
                  >
                    <CardContainer className="inter-var cursor-pointer">
                      <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-gray-300 rounded-xl p-6 border h-[400px]">
                        <CardItem
                          translateZ={50}
                          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900"
                        >
                          {name}
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ={60}
                          className="text-gray-600 text-sm max-w-sm mt-2"
                        >
                          {price}
                        </CardItem>
                        <CardItem translateZ={100} className="w-full mt-4">
                          <img
                            src={img || "/assets/images/default.jpg"}
                            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl opacity-90"
                            alt={name}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-4">
                          <CardItem
                            translateZ={20}
                            as="p"
                            className="text-xl font-bold text-black"
                          >
                            {price}
                          </CardItem>
                          <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-[#e4ac43] text-white text-sm font-bold hover:bg-gray-800"
                          >
                            Read More
                          </CardItem>
                        </div>
                        <CardItem
                          as="p"
                          translateZ={60}
                          className="text-gray-600 text-sm max-w-sm mt-2"
                        >
                          {description}
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: incenses.length - cardsToShow + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "w-3 h-3 rounded-full",
                currentIndex === idx ? "bg-[#e4ac43]" : "bg-gray-300"
              )}
              aria-label={`Go to slide ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetergentCard;
