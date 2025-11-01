'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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

// Skeleton for form fields
const InputSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
    <div className="h-12 bg-gray-200 rounded-xl"></div>
  </div>
);

const MapSkeleton = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden animate-pulse">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-32 mx-auto mb-1"></div>
        <div className="h-3 bg-gray-300 rounded w-24 mx-auto"></div>
      </div>
    </div>
  </div>
);

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    setErrors({});

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Emergency: +91 98765 43210', 'General: +91 12345 67890'],
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
    <>
      {/* SEO + Structured Data */}
      <Helmet>
        <title>Contact Bridge Gap Hospital | Cancer Care Center in Nizamabad</title>
        <meta
          name="description"
          content="Get in touch with Bridge Gap Hospital for appointments, inquiries, or emergency support. Located in Nizamabad, Telangana. Call +91 12345 67890."
        />
        <meta name="keywords" content="contact cancer hospital, oncology appointment, emergency oncology, Nizamabad hospital" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/contact" />

        <meta property="og:title" content="Contact Bridge Gap Hospital" />
        <meta property="og:description" content="We're here to help. Schedule an appointment or reach out for support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:image" content="https://yourdomain.com/og-contact.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Bridge Gap Hospital",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Krishnapuri Colony, Madhav Nagar",
              "addressLocality": "Nizamabad",
              "addressRegion": "TG",
              "postalCode": "503001",
              "addressCountry": "IN"
            },
            "telephone": "+91 12345 67890",
            "email": "info@bridgegaphospital.com",
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-14:00"
            ],
            "url": "https://yourdomain.com",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.6633,
              "longitude": 78.1328
            }
          })}
        </script>
      </Helmet>

      <section
        className="relative min-h-screen py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden"
        role="main"
        aria-labelledby="contact-title"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
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

            <h1
              id="contact-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Contact Us
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-purple-600 to-[#E92393]">
                We're Here to Help
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Have questions about our services? Need to schedule an appointment?
              Our dedicated team is ready to assist you.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {isLoading
              ? Array(4).fill(0).map((_, i) => (
                  <div key={i} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 animate-pulse">
                    <div className="w-16 h-16 bg-gray-300 rounded-2xl mb-4" />
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-3" />
                    <div className="h-4 bg-gray-300 rounded w-full" />
                    <div className="h-4 bg-gray-300 rounded w-3/4 mt-1" />
                  </div>
                ))
              : contactInfo.map((info, idx) => {
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
                            aria-hidden="true"
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

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-pink-300 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-100 border-2 border-green-300 text-green-700 rounded-2xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="font-semibold">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-sm">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    {isLoading ? (
                      <InputSkeleton />
                    ) : (
                      <>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] transition-all ${
                            errors.name
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-gray-200 focus:border-transparent'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
                        )}
                      </>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    {isLoading ? (
                      <InputSkeleton />
                    ) : (
                      <>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] transition-all ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-gray-200 focus:border-transparent'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
                        )}
                      </>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2 text-sm">
                      Phone Number
                    </label>
                    {isLoading ? (
                      <InputSkeleton />
                    ) : (
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-bold mb-2 text-sm">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    {isLoading ? (
                      <InputSkeleton />
                    ) : (
                      <>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] transition-all ${
                            errors.subject
                              ? 'border-red-400 focus:ring-red-400'
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
                          <p id="subject-error" className="mt-1 text-xs text-red-600">
                            {errors.subject}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2 text-sm">
                      Message <span className="text-red-500">*</span>
                    </label>
                    {isLoading ? (
                      <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                        <div className="h-32 bg-gray-200 rounded-xl"></div>
                      </div>
                    ) : (
                      <>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E92393] transition-all ${
                            errors.message
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-gray-200 focus:border-transparent'
                          }`}
                          placeholder="Tell us how we can help..."
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1 text-xs text-red-600">
                            {errors.message}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={submitted}
                    className="w-full bg-gradient-to-r from-[#E92393] to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-400"
                    aria-label="Send your message"
                  >
                    <Send className="w-5 h-5" />
                    <span>{submitted ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={3} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-indigo-300 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                <div className="relative w-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
                  {isLoading ? (
                    <div className="w-full pt-[100%]">
                      <MapSkeleton />
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="text-center text-purple-700 z-10"
                        >
                          <MapPin className="w-16 h-16 mx-auto mb-2" strokeWidth={2} />
                          <p className="font-bold text-lg">Bridge Gap Hospital</p>
                          <p className="text-sm">Nizamabad, Telangana</p>
                        </motion.div>
                      </div>

                      <div className="relative w-full pt-[100%]">
                        <iframe
                          title="Bridge Gap Hospital Location - Google Maps"
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.0147269168187!2d78.13281063!3d18.66333512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdc521ce4428e5%3A0x1b0d06451caf1e55!2sIndur%20Cancer%20Hospital!5e0!3m2!1sen!2sin!4v1761645962539!5m2!1sen!2sin"
                          className="absolute inset-0 w-full h-full border-0"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          aria-label="Hospital location on Google Maps"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}