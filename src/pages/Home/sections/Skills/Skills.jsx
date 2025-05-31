import style from './Skills.module.css'


function Skills () {

    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className={style.techStack}>
                <img src="../../../../src/assets/images/css.png" alt="css"/>
                <img src="../../../../src/assets/images/html.png" alt="html" />
                <img src="../../../../src/assets/images/java.png" alt="java" />
                <img src="../../../../src/assets/images/postgres.png" alt="postgres" />    
            </div>
        </section>
    );
}

export default Skills;