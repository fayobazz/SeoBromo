import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
  memo,
} from "react";
import { Link } from "react-router-dom";

const MouseEnterContext = createContext(undefined);

const cn = (...classes) => classes.filter(Boolean).join(" ");

// Debounce with requestAnimationFrame for better perf than setTimeout debounce
const useRafDebouncedMouseMove = (ref) => {
  const rafId = useRef(null);

  const handler = useCallback(
    (e) => {
      if (!ref.current) return;

      if (rafId.current) return; // throttle calls

      rafId.current = requestAnimationFrame(() => {
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        ref.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        rafId.current = null;
      });
    },
    [ref]
  );

  return handler;
};

const CardContainer = memo(({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const handleMouseMove = useRafDebouncedMouseMove(containerRef);

  const handleMouseEnter = useCallback(() => setIsMouseEntered(true), []);
  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }, []);

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

const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

const CardBody = memo(({ children, className }) => (
  <div
    className={cn(
      "w-[280px] [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
      className
    )}
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

const FloatingCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perfumes, setPerfumes] = useState([]);
  const sliderRef = useRef(null);

  const cardsToShow = 3;
  const cardWidth = 320;

  // Fetch perfumes data
  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const res = await fetch(
          "http://backend.bromo.bromochemredeemed.com/perfumes"
        );
        const data = await res.json();
        setPerfumes(data);
      } catch (err) {
        console.error("Failed to fetch perfumes:", err);
      }
    };
    fetchPerfumes();
  }, []);

  // Auto slide carousel (functional state update to avoid stale closure)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < perfumes.length - cardsToShow ? prev + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [perfumes.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, perfumes.length - cardsToShow));
  }, [perfumes.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 overflow-hidden">
      <div>
        <h2
          tabIndex={0}
          className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 font-bold tracking text-center mt-12 sm:text-5xl"
        >
          Perfume Raw Materials
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
          Here Are Some of the Perfumes Raw Materials we provide
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
          aria-label="Previous perfumes"
          type="button"
        >
          &lt;
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= perfumes.length - cardsToShow}
          className={cn(
            "absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all",
            currentIndex >= perfumes.length - cardsToShow
              ? "opacity-50 cursor-not-allowed"
              : ""
          )}
          aria-label="Next perfumes"
          type="button"
        >
          &gt;
        </button>

        <div ref={sliderRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-12"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {perfumes.map(
              ({ name, description, price, img, id, lang, category }, idx) => (
                <div key={id ?? idx} className="flex-shrink-0">
                  <Link
                    to="/product"
                    state={{
                      product: { name, description, price, img, id, lang, category },
                    }}
                    aria-label={`View details of perfume ${name}`}
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
                            alt={name || "Perfume image"}
                            loading="lazy"
                            decoding="async"
                            fetchpriority="low"
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
                            type="button"
                            className="px-4 py-2 rounded-xl bg-[#e4ac43] text-white text-sm font-bold hover:bg-gray-800"
                            aria-label={`Read more about ${name}`}
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
          {Array.from({ length: Math.max(perfumes.length - cardsToShow + 1, 0) }).map(
            (_, idx) => (
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
