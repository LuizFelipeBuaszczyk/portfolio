import { useContext, useState } from 'react';
import style from "./AsideNavBar.module.css";

import { LanguageContext } from '../../contexts/LanguageContext'
import ScrollLink from '@/components/ScrollLink/ScrollLink';

const translation = {
    "pt-br": {
        heroLink: "Home",
        aboutMeLink: "Sobre mim",
        skillsLink: "Habilidades",
        experienceLink: "Experiências",
        findMeLink: "Encontre-me"
    },
    "en-us": {
        heroLink: "Home",
        aboutMeLink: "About-me",
        skillsLink: "Skills",
        experienceLink: "Experience",
        findMeLink: "Find me"
    }
}

function AsideNavBar(){
    const { language } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);

    const handlerScroll = (e, target_id) => {
        e.preventDefault();

        const element = document.getElementById(target_id);

        setIsOpen(!isOpen)
        element.scrollIntoView();
    }

    return (
        <aside className={`${style.aside}  ${isOpen ? style.menuOpen : ''}`}>
            <button className={style.hamburger } onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
                {isOpen ? '✕' : '☰'}
            </button>
            <div className={style.backdrop}  onClick={() => setIsOpen(false)} />
            <nav>
                <ul>
                    <ScrollLink id_section='hero' text={translation[language].heroLink} onClick={(e) => handlerScroll(e, 'hero')} />
                    <ScrollLink id_section='about-me' text={translation[language].aboutMeLink} onClick={(e) => handlerScroll(e, 'about-me')} />
                    <ScrollLink id_section='skills' text={translation[language].skillsLink} onClick={(e) => handlerScroll(e, 'skills')} />
                    <ScrollLink id_section='experience' text={translation[language].experienceLink} onClick={(e) => handlerScroll(e, 'experience')} />
                    <ScrollLink id_section='find-me' text={translation[language].findMeLink} onClick={(e) => handlerScroll(e, 'find-me')} />
                </ul>
            </nav>
        </aside>
    );
}

export default AsideNavBar;
