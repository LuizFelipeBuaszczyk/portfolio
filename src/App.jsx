import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx"
import { LanguageProvider } from './contexts/LanguageContext.jsx'

function App() {

  return (
    <LanguageProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </HashRouter>
    </ LanguageProvider>
  );
}

export default App;