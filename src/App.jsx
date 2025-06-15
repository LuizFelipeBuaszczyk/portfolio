import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx"

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;