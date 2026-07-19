import { useContext } from 'react'
import style from './AboutMe.module.css'

import { LanguageContext } from '@/contexts/LanguageContext.jsx'

const translation = {
    "pt-br": {
        title: "Sobre mim",
        about: [
            'Desenvolvedor backend com foco em soluções integradas e escaláveis. Trabalho com <strong>Python</strong> e ecossistemas como FastAPI e Django REST Framework para construir APIs e automações que conectam sistemas legados a aplicações modernas.',
            'Atualmente na <strong>Soluverti</strong>, atuo no desenvolvimento e manutenção de integrações entre sistemas ERP e plataformas web. Cursando <strong>Ciência da Computação</strong> na URI - Erechim.',
            'No tempo livre, gosto de entender como as coisas funcionam por baixo dos panos.'
        ]
    },
    "en-us": {
        title: "About me",
        about: [
            'Backend developer focused on integrated and scalable solutions. I work with <strong>Python</strong> and ecosystems like FastAPI and Django REST Framework to build APIs and automations that connect legacy systems to modern web applications.',
            'Currently at <strong>Soluverti</strong>, I develop and maintain integrations between ERP systems and web platforms. Pursuing a <strong>Computer Science</strong> degree at URI - Erechim.',
            'In my free time, I like to understand how the things work in a low-level perspective.'
        ]
    }
}

function AboutMe() {
    const { language } = useContext(LanguageContext);

    return (
        <section id="about-me" className={style.aboutMeSection}>
            <h1>{translation[language].title}</h1>
            <article className={style.aboutMeArticle}>
                {translation[language].about.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
            </article>
        </section>
    );
}

export default AboutMe;
