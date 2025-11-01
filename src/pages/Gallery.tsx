import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Award,
  Calendar,
  Building2,
  Camera,
  Grid3x3,
  ZoomIn,
  X,
  type LucideIcon,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Types                                                                     */
/* -------------------------------------------------------------------------- */
interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  bgColor: string;
  borderColor: string;
  date: string;
}

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

/* -------------------------------------------------------------------------- */
/* Skeleton Component                                                        */
/* -------------------------------------------------------------------------- */
function GallerySkeleton() {
  return (
    <div className="group relative cursor-pointer animate-pulse">
      <div className="relative h-80 bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
        <div className="h-full bg-gray-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-full" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Component                                                                 */
/* -------------------------------------------------------------------------- */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const categories: Category[] = [
    { id: 'all', name: 'All Gallery', icon: Grid3x3 },
    { id: 'activities', name: 'Activities', icon: Calendar },
    { id: 'community', name: 'Community Services', icon: Users },
    { id: 'events', name: 'Events', icon: Award },
    { id: 'facilities', name: 'Facilities', icon: Building2 },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'activities',
      title: 'Health Awareness Camp',
      description: 'Free cancer screening and awareness program',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      gradient: 'from-[#E92393] to-pink-600',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      date: 'March 2024',
    },
    {
      id: 2,
      category: 'activities',
      title: 'Patient Support Session',
      description: 'Group therapy and wellness activities',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
      gradient: 'from-[#005AA9] to-blue-700',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      date: 'February 2024',
    },
    {
      id: 3,
      category: 'activities',
      title: 'Yoga & Meditation',
      description: 'Holistic healing sessions for patients',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      gradient: 'from-[#E92393] to-pink-500',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      date: 'January 2024',
    },
    {
      id: 4,
      category: 'activities',
      title: 'Art Therapy Workshop',
      description: 'Creative expression for healing',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
      gradient: 'from-[#005AA9] to-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      date: 'March 2024',
    },
    {
      id: 5,
      category: 'community',
      title: 'Free Medical Camp',
      description: 'Serving underprivileged communities',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=600&fit=crop',
      gradient: 'from-[#E92393] to-pink-600',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      date: 'April 2024',
    },
    {
      id: 6,
      category: 'community',
      title: 'Rural Outreach Program',
      description: 'Bringing healthcare to remote areas',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      gradient: 'from-[#005AA9] to-blue-700',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      date: 'March 2024',
    },
    {
      id: 7,
      category: 'community',
      title: 'Blood Donation Drive',
      description: 'Community coming together to save lives',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=600&fit=crop',
      gradient: 'from-[#E92393] to-pink-500',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      date: 'February 2024',
    },
    {
      id: 8,
      category: 'community',
      title: 'School Health Program',
      description: 'Educating young minds about health',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
      gradient: 'from-[#005AA9] to-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      date: 'April 2024',
    },
    {
      id: 9,
      category: 'events',
      title: 'World Cancer Day',
      description: 'Annual awareness celebration',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      gradient: 'from-[#E92393] to-pink-600',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      date: 'February 2024',
    },
    {
      id: 10,
      category: 'events',
      title: 'Survivor Stories Event',
      description: 'Celebrating courage and hope',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      gradient: 'from-[#005AA9] to-blue-700',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      date: 'March 2024',
    },
    {
      id: 11,
      category: 'events',
      title: 'Annual Fundraiser Gala',
      description: 'Supporting cancer research and treatment',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop',
      gradient: 'from-[#E92393] to-pink-500',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      date: 'January 2024',
    },
    {
      id: 12,
      category: 'events',
      title: 'Medical Conference 2024',
      description: 'Latest advances in oncology',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      gradient: 'from-[#005AA9] to-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      date: 'April 2024',
    },
    {
      id: 13,
      category: 'facilities',
      title: 'Modern Radiation Therapy Unit',
      description: 'State-of-the-art LINAC technology',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop',
      gradient: 'from-[#E92393] to-pink-600',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      date: 'Facility',
    },
    {
      id: 14,
      category: 'facilities',
      title: 'Advanced Diagnostic Center',
      description: 'CT Scan and imaging services',
      image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=600&fit=crop',
      gradient: 'from-[#005AA9] to-blue-700',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      date: 'Facility',
    },
    {
      id: 15,
      category: 'facilities',
      title: 'Chemotherapy Suite',
      description: 'Comfortable treatment environment',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
      gradient: 'from-[#E92393] to-pink-500',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
      date: 'Facility',
    },
    {
      id: 16,
      category: 'facilities',
      title: 'Patient Care Rooms',
      description: 'Modern and comfortable recovery spaces',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=600&fit=crop',
      gradient: 'from-[#005AA9] to-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      date: 'Facility',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* SEO + Structured Data */}
      <Helmet>
        <title>Gallery | Bridge Gap Hospital - Cancer Care Moments</title>
        <meta
          name="description"
          content="Explore our cancer care journey: health camps, community outreach, modern facilities, and patient support activities in Nizamabad."
        />
        <meta name="keywords" content="cancer hospital gallery, health camps, community service, oncology facilities, patient activities" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bridgegaphospitals.com/gallery" />

        <meta property="og:title" content="Gallery - Bridge Gap Hospital" />
        <meta property="og:description" content="Moments of care, compassion, and community in the fight against cancer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bridgegaphospitals.com/gallery" />
        <meta property="og:image" content="https://bridgegaphospitals.com/og-gallery.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Bridge Gap Hospital Gallery",
            "description": "Photo gallery of cancer care activities, facilities, and community outreach.",
            "image": galleryItems.map(item => ({
              "@type": "ImageObject",
              "url": item.image,
              "name": item.title,
              "description": item.description
            }))
          })}
        </script>
      </Helmet>

      <div
        className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden mt-6"
        role="main"
        aria-labelledby="gallery-title"
      >
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
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
              <Camera className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-bold">About Us</span>
            </motion.div>

            <h1
              id="gallery-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Moments of Care
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-[#005AA9] to-[#E92393]">
                & Compassion
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Explore our journey of healing, community service, and state-of-the-art facilities dedicated to fighting cancer together.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
            role="tablist"
            aria-label="Gallery categories"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  tabIndex={0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-400 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E92393] to-[#005AA9] text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#E92393]'
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span>{cat.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              role="tabpanel"
              id={`panel-${activeCategory}`}
              aria-labelledby={`tab-${activeCategory}`}
            >
              {isLoading
                ? Array(8).fill(0).map((_, i) => <GallerySkeleton key={i} />)
                : filteredItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      whileHover={{ y: -10 }}
                      onClick={() => setSelectedImage(item)}
                      onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(item)}
                      className="group relative cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E92393] rounded-2xl"
                      role="button"
                      tabIndex={0}
                      aria-label={`View image: ${item.title}`}
                    >
                      <div
                        className={`relative h-80 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${item.borderColor}`}
                      >
                        {/* Image */}
                        <div className="relative h-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={`${item.title} - ${item.description}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            width={800}
                            height={600}
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
                          />
                          <div
                            className={`absolute top-4 right-4 w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}
                          >
                            <ZoomIn className="w-5 h-5 text-[#E92393]" aria-hidden="true" />
                          </div>
                        </div>

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-xs font-bold text-white/80 mb-2">{item.date}</p>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
            </motion.div>
          </AnimatePresence>

          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                    aria-label="Close image modal"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>

                  <div className="relative">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                      loading="eager"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-sm font-bold text-white/80 mb-2">{selectedImage.date}</p>
                      <h2 id="modal-title" className="text-3xl font-bold text-white mb-3">
                        {selectedImage.title}
                      </h2>
                      <p className="text-lg text-white/90">{selectedImage.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-[#E92393] via-[#005AA9] to-[#E92393] rounded-3xl p-12 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/90 font-medium">Community Events</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                  <div className="text-white/90 font-medium">Lives Touched</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                  <div className="text-white/90 font-medium">Health Camps</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/90 font-medium">Care & Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}