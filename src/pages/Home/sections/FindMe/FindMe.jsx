import { useContext } from "react";

import style from "./FindMe.module.css";
import SocialMedia from "../../../../components/SocialMedia/SocialMedia";

import { LanguageContext } from "../../../../contexts/LanguageContext";

const translation = {
    "pt-br": {
        title: "Encontre-me"
    },
    "en-us": {
        title: "Find me"
    }
}

export default function FindMe() {
    const { language } = useContext(LanguageContext);

    return (
        <section id="find-me" className={style.findMe}>
            <h1>{translation[language].title}</h1>
            <SocialMedia />
        </section>
    );
}

