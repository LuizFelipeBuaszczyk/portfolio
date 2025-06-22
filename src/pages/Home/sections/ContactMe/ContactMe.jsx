import style from "./ContactMe.module.css";
import { sendEmail } from "../../../../utils/sendEmail";
import SocialMedia from "../../../../components/SocialMedia/SocialMedia";



function ContactMe() {

    return (
        <section id="contact-me" className={style.contactMe}>
            <h1>Contact-me</h1>
            <form action="submit">
                <SocialMedia />
                <p>
                    Would you talk to me? Contact me via <strong>e-mail</strong>!
                </p>
                <button type="submit" onClick={sendEmail}>Send Email</button>
            </form>
        </section>
    );
}

export default ContactMe;