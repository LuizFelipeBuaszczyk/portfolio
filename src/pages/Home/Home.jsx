import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import Skills from "./sections/Skills/Skills";
import ContactMe from "./sections/ContactMe/ContactMe";
import AsideNavBar from "../../components/AsideNavBar/AsideNavBar";

import style from "./Home.module.css"

function Home() {

  return (
   <div className= {style.asideMainContentContainer}>
    <AsideNavBar />
    <div className='container'>
        <div className= {style.mainContent}>
        <Hero />
        <AboutMe />
        <Skills />
        <ContactMe />
      </div>
    </div>
   </div>
  );
}

export default Home;