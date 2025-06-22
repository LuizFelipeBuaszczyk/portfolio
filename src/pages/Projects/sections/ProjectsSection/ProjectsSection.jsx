import style from "./ProjectsSection.module.css";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

import imgUlaFPGA from "../../../../assets/images/projects/ula-fpga-vhdl.png";

const ula_fpga = {
    imageSrc:imgUlaFPGA,
    imageAlt:"Imagem do Projeto ULA com FPGA",
    title: "ULA com FPGA",
    description: "O Projeto teve como objetivo desenvolver uma ULA 4 Bits utilizando FPGA."
}


function ProjectsSection(){
    return (
        <section id="project-section">
            <ProjectCard projectData={ula_fpga}/>

        </section>
    );
}

export default ProjectsSection;