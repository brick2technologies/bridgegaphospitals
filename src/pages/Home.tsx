import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/CareStatsSection";
import ServicesSection from "../components/ServicesSection";
import CancerTreatmentSection from "../components/TreatmentSection";
import TestimonialSection from "../components/TestimonialSection";

const Home: React.FC = () => {
    return (
        <div className="overflow-hidden bg-linear-to-b from-[#E92393] via-[#7B2CBF] to-[#0A1D56] text-white">
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <ServicesSection />
            <CancerTreatmentSection />
            <TestimonialSection />
        </div>
    );
};

export default Home;
