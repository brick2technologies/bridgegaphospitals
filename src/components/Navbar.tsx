import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="logo2.png"
              alt="Bridge Gap Hospitals"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain cursor-pointer"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center gap-1"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    activeSection === item.name.toLowerCase()
                      ? "text-[#E92393]"
                      : "text-gray-700 hover:text-[#E92393]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-[#E92393] to-[#F472B6] transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-5 py-2.5 rounded-full bg-linear-to-r from-[#E92393] to-[#F472B6] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-[#c91a7a] to-[#E92393]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-5 py-2.5 rounded-full border-2 border-[#007BFF] text-[#007BFF] font-semibold hover:bg-[#007BFF] hover:text-white transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Second Opinion
              </span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-[#E92393] to-[#F472B6] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveSection(item.name.toLowerCase());
                      }}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        activeSection === item.name.toLowerCase()
                          ? "bg-linear-to-r from-[#E92393]/10 to-[#F472B6]/10 text-[#E92393]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#E92393]"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <ChevronDown className="w-4 h-4 opacity-40" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 space-y-3"
              >
                <button className="w-full py-3 rounded-full bg-linear-to-r from-[#E92393] to-[#F472B6] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <button className="w-full py-3 rounded-full border-2 border-[#005AA9] text-[#005AA9] font-semibold hover:bg-[#005AA9] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Need a Second Opinion
                </button>
              </motion.div>

              {/* Quick Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <p className="text-center text-sm text-gray-600">
                  24/7 Emergency Care Available
                </p>
                <p className="text-center text-lg font-bold text-[#E92393] mt-1">
                  +91 1800-XXX-XXXX
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E92393] via-[#F472B6] to-[#E92393] origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
          transition: "transform 0.3s ease-out"
        }}
      />
    </motion.nav>
  );
}