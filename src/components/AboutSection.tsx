import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-linear-to-br from-[#fff5fa] via-white to-[#e8f1ff] py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative background blur circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#E92393]/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#007BFF]/10 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="hospital-building.png"
            alt="Indur Cancer Hospital"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-[#E92393]/20 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E92393] mb-4">
            About the Hospital
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#005AA9] mb-6 leading-snug">
            Indur Cancer Hospital – Comprehensive and Affordable Cancer Care
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Indur Cancer Hospital is a dedicated center for complete cancer care,
            committed to providing advanced treatment with compassion, expertise,
            and affordability. Our goal is to offer world-class oncology services to
            every patient, ensuring access to modern technology and specialized
            medical professionals at a reasonable cost.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We provide comprehensive care across Radiation Oncology, Medical
            Oncology, and Surgical Oncology with state-of-the-art equipment,
            personalized chemotherapy, and minimally invasive surgical treatments.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Indur Cancer Hospital accepts government health schemes like{" "}
            <span className="font-semibold text-[#E92393]">
              Aarogyasri, PMJAY, and EHS
            </span>{" "}
            to make advanced cancer care affordable and accessible to everyone.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#E92393] text-white font-semibold rounded-full shadow-md hover:bg-[#c91a7a] transition-all"
          >
            Know More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
