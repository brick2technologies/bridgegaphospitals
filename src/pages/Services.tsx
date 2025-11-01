'use client'; // <-- keep if you use React Server Components (optional)

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Scan,
  StethoscopeIcon,
  Pill,
  Scissors,
  Heart,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';   // <-- React Router link

// ---------------------------------------------------------------
// 1. Skeleton (unchanged)
// ---------------------------------------------------------------
const ServiceSkeleton = () => (
  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 animate-pulse">
    <div className="w-20 h-20 bg-gray-300 rounded-2xl mb-6" />
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-3" />
    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
    <div className="h-4 bg-gray-300 rounded w-5/6" />
    <div className="mt-5 space-y-2">
      <div className="h-4 bg-gray-300 rounded w-full" />
      <div className="h-4 bg-gray-300 rounded w-4/5" />
      <div className="h-4 bg-gray-300 rounded w-3/4" />
    </div>
  </div>
);

// ---------------------------------------------------------------
// 2. Main component
// ---------------------------------------------------------------
export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'oncology' | 'diagnostic' | 'support'>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  // -------------------------------------------------------------
  // 3. Category tabs (unchanged)
  // -------------------------------------------------------------
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'oncology', name: 'Oncology', icon: Heart },
    { id: 'diagnostic', name: 'Diagnostic', icon: Scan },
    { id: 'support', name: 'Support Services', icon: Pill },
  ] as const;

  // -------------------------------------------------------------
  // 4. ONLY the 6 pages you have – each gets a `slug`
  // -------------------------------------------------------------
  const services = [
    {
      id: 1,
      category: 'oncology',
      title: 'Surgical Oncology',
      icon: Scissors,
      description: 'Advanced surgical facilities for cancer removal procedures led by skilled Onco-Surgeons.',
      gradient: 'from-red-500 via-orange-500 to-amber-500',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-700',
      borderColor: 'border-red-300',
      slug: 'surgical-oncology',
      highlights: [
        'Minimally invasive surgical options',
        'Post-surgery rehabilitation support',
        'High success rate with expert care',
      ],
    },
    {
      id: 2,
      category: 'oncology',
      title: 'Medical Oncology',
      icon: StethoscopeIcon,
      description: 'Expert medical oncology care focusing on systemic treatments including targeted therapy and immunotherapy.',
      gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-700',
      borderColor: 'border-indigo-300',
      slug: 'medical-oncology',
      highlights: [
        'Targeted cancer therapies',
        'Immunotherapy treatments',
        'Personalized medicine approach',
      ],
    },
    {
      id: 3,
      category: 'oncology',
      title: 'Radiation Therapy',
      icon: Zap,
      description: 'Advanced Radiation Therapy using Linear Accelerator (LINAC) technology ensures precise targeting of cancer cells.',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-700',
      borderColor: 'border-orange-300',
      slug: 'radiation-therapy',
      highlights: [
        'High-precision radiation delivery',
        'Reduced side effects',
        'Managed by certified Radiation Oncologists',
      ],
    },
    {
      id: 4,
      category: 'diagnostic',
      title: 'Diagnostics',
      icon: Scan,
      description: 'Comprehensive diagnostic support through modern imaging tools for early cancer detection.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-700',
      borderColor: 'border-cyan-300',
      slug: 'diagnostics',
      highlights: [
        'CT Scan – High-resolution imaging',
        'X-Ray – Essential diagnostic aid',
        'Rapid turnaround for test reports',
      ],
    },
    {
      id: 5,
      category: 'support',
      title: 'Supportive Care',
      icon: Heart,
      description: 'Holistic supportive care including pain management, counseling, and rehabilitation.',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-700',
      borderColor: 'border-pink-300',
      slug: 'supportive-care',
      highlights: [
        'Pain management & counseling',
        'Nutritional guidance',
        'Rehabilitation support',
      ],
    },
    {
      id: 6,
      category: 'support',
      title: 'Pharmacy (In-Patient)',
      icon: Pill,
      description: 'In-house pharmacy providing all prescribed medications and chemotherapy drugs at affordable rates.',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-700',
      borderColor: 'border-green-300',
      slug: 'pharmacy-in-patient',
      highlights: [
        '24×7 availability',
        'Affordable pricing',
        'Assured medicine authenticity',
      ],
    },
  ] as const;

  const filteredServices =
    activeCategory === 'all' ? services : services.filter(s => s.category === activeCategory);

  // -------------------------------------------------------------
  // 5. Render
  // -------------------------------------------------------------
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Our Services | Bridge Gap Hospital - Comprehensive Cancer Care</title>
        <meta
          name="description"
          content="Explore our oncology services: Surgical, Medical, Radiation, Diagnostics, Supportive Care, and In-Patient Pharmacy."
        />
        <link rel="canonical" href="https://bridgegaphospitals.com/services" />
        {/* keep your other meta tags */}
      </Helmet>

      <section
        id="services"
        className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden"
        role="region"
        aria-labelledby="services-title"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
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
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-bold">Our Services</span>
            </motion.div>

            <h2 id="services-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Complete Cancer Care
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-600 to-[#E92393]">
                Under One Roof
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              From diagnosis to treatment and recovery, we provide comprehensive oncology services with state-of-the-art technology and compassionate care.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
            role="tablist"
            aria-label="Service categories"
          >
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  onKeyDown={e => e.key === 'Enter' && setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  tabIndex={0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-400 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E92393] to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#E92393]'
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span>{cat.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Services Grid – each card is now a <Link> */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              role="tabpanel"
              id={`panel-${activeCategory}`}
            >
              {isLoading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => <ServiceSkeleton key={i} />)
                : filteredServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      // ---- LINK ----
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="block group"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -10 }}
                          className="relative"
                        >
                          <div
                            className={`relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} overflow-hidden`}
                            role="article"
                            aria-labelledby={`service-title-${service.id}`}
                          >
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                            />

                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className={`relative w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                            >
                              <Icon className={`w-10 h-10 ${service.iconColor}`} strokeWidth={2.5} aria-hidden="true" />
                            </motion.div>

                            <h3
                              id={`service-title-${service.id}`}
                              className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E92393] transition-colors duration-300"
                            >
                              {service.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed mb-5 font-medium">
                              {service.description}
                            </p>

                            <ul className="space-y-2 mb-5">
                              {service.highlights.map((h, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle className={`w-4 h-4 ${service.iconColor} flex-shrink-0 mt-0.5`} aria-hidden="true" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex items-center gap-2 text-sm font-bold text-[#E92393] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span>Learn More</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} aria-hidden="true" />
                            </div>

                            <div
                              className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500 pointer-events-none`}
                            />
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
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
                  className="px-8 py-4 bg-white text-[#E92393] text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                  aria-label="Book a consultation"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-6 h-6" strokeWidth={3} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                  aria-label="Contact us for more information"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}