import style from './ExperienceCard.module.css'


export default function ExperienceCard({ exp, language }) {

    return (
        <div className={style.cardsContainer}>
            <div key={exp.id} className={style.card}>
                <div>
                    <img src={exp.logo} alt={exp.companyName} />
                </div>
                <div className={style.cardContent}>
                    <h3 className={style.companyName}>{exp.company}</h3>
                    <span className={style.role}>{exp.role[language]}</span>
                    <span className={style.period}>
                        {exp.startDate} - {exp.endDate[language]}
                    </span>
                    <p className={style.description}>{exp.description[language]}</p>
                </div>
            </div>
        </div>
    );
}
