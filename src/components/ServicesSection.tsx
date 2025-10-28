import { easeInOut, motion} from "framer-motion";
import {  Users, Activity, Heart, HandHeart, Wallet, Sparkles, ChevronRight } from "lucide-react";

export default function CancerCareSection() {
  const services = [

    {
      icon: Users,
      title: "Expert Oncologists' Guidance",
      description: "Highly experienced cancer specialists dedicated to creating personalized treatment plans for your unique journey.",
      gradient: "from-blue-600 via-blue-500 to-cyan-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      icon: Activity,
      title: "Advanced Diagnostics",
      description: "State-of-the-art imaging and laboratory technology ensuring accurate diagnosis and precise treatment monitoring.",
      gradient: "from-teal-600 via-teal-500 to-emerald-600",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-700",
      borderColor: "border-teal-200"
    },
    {
      icon: Heart,
      title: "Emotional Support Network",
      description: "Compassionate counseling and psychological care to support you and your loved ones through every step.",
      gradient: "from-pink-600 via-pink-500 to-rose-600",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700",
      borderColor: "border-pink-200"
    },
    {
      icon: HandHeart,
      title: "Community Support",
      description: "Connect with fellow warriors, share experiences, and find strength in our caring community of survivors and caregivers.",
      gradient: "from-orange-600 via-orange-500 to-amber-600",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-700",
      borderColor: "border-orange-200"
    },
    {
      icon: Wallet,
      title: "Financial Assistance Options",
      description: "Flexible payment plans and financial counseling to ensure quality care remains accessible to everyone.",
      gradient: "from-green-600 via-green-500 to-emerald-600",
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      borderColor: "border-green-200"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="relative py-20 lg:py-28 bg-linear-to-br from-white via-purple-50 to-pink-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
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
            <span className="text-sm font-bold">Comprehensive Care</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Bridge Gap Hospitals: <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E92393] via-purple-600 to-[#E92393]">
              Your All-Inclusive Cancer Care Companion
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
          >
            From diagnosis to recovery and beyond, we provide holistic care that addresses every aspect of your cancer journey with compassion and expertise.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className={`relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} overflow-hidden`}>
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <Icon className={`w-10 h-10 ${service.iconColor}`} strokeWidth={2.5} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#E92393] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-5 font-medium">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-sm font-bold text-[#E92393] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
              <span>Schedule Your Consultation</span>
              <ChevronRight className="w-6 h-6" strokeWidth={3} />
            </motion.button>
          </div>
          
          <p className="mt-5 text-gray-700 text-lg font-semibold">
            Take the first step towards comprehensive cancer care
          </p>
        </motion.div>
      </div>
    </section>
  );
}