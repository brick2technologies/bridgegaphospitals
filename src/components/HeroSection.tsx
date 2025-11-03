import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function HeroSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  

  const slides = [
    {
      title: "Bridge Gap Hospitals",
      subtitle: "Your All-Inclusive Cancer Care Companion",
      highlights: [
        "One and Only comprehensive cancer care hospital in Northern Telangana",
        "The First Cancer Specialty Hospital in Northern Telangana",
        "The First advanced linear accelerator machine in  Northern Telangana",
      ],
      description:
        "Best Comprehensive Cancer Care in Nizamabad. Personalized treatment for all cancers with care, compassion, and advanced expertise.",
      image:
        "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731822/hero-cancer-care_sfynem.png",
      color: "#E92393",
      learnMorePath: "/services",
      ctaText: "Explore Services",
    },
    {
      title: "Advanced Technology.",
      subtitle: "Better Outcomes.",
      highlights: [
        "Latest diagnostic tools and imaging technology",
        "Precision radiation therapy with minimal side effects",
      ],
      description:
        "State-of-the-art facilities and cutting-edge treatment methods ensuring the highest quality cancer care for every patient.",
      image:
        "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731822/Advanced-technology_dxl430.png",
      color: "#005AA9",
      learnMorePath: "/services/diagnostics",
      ctaText: "Explore Technology",
    },
    {
      title: "Compassionate Care.",
      subtitle: "Every Step.",
      highlights: [
        "24/7 patient support and counseling",
        "Holistic care including nutrition and mental health",
      ],
      description:
        "Our dedicated team of oncologists and healthcare professionals guide you through your journey with empathy and expertise.",
      image:
        "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731818/hero-care_jgaxfw.png",
      color: "linear-gradient(90deg, #E92393, #005AA9)",
      learnMorePath: "/services/supportive-care",
      ctaText: "Learn About Care",
    },
  ];

  // Preload images
  useEffect(() => {
    const promises = slides.map(
      (s) =>
        new Promise((res) => {
          const img = new Image();
          img.src = s.image;
          img.onload = res;
          img.onerror = res;
        })
    );
    Promise.all(promises).then(() => setImagesLoaded(true));
  }, []);

  // Navigation
  const goToPrev = () => setCurrentSlide((i) => (i - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((i) => (i + 1) % slides.length);
  const goToSlide = (idx: number) => setCurrentSlide(idx);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const cur = slides[currentSlide];

  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen bg-gradient-to-br from-white via-pink-50 to-blue-50 overflow-hidden pt-10"
        aria-label="Hero section"
      >
        {/* Background Blobs (Full Width) */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none hidden md:block"
          style={{ background: `${cur.color}25` }}
          aria-hidden="true"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#005AA9]/20 rounded-full blur-3xl pointer-events-none hidden md:block"
          aria-hidden="true"
        />

        {/* Main Content - CENTERED, NOT FULL WIDTH */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10"
            >
              {/* MOBILE: Image First */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-1 flex justify-center lg:hidden w-full max-w-xs sm:max-w-sm"
              >
                <div className="relative w-full aspect-square">
                  <img
                    src={cur.image}
                    alt={`${cur.title} - ${cur.subtitle}`}
                    className="w-full h-full object-contain drop-shadow-xl"
                    loading="eager"
                    style={{
                      opacity: imagesLoaded ? 1 : 0,
                      transition: "opacity 0.4s ease-in-out",
                    }}
                  />
                </div>
              </motion.div>

              {/* Text Block */}
              <div className="flex-1 text-center lg:text-left max-w-xl">
                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                >
                  <span
                    style={{
                      background: currentSlide === 2 ? cur.color : "none",
                      WebkitBackgroundClip: "text",
                      color: currentSlide === 2 ? "transparent" : cur.color,
                    }}
                    className="bg-clip-text"
                  >
                    {cur.title}
                  </span>
                  <br />
                  <span className="text-gray-900">{cur.subtitle}</span>
                </motion.h1>

                {/* Highlights - ABOVE Description */}
                <motion.ul
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-5 space-y-1.5 text-left max-w-md mx-auto lg:mx-0"
                >
                  {cur.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </motion.ul>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                >
                  {cur.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start"
                >
                  <button
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-sm sm:text-base font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
                    style={{ background: cur.color }}
                    onClick={() => navigate(cur.learnMorePath)}
                    aria-label={cur.ctaText}
                  >
                    {cur.ctaText}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>

                {/* Dots */}
                <div className="flex gap-1.5 mt-6 justify-center lg:justify-start">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={i === currentSlide}
                    >
                      <div
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentSlide ? "w-8" : "w-1.5 opacity-50"
                        }`}
                        style={{
                          backgroundColor: i === currentSlide ? cur.color : "#94a3b8",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* DESKTOP: Image on Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hidden lg:flex flex-1 justify-end w-full max-w-md"
              >
                <div className="relative w-full aspect-square">
                  <img
                    src={cur.image}
                    alt={`${cur.title} - ${cur.subtitle}`}
                    className="w-full h-full object-contain drop-shadow-xl"
                    loading="eager"
                    style={{
                      opacity: imagesLoaded ? 1 : 0,
                      transition: "opacity 0.4s ease-in-out",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Chevron Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-300 z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>

        {/* STATS BAR - CENTERED, NOT FULL WIDTH */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 -mt-8 md:-mt-10 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-pink-100"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 py-5 sm:py-6">
              {[
                { number: "3000+", label: "Surgical Oncology Patients" },
                { number: "9000+", label: "Medical Oncology Patients" },
                { number: "8000+", label: "Radiation Oncology Patients" },
                { number: "20000+", label: "Patients Treated" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-xl sm:text-2xl md:text-3xl font-bold"
                    style={{ color: cur.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}