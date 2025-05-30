import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";

import style from "./Home.module.css"

function Home() {

  return (
   <div className='container'>
      <div className= {style.mainContent}>
      <Hero />
      <AboutMe />
    </div>
   </div>
  );
}

export default Home;