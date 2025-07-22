// src/components/Projects.js
import React from "react";
import "../App.css";
import { Typewriter } from "react-simple-typewriter";

export default function Projects() {
  const projectData = [
    {
      title: "Settlement & Confirmation App",
      company: "UBS",
      description: "Migrated a legacy Groovy application to Spring Boot and ReactJS, significantly improving performance and maintainability.",
      tech: ["Spring Boot", "ReactJS", "MySQL"],
    },
    {
      title: "KMPL Loan Management System",
      company: "Kotak Mahindra",
      description: "Developed a robust loan processing system for customers and administrators using Java and Spring Boot.",
      tech: ["Java", "Spring Boot", "REST API", "SQL"],
    },
    {
      title: "Real-time Market Feedback System",
      company: "Retail Chain Client",
      description: "Designed a feedback collection platform where field agents visit stores to gather real-time customer feedback, with an admin dashboard delivering insights for analysis.",
      tech: ["Java", "Spring Boot", "Angular 8", "MySQL"],
    },
  ];

  return (
    <section className="container py-5" id="projects">
      <h2 className="text-center fw-bold display-5 mb-4 text-warning" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}>
        <Typewriter
          words={["Projects", "My Work", "Things I've Built"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <div className="row g-4">
        {projectData.map((project, index) => {
          const isLast = index === projectData.length - 1;
          const isOdd = projectData.length % 2 !== 0;
          const colClass = isLast && isOdd ? "col-md-6 offset-md-3" : "col-md-6";

          return (
            <div className={colClass} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
                  <h5 className="text-warning fw-bold mb-2" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}>{project.title}</h5>
                  <h6 className="text-light mb-3">{project.company}</h6>
                  <p className="text-light mb-3" style={{ lineHeight: "1.6" }}>{project.description}</p>
                </div>
                <div className="mt-2 d-flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge bg-warning text-dark px-3 py-2 fw-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
