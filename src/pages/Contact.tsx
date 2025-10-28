'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ---------- Unified change handler ---------- */
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear error when user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  /* ---------- Simple client-side validation ---------- */
  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Name is required';
    if (!formData.email.trim()) err.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      err.email = 'Enter a valid email';
    if (!formData.subject) err.subject = 'Select a subject';
    if (!formData.message.trim()) err.message = 'Message is required';
    return err;
  };

  /* ---------- Submit ---------- */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    setErrors({});

    // ---- fake API call / success flow ----
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  /* ---------- Contact cards data ---------- */
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Emergency: +1 (555) 911-0000', 'General: +1 (555) 123-4567'],
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-700',
      borderColor: 'border-orange-300',
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@bridgegaphospital.com',
        'appointments@bridgegaphospital.com',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-700',
      borderColor: 'border-cyan-300',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Krishnapuri Colony', 'Madhav Nagar, Nizamabad', 'Telangana-503001'],
      gradient: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-700',
      borderColor: 'border-purple-300',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [
        'Emergency: 24/7',
        'Outpatient: Mon-Fri 8AM-6PM',
        'Saturday: 9AM-2PM',
      ],
      gradient: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-700',
      borderColor: 'border-green-300',
    },
  ];

  return (
    <section className="relative min-h-screen py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
      {/* background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header – unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E92393] to-purple-600 text-white shadow-lg mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Contact Us
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-600 to-[#E92393]">
              We're Here to Help
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
          >
            Have questions about our services? Need to schedule an appointment?
            Our dedicated team is ready to assist you.
          </motion.p>
        </motion.div>

        {/* Contact Info Grid – unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div
                  className={`relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${info.borderColor} overflow-hidden`}
                >
                  {/* gradient overlay – does NOT block clicks */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon
                      className={`w-8 h-8 ${info.iconColor}`}
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E92393] transition-colors duration-300">
                    {info.title}
                  </h3>

                  <div className="space-y-1">
                    {info.details.map((d, i) => (
                      <p key={i} className="text-sm text-gray-700 font-medium">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---------- FORM + MAP ---------- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ==== FORM ==== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-pink-300 overflow-hidden">
              {/* gradient overlay – does NOT block clicks */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-100 border-2 border-green-300 text-green-700 rounded-2xl flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold">
                    Thank you! Your message has been sent successfully.
                  </span>
                </motion.div>
              )}

              {/* ----- REAL FORM ----- */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] transition-all ${errors.name
                        ? 'border-red-400'
                        : 'border-gray-200 focus:border-transparent'
                      }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] transition-all ${errors.email
                        ? 'border-red-400'
                        : 'border-gray-200 focus:border-transparent'
                      }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Phone (optional) */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] transition-all ${errors.subject
                        ? 'border-red-400'
                        : 'border-gray-200 focus:border-transparent'
                      }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Schedule Appointment</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] transition-all ${errors.message
                        ? 'border-red-400'
                        : 'border-gray-200 focus:border-transparent'
                      }`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#E92393] to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={3} />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ==== MAP ==== */}
          {/* ────────────────────────────────────────────────────────────── */}
          {/*  MAP CARD + RESPONSIVE GOOGLE MAPS EMBED                      */}
          {/* ────────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Card container */}
            <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-indigo-300 overflow-hidden">
              {/* Subtle hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              {/* Map placeholder + animation (keeps the same height as the iframe) */}
              <div className="relative w-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
                {/* 1. Floating pin animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-center text-purple-700"
                  >
                    <MapPin className="w-16 h-16 mx-auto mb-2" strokeWidth={2} />
                    <p className="font-bold text-lg">Indur Cancer Hospital</p>
                    <p className="text-sm">123 Healthcare Avenue</p>
                  </motion.div>
                </div>

                {/* 2. Responsive Google-Maps iframe */}
                <div className="relative w-full pt-[100%]"> {/* 1:1 ratio → change to pt-[56.25%] for 16:9 */}
                  <iframe
                    title="Indur Cancer Hospital – Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.0147269168187!2d78.13281063!3d18.66333512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdc521ce4428e5%3A0x1b0d06451caf1e55!2sIndur%20Cancer%20Hospital!5e0!3m2!1sen!2sin!4v1761645962539!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}