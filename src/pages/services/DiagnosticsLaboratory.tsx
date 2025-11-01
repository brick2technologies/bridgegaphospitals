import { motion } from "framer-motion";
import {
  Microscope,
  Scan,
  FlaskConical,
  Activity,
  Zap,
  Clock,
  Target,
  Shield,
  Award,
  Users,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  HeartPulse,
  Sparkles,
  Eye,
  FileText,
  Brain,
  TrendingUp,
  Droplets,
  TestTube,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

// === Type Definitions ===
type ColorKey = "blue" | "teal" | "purple" | "pink";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  fullName?: string;
  description: string;
  gradient: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  features?: string[];
}

interface LabService {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
}

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  color: ColorKey;
}

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface EquipmentHighlight {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export default function DiagnosticsLaboratoryPage() {
  // === Data ===
  const imagingServices: ServiceCard[] = [
    {
      icon: Scan,
      title: "CT Scan",
      fullName: "High-Resolution Computed Tomography",
      description: "Advanced CT scanners provide detailed cross-sectional images for precise tumor visualization and disease staging.",
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
      borderColor: "border-blue-200",
      features: [
        "High-resolution imaging",
        "Precise tumor localization",
        "Accurate disease staging",
        "Quick scan times",
      ],
    },
    {
      icon: Activity,
      title: "Digital X-Ray",
      fullName: "Digital Radiography Systems",
      description: "State-of-the-art digital X-ray technology delivers clear images with minimal radiation exposure for diagnostic clarity.",
      gradient: "from-teal-600 to-emerald-600",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-700",
      borderColor: "border-teal-200",
      features: [
        "Low radiation exposure",
        "Immediate image viewing",
        "Enhanced image quality",
        "Digital archiving",
      ],
    },
  ];

  const laboratoryServices: LabService[] = [
    {
      icon: Microscope,
      title: "Histopathology",
      description: "Detailed tissue examination for accurate cancer diagnosis and characterization",
      gradient: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-200",
    },
    {
      icon: FlaskConical,
      title: "Cytology",
      description: "Cell-level analysis for early cancer detection and monitoring",
      gradient: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700",
      borderColor: "border-pink-200",
    },
    {
      icon: FileText,
      title: "Routine Testing",
      description: "Comprehensive blood work and laboratory investigations",
      gradient: "from-orange-600 to-amber-600",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-700",
      borderColor: "border-orange-200",
    },
    {
      icon: Brain,
      title: "Specialized Tests",
      description: "Advanced diagnostic procedures for complex cases",
      gradient: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-700",
      borderColor: "border-indigo-200",
    },
  ];

  const keyAdvantages: Advantage[] = [
    {
      icon: Target,
      title: "Diagnostic Accuracy",
      description: "Advanced technology with expert interpretation by experienced pathologists and radiologists",
      color: "blue",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Efficient processing and streamlined workflows for timely results",
      color: "teal",
    },
    {
      icon: Shield,
      title: "Standardized Protocols",
      description: "Quality-assured procedures following international standards",
      color: "purple",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled technicians and experienced specialists ensuring reliability",
      color: "pink",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      icon: FileText,
      title: "Sample Collection",
      description: "Professional collection with proper protocols",
    },
    {
      icon: FlaskConical,
      title: "Laboratory Processing",
      description: "State-of-the-art equipment and techniques",
    },
    {
      icon: Eye,
      title: "Expert Analysis",
      description: "Thorough examination by specialists",
    },
    {
      icon: TrendingUp,
      title: "Result Delivery",
      description: "Timely reports for treatment planning",
    },
  ];

  const equipmentHighlights: EquipmentHighlight[] = [
    {
      icon: Scan,
      title: "Advanced Imaging",
      items: ["CT Scanner", "Digital X-Ray", "Ultrasound", "Mammography"],
    },
    {
      icon: Microscope,
      title: "Laboratory Equipment",
      items: ["Automated Analyzers", "Microscopy Suite", "Centrifuges", "Incubators"],
    },
    {
      icon: TestTube,
      title: "Testing Capabilities",
      items: ["Molecular Testing", "Immunohistochemistry", "Flow Cytometry", "Tumor Markers"],
    },
    {
      icon: Droplets,
      title: "Sample Processing",
      items: ["Blood Analysis", "Tissue Processing", "Fluid Cytology", "Biopsy Evaluation"],
    },
  ];

  const colorMap: Record<ColorKey, { bg: string; text: string; gradient: string }> = {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E92393] via-purple-600 to-[#E92393] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <Microscope className="w-5 h-5" />
              <span className="text-sm font-bold">Advanced Diagnostics</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Diagnostics & Laboratory
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-95 px-4">
              Accurate cancer detection and treatment planning with state-of-the-art technology
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#E92393] rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Testing</span>
            </motion.button>
          </motion.div>
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
                  The Backbone of Cancer Care
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Indur Cancer Hospital, diagnostics and laboratory services form the foundation
                  of accurate cancer detection and treatment planning. Diagnostic accuracy is ensured
                  through advanced technology, standardized protocols, and expert interpretation by
                  experienced pathologists and radiologists.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Efficient sample processing and streamlined workflows enable fast turnaround times,
                  ensuring patients receive timely diagnoses and can begin appropriate treatment without delay.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imaging Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Imaging Facilities</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Precise visualization for accurate diagnosis and staging
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {imagingServices.map((service, index) => {
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
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        {service.fullName && (
                          <p className="text-base sm:text-lg text-gray-600 font-semibold mb-3">
                            {service.fullName}
                          </p>
                        )}
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {service.features && (
                      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                            <CheckCircle className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Laboratory Services Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              State-of-the-Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Pathology Lab</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive testing for accurate cancer detection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {laboratoryServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`group bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${service.borderColor}`}
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${service.iconColor}`} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E92393] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment & Capabilities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Equipment & Capabilities</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              State-of-the-art technology for comprehensive diagnostics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {equipmentHighlights.map((equipment, index) => {
              const Icon = equipment.icon;
              return (
                <motion.div
                  key={equipment.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E92393] to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
                    {equipment.title}
                  </h3>
                  <ul className="space-y-2">
                    {equipment.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#E92393] rounded-full flex-shrink-0" />
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

      {/* Key Advantages */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Diagnostics</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Excellence in diagnostic accuracy and patient care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {keyAdvantages.map((advantage, index) => {
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
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                    {advantage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{advantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Diagnostic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Process</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Streamlined workflow for timely, accurate results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg h-full">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#E92393] to-purple-600 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-purple-700" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#E92393] to-purple-600" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border-2 border-purple-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E92393] to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Expert Team
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  All diagnostic services are handled by skilled technicians and experienced
                  radiologists to ensure timely, accurate, and reliable results.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E92393] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">Experienced pathologists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E92393] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">Skilled laboratory technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E92393] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">Expert radiologists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E92393] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">Certified laboratory personnel</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Quality Assurance
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Supporting effective, personalized patient care through standardized
                  protocols and quality-assured procedures.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">Continuous quality improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">International standards compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">Regular quality checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">Equipment calibration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">Proficiency testing programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technology & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">Innovation</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Leveraging cutting-edge technology for superior diagnostic outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Scan className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Digital Imaging
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Our hospital utilizes digital X-rays and high-resolution CT scanners to deliver
                reliable results with enhanced image quality and reduced radiation exposure.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span>Faster scan times</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span>Immediate image availability</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span>Enhanced diagnostic accuracy</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Microscope className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Advanced Laboratory
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                State-of-the-art pathology lab equipped with automated analyzers and specialized
                equipment for routine and complex diagnostic procedures.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Automated processing systems</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Specialized testing capabilities</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Comprehensive test menu</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Rapid Turnaround
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Efficient sample processing and streamlined workflows enable fast turnaround time,
                ensuring patients can begin treatment without delay.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-teal-600" />
                  <span>Optimized workflow processes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-teal-600" />
                  <span>Priority handling for urgent cases</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-teal-600" />
                  <span>Digital result reporting</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Expert Interpretation
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Experienced pathologists and radiologists provide expert interpretation, ensuring
                diagnostic accuracy and supporting personalized patient care.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-orange-600" />
                  <span>Board-certified specialists</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-orange-600" />
                  <span>Multidisciplinary consultation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-orange-600" />
                  <span>Detailed diagnostic reports</span>
                </div>
              </div>
            </motion.div>
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
                Get Accurate Diagnostic Results
              </h2>
              <p className="text-base sm:text-lg mb-8 opacity-95">
                Our expert diagnostic team is ready to provide precise, timely results for your care
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
                  <span>Schedule Testing</span>
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
                    <span className="text-sm">Fast Turnaround</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <HeartPulse className="w-5 h-5" />
                    <span className="text-sm">Expert Analysis</span>
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