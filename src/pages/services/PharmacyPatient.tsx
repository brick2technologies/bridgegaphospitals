import { useState, useEffect, type ReactNode } from "react";
import {
  Shield,
  Clock,
  Pill,
  Activity,
  HeartPulse,
  Apple,
  Sparkles,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  ClipboardCheck,
  AlertCircle,
  UserCheck,
  Microscope,
  Syringe,
  BedDouble,
  MessageCircle,
} from "lucide-react";

import Modal from "../../components/Modal"; 

// === Prop Types ===
interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// === AnimatedCard Component ===
function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// === FloatingCard Component ===
function FloatingCard({ children, className = "", delay = 0 }: FloatingCardProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const translateY = Math.sin((offset + delay) * (Math.PI / 180)) * 10;

  return (
    <div
      className={className}
      style={{ transform: `translateY(${translateY}px)`, transition: "transform 0.1s linear" }}
    >
      {children}
    </div>
  );
}

// === Main Component ===
export default function PharmacyInPatientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const coreServices = [
    {
      icon: Pill,
      title: "Pharmacy Services",
      description:
        "Comprehensive medication management with strict safety protocols, ensuring every prescription is accurately dispensed and monitored by qualified oncologists and pharmacists.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
      borderColor: "border-blue-200",
      features: [
        "Qualified oncologist prescriptions",
        "Pharmacist-supervised dispensing",
        "Drug interaction monitoring",
        "Standardized safety protocols",
      ],
    },
    {
      icon: BedDouble,
      title: "In-Patient Care",
      description:
        "Round-the-clock medical and nursing care with continuous monitoring for treatment response, side effects, and patient comfort throughout the hospital stay.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-200",
      features: [
        "24/7 medical supervision",
        "Trained nursing staff",
        "Continuous monitoring",
        "Personalized care plans",
      ],
    },
  ];

  const safetyProtocols = [
    {
      icon: Shield,
      title: "Medication Safety",
      description: "Strict protocols to prevent errors",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Microscope,
      title: "Quality Assurance",
      description: "Rigorous quality control standards",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: UserCheck,
      title: "Expert Supervision",
      description: "Qualified healthcare professionals",
      gradient: "from-pink-600 to-rose-600",
    },
    {
      icon: AlertCircle,
      title: "Side Effect Monitoring",
      description: "Continuous patient assessment",
      gradient: "from-teal-600 to-emerald-600",
    },
  ];

  const medicationProcess = [
    {
      phase: "Prescription",
      icon: ClipboardCheck,
      description: "Oncologist reviews and prescribes treatment",
    },
    {
      phase: "Verification",
      icon: Microscope,
      description: "Pharmacist verifies and checks interactions",
    },
    {
      phase: "Dispensing",
      icon: Pill,
      description: "Safe preparation and dispensing",
    },
    {
      phase: "Administration",
      icon: Syringe,
      description: "Trained staff administers medication",
    },
  ];

  const supportiveServices = [
    {
      icon: HeartPulse,
      title: "Pain Management",
      items: ["Medication optimization", "Comfort measures", "Regular assessment"],
    },
    {
      icon: Apple,
      title: "Nutrition Counseling",
      items: ["Dietary planning", "Nutritional support", "Recovery meals"],
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      items: ["Mobility support", "Strength building", "Recovery exercises"],
    },
    {
      icon: MessageCircle,
      title: "Emotional Support",
      items: ["Counseling services", "Patient advocacy", "Family guidance"],
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-40 right-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <AnimatedCard>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg mb-6">
                <Shield className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-bold text-gray-900">Safe & Supervised Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Pharmacy &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600">
                  In-Patient Services
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Ensuring medication safety and comprehensive in-patient support with strict protocols,
                expert supervision, and round-the-clock care throughout your hospital stay.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
                onClick={() => setIsModalOpen(true)}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Admission</span>
                </button>

                <a  href="tel:+918688277183" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:scale-105 active:scale-95">
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </a>
              </div>
            </AnimatedCard>

            {/* Right Visual */}
            <AnimatedCard delay={300}>
              <div className="grid grid-cols-2 gap-4">
                <FloatingCard delay={0} className="bg-white rounded-3xl p-6 shadow-xl transition-shadow hover:shadow-2xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                    <Pill className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Pharmacy</h3>
                  <p className="text-sm text-gray-600">Safe medication dispensing</p>
                </FloatingCard>

                <FloatingCard delay={90} className="bg-white rounded-3xl p-6 shadow-xl mt-8 transition-shadow hover:shadow-2xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                    <BedDouble className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">In-Patient</h3>
                  <p className="text-sm text-gray-600">24/7 medical care</p>
                </FloatingCard>

                <FloatingCard delay={180} className="bg-white rounded-3xl p-6 shadow-xl transition-shadow hover:shadow-2xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Safety First</h3>
                  <p className="text-sm text-gray-600">Strict protocols</p>
                </FloatingCard>

                <FloatingCard delay={270} className="bg-white rounded-3xl p-6 shadow-xl mt-8 transition-shadow hover:shadow-2xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <HeartPulse className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Monitoring</h3>
                  <p className="text-sm text-gray-600">Continuous care</p>
                </FloatingCard>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border-2 border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Safety & Support Throughout Your Stay
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Indur Cancer Hospital, medication safety and in-patient support are top priorities,
                  ensuring every patient receives accurate and safe treatment throughout their hospital stay.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  All medications are prescribed, dispensed, and administered under strict supervision by
                  qualified oncologists, pharmacists, and trained nursing staff, following standardized
                  safety protocols to prevent errors and drug interactions. Supportive services enhance
                  patient comfort and recovery, reflecting our commitment to holistic, safe, and
                  compassionate cancer care.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Core Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive medication management and in-patient care
            </p>
          </AnimatedCard>

          <div className="space-y-6 sm:space-y-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard
                  key={service.title}
                  delay={index * 100}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${service.borderColor}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-3 flex flex-col sm:flex-row items-start gap-4">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 ${service.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${service.iconColor}`} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <CheckCircle className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Safety <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Protocols</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive safety measures for your protection
            </p>
          </AnimatedCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {safetyProtocols.map((protocol, index) => {
              const Icon = protocol.icon;
              return (
                <AnimatedCard
                  key={protocol.title}
                  delay={index * 100}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${protocol.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">{protocol.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{protocol.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Medication Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Medication <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Management Process</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Four-step process ensuring safe and accurate medication delivery
            </p>
          </AnimatedCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {medicationProcess.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <AnimatedCard key={stage.phase} delay={index * 100} className="relative">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg h-full hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-700" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">{stage.phase}</h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center">{stage.description}</p>
                  </div>
                  {index < medicationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600" />
                  )}
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supportive Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Supportive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive support enhancing comfort and recovery
            </p>
          </AnimatedCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {supportiveServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard
                  key={service.title}
                  delay={index * 100}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="bg-gradient-to-br from-pink-600 via-blue-600 to-pink-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Experience Safe & Compassionate Care
              </h2>
              <p className="text-base sm:text-lg mb-8 opacity-95">
                Our dedicated team is committed to your safety and comfort throughout your treatment
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+918688277183" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>

                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
                onClick={() => setIsModalOpen(true)} >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Visit</span>
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Indur, Nizamabad</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">24/7 Care Available</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">Safety First</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="appointment" />
    </>
  );
}