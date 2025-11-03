import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Hospital, Activity, X, ChevronDown, Heart, Building2 } from 'lucide-react';

interface GalleryImage {
  id: number;
  event: 'Hospital' | 'icu' | 'run';
  image: string;
}

export default function FocusedGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    // Hospital Images
    { id: 1, event: 'Hospital', image: '/Hopsital-01.jpg' }, // Fixed typo
    { id: 2, event: 'Hospital', image: '/Hospital-02.jpg' },
    { id: 3, event: 'Hospital', image: '/Hospital-03.jpg' },
    { id: 4, event: 'Hospital', image: '/Hospital-04.jpg' },
    { id: 5, event: 'Hospital', image: '/Hopsital-05.jpg' },
    { id: 6, event: "Hospital", image: '/Hospital-06.jpg' },

    // ICU Beds Launch
    { id: 7, event: 'icu',  image: 'Bed-launch-1.jpg' },
    { id: 8, event: 'icu',  image: 'bed-launch-2.jpg' },
    { id: 9, event: 'icu',  image: 'bed-launch-3.jpg' },
    { id: 10, event: 'icu', image: 'bed-launch-4.jpg' },
    { id: 11, event: 'icu', image: 'bed-launch-5.jpg' },
    { id: 12, event: 'icu', image: 'bed-launch-6.jpg' },
    { id: 13, event: 'icu', image: 'bed-launch-7.jpg' },
    { id: 14, event: 'icu', image: 'bed-launch-8.jpg' },
    { id: 15, event: 'icu', image: 'bed-launch-9.jpg' },
    { id: 16, event: 'icu', image: 'bed-launch-10.jpg' },
    { id: 17, event: 'icu', image: 'bed-launch-11.jpg' },
    { id: 18, event: 'icu', image: 'bed-launch-12.jpg' },

    // Cancer Run 2023
    { id: 19, event: 'run', image: 'cancer-run-01.jpg' },
    { id: 20, event: 'run', image: 'cancer-run-02.jpg' },
    { id: 21, event: 'run', image: 'cancer-run-03.jpg' },
    { id: 22, event: 'run', image: 'cancer-run-04.jpg' },
    { id: 23, event: 'run', image: 'cancer-run-05.jpg' },
    { id: 24, event: 'run', image: 'cancer-run-06.jpg' },
    
  ];

  const hospitalImages = images.filter(i => i.event === 'Hospital');
  const icuImages = images.filter(i => i.event === 'icu');
  const runImages = images.filter(i => i.event === 'run');

  return (
    <>
      <Helmet>
        <title>Gallery | Bridge Gap Hospital - ICU, Hospital & Cancer Run 2023</title>
        <meta
          name="description"
          content="Explore our hospital, ICU beds launch, and Cancer Run 2023 – moments of care, innovation, and community."
        />
        <link rel="canonical" href="https://bridgegaphospitals.com/gallery" />
      </Helmet>

      <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden top-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-blue-50 to-purple-100/20" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:px-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-blue-600 text-white font-bold text-xs mb-5 shadow-lg">
              <Heart className="w-4 h-4" />
              <span>Milestone Moments</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5">
              Our Journey
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-blue-600 to-pink-600">
                In Pictures
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Hospital, ICU Launch & Cancer Run 2023 – A visual story of care and impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center mb-10"
          >
            <ChevronDown className="w-7 h-7 text-pink-500 animate-bounce" />
          </motion.div>

          {/* Hospital Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 bg-emerald-100 rounded-lg">
                  <Building2 className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Hospital</h2>
                  <p className="text-sm md:text-base text-gray-600">State-of-the-Art Cancer Care Facility</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5">
              {hospitalImages.map((img, idx) => (
                <ImageCard key={img.id} image={img} index={idx} onClick={() => setSelectedImage(img)} />
              ))}
            </div>
          </section>

          {/* ICU Launch Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 bg-pink-100 rounded-lg">
                  <Hospital className="w-7 h-7 text-pink-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ICU Beds Launch</h2>
                  <p className="text-sm md:text-base text-gray-600">Advanced Critical Care Unit • 2023</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5">
              {icuImages.map((img, idx) => (
                <ImageCard key={img.id} image={img} index={idx + 4} onClick={() => setSelectedImage(img)} />
              ))}
            </div>
          </section>

          {/* Cancer Run 2023 Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 bg-blue-100 rounded-lg">
                  <Activity className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cancer Run 2023</h2>
                  <p className="text-sm md:text-base text-gray-600">5,000+ Runners • Unity in Motion</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5">
              {runImages.map((img, idx) => (
                <ImageCard key={img.id} image={img} index={idx + 8} onClick={() => setSelectedImage(img)} />
              ))}
            </div>
          </section>

          {/* CTA Footer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-14"
          >
            <div className="bg-gradient-to-r from-pink-600 to-blue-600 rounded-3xl p-8 shadow-2xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Be Part of the Next Chapter</h3>
              <p className="text-sm md:text-base mb-7 max-w-xl mx-auto">
                Join us in the fight against cancer. Every step, every donation, every moment counts.
              </p>
              <button className="px-7 py-3.5 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition shadow-md text-sm">
                Support Our Mission
              </button>
            </div>
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// Image Card
function ImageCard({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <img
        src={image.image}
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </motion.div>
  );
}

// Lightbox
function Lightbox({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 md:top-3 md:-right-14 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition"
          aria-label="Close"
        >
          <X className="w-7 h-7 text-white" />
        </button>

        <img
          src={image.image}
          alt=""
          className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}