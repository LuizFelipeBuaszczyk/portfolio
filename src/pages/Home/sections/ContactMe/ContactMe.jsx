import { useContext } from "react";

import style from "./ContactMe.module.css";
import { sendEmail } from "../../../../utils/sendEmail";
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
            <form action="submit">
                <SocialMedia />
            </form>
        </section>
    );
}

export default ContactMe;