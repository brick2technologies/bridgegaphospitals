'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Calendar,
  BookOpen,
  Share2,
  Clock,
  ChevronRight,
} from 'lucide-react';

// Blog Post Type
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

// Sample Blog Posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Your First Steps After a Cancer Diagnosis",
    excerpt: "Feeling lost? Here's a simple guide to your first doctor visit, questions to ask, and how to stay calm.",
    author: "Dr. Sarah Johnson",
    date: "Oct 15, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    category: "Diagnosis",
    slug: "first-steps-diagnosis",
  },
  {
    id: 2,
    title: "How to Cope with Anxiety During Treatment",
    excerpt: "You're not alone. Survivors share breathing techniques, journaling tips, and when to seek help.",
    author: "Maria Gonzalez, Survivor",
    date: "Oct 20, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop",
    category: "Mental Health",
    slug: "coping-with-anxiety",
  },
  {
    id: 3,
    title: "Best Foods to Eat During Chemotherapy",
    excerpt: "Boost your strength with these easy, nutrient-packed meals approved by our oncology dietitians.",
    author: "Dr. Michael Chen",
    date: "Oct 25, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
    category: "Nutrition",
    slug: "chemo-nutrition",
  },
  {
    id: 4,
    title: "Why Support Groups Change Everything",
    excerpt: "Hear from patients who found hope, laughter, and lifelong friends in our weekly meetups.",
    author: "Community Team",
    date: "Oct 28, 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop",
    category: "Support",
    slug: "support-groups",
  },
  {
    id: 5,
    title: "Gentle Exercise for Cancer Recovery",
    excerpt: "Start slow with chair yoga, walking, or stretching — all safe for survivors and approved by doctors.",
    author: "Dr. Priya Sharma",
    date: "Nov 1, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=500&fit=crop",
    category: "Wellness",
    slug: "exercise-recovery",
  },
  {
    id: 6,
    title: "Talking to Kids About Cancer",
    excerpt: "Age-appropriate ways to explain your diagnosis and help your children feel safe and included.",
    author: "Lisa Thompson, Counselor",
    date: "Nov 5, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
    category: "Family",
    slug: "talking-to-kids",
  },
];

const categories = ["All", "Diagnosis", "Mental Health", "Nutrition", "Support", "Wellness", "Family"];

// Skeleton for blog card
const BlogSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-300" />
    <div className="p-6 space-y-3">
      <div className="h-6 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-full" />
      <div className="h-4 bg-gray-300 rounded w-5/6" />
      <div className="flex justify-between items-center pt-4">
        <div className="h-3 bg-gray-300 rounded w-1/3" />
        <div className="h-8 w-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  </div>
);

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* SEO + Structured Data */}
      <Helmet>
        <title>Hope & Healing Blog | Bridge Gap Hospital</title>
        <meta
          name="description"
          content="Real stories, expert advice, and support for cancer patients and families. Read about diagnosis, treatment, nutrition, mental health, and recovery."
        />
        <meta name="keywords" content="cancer blog, patient stories, oncology advice, survivor tips, cancer support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bridgegaphospitals.com/blogs" />

        <meta property="og:title" content="Hope & Healing Blog - Bridge Gap Hospital" />
        <meta property="og:description" content="Inspiring stories and expert advice for your cancer journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bridgegaphospitals.com/blogs" />
        <meta property="og:image" content="https://bridgegaphospitals.com/og-blog.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Hope & Healing Blog",
            "url": "https://bridgegaphospitals.com/blogs",
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.date,
              "image": post.image
            }))
          })}
        </script>
      </Helmet>

      <div
        className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 px-6 lg:px-8 mt-12"
        role="main"
        aria-labelledby="blog-title"
      >
        {/* Background Blobs */}
        <div className="fixed top-20 -right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl -z-10" />
        <div className="fixed bottom-20 -left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
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
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E92393] to-[#005AA9] text-white shadow-lg mb-6"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-bold">Hope & Healing Blog</span>
            </motion.div>

            <h1
              id="blog-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Stories That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E92393] via-[#005AA9] to-[#E92393]">
                Inspire Courage
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Real advice from doctors, survivors, and families — because you're never alone.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog posts"
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#E92393] focus:outline-none bg-white shadow-sm transition-all focus:ring-2 focus:ring-[#E92393]/20"
              />
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E92393] ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-[#E92393] to-[#005AA9] text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-[#E92393]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, i) => (
                <BlogSkeleton key={i} />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No posts found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-[#E92393]"
                    tabIndex={0}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={`Featured image for "${post.title}"`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width={800}
                        height={500}
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#E92393]">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E92393] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            {post.readTime}
                          </span>
                        </div>
                        <button
                          onClick={() => navigator.clipboard.writeText(window.location.href + post.slug)}
                          aria-label={`Share "${post.title}"`}
                          className="text-[#E92393] hover:text-[#005AA9] transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                        <a
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-1 text-sm font-semibold text-[#E92393] hover:text-[#005AA9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E92393] rounded"
                          aria-label={`Read full article: ${post.title}`}
                        >
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-[#E92393] to-[#005AA9] rounded-3xl p-10 text-white shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Story to Share?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Your journey can inspire others. Submit your story and help build hope.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#E92393] font-bold rounded-full shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                aria-label="Submit your cancer story"
              >
                Share Your Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}