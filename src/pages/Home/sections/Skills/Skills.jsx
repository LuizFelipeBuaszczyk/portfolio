import { useContext, useState } from 'react';
import style from './Skills.module.css'


import { LanguageContext } from '@/contexts/LanguageContext'
import { skillsData } from '@/assets/data/skillsData'
import SkillModal from '@/components/SkillModal/SkillModal'

const translation = {
    "pt-br": {
        title: "Habilidades"
    },
    "en-us": {
        title: "Skills"
    }
};

export default function Skills () {
    const { language } = useContext(LanguageContext);
    const [selectedSkill, setSelectedSkill] = useState(null);

    function handleSkillClick(id) {
        const data = skillsData.find((s) => s.id === id);
        setSelectedSkill(data);
    }

    return (
        <section id="skills" className={style.skills} >
            <h1>{translation[language].title}</h1>
            <div className={style.techStack}>
                {skillsData.map((skill) => (
                    <img
                        key={skill.alt}
                        src={skill.src}
                        alt={skill.alt}
                        onClick={() => handleSkillClick(skill.id)}
                    />
                ))}
            </div>
            {selectedSkill && (
                <SkillModal
                    skill={selectedSkill}
                    onClose={() => setSelectedSkill(null)}
                />
            )}
        </section>
    );
}

