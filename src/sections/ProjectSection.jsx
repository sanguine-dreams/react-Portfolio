import Project from "../components/Project";
import calculator from "../assets/images/calculator.PNG";
import { useState } from "react";

function Projects() {

const [name, setName] = useState("This is unchanged");
 

  return (
    <div
      className="projects flex flex-col w-full justify-center p-4"
      id="Projects"
    >
      <h1>Shuffle my playlist</h1>
      <div className="relative bg-white w-5/6 h-2/3 card-stack">
      <div
      onMouseEnter={() => setName("This is changed")}
      onMouseLeave={() => setName("")}
      className="absolute bg-slate-300 w-1/4 h-full z-90">
      Hover over me
      {name && <p>{name}</p>}
    </div>
        {/* First Project */}
        <Project
          image={calculator}
          text={name}
          title="Title for the first project"
          website="Link for the first project"
          repo="Repository link for the first project"
          pos={`origin-bottom -rotate-[3deg] hover:rotate-[13deg]`} // Correctly pass pos as an object
        />
        {/* Second Project */}
        <Project
          image={calculator}
          text="Text for the second project"
          title="Title for the second project"
          website="Link for the second project"
          repo="Repository link for the second project"
          pos={`origin-bottom -rotate-[6deg] hover:rotate-[16deg]`} // Correctly pass pos as an object
        />
        {/* Third Project */}
        <Project
          image={calculator}
          text="Text for the third project"
          title="Title for the third project"
          website="Link for the third project"
          repo="Repository link for the third project"
          pos={`origin-bottom -rotate-[9deg] hover:rotate-[19deg]`} // Correctly pass pos as an object
        />
        {/* Fourth Project */}
        <Project
          image={calculator}
          text="Text for the fourth project"
          title="Title for the fourth project"
          website="Link for the fourth project"
          repo="Repository link for the fourth project"
          pos={`origin-bottom -rotate-[12deg] hover:rotate-[21deg]`} // Correctly pass pos as an object
        />
      </div>
    </div>
  );
}

export default Projects;
