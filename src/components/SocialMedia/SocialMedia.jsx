import style from "./SocialMedia.module.css";

import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png"

export default function SocialMedia () {
    return (
        <div className={style.container}>
            <div className={style.socialMedia}>
                <a href="https://github.com/LuizFelipeBuaszczyk" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Github logo"/>
                </a>
                <a href="https://www.linkedin.com/in/luiz-felipe-buaszczyk/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="Linkedin logo"/>
                </a>    
            </div>
        </div>
    );
}
