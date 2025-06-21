import { getYearsOfXP } from '../../../../utils/dateUtils'
import style from './AboutMe.module.css'

function AboutMe (){

    const xpYears = getYearsOfXP();
    const yearsOld = 20;

    return (
        <section id="about-me">
            <h1>About-me</h1>
            <article className={style.aboutMeArticle}>
                <p>
                    I have {xpYears} years of experience as a developer,  
                    working with technologies such as <strong>Java</strong>,  
                    <strong> Spring Framework</strong>, <strong>PostgreSQL</strong>, and <strong>Docker</strong>.
                </p>    
                <p>
                    I also run a <a href="https://www.youtube.com/@luizfelipebuaszczyk384" target="_blank" rel="noopener noreferrer">YouTube channel</a>, where I occasionally post videos about technology.
                </p>
            </article>
        </section>
    );
}

export default AboutMe;