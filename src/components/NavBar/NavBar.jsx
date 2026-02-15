import {useContext  } from 'react'
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext'

const translation = {
  "pt-br": {
    homeLink: "Home",
    projectLink: "Projetos"
  },
  "en-us": {
    homeLink: "Home",
    projectLink: "Projects"
  }
};

function NavBar() {
  const { language, setLanguage } = useContext(LanguageContext); 

  return (
    <nav className={style.navBar}>
      <ul>
        <li className={style.linkButton}>
          <Link to="/">{translation[language].homeLink}</Link>
        </li>
        <li className={style.linkButton}>
          <Link to="/projects">{translation[language].projectLink}</Link>
        </li>
      </ul>
      <ul>
        <select className={style.select} value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en-us">en-US</option>
          <option value="pt-br">pt-BR</option>
        </select>
      </ul>
    </nav>
  );
}

export default NavBar;
