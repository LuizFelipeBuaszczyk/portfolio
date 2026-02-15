import { useContext } from 'react'

import styles from './Hero.module.css';
import responsive from "./Hero.responsive.module.css"
import Avatar from '../../../../assets/images/avatar.jpg';

import { LanguageContext } from '../../../../contexts/LanguageContext'

const translation = {
  "pt-br": {
    greeting: "Olá!",
    name: "Eu sou Luiz Felipe Buaszczyk",
    role: "Desenvolvedor Backend"
  },
  "en-us": {
    greeting: "Hi!",
    name: "I'm Luiz Felipe Buaszczyk",
    role: "Backend Developer"
  }
};

function Hero() {
  const { language } = useContext(LanguageContext);
  
  return (
    <section  id="hero" className={ `${styles.hero} ${responsive.hero}`}>
      <div className={ `${styles.imgContainer} ${responsive.imgContainer}`} >
        <img src={Avatar} alt="Avatar image" />
      </div>
      <article>
        <h1>
          {translation[language].greeting}
          <br/>
          {translation[language].name}
        </h1> 
        <p>
          {translation[language].role}
        </p>      
      </article>
    </section>
  );
}

export default Hero;