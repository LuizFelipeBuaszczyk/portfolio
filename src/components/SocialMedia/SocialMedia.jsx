import style from "./SocialMedia.module.css";

import github from "@/assets/images/github.png";
import linkedin from "@/assets/images/linkedin.png"
import youtube from "@/assets/images/youtube.png";

export default function SocialMedia () {
    return (
        <div className={style.container}>
            <div className={style.socialMedia}>
                <a href="https://github.com/LuizFelipeBuaszczyk" target="_blank" >
                    <img src={github} alt="Github logo"/>
                </a>
                <a href="https://www.linkedin.com/in/luiz-felipe-buaszczyk/" target="_blank" >
                    <img src={linkedin} alt="Linkedin logo"/>
                </a>    
                <a href="https://youtube.com/@luffeszada" target="_blank" >
                    <img src={youtube} alt="Youtube logo"/>
                </a> 
            </div>
        </div>
    );
}
