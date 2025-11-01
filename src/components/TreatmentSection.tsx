import { easeInOut, motion } from "framer-motion";
import {
  Sparkles,
  ChevronRight,
  Stethoscope,
  Pill,
  Zap,
  Scissors,
  FlaskConical,
  Target,
  Heart,
  Apple,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";   // React Router (Vite + React)

export default function CancerTreatmentSection() {
  /* -------------------------------------------------------------------------- */
  /*  Updated treatments – only your 6 real services, with slugs & descriptions  */
  /* -------------------------------------------------------------------------- */
  const treatments = [
    {
      icon: Stethoscope,
      title: "Medical Oncology",
      description:
        "Expert medical oncology care focusing on systemic treatments including targeted therapy and immunotherapy.",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-700",
      borderColor: "border-indigo-300",
      slug: "medical-oncology",
    },
    {
      icon: Scissors,
      title: "Surgical Oncology",
      description:
        "Advanced surgical facilities for cancer removal procedures led by skilled Onco-Surgeons.",
      gradient: "from-red-500 via-orange-500 to-amber-500",
      bgColor: "bg-red-100",
      iconColor: "text-red-700",
      borderColor: "border-red-300",
      slug: "surgical-oncology",
    },
    {
      icon: Zap,
      title: "Radiation Therapy",
      description:
        "Advanced Radiation Therapy using Linear Accelerator (LINAC) technology ensures precise targeting of cancer cells.",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-700",
      borderColor: "border-orange-300",
      slug: "radiation-therapy",
    },
    {
      icon: FlaskConical,
      title: "Diagnostics",
      description:
        "Comprehensive diagnostic support through modern imaging tools for early cancer detection.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-700",
      borderColor: "border-cyan-300",
      slug: "diagnostics",
    },
    {
      icon: Heart,
      title: "Supportive Care",
      description:
        "Holistic supportive care including pain management, counseling, and rehabilitation.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700",
      borderColor: "border-pink-300",
      slug: "supportive-care",
    },
    {
      icon: Pill,
      title: "Pharmacy (In-Patient)",
      description:
        "In-house pharmacy providing all prescribed medications and chemotherapy drugs at affordable rates.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      borderColor: "border-green-300",
      slug: "pharmacy-in-patient",
    },
  ];

  const journeySteps = [
    {
      number: "1",
      icon: Target,
      title: "Diagnosis",
      description:
        "With unwavering dedication, our expert team delivers accurate and timely cancer diagnoses. Through advanced imaging, meticulous biopsies, and comprehensive laboratory analyses, we provide clarity and understanding for your journey.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      number: "2",
      icon: Users2,
      title: "Planning",
      description:
        "Every patient is unique, and our planning stage focuses on developing personalized strategies. Our multidisciplinary team collaborates to create comprehensive treatment plans based on your specific diagnosis and individual needs.",
      color: "from-purple-600 to-violet-600",
    },
    {
      number: "3",
      icon: Heart,
      title: "Treatment",
      description:
        "Our goal is to provide you with the most effective and advanced cancer treatments available. Our experienced medical professionals utilize cutting-edge therapies, including surgery, chemotherapy, radiation, and targeted therapies.",
      color: "from-pink-600 to-rose-600",
    },
    {
      number: "4",
      icon: Apple,
      title: "Supportive Care",
      description:
        "At every step of your cancer journey, we prioritize your well-being and comfort. Our supportive care services encompass pain management, counseling, nutritional guidance, and complementary therapies.",
      color: "from-green-600 to-emerald-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  return (
    <div className="bg-white">
      {/* ============================================================== */}
      {/*  Treatment Options Section (clickable cards)                   */}
      {/* ============================================================== */}
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
              Finding Hope,{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E92393] via-purple-600 to-blue-600">
                Healing Together
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
            >
              Explore our comprehensive cancer treatment options designed with cutting-edge technology and
              compassionate care
            </motion.p>
          </motion.div>

          {/* Treatment Cards Grid – each wrapped in <Link> */}
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
                /* ----------  LINK (React Router) ---------- */
                <Link
                  key={index}
                  to={`/services/${treatment.slug}`}
                  className="block"
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative cursor-pointer"
                  >
                    <div
                      className={`relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${treatment.borderColor} overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${treatment.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

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
                        <ChevronRight
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          strokeWidth={3}
                        />
                      </div>

                      <div
                        className={`absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br ${treatment.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`}
                      />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/*  Journey Steps Section (unchanged)                           */}
      {/* ============================================================== */}
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
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

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
                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="mb-4">
                          <Icon
                            className={`w-8 h-8 text-gray-700 group-hover:text-[#E92393] transition-colors duration-300`}
                            strokeWidth={2.5}
                          />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E92393] transition-colors duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed font-medium">{step.description}</p>
                      </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div
                      className={`absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500`}
                    />
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
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 bg-linear-to-r from-[#E92393] to-purple-600 blur-2xl rounded-full"
              />
              <Link to='/contact' >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-5 bg-linear-to-r from-[#E92393] via-purple-600 to-[#E92393] text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
              >
                <span>Begin Your Healing Journey</span>
                <ChevronRight className="w-6 h-6" strokeWidth={3} />
              </motion.button>
              </Link>
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