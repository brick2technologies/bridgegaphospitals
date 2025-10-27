import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      <Home />
      <Footer />

    </div>
  );
}

export default App;
