import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {

  return (
    <nav className={style.navBar}>
      <ul>
        <li className={style.linkButton}>
          <Link to="/">Home</Link>
        </li>
        <li className={style.linkButton}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>

      
    </nav>
  );
}

export default NavBar;
