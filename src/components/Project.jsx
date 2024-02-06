import React, { useState } from 'react';

function Project({ title, image, text, website, repo,pos }) {
  const [position, setPosition] = useState({ left: 0 });

  const moveRight = () => {
    setPosition({ left: 600 }); // Adjust the value as per your requirement
  };

  return (
    <div
      className={`w-1/6 h-4/6 flex flex-col items-center p-4 border-2 border-rose-500 rounded-xl justify-between bg-orange-200 ${pos} card absolute`}

      onClick={moveRight}
    >
      <h1 className="w-full p-2 border-2 border-rose-500 rounded-md text-left">
        {title}
      </h1>
      <img
        className="w-full m-4 border-2 border-rose-600"
        src={image}
        alt={title}
        width={250}
      />
      <p className="w-full border-4 border-rose-600">{text}</p>
      <div className="w-full flex justify-between px-2">
        <a href={website} target="_blank" rel="noopener noreferrer">
          Website
        </a>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          Github link
        </a>
      </div>
    </div>
  );
}

export default Project;
