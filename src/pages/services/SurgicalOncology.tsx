import { easeInOut, motion } from "framer-motion";
import {

    HeartHandshake,
    Stethoscope,

    UsersRound,
    ChevronRight,
    Sparkles,

    Microscope,
    MonitorCheck,
    CalendarCheck,

} from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

function SurgicalOncologyService() {
    // ──────────────────────────────────────────────────────────────────────
    // Service cards (same as before)
    // ──────────────────────────────────────────────────────────────────────
    const services = [
        {
            icon: Stethoscope,
            title: "Precision Tumor Resection",
            description:
                "Advanced surgical techniques for complete tumor removal with clear margins while preserving vital structures.",
            gradient: "from-blue-600 via-blue-500 to-cyan-600",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-700",
            borderColor: "border-blue-200",
        },
        {
            icon: Microscope,
            title: "Minimally Invasive Approaches",
            description:
                "Laparoscopic, robotic, and endoscopic methods to reduce recovery time and post-operative discomfort.",
            gradient: "from-teal-600 via-teal-500 to-emerald-600",
            bgColor: "bg-teal-100",
            iconColor: "text-teal-700",
            borderColor: "border-teal-200",
        },
        {
            icon: MonitorCheck,
            title: "Intra-operative Imaging",
            description:
                "Real-time navigation and imaging for pinpoint accuracy during complex oncologic resections.",
            gradient: "from-indigo-600 via-indigo-500 to-purple-600",
            bgColor: "bg-indigo-100",
            iconColor: "text-indigo-700",
            borderColor: "border-indigo-200",
        },
        {
            icon: UsersRound,
            title: "Multidisciplinary Planning",
            description:
                "Collaborative tumor board reviews involving surgeons, oncologists, radiologists, and pathologists.",
            gradient: "from-pink-600 via-pink-500 to-rose-600",
            bgColor: "bg-pink-100",
            iconColor: "text-pink-700",
            borderColor: "border-pink-200",
        },
        {
            icon: HeartHandshake,
            title: "Comprehensive Post-op Care",
            description:
                "24/7 monitoring, pain management, infection control, nutrition, and physiotherapy for swift recovery.",
            gradient: "from-orange-600 via-orange-500 to-amber-600",
            bgColor: "bg-orange-100",
            iconColor: "text-orange-700",
            borderColor: "border-orange-200",
        },
        {
            icon: CalendarCheck,
            title: "Long-term Follow-up",
            description:
                "Structured surveillance programs and counseling to ensure lasting health and early recurrence detection.",
            gradient: "from-green-600 via-green-500 to-emerald-600",
            bgColor: "bg-green-100",
            iconColor: "text-green-700",
            borderColor: "border-green-200",
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
    };

    return (
        <section
            id="surgical-oncology"
            aria-labelledby="surgical-oncology-heading"
            className="relative py-20 lg:py-28 bg-gradient-to-br from-white via-purple-50 to-pink-50 overflow-hidden"
        >
            {/* Decorative blur circles */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* ─────────────────────── HERO IMAGE + HEADER ─────────────────────── */}
                {/* ─────────────────────── BIG HERO IMAGE + HEADER ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: easeInOut }}
                    className="relative rounded-3xl overflow-hidden mb-20 lg:mb-28"
                >
                    <img
                        src="https://res.cloudinary.com/di1bfo7ma/image/upload/v1761906723/SurgicalOncology_iro7j4.jpg"
                        alt="Modern surgical oncology operating theater with robotic arms and advanced monitoring"
                        loading="lazy"
                        className="w-full h-80 md:h-96 lg:h-[600px] object-cover"
                    />

                    {/* Elegant light-to-dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 text-white">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#E92393] to-purple-600 shadow-xl mb-6 w-fit"
                        >
                            <Sparkles className="w-5 h-5" aria-hidden="true" />
                            <span className="text-sm font-bold tracking-wider">Surgical Oncology</span>
                        </motion.div>

                        <motion.h1
                            id="surgical-oncology-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 leading-tight"
                        >
                            Indur Cancer Hospital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-500 to-[#E92393] drop-shadow-lg">
                                Surgical Oncology Excellence
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            className="text-lg md:text-xl lg:text-2xl max-w-5xl font-medium leading-relaxed text-white/90 drop-shadow-md"
                        >
                            Major surgical oncology procedures encompass a wide range of operations
                            aimed at the diagnosis, staging, and definitive treatment of various
                            cancers — from head-and-neck to complex gastrointestinal and thoracic surgeries.
                        </motion.p>
                    </div>
                </motion.div>

                {/* ─────────────────────── SERVICE GRID ─────────────────────── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.article
                                key={service.title}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative"
                                role="region"
                                aria-label={service.title}
                            >
                                <div
                                    className={`relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} overflow-hidden`}
                                >
                                    <div
                                        aria-hidden="true"
                                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className={`relative w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                                    >
                                        <Icon
                                            className={`w-10 h-10 ${service.iconColor}`}
                                            strokeWidth={2.5}
                                            aria-hidden="true"
                                        />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#E92393] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-5 font-medium">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-bold text-[#E92393] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Learn More</span>
                                        <ChevronRight
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                            strokeWidth={3}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`}
                                    />
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* ─────────────────────── PROCEDURE GALLERY ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
                        Key Surgical Procedures
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                src: "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761907198/head-neck_cvug9q.jpg",
                                alt: "Head and neck cancer surgery with flap reconstruction",
                                title: "Head & Neck Oncology",
                            },
                            {
                                src: "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761907369/mammologist_3_woxqcn.jpg",
                                alt: "Breast conserving surgery and reconstruction",
                                title: "Breast Cancer Surgery",
                            },
                            {
                                src: "https://res.cloudinary.com/di1bfo7ma/image/upload/v1761907527/2304.i105.026.S.m005.c13.isometric_gastroenterologist_isolated_qlizte.jpg",
                                alt: "Whipple procedure for pancreatic cancer",
                                title: "Gastrointestinal Oncology",
                            },
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                    <p className="text-white font-bold text-lg">{img.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ─────────────────────── HOSPITAL PROMISE + PHOTO ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 lg:p-14 shadow-2xl max-w-5xl mx-auto mb-16 lg:mb-20"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                                Our Commitment at{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] to-purple-600">
                                    Indur Cancer Hospital
                                </span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The surgical oncology department ensures precision, safety, and
                                high-quality post-operative care through a patient-centered and
                                technology-driven approach. Experienced surgical oncologists use
                                advanced imaging, minimally invasive techniques, and strict
                                aseptic protocols to achieve accurate tumor removal while
                                minimizing risks.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Each case is carefully planned through multidisciplinary
                                discussions involving surgeons, oncologists, radiologists, and
                                pathologists to ensure personalized treatment. Post-operative
                                care includes round-the-clock monitoring, effective pain and
                                infection control, nutritional guidance, and physiotherapy
                                support to promote recovery. Regular follow-ups and counseling
                                further ensure patients’ long-term well-being and continuity of
                                care.
                            </p>
                        </div>

                        <div className="flex-shrink-0 order-1 lg:order-2">
                            <motion.img
                                src="https://res.cloudinary.com/di1bfo7ma/image/upload/v1761907641/2358620_ah2kp8.jpg"
                                alt="Surgical oncology team in discussion with patient"
                                loading="lazy"
                                className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-3xl shadow-xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* ─────────────────────── CTA ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                >
                    <div className="relative inline-block">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -inset-2 bg-gradient-to-r from-[#E92393] to-purple-600 blur-2xl rounded-full"
                            aria-hidden="true"
                        />
                        <Link to="/contact" className="inline-block">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-10 py-5 bg-gradient-to-r from-[#E92393] via-purple-600 to-[#E92393] text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
                                aria-label="Book a surgical oncology consultation at Indur Cancer Hospital"
                            >
                                <span>Book Your Consultation</span>
                                <ChevronRight className="w-6 h-6" strokeWidth={3} aria-hidden="true" />
                            </motion.button>
                        </Link>
                    </div>

                    <p className="mt-5 text-gray-700 text-lg font-semibold">
                        Take the first step toward world-class surgical oncology care
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default memo(SurgicalOncologyService);