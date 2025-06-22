import style from './Skills.module.css'

import cssImg from '../../../../assets/images/css.png'; // Ajuste o caminho relativo de acordo com a sua estrutura
import htmlImg from '../../../../assets/images/html.png';
import javaImg from '../../../../assets/images/java.png';
import postgresImg from '../../../../assets/images/postgres.png';


function Skills () {

    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className={style.techStack}>
                <img src={cssImg} alt="css"/>
                <img src={htmlImg} alt="html" />
                <img src={javaImg} alt="java" />
                <img src={postgresImg} alt="postgres" />    
            </div>
        </section>
    );
}

export default Skills;