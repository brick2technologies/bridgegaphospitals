import { motion } from "framer-motion";
import {
  Zap,
  Target,
  Shield,
  Activity,
  Heart,
  Sparkles,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Clock,
  HeartPulse,
  Crosshair,
  Layers,
  Users,
  Award,
  Brain,
} from "lucide-react";

export default function RadiationOncologyPage() {
  const radiationTechniques = [
    {
      icon: Layers,
      title: "3D-CRT",
      fullName: "Three-Dimensional Conformal Radiation Therapy",
      description: "Uses detailed imaging to plan and deliver radiation beams from multiple angles, ensuring accurate targeting of complex tumors with precision.",
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
      borderColor: "border-blue-200",
      features: [
        "Detailed 3D imaging for treatment planning",
        "Multi-angle radiation beam delivery",
        "Precise targeting of complex tumors",
        "Enhanced treatment accuracy",
      ],
    },
    {
      icon: Target,
      title: "IMRT",
      fullName: "Intensity-Modulated Radiation Therapy",
      description: "Allows highly focused radiation doses to conform to the shape of the tumor while sparing surrounding healthy tissues, minimizing side effects.",
      gradient: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-200",
      features: [
        "Highly focused radiation doses",
        "Conforms precisely to tumor shape",
        "Spares healthy surrounding tissues",
        "Minimizes treatment side effects",
      ],
    },
    {
      icon: Heart,
      title: "Palliative Radiotherapy",
      fullName: "Symptom Relief & Quality of Life",
      description: "Provided for patients with advanced or metastatic disease to relieve pain, control symptoms, and improve quality of life.",
      gradient: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700",
      borderColor: "border-pink-200",
      features: [
        "Effective pain relief",
        "Symptom control and management",
        "Quality of life improvement",
        "Compassionate palliative care",
      ],
    },
  ];

  type ColorKey = "blue" | "teal" | "purple" | "pink";

  const advantages: { icon: any; title: string; description: string; color: ColorKey }[] = [
    {
      icon: Crosshair,
      title: "Precision Targeting",
      description: "Advanced imaging ensures accurate tumor localization",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Tissue Protection",
      description: "Minimizes damage to surrounding healthy tissues",
      color: "teal",
    },
    {
      icon: Activity,
      title: "Minimal Side Effects",
      description: "Reduced complications through focused delivery",
      color: "purple",
    },
    {
      icon: Award,
      title: "State-of-the-Art",
      description: "Latest radiation therapy technology and techniques",
      color: "pink",
    },
  ];

  const treatmentProcess = [
    {
      step: "01",
      title: "Consultation & Assessment",
      description: "Comprehensive evaluation with radiation oncologist",
      icon: Users,
    },
    {
      step: "02",
      title: "Imaging & Planning",
      description: "Detailed 3D imaging and treatment simulation",
      icon: Brain,
    },
    {
      step: "03",
      title: "Treatment Delivery",
      description: "Precise radiation therapy sessions",
      icon: Zap,
    },
    {
      step: "04",
      title: "Monitoring & Follow-up",
      description: "Regular check-ups and ongoing care",
      icon: HeartPulse,
    },
  ];

  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      gradient: "from-blue-600 to-cyan-600",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-700",
      gradient: "from-teal-600 to-emerald-600",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      gradient: "from-purple-600 to-pink-600",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-700",
      gradient: "from-pink-600 to-rose-600",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                <Zap className="w-5 h-5 text-[#E92393]" />
                <span className="text-sm font-bold text-gray-900">Advanced Radiation Technology</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Radiation Oncology<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-600 to-indigo-500">
                  Department
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Precise, effective cancer treatment with state-of-the-art radiation therapy technology, 
                delivering targeted care with minimal side effects at Indur Cancer Hospital.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E92393] to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
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
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">3D-CRT</h3>
                  <p className="text-sm text-gray-600">Conformal therapy</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white rounded-3xl p-6 shadow-xl mt-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">IMRT</h3>
                  <p className="text-sm text-gray-600">Intensity modulated</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white rounded-3xl p-6 shadow-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <Crosshair className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Precision</h3>
                  <p className="text-sm text-gray-600">Accurate targeting</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="bg-white rounded-3xl p-6 shadow-xl mt-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-4">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Palliative</h3>
                  <p className="text-sm text-gray-600">Symptom relief</p>
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
                  Advanced Radiation Therapy
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Indur Cancer Hospital, we utilize advanced radiation therapy techniques to deliver 
                  precise and effective cancer treatment. Our state-of-the-art equipment and expert team 
                  ensure optimal outcomes with minimal side effects.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  These cutting-edge techniques reflect our commitment to precision, safety, and 
                  patient-centered cancer care, providing hope and healing to our patients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Radiation Techniques Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Treatment Techniques</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              State-of-the-art radiation therapy methods for optimal cancer care
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {radiationTechniques.map((technique, index) => {
              const Icon = technique.icon;
              return (
                <motion.div
                  key={technique.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${technique.borderColor}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-3 flex flex-col sm:flex-row items-start gap-4">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 ${technique.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${technique.iconColor}`} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {technique.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 font-semibold mb-3">
                          {technique.fullName}
                        </p>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {technique.description}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {technique.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                          <CheckCircle className={`w-5 h-5 ${technique.iconColor} flex-shrink-0 mt-0.5`} />
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

      {/* Advantages Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Radiation Therapy</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Advanced technology meets compassionate care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const colors = colorMap[advantage.color];
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{advantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Treatment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Process</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Your journey to recovery, step by step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {treatmentProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg h-full">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#E92393] to-purple-600 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                      {process.step}
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-purple-700" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                      {process.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center">
                      {process.description}
                    </p>
                  </div>
                  {index < treatmentProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#E92393] to-purple-600" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
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
                Begin Your Radiation Therapy Journey
              </h2>
              <p className="text-base sm:text-lg mb-8 opacity-95">
                Our expert radiation oncology team is ready to provide precise, compassionate care
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#E92393] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
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
                  <span>Schedule Visit</span>
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
                    <HeartPulse className="w-5 h-5" />
                    <span className="text-sm">Expert Radiation Care</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}