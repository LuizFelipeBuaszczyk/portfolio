import { useContext, useEffect } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import style from './SkillModal.module.css';


export default function SkillModal({ skill, onClose }) {
  const { language } = useContext(LanguageContext);


  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeBtn} onClick={onClose} aria-label="Fechar">
            x
        </button>
        <div className={style.content}>
          <img src={skill.src} alt={skill.alt} className={style.icon} />
          <h2 className={style.name}>{skill.name[language]}</h2>
          <p className={style.level}>
            <span className={style.levelLabel}>
              {language === 'pt-br' ? 'Nível' : 'Level'}:
            </span>{' '}
            {skill.level[language]}
          </p>
          <p className={style.description}>{skill.description[language]}</p>
        </div>
      </div>
    </div>
  );
}
