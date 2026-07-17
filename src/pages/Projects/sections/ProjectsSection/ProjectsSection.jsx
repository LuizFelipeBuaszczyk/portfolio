import { useContext } from "react";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

import { LanguageContext } from "../../../../contexts/LanguageContext";

import imgUlaFPGA from "../../../../assets/images/projects/ula-fpga-vhdl.png";
import imgRotaexpress from "../../../../assets/images/projects/rotaexpress-logo.png";

import styles from "./ProjectSection.module.css";

const projects = [
    {
        "pt-br": {
            imageSrc:imgUlaFPGA,
            imageAlt:"FPGA ULA",
            title: "ULA com FPGA",
            description: "Este projeto teve o objetivo de desenvolver um ULA de 4 bits com VHDL e FPGA. A ULA possui operações de soma, subtração e comparação.",
            technologies: ["VHDL", "FPGA", "Logisim"],
            githubUrl: "https://github.com/LuizFelipeBuaszczyk/ULA_em_VHDL"
        },
        "en-us": {
            imageSrc:imgUlaFPGA,
            imageAlt:"FPGA ALU",
            title: "ALU with FPGA",
            description: "This project had the objective of developing a 4-bit ALU with VHDL and FPGA. The ALU has sum, subtract, and comparator operations.",
            technologies: ["VHDL", "FPGA", "Logisim"],
            githubUrl: "https://github.com/LuizFelipeBuaszczyk/ULA_em_VHDL"
        }
    },
    {
        "pt-br": {
            imageSrc:imgRotaexpress,
            imageAlt:"Rotaexpress Logo",
            title: "Rotaexpress",
            description: "Este projeto teve o objetivo de desenvolver um sistema para auxilio nas entregas, disponibilizando uma seção de criação de empresas, membros e entregas. Possui integração com o google Maps para geração e visualização das rotas.",
            technologies: ["JavaScript", "NodeJS", "Express", "CSS", "HTML", "Google Maps API", "PostgreSQL", "JWT", "API REST"],
            githubUrl: "https://github.com/LuizFelipeBuaszczyk/rotaexpress"
        },
        "en-us": {
            imageSrc:imgRotaexpress,
            imageAlt:"Rotaexpress Logo",
            title: "Rotaexpress",
            description: "This project had the objective of developing a system to help with deliveries, providing a section for creating companies, members and deliveries. It has integration with google Maps to generate route and visualization." ,
            technologies: ["JavaScript", "NodeJS", "Express", "CSS", "HTML", "Google Maps API", "PostgreSQL", "JWT", "API REST"],
            githubUrl: "https://github.com/LuizFelipeBuaszczyk/rotaexpress"
        }
    }
]


export default function ProjectsSection(){
    const { language } = useContext(LanguageContext);

    return (
        <section id="project-section" className={styles.projectSection}>
            {projects.map(project => (
                 <ProjectCard key={project["en-us"].title} projectData={project[language]}/>    
            ))} 
        </section>
    )
}

