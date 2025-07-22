// src/App.js
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-vh-100 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? "navbar-dark bg-dark bg-opacity-75" : "navbar-light bg-white bg-opacity-75"} shadow-sm`} style={{ backdropFilter: "blur(10px)" }}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#hero">Ajay Kodag</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["about", "projects", "skills", "contact"].map((section) => (
                <li className="nav-item" key={section}>
                  <button className="nav-link btn btn-link text-capitalize fw-semibold" onClick={() => handleScroll(section)}>{section}</button>
                </li>
              ))}
            </ul>
            <button className="btn btn-outline-warning rounded-pill px-3 fw-semibold" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: "80px" }}>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className={`text-center py-4 mt-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`} style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
        <p className="mb-1 fw-semibold">© 2025 <strong>Ajay Kodag</strong> — Built with <span role="img" aria-label="heart">❤️</span> using <strong>React</strong></p>
        <small className="text-muted">Crafted with precision and passion for seamless user experience.</small>
      </footer>
    </div>
  );
}

export default App;
