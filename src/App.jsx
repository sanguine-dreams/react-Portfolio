import "./App.css";
import Intro from "./sections/Intro";
import AboutMe from "./sections/AboutMe";

import Skills from "./sections/Skills";
import NavBar from "./sections/NavBar";
import Footer from "./sections/Footer";
import Projects from "./sections/ProjectSection";




function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
