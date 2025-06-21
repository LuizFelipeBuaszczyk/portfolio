import { Link as ScrollLink } from 'react-scroll';
import style from "./AsideNavBar.module.css";

function AsideNavBar(){

    return (
        <aside id='hero' className= {style.aside}>
            <nav>
                <ul>
                    <li className={style.linkButton}>
                        <ScrollLink to='hero' smooth={true} duration={500} offset={-80}>Home</ScrollLink>
                    </li>
                    <li className={style.linkButton}>
                        <ScrollLink to='about-me' smooth={true} duration={500} offset={-80}>About-me</ScrollLink>
                    </li>
                    <li className={style.linkButton}>
                        <ScrollLink to='skills' smooth={true} duration={500} offset={-80}>Skills</ScrollLink>
                    </li>       
                    <li className={style.linkButton}>
                        <ScrollLink to='contact-me' smooth={true} duration={500} offset={-80}>Contact me</ScrollLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default AsideNavBar;