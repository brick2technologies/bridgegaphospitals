import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Apple,
  Smile,
  Brain,
  HandHeart,
  Sparkles,
  Shield,
  Activity,
  MessageCircle,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Clock,
  HeartPulse,
  Stethoscope,
  Sun,
  Flower2,
  type LucideIcon,
} from "lucide-react";

// === Type Definitions ===
type ColorKey = "purple" | "blue" | "pink" | "teal";

interface CoreService {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  features: string[];
}

interface HolisticSupport {
  icon: LucideIcon;
  title: string;
  description: string;
  color: ColorKey;
}

interface NutritionJourney {
  phase: string;
  icon: LucideIcon;
  description: string;
}

interface PalliativeFocus {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export default function SupportiveCarePage() {
  const coreServices: CoreService[] = [
    {
      icon: Apple,
      title: "Nutritional Counseling",
      description: "Personalized dietary plans to help maintain strength, manage treatment side effects, and promote recovery through balanced nutrition.",
      gradient: "from-green-600 to-emerald-600",
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      borderColor: "border-green-200",
      features: [
        "Customized meal planning",
        "Treatment side-effect management",
        "Strength and recovery support",
        "Stage-specific nutrition guidance",
      ],
    },
    {
      icon: Heart,
      title: "Palliative Care",
      description: "Compassionate, holistic support to relieve pain, manage symptoms, and provide emotional and spiritual comfort to patients and families.",
      gradient: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700",
      borderColor: "border-pink-200",
      features: [
        "Pain relief and symptom management",
        "Emotional support services",
        "Spiritual care and counseling",
        "Family support programs",
      ],
    },
  ];

  const holisticSupport: HolisticSupport[] = [
    {
      icon: Brain,
      title: "Psychological Well-being",
      description: "Mental health support and counseling throughout treatment",
      color: "purple",
    },
    {
      icon: HeartPulse,
      title: "Physical Support",
      description: "Rehabilitation and physical therapy services",
      color: "blue",
    },
    {
      icon: MessageCircle,
      title: "Emotional Care",
      description: "Individual and family counseling support",
      color: "pink",
    },
    {
      icon: Flower2,
      title: "Spiritual Comfort",
      description: "Spiritual guidance and emotional peace",
      color: "teal",
    },
  ];

  const nutritionJourney: NutritionJourney[] = [
    {
      phase: "Diagnosis",
      icon: Stethoscope,
      description: "Initial nutritional assessment and baseline planning",
    },
    {
      phase: "Treatment",
      icon: Activity,
      description: "Managing side effects with targeted nutrition",
    },
    {
      phase: "Recovery",
      icon: Sun,
      description: "Rebuilding strength and promoting healing",
    },
    {
      phase: "Survivorship",
      icon: Smile,
      description: "Long-term wellness and healthy lifestyle",
    },
  ];

  const palliativeFocus: PalliativeFocus[] = [
    {
      icon: Shield,
      title: "Pain Management",
      items: ["Medication optimization", "Alternative therapies", "Comfort measures"],
    },
    {
      icon: HandHeart,
      title: "Symptom Control",
      items: ["Nausea management", "Fatigue support", "Appetite improvement"],
    },
    {
      icon: Users,
      title: "Family Support",
      items: ["Caregiver guidance", "Family counseling", "Grief support"],
    },
    {
      icon: MessageCircle,
      title: "Emotional Care",
      items: ["Counseling services", "Support groups", "Spiritual guidance"],
    },
  ];

  const colorMap: Record<ColorKey, { bg: string; text: string; gradient: string }> = {
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      gradient: "from-purple-600 to-pink-600",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      gradient: "from-blue-600 to-cyan-600",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-700",
      gradient: "from-pink-600 to-rose-600",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-700",
      gradient: "from-teal-600 to-emerald-600",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-40 right-20 w-64 h-64 bg-orange-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
                <Heart className="w-5 h-5 text-[#E92393]" />
                <span className="text-sm font-bold text-gray-900">Holistic Care Approach</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Supportive Care &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-600 to-orange-500">
                  Rehabilitation
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Enhancing quality of life throughout your cancer journey with personalized 
                nutrition, compassionate palliative care, and comprehensive rehabilitation services.
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
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <Apple className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Nutrition</h3>
                  <p className="text-sm text-gray-600">Personalized dietary care</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white rounded-3xl p-6 shadow-xl mt-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-4">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Palliative</h3>
                  <p className="text-sm text-gray-600">Compassionate support</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white rounded-3xl p-6 shadow-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Mental Health</h3>
                  <p className="text-sm text-gray-600">Psychological support</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="bg-white rounded-3xl p-6 shadow-xl mt-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Rehabilitation</h3>
                  <p className="text-sm text-gray-600">Physical therapy</p>
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
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border-2 border-purple-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#E92393] to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Treating the Whole Person
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Indur Cancer Hospital, we believe in treating not just the disease but the whole 
                  person — supporting physical, emotional, and psychological well-being through every 
                  step of the healing process.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our Supportive Care and Rehabilitation services are designed to enhance the quality 
                  of life of patients throughout their cancer journey, addressing individual needs at 
                  every stage — from diagnosis to survivorship.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Core Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive support for your physical and emotional well-being
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${service.borderColor}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-3 flex flex-col sm:flex-row items-start gap-4">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${service.iconColor}`} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                          <CheckCircle className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
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

      {/* Holistic Support */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Holistic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Support System</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive care addressing all aspects of your well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {holisticSupport.map((support, index) => {
              const Icon = support.icon;
              const colors = colorMap[support.color];
              return (
                <motion.div
                  key={support.title}
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
                    {support.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{support.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nutrition Journey */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nutritional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Care Journey</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Stage-specific nutrition support from diagnosis to survivorship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {nutritionJourney.map((stage, index) => {
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
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-green-700" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                      {stage.phase}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center">
                      {stage.description}
                    </p>
                  </div>
                  {index < nutritionJourney.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Palliative Care Focus */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Palliative Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Focus Areas</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive symptom management and family support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {palliativeFocus.map((focus, index) => {
              const Icon = focus.icon;
              return (
                <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
                    {focus.title}
                  </h3>
                  <ul className="space-y-2">
                    {focus.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-pink-600 rounded-full flex-shrink-0" />
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
                Begin Your Journey to Wellness
              </h2>
              <p className="text-base sm:text-lg mb-8 opacity-95">
                Our supportive care team is here to enhance your quality of life every step of the way
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
                  <span>Schedule Consultation</span>
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
                    <span className="text-sm">24/7 Support Available</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <HeartPulse className="w-5 h-5" />
                    <span className="text-sm">Compassionate Care</span>
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