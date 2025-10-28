import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Scan, 
  StethoscopeIcon, 
  Pill, 
  Droplet, 
  Scissors, 
  Heart, 
  Shield,
  Stethoscope,
  Activity,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services", icon: Sparkles },
    { id: "oncology", name: "Oncology", icon: Heart },
    { id: "diagnostic", name: "Diagnostic", icon: Scan },
    { id: "support", name: "Support Services", icon: Users }
  ];

  const services = [
    {
      id: 1,
      category: "oncology",
      title: "Radiation Therapy (LINAC)",
      icon: Zap,
      description: "Advanced Radiation Therapy using Linear Accelerator (LINAC) technology ensures precise targeting of cancer cells, minimizing damage to healthy tissues.",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-700",
      borderColor: "border-orange-300",
      highlights: [
        "High-precision radiation delivery",
        "Reduced side effects",
        "Managed by certified Radiation Oncologists"
      ]
    },
    {
      id: 2,
      category: "diagnostic",
      title: "Diagnostic Imaging",
      icon: Scan,
      description: "Comprehensive diagnostic support through modern imaging tools for early cancer detection.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-700",
      borderColor: "border-cyan-300",
      highlights: [
        "CT Scan – High-resolution imaging for accurate tumor localization",
        "X-Ray – Essential diagnostic aid for initial cancer screening"
      ]
    },
    {
      id: 3,
      category: "diagnostic",
      title: "Laboratory Services",
      icon: StethoscopeIcon,
      description: "A fully-equipped modern laboratory providing accurate and quick diagnostic test results.",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-300",
      highlights: [
        "Biochemical & pathological investigations",
        "Rapid turnaround for test reports",
        "Supports treatment planning & progress monitoring"
      ]
    },
    {
      id: 4,
      category: "support",
      title: "Pharmacy",
      icon: Pill,
      description: "An in-house pharmacy offering easy access to all prescribed medications and chemotherapy drugs at affordable rates.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      borderColor: "border-green-300",
      highlights: [
        "24×7 availability",
        "Affordable pricing",
        "Assured medicine authenticity"
      ]
    },
    {
      id: 5,
      category: "oncology",
      title: "Chemotherapy",
      icon: Droplet,
      description: "Comprehensive chemotherapy services administered under expert oncologists' supervision, ensuring safe and effective treatment.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700",
      borderColor: "border-pink-300",
      highlights: [
        "Personalized treatment plans",
        "Supportive care for side-effect management",
        "Cost-effective packages"
      ]
    },
    {
      id: 6,
      category: "oncology",
      title: "Surgical Oncology",
      icon: Scissors,
      description: "Advanced surgical facilities for cancer removal procedures led by skilled Onco-Surgeons.",
      gradient: "from-red-500 via-orange-500 to-amber-500",
      bgColor: "bg-red-100",
      iconColor: "text-red-700",
      borderColor: "border-red-300",
      highlights: [
        "Minimally invasive surgical options",
        "Post-surgery rehabilitation support",
        "High success rate with expert care"
      ]
    },
    {
      id: 7,
      category: "oncology",
      title: "Medical Oncology",
      icon: Stethoscope,
      description: "Expert medical oncology care focusing on systemic treatments including targeted therapy and immunotherapy.",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-700",
      borderColor: "border-indigo-300",
      highlights: [
        "Targeted cancer therapies",
        "Immunotherapy treatments",
        "Personalized medicine approach"
      ]
    },
    {
      id: 8,
      category: "oncology",
      title: "General Oncology Treatment",
      icon: Activity,
      description: "Comprehensive cancer care for all types of malignancies with a multidisciplinary approach.",
      gradient: "from-teal-500 via-green-500 to-emerald-500",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-700",
      borderColor: "border-teal-300",
      highlights: [
        "Treatment for all major cancer types",
        "Multidisciplinary team approach",
        "Continuous monitoring and support"
      ]
    },
    {
      id: 9,
      category: "oncology",
      title: "Comprehensive Cancer Treatment",
      icon: Heart,
      description: "A multidisciplinary approach combining medical, surgical, and radiation oncology for total cancer care.",
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      bgColor: "bg-rose-100",
      iconColor: "text-rose-700",
      borderColor: "border-rose-300",
      highlights: [
        "Personalized treatment plans",
        "Follow-up care & counseling",
        "Support for all major cancer types"
      ]
    },
    {
      id: 10,
      category: "support",
      title: "Government Health Scheme Support",
      icon: Shield,
      description: "Empanelled under government healthcare programs to make quality cancer treatment affordable for all.",
      gradient: "from-amber-500 via-yellow-500 to-orange-500",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-700",
      borderColor: "border-amber-300",
      highlights: [
        "Aarogyasri scheme accepted",
        "PMJAY (Ayushman Bharat) empanelled",
        "EHS coverage available"
      ]
    }
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E92393] to-purple-600 text-white shadow-lg mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Complete Cancer Care
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-600 to-[#E92393]">
              Under One Roof
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
          >
            From diagnosis to treatment and recovery, we provide comprehensive oncology services with state-of-the-art technology and compassionate care.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#E92393] to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#E92393]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className={`relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} overflow-hidden`}>
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className={`w-10 h-10 ${service.iconColor}`} strokeWidth={2.5} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E92393] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed mb-5 font-medium">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className={`w-4 h-4 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-sm font-bold text-[#E92393] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                    </div>

                    {/* Decorative Corner */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#E92393] via-purple-600 to-[#E92393] rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Choosing the Right Treatment?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert oncologists are here to guide you through every step of your cancer care journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#E92393] text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-6 h-6" strokeWidth={3} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}