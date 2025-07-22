// src/components/Skills.js
import React from "react";
import "../App.css";
import { FaReact, FaJava, FaDatabase } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="me-2 text-info" size={28} />, 
      skills: ["ReactJS", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: <FaJava className="me-2 text-danger" size={28} />, 
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices"],
    },
    {
      title: "Database / Tools",
      icon: <FaDatabase className="me-2 text-success" size={28} />, 
      skills: ["MySQL", "PostgreSQL", "Git", "VSCode", "Postman"],
    },
  ];

  return (
    <section className="container py-5" id="skills">
      <h2 className="text-center fw-bold display-5 mb-3 text-warning" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}>
        <Typewriter
          words={["Skills", "What I Can Do", "Technologies I Use"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <p className="text-center text-light mb-4" style={{ fontSize: "1.1rem" }}>Here are the technologies and tools I work with daily to build efficient and scalable applications.</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {skillCategories.map((category, index) => (
          <div className="col" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div
              className="glass-card rounded-4 shadow-lg p-4 h-100 d-flex flex-column justify-content-between"
              style={{
                backdropFilter: "blur(12px)",
                background: "rgba(0, 0, 0, 0.4)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                color: "#f0f0f0",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }}
            >
              <div>
                <h5 className="fw-bold mb-3 d-flex align-items-center justify-content-center justify-content-md-start text-warning animate-float-right" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}>
                  {category.icon} {category.title}
                </h5>
                <ul className="list-unstyled">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="mb-2 text-light animate-float-right" style={{ fontSize: "1rem", letterSpacing: "0.5px" }}>
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
