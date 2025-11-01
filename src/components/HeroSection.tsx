import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

type ModalType = "appointment" | "second-opinion" | null;

export default function HeroSection() {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  const slides = [
    {
      title: "More Cancer Expertise.",
      subtitle: "More Hope.",
      description:
        "Best Comprehensive Cancer Care in Nizamabad. Personalized treatment for all cancers with care, compassion, and advanced expertise.",
      image:
        "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731822/hero-cancer-care_sfynem.png",
      color: "#E92393",
      learnMorePath: "/about",
    },
    {
      title: "Advanced Technology.",
      subtitle: "Better Outcomes.",
      description:
        "State-of-the-art facilities and cutting-edge treatment methods ensuring the highest quality cancer care for every patient.",
      image:
        "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731822/Advanced-technology_dxl430.png",
      color: "#005AA9",
      learnMorePath: "/services/diagnostics",
    },
    {
      title: "Compassionate Care.",
      subtitle: "Every Step.",
      description:
        "Our dedicated team of oncologists and healthcare professionals guide you through your journey with empathy and expertise.",
      image:
        "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761731818/hero-care_jgaxfw.png",
      color: "linear-gradient(90deg, #E92393, #005AA9)",
      learnMorePath: "/services/supportive-care",
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
  },);

  // Auto-slide
  useEffect(() => {
    if (!imagesLoaded) return;
    const id = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % slides.length);
    }, 6000);
    autoSlideRef.current = id;
    return () => clearInterval(id);
  }, [imagesLoaded, slides.length]);

  const handleSlideChange = (idx: number) => {
    setCurrentSlide(idx);
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    const id = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % slides.length);
    }, 6000);
    autoSlideRef.current = id;
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setCurrentSlide((i) => (i - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight")
        setCurrentSlide((i) => (i + 1) % slides.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [slides.length]);

  const cur = slides[currentSlide];

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-blue-50 overflow-hidden"
        aria-label="Hero section with cancer care information"
      >
        {/* Background Circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{ background: `${cur.color}25` }}
          aria-hidden="true"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#005AA9]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Main Content */}
        <div className="relative w-full px-6 md:px-12 lg:px-16 pt-20 pb-16 lg:pb-8 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-full"
            >
              {/* Text */}
              <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
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

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  {cur.description}
                </motion.p>

                {/* BUTTONS – Responsive, no overlap */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                >
                  <button
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
                    style={{ background: cur.color }}
                    onClick={() => openModal("appointment")}
                    aria-label="Book an appointment"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-800 text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={() => navigate(cur.learnMorePath)}
                    aria-label="Learn more about our services"
                  >
                    Learn More
                  </button>
                </motion.div>

                {/* Slide Dots */}
                <div
                  className="flex gap-3 mt-10 justify-center lg:justify-start"
                  role="group"
                  aria-label="Slide navigation"
                >
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSlideChange(i)}
                      className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={i === currentSlide ? "true" : "false"}
                    >
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentSlide ? "w-12" : "w-2 opacity-50"
                        }`}
                        style={{
                          backgroundColor:
                            i === currentSlide ? cur.color : "#94a3b8",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-1 flex justify-center lg:justify-end w-full"
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
                  style={{ background: cur.color }}
                  aria-hidden="true"
                />
                <div className="relative w-full max-w-[450px] md:max-w-[500px] lg:max-w-[550px] h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
                  <img
                    src={cur.image}
                    alt={`${cur.title} - ${cur.subtitle}`}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    loading="eager"
                    style={{
                      opacity: imagesLoaded ? 1 : 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* STATS – Always below content, no overlap */}
        <div className="w-full px-6 md:px-12 lg:px-16 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="max-w-full mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-pink-100"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "3000+", label: "Surgical Oncology Patients" },
                { number: "9000+", label: "Medical Oncology Patients" },
                { number: "8000+", label: "Radiation Oncology Patients" },
                { number: "15000+", label: "Patients Treated" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-2xl md:text-3xl lg:text-4xl font-bold"
                    style={{ color: cur.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm lg:text-base text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <Modal isOpen={!!modalType} onClose={closeModal} type={modalType} />
    </>
  );
}