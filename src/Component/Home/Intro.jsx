import React from "react";
import introImage from "../../assets/logo.png";

function Intro() {
  return (
    <>
      <div id="introSection" className="flex my-10 flex-col md:flex-row items-center justify-center md:justify-between bg-background text-foreground">
        <div className="md:w-1/3  max-md:w-full text-center m-auto md:text-left">
          <h2 className="text-7xl uppercase font-bold mb-4 max-md:text-3xl">I'm Naresh Kansara</h2>
          <p className="mb-4 mt-4 ">
          A passionate front-end software developer with a knack for creating visually stunning and highly functional web applications. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I thrive on building user-centric, responsive designs that bring ideas to life on the web.<br></br>
          <span className="font-bold"> -ChatGPT </span>
          </p>
          <button className="bg-primary mt-4 bg-gradient-to-r from-cyan-700 to-blue-700 text-white align-middle py-3  px-10 rounded-full">
           <a href="#contactForm"> Contact Me</a>
          </button>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 ">
          <img className="text-center m-auto"
            src={introImage}
            alt="Nature Image"

          />
        </div>
      </div>
      <div className="w-1/2 h-1 my-5 m-auto bg-gradient-to-r from-cyan-700 to-blue-700"></div>
    </>
  );
}

export default Intro;
