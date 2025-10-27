import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "More Cancer Expertise.",
      subtitle: "More Hope.",
      description:
        "Best Comprehensive Cancer Care in Nizamabad. Personalized treatment for all cancers with care, compassion, and advanced expertise.",
      image: "hero-cancer-care.png",
      color: "#E92393",
    },
    {
      title: "Advanced Technology.",
      subtitle: "Better Outcomes.",
      description:
        "State-of-the-art facilities and cutting-edge treatment methods ensuring the highest quality cancer care for every patient.",
      image: "Advanced-technology.png",
      color: "#005AA9",
    },
    {
      title: "Compassionate Care.",
      subtitle: "Every Step.",
      description:
        "Our dedicated team of oncologists and healthcare professionals guide you through your journey with empathy and expertise.",
      image: "hero-cancer-care.png",
      color: "linear-gradient(90deg, #E92393, #005AA9)",
    },
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-white via-pink-50 to-blue-50 overflow-hidden"
    >
      {/* Animated Blurred Background Circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: `${currentSlideData.color}25` }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#005AA9]/20 rounded-full blur-3xl"
      />

      {/* Main Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
          >
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span
                  style={{
                    background:
                      currentSlide === 2
                        ? currentSlideData.color
                        : "none",
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
                className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <button
                  className="group inline-flex items-center gap-2 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    background:
                      currentSlide === 2
                        ? currentSlideData.color
                        : currentSlideData.color,
                  }}
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="inline-flex items-center gap-2 bg-white text-gray-800 text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
                  Learn More
                </button>
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex gap-3 mt-8 justify-center md:justify-start">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="transition-all duration-300"
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
              className="flex-1 relative flex justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{ background: currentSlideData.color }}
              />
              <img
                src={currentSlideData.image}
                alt="Cancer Treatment"
                className="relative w-full max-w-[450px] md:max-w-[500px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ color: currentSlideData.color }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ color: currentSlideData.color }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20 px-6"
      >
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-pink-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Surgical Oncology Patients" },
              { number: "75+", label: "Medical Oncology Patients" },
              { number: "225+", label: "Radiation Oncology Patients" },
              { number: "100%", label: "Patient Dedication" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: currentSlideData.color }}
                >
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
