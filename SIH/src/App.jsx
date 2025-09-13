import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Reel from "./components/Reel"
import Hero from "./components/Hero"
import Footer from "./components/Footer";


function HomePage() {
  return (
    <>
        <Nav />
        <Hero />
        <Footer />
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
