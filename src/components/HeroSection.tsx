import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ModalType = "appointment" | "second-opinion" | null;

// Simple Modal Component
function Modal({ isOpen, onClose, type }: { isOpen: boolean; onClose: () => void; type: ModalType }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">
          {type === "appointment" ? "Book Appointment" : "Get Second Opinion"}
        </h2>
        <p className="text-gray-600 mb-6">
          {type === "appointment"
            ? "Please call us or fill out the form to book your appointment."
            : "Get expert second opinion from our specialists."}
        </p>
        <button
          onClick={onClose}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
  };
  const closeModal = () => setModalType(null);

  const slides = [
    {
      title: "More Cancer Expertise.",
      subtitle: "More Hope.",
      description:
        "Best Comprehensive Cancer Care in Nizamabad. Personalized treatment for all cancers with care, compassion, and advanced expertise.",
      image: "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731822/hero-cancer-care_sfynem.png",
      color: "#E92393",
    },
    {
      title: "Advanced Technology.",
      subtitle: "Better Outcomes.",
      description:
        "State-of-the-art facilities and cutting-edge treatment methods ensuring the highest quality cancer care for every patient.",
      image: "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731822/Advanced-technology_dxl430.png",
      color: "#005AA9",
    },
    {
      title: "Compassionate Care.",
      subtitle: "Every Step.",
      description:
        "Our dedicated team of oncologists and healthcare professionals guide you through your journey with empathy and expertise.",
      image: "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731818/hero-care_jgaxfw.png",
      color: "linear-gradient(90deg, #E92393, #005AA9)",
    },
  ];

  // Preload images for smooth transitions
  useEffect(() => {
    const imagePromises = slides.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Continue even if some images fail
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (!imagesLoaded) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    autoSlideRef.current = timer;
    return () => clearInterval(timer);
  }, [slides.length, imagesLoaded]);

  // Reset auto-slide when manually changing slides
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    autoSlideRef.current = timer;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <section
        id="home"
        className="top-10 relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-blue-50 overflow-hidden pb-32 md:pb-40"
        aria-label="Hero section with cancer care information"
      >
        {/* Animated Background Circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{ background: `${currentSlideData.color}25` }}
          aria-hidden="true"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#005AA9]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Main Hero Content */}
        <div className="relative w-full px-6 md:px-12 lg:px-16 pt-20 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-full"
            >
              {/* Text Section */}
              <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  <span
                    style={{
                      background:
                        currentSlide === 2 ? currentSlideData.color : "none",
                      WebkitBackgroundClip: "text",
                      color:
                        currentSlide === 2
                          ? "transparent"
                          : currentSlideData.color,
                    }}
                    className="bg-clip-text"
                  >
                    {currentSlideData.title}
                  </span>
                  <br />
                  <span className="text-gray-900">
                    {currentSlideData.subtitle}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  {currentSlideData.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <button
                    className="group inline-flex items-center gap-2 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
                    style={{
                      background: currentSlideData.color,
                    }}
                    onClick={() => openModal("appointment")}
                    aria-label="Book an appointment"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </button>

                  <button
                    className="inline-flex items-center gap-2 bg-white text-gray-800 text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label="Learn more about our services"
                  >
                    Learn More
                  </button>
                </motion.div>

                {/* Slide Indicators */}
                <div
                  className="flex gap-3 mt-8 justify-center lg:justify-start"
                  role="group"
                  aria-label="Slide navigation"
                >
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                      aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                      aria-current={index === currentSlide ? "true" : "false"}
                    >
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "w-12" : "w-2 opacity-50"
                        }`}
                        style={{
                          backgroundColor:
                            index === currentSlide
                              ? currentSlideData.color
                              : "#94a3b8",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-1 relative flex justify-center lg:justify-end w-full"
                style={{ minHeight: "400px" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full blur-2xl opacity-30 -z-10 pointer-events-none"
                  style={{ background: currentSlideData.color }}
                  aria-hidden="true"
                />
                <div className="relative w-full max-w-[450px] md:max-w-[500px] lg:max-w-[550px] h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
                  <img
                    src={currentSlideData.image}
                    alt={`${currentSlideData.title} - ${currentSlideData.subtitle}`}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    loading="eager"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      opacity: imagesLoaded ? 1 : 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-16 left-0 right-0 z-20 px-6 md:px-12 lg:px-16"
        >
          <div className="max-w-full mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-pink-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "150+", label: "Surgical Oncology Patients" },
                { number: "75+", label: "Medical Oncology Patients" },
                { number: "6000+", label: "Radiation Oncology Patients" },
                { number: "15000+", label: "Patients Treated" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-2xl md:text-3xl lg:text-4xl font-bold"
                    style={{ color: currentSlideData.color }}
                    aria-label={`${stat.number} ${stat.label}`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm lg:text-base text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Shared Modal */}
      <Modal isOpen={!!modalType} onClose={closeModal} type={modalType} />
    </>
  );
}
