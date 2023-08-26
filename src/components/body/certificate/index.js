import React from "react";
import Separator from "../../common/separator";
import { CertificateData } from "../../data/certificate";
import ProjectCard from "./project-card";
import "./projects.css";
function Certificate() {
  const data = CertificateData;
  return (
    <div className="certificate">
      <Separator />
      <label className="section-title">Certificate</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Certificate;