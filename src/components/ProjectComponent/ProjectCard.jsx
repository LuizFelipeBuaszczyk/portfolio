import style from "./ProjectCard.module.css";

function ProjectCard({ projectData }){
    return(
        <div className={style.projectCard}>
            <div className={style.imgDiv}>
                <img src= {projectData.imageSrc} alt= {projectData.imageAlt} />
            </div>
            <div>
                <h1>{ projectData.title } </h1>
                <p> { projectData.description } </p>
            </div>
        </div>
    );
}

export default ProjectCard;