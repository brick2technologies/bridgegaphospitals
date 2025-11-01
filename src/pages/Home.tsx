import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

// Lazy load heavy sections
const HeroSection = lazy(() => import("../components/HeroSection"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const StatsSection = lazy(() => import("../components/CareStatsSection"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const CancerTreatmentSection = lazy(() => import("../components/TreatmentSection"));
const TestimonialSection = lazy(() => import("../components/TestimonialSection"));

// Fallback loader (can be a skeleton or spinner)
const SectionFallback = () => (
  <div className="py-16 px-4 text-center">
    <div className="animate-pulse">
      <div className="h-8 bg-white/20 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-4 bg-white/10 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <>
      {/* SEO & Metadata */}
      <Helmet>
        <title>Leading Cancer Care Center | Advanced Treatment & Support</title>
        <meta
          name="description"
          content="We provide world-class cancer treatment with compassion. From early detection to advanced therapies, we're with you every step of the way."
        />
        <meta
          name="keywords"
          content="cancer treatment, oncology, chemotherapy, radiation therapy, cancer care, immunotherapy"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Leading Cancer Care Center" />
        <meta
          property="og:description"
          content="Expert cancer care with cutting-edge treatments and personalized support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bridgegaphospitals.com/" />
        <meta property="og:image" content="https://bridgegaphospitals.com/og-image.jpg" />
        <link rel="canonical" href="https://bridgegaphospitals.com/" />

        {/* Performance: Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <div
        className="overflow-hidden bg-gradient-to-b from-[#E92393] via-[#7B2CBF] to-[#0A1D56] text-white min-h-screen"
        role="main"
        aria-label="Homepage content"
      >
        {/* Hero is above the fold → eager load */}
        <Suspense fallback={<SectionFallback />}>
          <HeroSection />
        </Suspense>

        {/* Below the fold → lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <StatsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CancerTreatmentSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TestimonialSection />
        </Suspense>
      </div>
    </>
  );
};

export default Home;