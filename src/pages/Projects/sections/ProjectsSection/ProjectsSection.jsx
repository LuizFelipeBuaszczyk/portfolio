import { useContext } from "react";
import style from "./ProjectsSection.module.css";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

import { LanguageContext } from "../../../../contexts/LanguageContext";

import imgUlaFPGA from "../../../../assets/images/projects/ula-fpga-vhdl.png";

const ula_fpga = {
    "pt-br": {
        imageSrc:imgUlaFPGA,
        imageAlt:"FPGA ULA",
        title: "ULA com FPGA",
        description: "Este projeto teve o objetivo de desenvolver um ULA de 4 bits com VHDL e FPGA. A ULA possui operações de soma, subtração e comparação."
    },
    "en-us": {
        imageSrc:imgUlaFPGA,
        imageAlt:"FPGA ALU",
        title: "ALU with FPGA",
        description: "This project had the objective of developing a 4-bit ALU with VHDL and FPGA. The ALU has sum, subtract, and comparator operations." 
    }
}


function ProjectsSection(){
    const { language } = useContext(LanguageContext);

    return (
        <section id="project-section">
            <ProjectCard projectData={ula_fpga[language]}/>
        </section>
    );
}

export default ProjectsSection;