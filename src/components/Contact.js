import React from "react";
import "../App.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="container py-5" id="contact">
      <h2 className="text-center fw-bold display-5 mb-5 text-warning" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}>
        Get in Touch
      </h2>

      <div
        className="glass-card text-dark mx-auto rounded-4 shadow-lg p-4"
        style={{
          maxWidth: "700px",
          backdropFilter: "blur(12px)",
          background: "rgba(0, 0, 0, 0.4)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          color: "#f0f0f0",
        }}
      >
        {[{
          icon: <FaEnvelope className="me-3 text-warning fs-4" />, 
          label: "Email",
          link: "mailto:ajaykodag47@gmail.com",
          text: "ajaykodag47@gmail.com"
        }, {
          icon: <FaLinkedin className="me-3 text-warning fs-4" />, 
          label: "LinkedIn",
          link: "https://linkedin.com/in/ajay-kodag",
          text: "linkedin.com/in/ajay-kodag"
        }, {
          icon: <FaGithub className="me-3 text-warning fs-4" />, 
          label: "GitHub",
          link: "https://github.com/ajaykodag",
          text: "github.com/ajaykodag"
        }].map((item, idx) => (
          <div key={idx} className="mb-4 d-flex align-items-center">
            {item.icon}
            <div>
              <strong style={{ color: "#ffc107" }}>{item.label}:</strong>
              <br />
              <a href={item.link} target="_blank" rel="noreferrer" className="text-decoration-none text-light">
                {item.text}
              </a>
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <a
            href="/Ajay_Kodag_3.3_Years.pdf"
            download
            className="btn btn-warning fw-bold px-4 py-2 rounded-pill shadow-lg"
            style={{ transition: "transform 0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
