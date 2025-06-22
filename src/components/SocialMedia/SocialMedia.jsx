import style from "./SocialMedia.module.css";

import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png"

function SocialMedia () {
    return (
        <div className={style.socialMedia}>
            <a href="https://github.com/LuizFelipeBuaszczyk" target="_blank">
                <img src={github} alt="Github logo"/>
            </a>
            <a href="https://www.linkedin.com/in/luiz-felipe-buaszczyk-99673a302/" target="_blank">
                <img src={linkedin} alt="Linkedin logo"/>
            </a>    
        </div>
    );
}

export default SocialMedia