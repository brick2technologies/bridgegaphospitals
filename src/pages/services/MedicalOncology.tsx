import { motion } from "framer-motion";
import {
  Pill,
  Target,
  Shield,
  Dna,
  Heart,
  Activity,
  Users,
  Stethoscope,
  CheckCircle,
  ChevronRight,
  Phone,
  Calendar,
  MapPin,
  Clock,
  HeartPulse,
  Sparkles,
  Brain,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import Modal from "../../components/Modal";

// === Type Definitions ===
type ColorKey = "blue" | "purple" | "teal" | "pink";

interface Therapy {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
}

interface PersonalizedItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: ColorKey;
}

interface TreatmentCombination {
  name: string;
  icon: LucideIcon;
}

interface SupportService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function MedicalOncologyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const therapies: Therapy[] = [
    {
      icon: Pill,
      title: "Chemotherapy",
      description: "Advanced chemotherapy protocols administered by experienced oncologists and trained nursing staff for effective cancer treatment.",
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
      borderColor: "border-blue-200",
    },
    {
      icon: Target,
      title: "Targeted Therapy",
      description: "Precision medicines that specifically attack cancer cells based on molecular or genetic markers, minimizing damage to healthy tissues.",
      gradient: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-200",
    },
    {
      icon: Shield,
      title: "Immunotherapy",
      description: "Harnesses your immune system to recognize and destroy cancer cells, offering effective options for advanced or resistant cancers.",
      gradient: "from-teal-600 to-emerald-600",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-700",
      borderColor: "border-teal-200",
    },
    {
      icon: Dna,
      title: "Hormonal Therapy",
      description: "Specialized treatment for hormone-sensitive malignancies such as breast and prostate cancers, controlling disease progression.",
      gradient: "from-orange-600 to-amber-600",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-700",
      borderColor: "border-orange-200",
    },
  ];

  const personalizedApproach: PersonalizedItem[] = [
    {
      icon: Users,
      title: "Multidisciplinary Team",
      description: "Oncologists, surgeons, radiologists, and pathologists collaborate to design individualized treatment plans.",
      color: "blue",
    },
    {
      icon: Dna,
      title: "Genetic Profiling",
      description: "Treatment tailored to your specific diagnosis, genetic profile, and overall health condition.",
      color: "purple",
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      description: "Advanced diagnostic imaging and lab tests ensure timely adjustments to therapy for maximum effectiveness.",
      color: "teal",
    },
    {
      icon: Heart,
      title: "Holistic Care",
      description: "Comprehensive support including pain management, nutrition, counseling, and palliative services.",
      color: "pink",
    },
  ];

  const treatmentCombinations: TreatmentCombination[] = [
    { name: "Surgery", icon: Stethoscope },
    { name: "Chemotherapy", icon: Pill },
    { name: "Radiotherapy", icon: Target },
    { name: "Targeted Therapy", icon: Microscope },
    { name: "Immunotherapy", icon: Shield },
  ];

  const supportServices: SupportService[] = [
    {
      icon: HeartPulse,
      title: "Pain Management",
      description: "Comprehensive pain control strategies",
    },
    {
      icon: Activity,
      title: "Nutritional Support",
      description: "Customized dietary guidance",
    },
    {
      icon: Brain,
      title: "Psychological Counseling",
      description: "Mental health and emotional support",
    },
    {
      icon: Heart,
      title: "Palliative Services",
      description: "Quality of life enhancement",
    },
  ];

  const colorMap: Record<ColorKey, { bg: string; text: string; gradient: string }> = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      gradient: "from-blue-600 to-cyan-600",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      gradient: "from-purple-600 to-pink-600",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-700",
      gradient: "from-teal-600 to-emerald-600",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-700",
      gradient: "from-pink-600 to-rose-600",
    },
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-rose-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-40 right-20 w-64 h-64 bg-rose-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg mb-6"
              >
                <Pill className="w-5 h-5 text-[#E92393]" />
                <span className="text-sm font-bold text-gray-900">Advanced Medical Treatment</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Medical Oncology<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-600 to-pink-500">
                  Department
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Comprehensive cancer treatment with personalized care, advanced therapies, and continuous
                support throughout your treatment journey at Indur Cancer Hospital.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E92393] to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </motion.button>
                <motion.a
                href="tel:+918688277183"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </motion.a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Indur, Nizamabad</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">24/7 Emergency Care</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Stethoscope className="w-5 h-5" />
                    <span className="text-sm">Expert Oncology Team</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-3xl p-6 shadow-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                    <Pill className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Chemotherapy</h3>
                  <p className="text-sm text-gray-600">Advanced protocols</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white rounded-3xl p-6 shadow-xl mt-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Targeted</h3>
                  <p className="text-sm text-gray-600">Precision medicine</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white rounded-3xl p-6 shadow-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Immuno</h3>
                  <p className="text-sm text-gray-600">Immune system</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="bg-white rounded-3xl p-6 shadow-xl mt-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
                    <Dna className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Hormonal</h3>
                  <p className="text-sm text-gray-600">Specialized care</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border-2 border-purple-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#E92393] to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Comprehensive Medical Oncology Services
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Indur Cancer Hospital, we provide comprehensive medical oncology services
                  administered under the supervision of experienced oncologists and trained nursing staff.
                  All therapies are customized according to your diagnosis, stage, and overall condition.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our approach includes close monitoring, counseling, and side-effect management
                  to ensure optimal outcomes and quality of life throughout your treatment journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Therapies Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Treatment Options</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Advanced therapies tailored to your specific cancer type and stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {therapies.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <motion.div
                  key={therapy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${therapy.borderColor}`}
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${therapy.bgColor} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${therapy.iconColor}`} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {therapy.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {therapy.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#E92393] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalized Approach Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Deeply <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Personalized Care</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Treatment tailored to your specific diagnosis, genetic profile, and overall health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {personalizedApproach.map((item, index) => {
              const Icon = item.icon;
              const colors = colorMap[item.color];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Combinations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Treatment Plans</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Combining multiple therapies for optimal outcomes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {treatmentCombinations.map((treatment, index) => {
                const Icon = treatment.icon;
                return (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-[#E92393] to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                    <span className="font-bold text-sm sm:text-base">{treatment.name}</span>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-center text-gray-700 text-base sm:text-lg leading-relaxed">
              Our multidisciplinary team designs individualized treatment plans that combine
              multiple therapies as appropriate for your specific condition, ensuring comprehensive
              and effective cancer care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Support Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Enhancing quality of life throughout your treatment journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#E92393]" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monitoring & Safety */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-teal-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Activity className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Continuous Monitoring
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Advanced diagnostic imaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Regular laboratory tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Clinical assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Timely therapy adjustments</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-purple-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Maximum Safety
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Side-effect management protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Trained nursing supervision</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Patient counseling support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Quality of life focus</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#E92393] via-purple-600 to-[#E92393] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Begin Your Treatment Journey
              </h2>
              <p className="text-base sm:text-lg mb-8 opacity-95">
                Expert medical oncologists ready to guide you with personalized, compassionate care
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                href="tel:+918688277183"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#E92393] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="appointment" />
    </>
  );
}