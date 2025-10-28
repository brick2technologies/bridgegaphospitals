'use client';

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, Heart, Sparkles, MessageCircle, User, Mail, Clock } from "lucide-react";
import { useState } from "react";

type ModalType = "appointment" | "second-opinion" | null;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
}

export default function Modal({ isOpen, onClose, type }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", time: "", message: "",
  });
  const [showHearts, setShowHearts] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowHearts(true);
    setTimeout(() => {
      alert("Appointment booked with love!");
      setShowHearts(false);
      onClose();
    }, 800);
  };

  // WhatsApp redirect
  const whatsappNumber = "919876543210"; // ← CHANGE TO YOUR NUMBER
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like a second opinion on my medical reports. Can you help?"
  );
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsApp = () => {
    setShowHearts(true);
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      onClose();
    }, 600);
  };

  if (!isOpen || !type) return null;
  const isAppointment = type === "appointment";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }} // Prevents full height
        >
          {/* Floating Hearts */}
          <AnimatePresence>
            {showHearts && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 50, x: Math.random() * 100 - 50, opacity: 1, scale: 0 }}
                    animate={{
                      y: -200,
                      x: Math.random() * 150 - 75,
                      opacity: 0,
                      scale: [0.7, 1.1, 0.7],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="absolute pointer-events-none"
                  >
                    <Heart className="w-6 h-6 text-pink-500 fill-pink-400" />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Modal Card – Small & Centered */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200"
            style={{ maxHeight: "85vh" }} // Never exceeds screen
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center shadow-md hover:bg-pink-200 transition-all duration-300"
            >
              <X className="w-5 h-5 text-pink-600" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-[#E92393] via-[#005AA9] to-[#E92393] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  {isAppointment ? (
                    <Calendar className="w-6 h-6" />
                  ) : (
                    <MessageCircle className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    {isAppointment ? "Book Appointment" : "Get Help on WhatsApp"}
                  </h3>
                  <p className="text-xs opacity-90">
                    {isAppointment ? "Quick & easy booking" : "Chat with a doctor now"}
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 space-y-5 overflow-y-auto" style={{ maxHeight: "calc(85vh - 140px)" }}>
              {isAppointment ? (
                /* ========== APPOINTMENT FORM ========== */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-pink-700 mb-1">
                      <div className="p-1.5 bg-pink-100 rounded-lg"><User className="w-3.5 h-3.5" /></div>
                      Name
                    </label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-3 py-2 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-pink-50/50 text-sm"
                      placeholder="Emma"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-blue-700 mb-1">
                      <div className="p-1.5 bg-blue-100 rounded-lg"><Mail className="w-3.5 h-3.5" /></div>
                      Email
                    </label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full px-3 py-2 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:outline-none bg-blue-50/50 text-sm"
                      placeholder="emma@example.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-purple-700 mb-1">
                      <div className="p-1.5 bg-purple-100 rounded-lg"><Phone className="w-3.5 h-3.5" /></div>
                      Phone
                    </label>
                    <input
                      type="tel" name="phone" required
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-3 py-2 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none bg-purple-50/50 text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-green-700 mb-1">
                        <div className="p-1.5 bg-green-100 rounded-lg"><Calendar className="w-3.5 h-3.5" /></div>
                        Date
                      </label>
                      <input
                        type="date" name="date" required
                        value={formData.date} onChange={handleChange}
                        className="w-full px-3 py-2 rounded-xl border-2 border-green-200 focus:border-green-400 focus:outline-none bg-green-50/50 text-sm"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-orange-700 mb-1">
                        <div className="p-1.5 bg-orange-100 rounded-lg"><Clock className="w-3.5 h-3.5" /></div>
                        Time
                      </label>
                      <input
                        type="time" name="time" required
                        value={formData.time} onChange={handleChange}
                        className="w-full px-3 py-2 rounded-xl border-2 border-orange-200 focus:border-orange-400 focus:outline-none bg-orange-50/50 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 bg-gray-100 text-gray-600 font-semibold rounded-xl hover:bg-gray-200 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-gradient-to-r from-[#E92393] to-[#005AA9] text-white font-bold rounded-xl shadow-md hover:shadow-lg flex items-center gap-1.5 text-sm"
                    >
                      <motion.span animate={showHearts ? { scale: [1, 1.2, 1] } : {}}>
                        Book Now
                      </motion.span>
                      <Calendar className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                /* ========== SECOND OPINION → WHATSAPP ========== */
                <div className="text-center space-y-5 py-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white fill-white"
                    >
                      <title>WhatsApp</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </motion.div>


                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Need a Second Opinion?</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Chat directly with our oncology experts
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsApp}
                    className="mx-auto px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-xl shadow-lg hover:shadow-xl flex items-center gap-2 text-sm"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Start WhatsApp Chat</span>
                    <Sparkles className="w-4 h-4" />
                  </motion.button>

                  <p className="text-xs text-gray-500">Reply in under 24 hrs</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Modal };