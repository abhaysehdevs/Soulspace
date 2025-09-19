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
import Offer from "./components/Offer";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Offer width={400} height={250} quantity={5}/>
      <Footer />
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/reel" element={<Reel />} />
      </Routes>
    </>
  );
}

export default App
