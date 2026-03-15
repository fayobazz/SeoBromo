import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  memo,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MouseEnterContext = createContext(undefined);

const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// Improved debounce with useRef and useCallback
const useDebouncedCallback = (callback, delay) => {
  const timeoutRef = useRef(null);

  return useCallback(
    (...args) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

const CardContainer = memo(({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = useDebouncedCallback((e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }, 16);

  const handleMouseEnter = useCallback(() => setIsMouseEntered(true), []);
  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }, []);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <section
        className={`py-20 flex items-center justify-center ${containerClassName}`}
        style={{ perspective: "1000px" }}
        aria-label="3D card container"
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center justify-center relative transition-all duration-200 ease-linear ${className}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </section>
    </MouseEnterContext.Provider>
  );
});

const CardBody = memo(({ children, className }) => (
  <div
    className={`w-[280px] [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${className}`}
  >
    {children}
  </div>
));

const CardItem = memo(
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
      if (isMouseEntered) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
    }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

    return (
      <Tag
        ref={ref}
        className={`w-fit transition duration-200 ease-linear ${className}`}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

const SendelCard = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incenses, setIncenses] = useState([]);
  const sliderRef = useRef(null);
  const cardsToShow = 3;
  const cardWidth = 320;

  // Fetch incenses once
  useEffect(() => {
    const fetchIncenses = async () => {
      try {
        const res = await fetch(
          "http://backend.bromo.bromochemredeemed.com/incenses"
        );
        const data = await res.json();
        setIncenses(data);
      } catch (err) {
        console.error("Failed to fetch incenses:", err);
      }
    };
    fetchIncenses();
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < incenses.length - cardsToShow ? prev + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [incenses.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, incenses.length - cardsToShow)
    );
  }, [incenses.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation: left/right arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentProduct = incenses[currentIndex] || {};

  return (
    <>
      {/* SEO meta tags */}
      <Helmet>
        <title>Incenses | Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem</title>
        <meta
          name="description"
          content="Browse our collection of high-quality incenses from Buy Perfumes in Ethiopia – Redeemed Trading | Bromochem."
        />
        {currentProduct.name && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: currentProduct.name,
              image: currentProduct.img,
              description: currentProduct.description,
              offers: {
                "@type": "Offer",
                price: currentProduct.price,
                priceCurrency: "USD", // update currency as needed
                availability: "https://schema.org/InStock",
              },
            })}
          </script>
        )}
      </Helmet>

      <main
        className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 overflow-hidden"
        aria-label="Incenses product slider"
      >
        <header>
          <h2
            className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 font-bold tracking text-center mt-12 sm:text-5xl"
            tabIndex={0}
          >
            Incense Raw Materials
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
            Here Are Some of the Incense Raw Materials We Provide
          </p>
        </header>

        <section
          className="relative w-full max-w-6xl mt-12"
          aria-roledescription="carousel"
          aria-label="Incenses carousel"
          aria-live="polite"
        >
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous incenses"
            type="button"
          >
            &lt;
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= incenses.length - cardsToShow}
            className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all ${
              currentIndex >= incenses.length - cardsToShow
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            aria-label="Next incenses"
            type="button"
          >
            &gt;
          </button>

          <div
            ref={sliderRef}
            className="overflow-hidden"
            role="list"
            aria-label="Incense products list"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out gap-12"
              style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
            >
              {incenses.map(
                ({ id, name, description, price, img, lang, category }) => (
                  <article
                    key={id}
                    role="listitem"
                    className="flex-shrink-0"
                    aria-roledescription="slide"
                    aria-label={name}
                  >
                    <Link
                      to="/product"
                      state={{ product: { id, name, description, price, img, lang, category } }}
                      className="block"
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
                              width={280}
                              height={192}
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
                              type="button"
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
                  </article>
                )
              )}
            </div>
          </div>

          <nav
            className="flex justify-center mt-6 space-x-2"
            aria-label="Incenses carousel pagination"
          >
            {Array.from({ length: incenses.length - cardsToShow + 1 }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === idx ? "bg-[#e4ac43]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={currentIndex === idx ? "true" : undefined}
                  type="button"
                />
              )
            )}
          </nav>
        </section>
      </main>
    </>
  );
});

export default SendelCard;
