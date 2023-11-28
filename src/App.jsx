import "./App.css";
import Intro from "./sections/Intro";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects.Jsx";
import Skills from "./sections/Skills";
import NavBar from "./sections/NavBar";


function App() {
  return (
    <>

      <NavBar />
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
  
    </>
  );
}

export default App;
