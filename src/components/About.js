// src/components/About.js
import React from "react";
import "../App.css";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section className="container py-5" id="about">
      <h2 className="text-center fw-bold display-5 mb-4 text-warning" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}>
        <Typewriter
          words={["About Me", "Who I Am", "My Journey"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <div className="glass-card rounded-4 shadow-lg p-4 mx-auto" style={{ maxWidth: "850px", backdropFilter: "blur(12px)", background: "rgba(0,0,0,0.4)", border: "2px solid rgba(255,255,255,0.2)", color: "#f0f0f0" }}>
        <p className="fs-5 text-center" style={{ lineHeight: "1.8" }}>
          👋 I'm <strong className="text-warning">Ajay Kodag</strong>, a <span className="text-info fw-semibold">Full Stack Developer</span> with <strong>3+ years</strong> of experience building modern, high-performance web applications using <span className="text-success">Java</span>, <span className="text-primary">Spring Boot</span>, and <span className="text-warning">ReactJS</span>. I specialize in crafting clean, scalable code and have hands-on expertise in developing <strong>REST APIs</strong>, <strong>Microservices</strong>, and managing <strong>SQL databases</strong>. Passionate about continuous learning and solving real-world problems, I aim to deliver value through innovative digital solutions.
        </p>
      </div>
    </section>
  );
}
