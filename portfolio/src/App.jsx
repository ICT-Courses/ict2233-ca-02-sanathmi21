import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { StarBackground } from "./components/StarBackground";
import "./index.css";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        {/* Global background */}
        <StarBackground />

        {/* All content */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
