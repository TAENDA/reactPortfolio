import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
import { SiIbmwatson } from "react-icons/si";
import Particle from "./components/Particle";

 

export default function App() {
  const [lightMode, setLightMode] = useState(false); 

  lightMode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add("light");
    } else {
      setLightMode(false);
      document.body.classList.remove("light");
    }
  };

  return (
    <BrowserRouter>
   
      <div className="light-mode">
        <span className="icon">
          <SiIbmwatson />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <Routes>
        <Route path="/" index element={<Home lightMode={lightMode} />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resumes />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id/:title" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}


