import styles from './Hero.module.css';
import Avatar from '../../../../assets/images/avatar.jpg';

function Hero() {
  
  return (
    <section className={styles.hero}>
      <div>
        <img src={Avatar} alt="Avatar image" />
      </div>
      <article>
        <h1>Hi Everyone! My name is Luiz Felipe Buaszczyk</h1>
      </article>
    </section>
  );
}

export default Hero;