import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";

type ModalType = "appointment" | "second-opinion" | null;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();

  // Mark as animated after first render


  // Optimized scroll handler with throttling
  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Only update if scrollY changed significantly
        if (Math.abs(scrollY - lastScrollY) > 5) {
          setScrolled(scrollY > 20);
          lastScrollY = scrollY;
        }

        // Calculate scroll progress for progress bar
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = windowHeight > 0 ? (scrollY / windowHeight) : 0;
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const openModal = useCallback((type: "appointment" | "second-opinion") => {
    setModalType(type);
    setIsOpen(false);
  }, []);

  const closeModal = useCallback(() => setModalType(null), []);

  // Memoize nav items
  const navItems = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ], []);

  // Animation variants for instant load, animate only on first visit
  const navVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <motion.nav
        initial="visible"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-white/80 backdrop-blur-md shadow-sm"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo - No animation delay */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" aria-label="Bridge Gap Hospitals - Home">
                <img
                  src="/logo2.png"
                  alt="Bridge Gap Hospitals logo"
                  className="h-[5rem] sm:h-20 lg:h-20 xl:h-24 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                  width="300"
                  height="72"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            </div>

            {/* Desktop Navigation - No animation delay */}
            <ul
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              role="menubar"
            >
              {navItems.map((item) => (
                <li key={item.name} role="none">
                  <Link
                    to={item.path}
                    className={`relative px-4 xl:px-5 py-2 text-sm xl:text-base font-medium transition-colors duration-200 group ${location.pathname === item.path
                      ? "text-[#E92393]"
                      : "text-gray-700 hover:text-[#E92393]"
                      }`}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#E92393] to-[#F472B6] transition-all duration-75 ease-in-out ${location.pathname === item.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                        }`}
                      aria-hidden="true"
                    />


                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Buttons - No animation delay */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              <button
                onClick={() => openModal("appointment")}
                className="group relative px-5 xl:px-6 py-2.5 xl:py-3 rounded-full bg-gradient-to-r from-[#E92393] to-[#F472B6] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 overflow-hidden whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-pink-300"
                aria-label="Book an appointment with our specialists"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4 xl:w-5 xl:h-5" aria-hidden="true" />
                  Book Appointment
                </span>
              </button>

              <button
                onClick={() => openModal("second-opinion")}
                className="group relative px-5 xl:px-6 py-2.5 xl:py-3 rounded-full border-2 border-[#005AA9] text-[#005AA9] font-semibold hover:bg-[#005AA9] hover:text-white hover:scale-105 transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Get a second medical opinion"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 xl:w-5 xl:h-5" aria-hidden="true" />
                  Second Opinion
                </span>
              </button>
            </div>

            {/* Mobile Menu Button - No animation delay */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E92393] to-[#F472B6] text-white shadow-lg hover:shadow-xl active:scale-90 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-pink-300"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <X size={24} aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Menu size={24} aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15 }}
              className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gray-100"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="max-w-7xl mx-auto px-6 py-5">
                <nav aria-label="Mobile navigation links">
                  <ul className="space-y-1">
                    {navItems.map((item) => (
                      <li key={item.name} role="none">
                        <Link
                          to={item.path}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-inset ${location.pathname === item.path
                            ? "bg-gradient-to-r from-[#E92393]/10 to-[#F472B6]/10 text-[#E92393]"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#E92393]"
                            }`}
                          aria-current={location.pathname === item.path ? "page" : undefined}
                        >
                          <span className="flex items-center justify-between">
                            {item.name}
                            <ChevronDown className="w-4 h-4 opacity-40" aria-hidden="true" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="mt-5 space-y-3" role="group" aria-label="Quick actions">
                  <button
                    onClick={() => openModal("appointment")}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#E92393] to-[#F472B6] text-white font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-pink-300"
                    aria-label="Book an appointment with our specialists"
                  >
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    Book Appointment
                  </button>
                  <button
                    onClick={() => openModal("second-opinion")}
                    className="w-full py-3 rounded-full border-2 border-[#005AA9] text-[#005AA9] font-semibold hover:bg-[#005AA9] hover:text-white active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label="Get a second medical opinion"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Need a Second Opinion
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E92393] via-[#F472B6] to-[#E92393]"
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuenow={Math.round(scrollProgress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: 'left',
            transition: 'transform 0.1s ease-out',
          }}
        />
      </motion.nav>

      {/* Modal */}
      <Modal isOpen={!!modalType} onClose={closeModal} type={modalType} />
    </>
  );
}