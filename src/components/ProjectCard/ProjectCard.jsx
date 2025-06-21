import style from "./ProjectCard.module.css";
import responsive from "./ProjectCard.responsive.module.css"

function ProjectCard({ projectData }){
    return(
        <div className={`${style.projectCard} ${responsive.projectCard}`}>
            <div className={`${style.imgDiv} ${responsive.imgDiv}`}>
                <img src={projectData.imageSrc} alt={projectData.imageAlt} />
            </div>
            <div className={style.about}>
                <h1>{ projectData.title } </h1>
                <p> { projectData.description } </p>
            </div>
        </div>
    );
}

export default ProjectCard;