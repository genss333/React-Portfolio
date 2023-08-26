import React from "react";
import About from "./about/index";
import "./body.css";
import Contact from "./contact/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Work from "./work/index";
import Certificate from "./certificate/index";

function Body() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="certificate">
      <Certificate />
    </section>
    <section id="work">
      <Work />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;