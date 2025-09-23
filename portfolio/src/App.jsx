import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import "./index.css";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <About/>
      <Projects/>
      <Contact/>
    </BrowserRouter>
  );
};

export default App;
