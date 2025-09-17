import { Routes, Route } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Nav from "./components/Nav"
import Reel from "./components/Reel"
import Hero from "./components/Hero"
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import About from "./components/About";

function HomePage() {
  return (
    <>
        <Nav />
        <Hero />
        <About/>
        <Footer />
        <Chatbot/>
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Normal single-page site */}
      <Route path="/" element={<HomePage />} />

      {/* Reel page (separate) */}
      <Route path="/reel" element={<Reel />} />
    </Routes>
  );
}

export default App
