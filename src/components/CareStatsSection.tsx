import { motion } from "framer-motion";

export default function CareStatsSection() {
  const stats = [
    { number: "20,000+", label: "Patients Treated for Cancer" },
    { number: "3,000+", label: "Cancer Surgeries Completed" },
    { number: "9,000+", label: "Chemotherapy Sessions Administered" },
    { number: "8,000+", label: "Radiotherapy Procedures Conducted" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-pink-50 to-pink-100 py-16 md:py-20 overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-64 h-64 md:w-80 md:h-80 bg-pink-300 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute -bottom-20 -right-20 w-64 h-64 md:w-80 md:h-80 bg-pink-300 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
        >
          Nurturing Cancer Patients at Every Stage
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Providing the right treatment for{" "}
          <span className="text-pink-600 font-semibold">optimal care</span> and
          lasting hope.
        </motion.p>

        {/* Stats Grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100"
            >
              <motion.h3
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 150 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 group-hover:text-pink-700 transition-colors"
              >
                {stat.number}
              </motion.h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}