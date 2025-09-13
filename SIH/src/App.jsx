import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Reel from "./components/Reel"
import Hero from "./components/Hero"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
            </>
          }
        />

        <Route path="/Reel" element={<Reel />} />
      </Routes>
    </>
  )
}

export default App
