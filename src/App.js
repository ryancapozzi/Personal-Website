import React, {useState} from 'react';
import Navbar from './Navbar';
import Typewriter from './Typewriter';
function App() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div>
      <Navbar />
      <section id="home" className="bg-slate-400 h-screen py-24 px-10 flex flex-col items-start">

        {/*Typewriter section of home */}
        <div>
          <Typewriter text="Hello World!" className="text-6xl pr-25 font-bold text-zinc-100 drop-shadow-lg" start={true} onComplete={() => setShowSecond(true)} speed='75'/>
          {showSecond && (
            <Typewriter text="I'm Ryan, a dedicated software engineer with a passion for web development and artificial intelligence..." className="text-4xl pr-25 text-zinc-100 drop-shadow-lg leading-relaxed" start={true} speed='50' isLast={true}/>
          )}
        </div>

        {/*Boxes section of home*/}
        <div className="flex w-full items-center justify-evenly p-10 opacity-0 animate-fade-in">
          <a href="#about" className="flex flex-col items-center justify-center bg-black hover:scale-125 shadow-xl text-white p-8 rounded-md transition-transform duration-300">
            <h3 className="text-xl mb-4">About Me</h3>
            <img
              src="/CompositePic.JPG"
              alt="Ryan"
              className="w-40 h-40 object-cover shadow-md mb-4 rounded-md">
            </img>
          </a>
          <a href="#projects" className="flex flex-col items-center justify-center bg-black hover:scale-125 shadow-xl text-white p-8 rounded-md transition-transform duration-300">
            <h3 className="text-xl mb-4">Projects</h3>
            <img
            src="/codeimg.jpg"
            alt="Projects"
            className="w-40 h-40 object-cover shadow-md mb-4 rounded-md">
            </img>
          </a>
          <a href="#experience" className="flex flex-col items-center justify-center bg-black hover:scale-125 shadow-xl text-white p-8 rounded-md transition-transform duration-300">
            <h3 className="text-xl mb-4">Experience</h3>
            <img
              src="/computer.jpg"
              alt="Experience"
              className="w-40 h-40 object-cover shadow-md mb-4 rounded-md">
            </img>
          </a>
        </div>
      </section>

      <section id="about" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-semibold">My Projects</h2>
      </section>
      <section id="experience" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Résumé</h2>
      </section>
    </div>
  );
}

export default App;
