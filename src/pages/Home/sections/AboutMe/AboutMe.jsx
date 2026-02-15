import { useContext } from 'react'
import { getYearsOfXP } from '../../../../utils/dateUtils'
import style from './AboutMe.module.css'

import { LanguageContext } from '../../../../contexts/LanguageContext'

const translation = {
    "pt-br": {
        title: "Sobre mim",
        about: {
            p1: {
                before: "Eu tenho",
                middle: "anos de experiência como desenvolvedor, trabalhando com tecnologias como ",
                technologies: ["Python", "FastAPI", "Java", "Docker"]
            },
            p2: {
                before: "Eu também mantenho um ",
                linkLabel: "Canal no Youtube",
                after: " onde posto vídeos sobre tecnologia."
            }
        }
    },
    "en-us": {
        title: "About me",
        about: {
            p1: {
                before: "I have",
                middle: "years of experience as a developer, working with technologies such as ",
                technologies: ["Python", "FastAPI", "Java", "Docker"]
            },
            p2: {
                before: "I also run a ",
                linkLabel: "YouTube channel",
                after: " where I occasionally post videos about technology."
            }
        }
    }
}

function AboutMe (){
    const { language } = useContext(LanguageContext);
    const xpYears = getYearsOfXP();

    return (
        <section id="about-me">
            <h1>{translation[language].title}</h1>
            <article className={style.aboutMeArticle}>
                <p>
                    {translation[language].about.p1.before} {xpYears} {translation[language].about.p1.middle}
                    {translation[language].about.p1.technologies.map((tech, index) => (
                        <strong key={tech}>
                            {tech}
                            {index < translation[language].about.p1.technologies.length - 1 && ", "}
                            {index == translation[language].about.p1.technologies.length - 1 && "."}
                        </strong>
                    ))}
                </p>
                <p>
                    {translation[language].about.p2.before} 
                    <a href="https://www.youtube.com/@luizfelipe_tech" target="_blank" rel="noopener noreferrer">
                        {translation[language].about.p2.linkLabel}
                    </a>
                    {translation[language].about.p2.after}
                </p>
            </article>
        </section>
    );
}

export default AboutMe;