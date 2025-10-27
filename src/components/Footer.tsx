import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight, Clock } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-pink-900 to-gray-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
<div className="lg:col-span-1">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <img
      src="logo.png" // Replace with the actual path to your logo
      alt="Bridge Gap Hospitals Logo"
      className="h-20 w-auto mb-4 ml-20" // Adjust height and other styles as needed
    />
    <p className="text-gray-300 mb-6 leading-relaxed">
      Leading the way in comprehensive cancer care with compassion, innovation, and excellence.
    </p>
    <div className="flex gap-3">
      {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
        <motion.a
          key={index}
          whileHover={{ scale: 1.1, y: -3 }}
          href="#"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-r hover:from-[#E92393] hover:to-purple-600 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  </motion.div>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Treatment Options', 'Success Stories', 'Research & Innovation', 'Careers'].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-[#E92393] transition-colors duration-300 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Surgical Oncology', 'Medical Oncology', 'Radiation Therapy', 'Diagnostics', '24/7 Emergency Care', 'Supportive Care'].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-[#E92393] transition-colors duration-300 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <MapPin className="w-5 h-5 text-[#E92393] shrink-0 mt-1" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Krishnapuri Colony,
Madhav Nagar, Nizamabad
Telangana-503001
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <Phone className="w-5 h-5 text-[#E92393]" />
                <a href="tel:+9108462202010" className="text-gray-300 hover:text-[#E92393] transition-colors duration-300">
                   08462-202010
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-[#E92393]" />
                <a href="mailto:care@bridgegaphospitals.com" className="text-gray-300 hover:text-[#E92393] transition-colors duration-300">
                   care@bridgegaphospitals.com
                </a>
              </motion.div>
            </div>

            {/* Emergency Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-linear-to-r from-red-600 to-pink-600 rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-5 h-5" />
                <span className="font-bold">24/7 Emergency</span>
              </div>
              <p className="text-sm text-white/90">Always here when you need us</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Bridge Gap Hospitals. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#E92393] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E92393] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E92393] transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E92393] transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}