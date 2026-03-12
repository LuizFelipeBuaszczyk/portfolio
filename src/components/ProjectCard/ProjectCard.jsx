import style from "./ProjectCard.module.css";
import responsive from "./ProjectCard.responsive.module.css"

function ProjectCard({ projectData }){
    return(
        <div className={`${style.projectCard} ${responsive.projectCard}`}>
            <section className={`${style.sectionRow}`}>
                <div className={`${style.imgDiv} ${responsive.imgDiv}`}>
                    <img src={projectData.imageSrc} alt={projectData.imageAlt} />
                </div>
                <div className={style.about}>
                    <h1>{ projectData.title } </h1>
                    <p> { projectData.description } </p>
                </div>
            </section>
            <div className={`${style.technologies}`}>
                {projectData.technologies.map((tech, index) => (
                    <span key={tech}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;