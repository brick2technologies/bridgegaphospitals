import { motion } from "framer-motion";
import {
  Scissors,
  Users,
  Heart,
  Shield,
  Brain,
  Target,
  Sparkles,
  Activity,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Stethoscope,
  Eye,
  Microscope,
  UserCheck,
  HeartPulse,
  Zap,
  TrendingUp,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

// === Type Definitions ===
type ColorKey = "blue" | "green" | "red" | "purple";

interface Procedure {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  features: string[];
}

interface CareApproach {
  icon: LucideIcon;
  title: string;
  description: string;
  color: ColorKey;
}

interface PostOpCare {
  phase: string;
  icon: LucideIcon;
  description: string;
}

interface QualityStandard {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export default function SurgicalOncologyPage() {
  const majorProcedures: Procedure[] = [
    {
      icon: Users,
      title: "Head & Neck Oncology",
      description: "Advanced surgical procedures for head and neck cancers including wide local excision of buccal mucosa carcinoma with neck dissection and flap reconstruction to achieve clear margins and restore function.",
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
      borderColor: "border-blue-200",
      features: [
        "Wide local excision procedures",
        "Neck dissection with reconstruction",
        "Flap reconstruction techniques",
        "Functional restoration focus",
      ],
    },
    {
      icon: Heart,
      title: "Breast Cancer Surgery",
      description: "Comprehensive breast cancer surgical options including modified radical mastectomy, breast-conserving surgery (lumpectomy), and sentinel lymph node biopsy, often followed by reconstruction.",
      gradient: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700",
      borderColor: "border-pink-200",
      features: [
        "Modified radical mastectomy",
        "Breast-conserving surgery",
        "Sentinel lymph node biopsy",
        "Reconstruction options",
      ],
    },
    {
      icon: Activity,
      title: "Gastrointestinal Oncology",
      description: "Complex GI surgeries including subtotal or total gastrectomy for stomach cancer, colectomy for colorectal malignancies, and pancreaticoduodenectomy (Whipple procedure) for pancreatic cancer.",
      gradient: "from-orange-600 to-amber-600",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-700",
      borderColor: "border-orange-200",
      features: [
        "Gastrectomy procedures",
        "Colorectal surgeries",
        "Whipple procedure",
        "Advanced GI techniques",
      ],
    },
    {
      icon: Target,
      title: "Specialized Oncology",
      description: "Major procedures including radical nephrectomy for renal tumors, hysterectomy with bilateral salpingo-oophorectomy for gynecologic cancers, and thoracotomy with lobectomy or pneumonectomy for lung cancer.",
      gradient: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-200",
      features: [
        "Radical nephrectomy",
        "Gynecologic cancer surgery",
        "Thoracic procedures",
        "Tailored to patient factors",
      ],
    },
  ];

  const careApproach: CareApproach[] = [
    {
      icon: Microscope,
      title: "Precision Planning",
      description: "Advanced imaging and multidisciplinary discussions for accuracy",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Minimally Invasive",
      description: "Modern techniques to minimize risks and recovery time",
      color: "green",
    },
    {
      icon: Shield,
      title: "Strict Safety",
      description: "Aseptic protocols and quality standards throughout",
      color: "red",
    },
    {
      icon: HeartPulse,
      title: "Patient-Centered",
      description: "Personalized treatment plans for optimal outcomes",
      color: "purple",
    },
  ];

  const postOpCare: PostOpCare[] = [
    {
      phase: "Monitoring",
      icon: Eye,
      description: "Round-the-clock post-operative patient monitoring",
    },
    {
      phase: "Pain Control",
      icon: Heart,
      description: "Effective pain and infection management",
    },
    {
      phase: "Recovery Support",
      icon: Activity,
      description: "Nutritional guidance and physiotherapy",
    },
    {
      phase: "Follow-up",
      icon: UserCheck,
      description: "Regular follow-ups and counseling",
    },
  ];

  const qualityStandards: QualityStandard[] = [
    {
      icon: Brain,
      title: "Multidisciplinary Team",
      items: ["Surgical oncologists", "Medical oncologists", "Radiologists", "Pathologists"],
    },
    {
      icon: Target,
      title: "Advanced Technology",
      items: ["Advanced imaging systems", "Minimally invasive tools", "Modern surgical equipment"],
    },
    {
      icon: ClipboardCheck,
      title: "Quality Protocols",
      items: ["Strict aseptic standards", "Safety checklists", "Outcome monitoring"],
    },
    {
      icon: TrendingUp,
      title: "Continuous Care",
      items: ["Pre-operative preparation", "Intra-operative precision", "Post-operative excellence"],
    },
  ];

  const colorMap: Record<ColorKey, { bg: string; text: string; gradient: string }> = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      gradient: "from-blue-600 to-cyan-600",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      gradient: "from-green-600 to-emerald-600",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      gradient: "from-red-600 to-rose-600",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      gradient: "from-purple-600 to-pink-600",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-40 right-20 w-64 h-64 bg-indigo-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
                <Scissors className="w-5 h-5 text-[#0066CC]" />
                <span className="text-sm font-bold text-gray-900">Advanced Surgical Excellence</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Surgical Oncology<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] via-cyan-600 to-indigo-500">
                  Department
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Precision surgical interventions for cancer treatment through advanced techniques,
                multidisciplinary planning, and patient-centered care ensuring optimal outcomes and recovery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0066CC] to-cyan-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </motion.button>
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
                    <span className="text-sm">Expert Surgical Team</span>
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
                    <Scissors className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Precision</h3>
                  <p className="text-sm text-gray-600">Advanced surgical techniques</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white rounded-3xl p-6 shadow-xl mt-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Planning</h3>
                  <p className="text-sm text-gray-600">Multidisciplinary approach</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white rounded-3xl p-6 shadow-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Safety</h3>
                  <p className="text-sm text-gray-600">Strict protocols</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="bg-white rounded-3xl p-6 shadow-xl mt-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-4">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Patient Care</h3>
                  <p className="text-sm text-gray-600">Personalized treatment</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border-2 border-blue-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0066CC] to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Excellence in Surgical Oncology
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Indur Cancer Hospital, the surgical oncology department ensures precision, safety,
                  and high-quality post-operative care through a patient-centered and technology-driven approach.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Each surgery is tailored to tumor location, stage, and patient factors, often integrated
                  with chemotherapy and radiotherapy for optimal outcomes. Our experienced surgical oncologists
                  use advanced imaging, minimally invasive techniques, and strict aseptic protocols to achieve
                  accurate tumor removal while minimizing risks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Procedures */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-cyan-600">Surgical Procedures</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive surgical oncology procedures for diagnosis, staging, and definitive treatment
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {majorProcedures.map((procedure, index) => {
              const Icon = procedure.icon;
              return (
                <motion.div
                  key={procedure.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${procedure.borderColor}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-3 flex flex-col sm:flex-row items-start gap-4">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 ${procedure.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${procedure.iconColor}`} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                          {procedure.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {procedure.description}
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {procedure.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                          <CheckCircle className={`w-5 h-5 ${procedure.iconColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Care Approach */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-cyan-600">Care Approach</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Patient-centered and technology-driven surgical excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {careApproach.map((approach, index) => {
              const Icon = approach.icon;
              const colors = colorMap[approach.color];
              return (
                <motion.div
                  key={approach.title}
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
                    {approach.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{approach.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post-Operative Care */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Post-Operative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Care Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive support for optimal recovery and long-term well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {postOpCare.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.phase}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg h-full">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-700" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                      {stage.phase}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center">
                      {stage.description}
                    </p>
                  </div>
                  {index < postOpCare.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-cyan-600">Standards</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              High-quality care through multidisciplinary collaboration and advanced technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {qualityStandards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-cyan-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
                    {standard.title}
                  </h3>
                  <ul className="space-y-2">
                    {standard.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0066CC] via-cyan-600 to-[#0066CC] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Schedule Your Surgical Consultation
              </h2>
              <p className="text-base sm:text-lg mb-8 opacity-95">
                Expert surgical oncologists ready to provide personalized care and optimal outcomes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0066CC] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
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
  );
}