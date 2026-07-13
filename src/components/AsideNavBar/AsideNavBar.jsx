import { useContext, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import style from "./AsideNavBar.module.css";

import { LanguageContext } from '../../contexts/LanguageContext'

const translation = {
    "pt-br": {
        heroLink: "Home",
        aboutMeLink: "Sobre mim",
        skillsLink: "Habilidades",
        findMeLink: "Encontre-me"
    },
    "en-us": {
        heroLink: "Home",
        aboutMeLink: "About-me",
        skillsLink: "Skills",
        findMeLink: "Find me"
    }
}

function AsideNavBar(){
    const { language } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(!isOpen);

    return (
        <aside className={`${style.aside}  ${isOpen ? style.menuOpen : ''}`}>
            <button className={style.hamburger } onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
                {isOpen ? '✕' : '☰'}
            </button>
            <div className={style.backdrop}  onClick={() => setIsOpen(false)} />
            <nav>
                <ul>
                    <li className={style.linkButton}>
                        <ScrollLink to='hero' smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>{translation[language].heroLink}</ScrollLink>
                    </li>
                    <li className={style.linkButton}>
                        <ScrollLink to='about-me' smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>{translation[language].aboutMeLink}</ScrollLink>
                    </li>
                    <li className={style.linkButton}>
                        <ScrollLink to='skills' smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>{translation[language].skillsLink}</ScrollLink>
                    </li>       
                    <li className={style.linkButton}>
                        <ScrollLink to='find-me' smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>{translation[language].findMeLink}</ScrollLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default AsideNavBar;
