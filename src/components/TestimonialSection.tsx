import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Clock, Award, Shield } from "lucide-react";
import { useState } from "react";

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: "సైలోజా రెడ్డి",
    role: "Breast Cancer Survivor",
    image: "SR",
    rating: 5,
    text: "Bridge Gap Hospitals లో నాకు అందించిన care & support నిజంగా life-changing. Dr. Kiran గారి treatment వల్ల నేను ఇప్పుడు 3 years గా cancer-free గా హ్యాపీగా జీవిస్తున్నా. I'm truly grateful!",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "రాములు గౌడ్",
    role: "Lung Cancer Survivor",
    image: "RG",
    rating: 5,
    text: "24/7 support మరియు personalized treatment plan నా recovery లో చాలా important role పోషించాయి. Doctors showed real compassion and gave me full confidence. One of the best hospitals!",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "వనజమ్మ పోలెపల్లి",
    role: "Ovarian Cancer Survivor",
    image: "VP",
    rating: 5,
    text: "Diagnosis నుండి recovery వరకు Bridge Gap టీం నా side లో ఉండటం నాకు పెద్ద support. Early detection మరియు minimally invasive surgery వల్ల నా జీవితం save అయింది. Their emotional support was amazing!",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    name: "మల్లేశం యాదవ్",
    role: "Prostate Cancer Survivor",
    image: "MY",
    rating: 5,
    text: "Their radiation therapy was totally pain-free and very effective. Staff అంతా నాకు familyలాగా behave అయ్యారు. Financial counseling కూడా చాలా help అయ్యింది. Truly exceptional service!",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "లక్ష్మి శోభన్",
    role: "Thyroid Cancer Survivor",
    image: "LS",
    rating: 5,
    text: "Bridge Gap Hospitals లో multidisciplinary approach superb. Every specialist worked together for my treatment. Counseling, nutrition guidance, supportive care — అన్నీ top-notch. I feel completely healthy now!",
    gradient: "from-orange-500 to-amber-500"
  }
];


  const stats = [
    { icon: Heart, value: "5000+", label: "Lives Saved" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Care Available" },
    { icon: Shield, value: "17+", label: "Years Experience" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="relative py-20 lg:py-28 bg-linear-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-[#E92393] to-purple-600 text-white shadow-lg mb-6"
          >
            <Heart className="w-5 h-5" />
            <span className="text-sm font-bold">Patient Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Stories of <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E92393] via-purple-600 to-pink-600">Hope & Healing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
          >
            Real experiences from patients who found strength, care, and recovery at Bridge Gap Hospitals
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center"
              >
                <Icon className="w-8 h-8 text-[#E92393] mx-auto mb-3" strokeWidth={2.5} />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border-2 border-gray-100 overflow-hidden"
          >
            {/* Background Gradient */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${current.gradient} opacity-10 rounded-full blur-3xl`} />
            
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`absolute top-8 left-8 w-16 h-16 bg-linear-to-br ${current.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div>

            <div className="relative pt-12 md:pt-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center md:justify-start">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                "{current.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-linear-to-br ${current.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xl font-bold">{current.image}</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{current.name}</div>
                  <div className="text-sm text-gray-600 font-medium">{current.role}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white text-[#E92393] shadow-lg border-2 border-gray-200 flex items-center justify-center hover:border-[#E92393] hover:bg-[#E92393] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[#E92393] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white text-[#E92393] shadow-lg border-2 border-gray-200 flex items-center justify-center hover:border-[#E92393] hover:bg-[#E92393] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}