// src/components/Hero.js
import React from "react";
import "../App.css";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-white text-center"
      id="hero"
      style={{
        minHeight: "95vh",
        background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
        padding: "2rem 1rem",
      }}
    >
      <div
        className="container p-4 p-md-5 rounded-4 shadow-lg"
        style={{
          maxWidth: "950px",
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="row align-items-center text-center text-md-start">
          {/* Profile Image */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
            <img
              src="/ajay.jpg"
              alt="Ajay Kodag"
              className="rounded-circle border border-4 shadow-lg"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          {/* Text */}
          <div className="col-12 col-md-8 px-2 px-md-4">
            <h1 className="display-4 fw-bold text-warning mb-3" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}>
              Ajay Kodag
            </h1>

            <p
              className="lead fw-semibold mb-4"
              style={{ fontSize: "1.3rem", color: "#f0f0f0", textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}
            >
              <Typewriter
                words={["Full Stack Developer", "Java Developer", "React JS Enthusiast", "Spring Boot Expert"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </p>

            <div className="d-flex justify-content-center justify-content-md-start">
              <button
                className="btn btn-warning fw-bold px-4 py-2 rounded-pill shadow-lg hover-scale"
                style={{ transition: "transform 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
