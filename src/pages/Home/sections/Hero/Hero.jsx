import styles from './Hero.module.css';
import responsive from "./Hero.responsive.module.css"
import Avatar from '../../../../assets/images/avatar.jpg';


function Hero() {
  
  return (
    <section  id="hero" className={ `${styles.hero} ${responsive.hero}`}>
      <div className={ `${styles.imgContainer} ${responsive.imgContainer}`} >
        <img src={Avatar} alt="Avatar image" />
      </div>
      <article>
        <h1>Hi! <br/> I'm Luiz Felipe Buaszczyk</h1>
        <p>Backend Developer</p>
      </article>
    </section>
  );
}

export default Hero;