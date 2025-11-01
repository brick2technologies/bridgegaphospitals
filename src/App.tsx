import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";

// Services Pages
import SurgicalOncology from "./pages/services/SurgicalOncology";
import MedicalOncology from "./pages/services/MedicalOncology";
import RadiationOncology from "./pages/services/RadioOncology";
import Diagnostics from "./pages/services/DiagnosticsLaboratory";
import SupportiveCarePage from "./pages/services/SupportRehabilation";
import PharmacyInPatientPage from "./pages/services/PharmacyPatient";

function App() {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services Pages */}
          <Route path="/services/surgical-oncology" element={<SurgicalOncology />} />
          <Route path="/services/medical-oncology" element={<MedicalOncology />} />
          <Route path="/services/radiation-therapy" element={<RadiationOncology />} />
          <Route path="/services/diagnostics" element={<Diagnostics />} />
          <Route path="/services/supportive-care" element={<SupportiveCarePage />} />
          <Route path="/services/pharmacy-in-patient" element={<PharmacyInPatientPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
