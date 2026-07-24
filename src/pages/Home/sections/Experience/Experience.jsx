import { useContext } from 'react'

import style from './Experience.module.css'
import { LanguageContext } from '@/contexts/LanguageContext'
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard'
import { experienceData } from '@/assets/data/experienceData'

const translation = {
    "pt-br": {
        title: "Experiência"
    },
    "en-us": {
        title: "Experience"
    }
};

export default function Experience() {
    const { language } = useContext(LanguageContext);

    return (
        <section id="experience" className={style.experience}>
            <h1>{translation[language].title}</h1>
            {experienceData.map((exp) => (
                <ExperienceCard exp={exp} language={language} />
            ))}
        </section>
    );
}
