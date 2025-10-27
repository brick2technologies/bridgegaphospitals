import { motion } from "framer-motion";

export default function CareStatsSection() {
  const stats = [
    { number: "150+", label: "Surgical Oncology Patients Served" },
    { number: "75+", label: "Medical Oncology Patients Served" },
    { number: "225+", label: "Radiation Oncology Patients Served" },
  ];

  return (
    <section className="relative bg-linear-to-br from-white via-[#fff5fa] to-[#ffe7f2] py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative Background Circles */}
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
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#E92393]/10 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug"
        >
          Nurturing Cancer Patients at Every Stage
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-700"
        >
          Providing the right treatment for{" "}
          <span className="text-[#E92393] font-semibold">optimal care</span> and
          lasting hope.
        </motion.p>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg py-10 px-6 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3, type: "spring", stiffness: 120 }}
                className="text-5xl md:text-6xl font-extrabold text-[#E92393]"
              >
                {stat.number}
              </motion.h3>
              <p className="mt-3 text-gray-700 text-lg font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
