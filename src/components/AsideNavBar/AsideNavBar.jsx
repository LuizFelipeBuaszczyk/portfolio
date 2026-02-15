import { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import style from "./AsideNavBar.module.css";
import responsive from "./AsideNavBar.responsive.module.css"

import { LanguageContext } from '../../contexts/LanguageContext'

const translation = {
    "pt-br": {
        heroLink: "Home",
        aboutMeLink: "Sobre mim",
        skillsLink: "Habilidades",
        contactMeLink: "Contato"
    },
    "en-us": {
        heroLink: "Home",
        aboutMeLink: "About-me",
        skillsLink: "Skills",
        contactMeLink: "Contact me"
    }
}

function AsideNavBar(){
    const { language } = useContext(LanguageContext);

    return (
        <aside className= {`${style.aside} ${responsive.aside}`}>
            <nav>
                <ul>
                    <li className={style.linkButton}>
                        <ScrollLink to='hero' smooth={true} duration={500} offset={-80}>{translation[language].heroLink}</ScrollLink>
                    </li>
                    <li className={style.linkButton}>
                        <ScrollLink to='about-me' smooth={true} duration={500} offset={-80}>{translation[language].aboutMeLink}</ScrollLink>
                    </li>
                    <li className={style.linkButton}>
                        <ScrollLink to='skills' smooth={true} duration={500} offset={-80}>{translation[language].skillsLink}</ScrollLink>
                    </li>       
                    <li className={style.linkButton}>
                        <ScrollLink to='contact-me' smooth={true} duration={500} offset={-80}>{translation[language].contactMeLink}</ScrollLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default AsideNavBar;