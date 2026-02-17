import { useContext } from "react";
import style from "./ProjectsSection.module.css";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

import { LanguageContext } from "../../../../contexts/LanguageContext";

import imgUlaFPGA from "../../../../assets/images/projects/ula-fpga-vhdl.png";
import imgRotaexpress from "../../../../assets/images/projects/rotaexpress-logo.png";

const projects = [
    {
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
    },
    {
        "pt-br": {
            imageSrc:imgRotaexpress,
            imageAlt:"Rotaexpress Logo",
            title: "Rotaexpress",
            description: "Este projeto teve o objetivo de desenvolver um sistema para auxilio nas entregas, disponibilizando uma seção de criação de empresas, membros e entregas. Possui integração com o google Maps para geração e visualização das rotas."
        },
        "en-us": {
            imageSrc:imgRotaexpress,
            imageAlt:"Rotaexpress Logo",
            title: "Rotaexpress",
            description: "This project had the objective of developing a system to help with deliveries, providing a section for creating companies, members and deliveries. It has integration with google Maps to generate route and visualization." 
        }
    }
]


function ProjectsSection(){
    const { language } = useContext(LanguageContext);

    return (
        <section id="project-section">
            {projects.map(project => (
                 <ProjectCard projectData={project[language]}/>    
            ))}; 
        </section>
    );
}

export default ProjectsSection;