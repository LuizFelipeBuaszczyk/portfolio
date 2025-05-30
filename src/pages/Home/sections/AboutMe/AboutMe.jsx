import { getYearsOfXP } from '../../../../utils/dateUtils'

function AboutMe (){

    const xpYears = getYearsOfXP();

    return (
        <section id="about-me">
            <h1>About-me</h1>
            <article>
                <p>I have {xpYears} years of experience as a developer, working with technologies like Java, Spring Framework, PostgreSQL, and Docker.</p>    
            </article>
        </section>
    );
}

export default AboutMe;