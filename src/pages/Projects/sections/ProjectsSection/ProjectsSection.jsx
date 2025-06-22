import style from "./ProjectsSection.module.css";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

import imgUlaFPGA from "../../../../assets/images/projects/ula-fpga-vhdl.png";

const ula_fpga = {
    imageSrc:imgUlaFPGA,
    imageAlt:"FPGA ALU",
    title: "ALU with FPGA",
    description: "This project had the objective of developing a 4-bit ALU with VHDL and FPGA. The ALU has sum, subtract, and comparator operations."
}


function ProjectsSection(){
    return (
        <section id="project-section">
            <ProjectCard projectData={ula_fpga}/>
        </section>
    );
}

export default ProjectsSection;