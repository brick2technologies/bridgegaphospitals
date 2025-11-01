'use client';

import  { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Sparkles, Award, Users, Heart, Shield, Target,
  CheckCircle, ArrowRight, Stethoscope, Activity,
  Star, TrendingUp, Clock, HandHeart, Building2,
  Microscope, Zap, UserCheck
} from 'lucide-react';
import { Link } from "react-router-dom";

// Skeleton Components
const SkeletonCard = () => (
  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-purple-200 animate-pulse">
    <div className="w-12 h-12 bg-gray-300 rounded-xl mb-4" />
    <div className="h-8 bg-gray-300 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-300 rounded w-1/2" />
  </div>
);

const SkeletonDoctor = () => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-purple-200 animate-pulse">
    <div className="h-80 bg-gray-300" />
    <div className="p-6">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  </div>
);

const SkeletonValue = () => (
  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 animate-pulse">
    <div className="w-16 h-16 bg-gray-300 rounded-2xl mb-6" />
    <div className="h-6 bg-gray-300 rounded w-1/2 mb-3" />
    <div className="h-4 bg-gray-300 rounded w-full" />
    <div className="h-4 bg-gray-300 rounded w-3/4 mt-2" />
  </div>
);

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Users, number: "20,000+", label: "Patients Treated", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "17+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: Stethoscope, number: "10+", label: "Expert Doctors", color: "from-orange-500 to-red-500" },
    { icon: Star, number: "98%", label: "Success Rate", color: "from-green-500 to-teal-500" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, dignity, and respect throughout their healing journey.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700"
    },
    {
      icon: Shield,
      title: "Patient Safety",
      description: "Your safety is our priority with stringent protocols and world-class infection control measures.",
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of cancer care with cutting-edge technology.",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700"
    },
    {
      icon: HandHeart,
      title: "Affordability",
      description: "Quality cancer care shouldn't be out of reach. We offer affordable treatment options for all.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100",
      iconColor: "text-green-700"
    }
  ];

  const doctors = [
    {
      name: "Dr. P. Pradyumna Reddy",
      specialization: "Chief Radiation Oncologist",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop",
      qualifications: ["MD", "MD"],
      expertise: ["LINAC Radiation Therapy", "Brachytherapy", "Precision Oncology"],
    },
    {
      name: "Dr. Amardeepika",
      specialization: "Center Head",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop",
      qualifications: ["MBBS", "DLO", "DNB"],
      expertise: ["Head & Neck Oncology", "Patient Counseling", "Clinical Operations"],
    },
    {
      name: "Dr. Chinna Babu Sunkavalli",
      specialization: "Robotic Surgical Oncologist",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop",
      qualifications: ["M.S.", "M.Ch"],
      expertise: ["Robotic Surgery", "Complex Tumor Resection", "Minimally Invasive Oncology"],
    },
    {
      name: "Dr. Panasa Aravind",
      specialization: "Radiation Oncologist",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1582750431035-281617d666e9?w=600&h=800&fit=crop",
      qualifications: ["MBBS", "MD", "DNB (RT)"],
      expertise: ["External Beam Radiation", "IMRT", "Stereotactic Radiotherapy"],
    },
    {
      name: "Dr. Karthik Kurapati",
      specialization: "Surgical Oncologist",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop",
      qualifications: ["M.S.", "M.Ch"],
      expertise: ["Breast & GI Oncology", "Head and Neck Surgery", "Laparoscopic Procedures"],
    },
    {
      name: "Dr. Venugopal Arroju",
      specialization: "Medical Oncologist",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1551601651-bc44fabe3a05?w=600&h=800&fit=crop",
      qualifications: ["MD", "DM"],
      expertise: ["Chemotherapy", "Immunotherapy", "Targeted Therapy"],
    },
    {
      name: "Dr. Anil Kumar Muppidi",
      specialization: "Anesthesiologist",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1612349316229-bb14b5c4d5e6?w=600&h=800&fit=crop",
      qualifications: ["MD"],
      expertise: ["Onco-Anesthesia", "Critical Care", "Pain Management"],
    },
    {
      name: "Dr. M. Chaitanya Kumar",
      specialization: "Radiation Oncologist",
      experience: "9+ Years",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a062d27?w=600&h=800&fit=crop",
      qualifications: ["MBBS", "DNB"],
      expertise: ["SRS", "SBRT", "Advanced Radiation Techniques"],
    },
  ];

  const treatmentProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive evaluation and medical history assessment by our expert oncologists.",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Advanced Diagnostics",
      description: "State-of-the-art imaging and laboratory tests for accurate diagnosis and staging.",
      icon: Microscope,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Treatment Planning",
      description: "Personalized treatment plan created by our multidisciplinary tumor board.",
      icon: Activity,
      color: "from-orange-500 to-red-500"
    },
    {
      step: "04",
      title: "Treatment Delivery",
      description: "Expert administration of therapy with continuous monitoring and supportive care.",
      icon: Zap,
      color: "from-green-500 to-teal-500"
    },
    {
      step: "05",
      title: "Follow-up Care",
      description: "Regular monitoring, rehabilitation, and long-term survivorship support.",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const whyChooseUs = [
    {
      title: "Advanced Technology",
      points: [
        "Latest LINAC Radiation Therapy equipment",
        "High-resolution diagnostic imaging",
        "Modern surgical facilities",
        "Digital health records"
      ],
      icon: Building2,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Expert Team",
      points: [
        "Board-certified oncologists",
        "Experienced support staff",
        "24/7 emergency care",
        "Multidisciplinary approach"
      ],
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Comprehensive Care",
      points: [
        "All cancer treatments under one roof",
        "In-house pharmacy & lab",
        "Nutritional counseling",
        "Psychological support"
      ],
      icon: Heart,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Affordable Treatment",
      points: [
        "Government scheme empanelled",
        "Flexible payment options",
        "Transparent pricing",
        "Insurance support"
      ],
      icon: Shield,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <>
      {/* SEO & Structured Data */}
      <Helmet>
        <title>About Bridge Gap Hospital | Best Cancer Care Center in Hyderabad</title>
        <meta
          name="description"
          content="Bridge Gap Hospital offers world-class cancer treatment with expert oncologists, advanced technology, and compassionate care. Over 10,000 patients treated with 98% success rate."
        />
        <meta name="keywords" content="cancer hospital, oncology, radiation therapy, chemotherapy, robotic surgery, affordable cancer care" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bridgegaphospitals.com/about" />

        <meta property="og:title" content="About Bridge Gap Hospital" />
        <meta property="og:description" content="Leading cancer care with compassion and cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bridgegaphospitals.com/about" />
        <meta property="og:image" content="https://bridgegaphospitals.com/og-about.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Bridge Gap Hospital",
            "url": "https://bridgegaphospitals.com/",
            "logo": "https://bridgegaphospitals.com/logo.png",
            "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop",
            "description": "Advanced cancer care hospital with expert oncologists and modern facilities.",
            "telephone": "08462-202010",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Krishnapuri Colony, Madhav Nagar",
              "addressLocality": "Nizamabad",
              "addressRegion": "Telangana",
              "postalCode": "503001",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "medicalSpecialty": "Oncology",
            "priceRange": "$$"
          })}
        </script>

      </Helmet>

      <div
        className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden"
        role="main"
        aria-label="About Bridge Gap Hospital"
      >
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden" aria-labelledby="hero-title">
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E92393] to-purple-600 text-white shadow-lg mb-6"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-bold">About Us</span>
              </motion.div>

              <h1
                id="hero-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Bridging the Gap in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-600 to-[#E92393]">
                  Cancer Care Excellence
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                At Bridge Gap Hospital, we are committed to providing world-class cancer treatment with compassion, expertise, and cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl mb-12"
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop"
                alt="Bridge Gap Hospital - State-of-the-art cancer care facility"
                className="w-full h-96 object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Bridge Gap Hospital</h3>
                <p className="text-xl">Your Partner in Cancer Care</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {isLoading
                ? Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
                : stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-purple-200"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h4>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white" aria-labelledby="story-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 id="story-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Story & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Mission</span>
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Founded with a vision to make advanced cancer care accessible to everyone, Bridge Gap Hospital has been at the forefront of oncological excellence for over 15 years.
                  </p>
                  <p>
                    Our mission is simple yet profound: to bridge the gap between world-class cancer treatment and affordability. We believe that every patient deserves access to the best medical care, regardless of their financial background.
                  </p>
                  <p>
                    With state-of-the-art technology, a team of internationally trained oncologists, and a patient-first approach, we have successfully treated over 10,000 cancer patients and continue to be a beacon of hope for many.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to='/conatct' >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#E92393] to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-400"
                    aria-label="Schedule a consultation"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={3} />
                  </motion.button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop"
                  alt="Cancer treatment team providing compassionate care"
                  className="w-full rounded-3xl shadow-2xl object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-purple-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E92393] to-purple-600 rounded-xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">8+ Years</p>
                      <p className="text-gray-600 font-medium">Of Excellence</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 relative overflow-hidden" aria-labelledby="values-title">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 id="values-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Values</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                The principles that guide everything we do at Bridge Gap Hospital
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {isLoading
                ? Array(4).fill(0).map((_, i) => <SkeletonValue key={i} />)
                : values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-purple-200 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`relative w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                        >
                          <Icon className={`w-8 h-8 ${value.iconColor}`} strokeWidth={2.5} />
                        </motion.div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E92393] transition-colors duration-300">
                          {value.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed font-medium">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Meet Our Doctors */}
        <section className="py-20 bg-white" aria-labelledby="doctors-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 id="doctors-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">
                  Expert Team
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                World-class oncologists dedicated to your healing journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {isLoading
                ? Array(8).fill(0).map((_, i) => <SkeletonDoctor key={i} />)
                : doctors.map((doctor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-purple-200 h-full flex flex-col">
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={doctor.image}
                          alt={`${doctor.name}, ${doctor.specialization} at Bridge Gap Hospital`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          width={600}
                          height={800}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-bold mb-1">
                            {doctor.name}
                          </h3>
                          <p className="text-sm opacity-90">
                            {doctor.specialization}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div className="flex items-center gap-2 text-[#E92393] font-bold mb-3">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">Exp: {doctor.experience}</span>
                        </div>

                        <p className="text-sm text-gray-600 font-medium">
                          <span className="font-semibold">Qualifications:</span>{" "}
                          {doctor.qualifications.join(", ")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20 relative overflow-hidden" aria-labelledby="process-title">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 id="process-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Treatment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Process</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                A systematic approach to comprehensive cancer care
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20" />

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {treatmentProcess.map((process, index) => {
                  const Icon = process.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="relative"
                    >
                      <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-purple-200">
                        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-sm">{process.step}</span>
                        </div>

                        <div className={`mt-8 w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                          <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                          {process.title}
                        </h3>

                        <p className="text-sm text-gray-700 leading-relaxed text-center font-medium">
                          {process.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white" aria-labelledby="why-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 id="why-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Bridge Gap Hospital</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                What makes us the preferred choice for cancer care
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-purple-200 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#E92393] transition-colors duration-300">
                        {item.title}
                      </h3>

                      <ul className="space-y-3">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[#E92393] flex-shrink-0 mt-0.5" />
                            <span className="font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden" aria-labelledby="cta-title">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-[#E92393] via-purple-600 to-[#E92393] rounded-3xl p-12 shadow-2xl text-center">
                <h3 id="cta-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Ready to Start Your Healing Journey?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Our compassionate team is here to guide you every step of the way. Schedule your consultation today.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-[#E92393] text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                    aria-label="Book an appointment"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-6 h-6" strokeWidth={3} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-[#E92393] text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                    aria-label="Contact us for more information"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-6 h-6" strokeWidth={3} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}