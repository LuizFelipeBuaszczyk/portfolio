import { useContext, useEffect, useRef } from 'react';
import style from './Skills.module.css'

import cImg from '../../../../assets/images/skills/c.png';
import pythonImg from '../../../../assets/images/skills/python.png';
import javascriptImg from '../../../../assets/images/skills/javascript.png';
import htmlImg from '../../../../assets/images/skills/html.png';
import cssImg from '../../../../assets/images/skills/css.png';
import postgresImg from '../../../../assets/images/skills/postgres.png';
import firebirdImg from '../../../../assets/images/skills/firebird.png';
import dockerImg from '../../../../assets/images/skills/docker.png';
import nginxImg from '../../../../assets/images/skills/nginx.png';

import { LanguageContext } from '../../../../contexts/LanguageContext'

const translation = {
    "pt-br": {
        title: "Habilidades"
    },
    "en-us": {
        title: "Skills"
    }
};

const skillsImages = [
    { src: cImg, alt: "C" },
    { src: pythonImg, alt: "Python" },
    { src: javascriptImg, alt: "JavaScript" },
    { src: htmlImg, alt: "HTML" },
    { src: cssImg, alt: "CSS" },
    { src: postgresImg, alt: "PostgreSQL" },
    { src: firebirdImg, alt: "Firebird" },
    { src: dockerImg, alt: "Docker" },
    { src: nginxImg, alt: "Nginx" },
];

export default function Skills () {
    const { language } = useContext(LanguageContext);

    return (
        <section id="skills" className={style.skills} >
            <h1>{translation[language].title}</h1>
            <div className={style.techStack}>
                {skillsImages.map((skill) => (
                    <img
                        key={skill.alt}
                        src={skill.src}
                        alt={skill.alt}
                    />
                ))}
            </div>
        </section>
    );
}

