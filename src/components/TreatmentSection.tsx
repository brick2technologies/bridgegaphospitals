import { easeInOut, motion } from "framer-motion";
import { Sparkles, ChevronRight, Stethoscope, Pill, Zap, Scissors, Clock, FlaskConical, Target, Heart, Apple, Users2 } from "lucide-react";

export default function CancerTreatmentSection() {
  const treatments = [
    {
      icon: Scissors,
      title: "Surgical Oncology",
      description: "We specialize in minimally invasive and organ-protective cancer surgeries, performed by highly skilled doctors in our advanced operation block. This modern approach is the primary treatment option for many early-stage solid malignancies.",
      gradient: "from-blue-600 via-blue-500 to-cyan-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      icon: Pill,
      title: "Medical Oncology",
      description: "Experience the latest advancements in chemotherapy treatment with minimal side effects at our hospital. Our dedicated team of experienced medical oncologists provides comprehensive chemotherapy services, including daycare, outpatient, and inpatient treatments.",
      gradient: "from-purple-600 via-purple-500 to-violet-600",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-200"
    },
    {
      icon: Zap,
      title: "Radiation Oncology",
      description: "Our world-renowned radiation oncology unit provides pain-free radiation therapies aimed at destroying cancer cells in specific areas. We use advanced technology to develop personalized treatment plans that are highly effective and safe.",
      gradient: "from-amber-600 via-orange-500 to-yellow-600",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-700",
      borderColor: "border-amber-200"
    },
    {
      icon: Stethoscope,
      title: "General Surgery",
      description: "Our skilled general surgeons specialize in cancer surgeries, performing procedures with precision and expertise. From tumor removal to lymph node dissection, our surgical team employs advanced techniques to provide optimal outcomes.",
      gradient: "from-teal-600 via-teal-500 to-emerald-600",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-700",
      borderColor: "border-teal-200"
    },
    {
      icon: Clock,
      title: "24/7 Onco Services",
      description: "We understand that cancer requires comprehensive and continuous care. Our 24/7 Onco services ensure round-the-clock support, including emergency consultations, pain management, and symptom control. We are here for you every step of the way.",
      gradient: "from-rose-600 via-pink-500 to-red-600",
      bgColor: "bg-rose-100",
      iconColor: "text-rose-700",
      borderColor: "border-rose-200"
    },
    {
      icon: FlaskConical,
      title: "Diagnostics",
      description: "Accurate and timely diagnostics are crucial for effective cancer management. Our state-of-the-art diagnostic facilities offer a wide range of tests, including imaging, biopsies, and laboratory analyses with advanced technology.",
      gradient: "from-green-600 via-green-500 to-emerald-600",
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      borderColor: "border-green-200"
    }
  ];

  const journeySteps = [
    {
      number: "1",
      icon: Target,
      title: "Diagnosis",
      description: "With unwavering dedication, our expert team delivers accurate and timely cancer diagnoses. Through advanced imaging, meticulous biopsies, and comprehensive laboratory analyses, we provide clarity and understanding for your journey.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      number: "2",
      icon: Users2,
      title: "Planning",
      description: "Every patient is unique, and our planning stage focuses on developing personalized strategies. Our multidisciplinary team collaborates to create comprehensive treatment plans based on your specific diagnosis and individual needs.",
      color: "from-purple-600 to-violet-600"
    },
    {
      number: "3",
      icon: Heart,
      title: "Treatment",
      description: "Our goal is to provide you with the most effective and advanced cancer treatments available. Our experienced medical professionals utilize cutting-edge therapies, including surgery, chemotherapy, radiation, and targeted therapies.",
      color: "from-pink-600 to-rose-600"
    },
    {
      number: "4",
      icon: Apple,
      title: "Supportive Care",
      description: "At every step of your cancer journey, we prioritize your well-being and comfort. Our supportive care services encompass pain management, counseling, nutritional guidance, and complementary therapies.",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Treatment Options Section */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-[#E92393] to-purple-600 text-white shadow-lg mb-6"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold">Treatment Excellence</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Finding Hope, <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E92393] via-purple-600 to-blue-600">Healing Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
            >
              Explore our comprehensive cancer treatment options designed with cutting-edge technology and compassionate care
            </motion.p>
          </motion.div>

          {/* Treatment Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  <div className={`relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${treatment.borderColor} overflow-hidden`}>
                    <div className={`absolute inset-0 bg-linear-to-br ${treatment.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-20 h-20 ${treatment.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className={`w-10 h-10 ${treatment.iconColor}`} strokeWidth={2.5} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#E92393] transition-colors duration-300">
                      {treatment.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed mb-5 font-medium">
                      {treatment.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold text-[#E92393] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                    </div>

                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br ${treatment.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-gray-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-600 to-[#E92393] text-white shadow-lg mb-6"
            >
              <Heart className="w-5 h-5" />
              <span className="text-sm font-bold">Your Journey With Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Guiding Your Path to <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-[#E92393] to-pink-600">
                Health and Healing
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
            >
              A comprehensive approach to cancer care, supporting you through every milestone
            </motion.p>
          </motion.div>

          {/* Journey Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 overflow-hidden">
                    <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="flex items-start gap-6">
                      {/* Number Badge */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} text-white flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-2xl font-bold">{step.number}</span>
                      </motion.div>

                      <div className="flex-1">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <Icon className={`w-8 h-8 text-gray-700 group-hover:text-[#E92393] transition-colors duration-300`} strokeWidth={2.5} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E92393] transition-colors duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 lg:mt-20 text-center"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-2 bg-linear-to-r from-[#E92393] to-purple-600 blur-2xl rounded-full"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-5 bg-linear-to-r from-[#E92393] via-purple-600 to-[#E92393] text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
              >
                <span>Begin Your Healing Journey</span>
                <ChevronRight className="w-6 h-6" strokeWidth={3} />
              </motion.button>
            </div>
            
            <p className="mt-5 text-gray-700 text-lg font-semibold">
              Connect with our experts today and take the first step towards recovery
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}