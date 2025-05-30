import style from './NavBar.module.css';

function NavBar() {

  return (
    <nav className={style.navBar}>
      <a href="/">Home</a>
      <a href="">About me</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
    </nav>
  );
}

export default NavBar;
