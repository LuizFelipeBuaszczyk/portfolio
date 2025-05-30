import styles from './Hero.module.css';
import Avatar from '../../../../assets/images/avatar.jpg';

function Hero() {
  
  return (
    <section className={styles.hero}>
      <div>
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