import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { StarBackground } from "./components/StarBackground";
import "./index.css";

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Global star background */}
      <StarBackground />


      {/* Sections */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;
