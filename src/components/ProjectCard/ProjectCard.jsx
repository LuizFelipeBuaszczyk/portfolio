import style from "./ProjectCard.module.css";
import responsive from "./ProjectCard.responsive.module.css"
import githubIcon from "../../assets/images/github.png";

export default function ProjectCard({ projectData }){
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
            <div className={style.bottomRow}>
                <div className={style.technologies}>
                    {projectData.technologies.map((tech, index) => (
                        <span key={tech}>
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    className={style.githubLink}
                    href={projectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
        </div>
    );
}

