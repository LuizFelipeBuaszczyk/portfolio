import { useContext } from "react";

import style from "./ContactMe.module.css";
import SocialMedia from "../../../../components/SocialMedia/SocialMedia";

import { LanguageContext } from "../../../../contexts/LanguageContext";

const translation = {
    "pt-br": {
        title: "Contato"
    },
    "en-us": {
        title: "Contact-me"
    }
}

function ContactMe() {
    const { language } = useContext(LanguageContext);

    return (
        <section id="contact-me" className={style.contactMe}>
            <h1>{translation[language].title}</h1>
            <SocialMedia />
        </section>
    );
}

export default ContactMe;