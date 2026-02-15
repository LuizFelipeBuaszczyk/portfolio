import { useContext } from "react";

import style from "./Projects.module.css"
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";

import { LanguageContext } from "../../contexts/LanguageContext";

const translation = {
    "pt-br": {
        title: "Projetos"
    },
    "en-us": {
        title: "Projects"
    }
}

function Projects () {
    const { language } = useContext(LanguageContext);

    return (
   
        <div className="container">
            <h1>{translation[language].title}</h1>
            <ProjectsSection />
        </div>
    );
}

export default Projects;