import React from "react";
import shopifySvg from '../../assets/shopify.svg'
import squarespace from '../../assets/squarespace.svg'
import webflow from '../../assets/webflow.svg'
import wix from '../../assets/wix.svg'
import wordpress from '../../assets/wordpress.svg'
import timer from '../../assets/timer.svg'

function Experience() {
  return (
    <>
      <div  id="experienceSection" className="experience-section">
        <h2 className="text-center text-5xl font-bold mt-20 mb-8">
          Experience
        </h2>
        <div className="mainDiv flex justify-around max-md:flex-col">
          <div className="left-div w-1/2 max-md:w-full">
            <div className="company-name">
              <h3 className="text-left text-3xl font-bold">
                
                Coozmoo Digital. Solutions.
              </h3>
              <div className="main-time">
              <div className="time mt-6 flex">
                <img src={timer}  className="mr-3 invert" width="20" alt={timer} srcset="" />
                <h6> March 2022 - Augest 2024 </h6>
                </div>
                <div className="describe-part mt-5 w-5/6" >
                  <p >
                Enhanced my skills in front-end development, mastering tools like ReactJS, Tailwind CSS, and JavaScript to create dynamic, responsive, and user-friendly websites.
                </p>
                <p>
                Adapted to new challenges quickly, whether it was learning a new platform like Squarespace or refining existing skills in established systems.
                </p>
                </div>
                </div>
            </div>
          </div>
          <div className="right-div  w-1/2 max-md:w-full">
            <div className="job-title">
              <h4 className="text-left text-2xl font-bold">
                Web Developer (frontend)
              </h4>
            </div>
            <div className="describe-job">
              <ul>

                <li className="list-none py-3 relative">
                  <div className="cms-title-with-image flex relative">
                  <h6 className="font-bold  pl-4 after:absolute after:content-[''] after:bottom-0 after:border-b-2  after:w-40 after:left-4 "> Shopify (Code CMS 2 Years ) </h6>
                  <img className="ml-5" width="25" src={shopifySvg} alt={shopifySvg }  />
                  </div>
                  <p className="mt-3 pl-6">
                    
                    I create and customize Shopify stores, focusing on clean
                    design and a smooth user experience.
                  </p>
                </li>
                <li className=" py-3 ">
                <div className="cms-title-with-image flex relative">
                  <h6 className="font-bold pl-4 after:absolute after:content-[''] after:bottom-0 after:border-b-2 after:w-48 after:left-4" >Wordpress ( Code CMS 0.6 Year ) </h6>
                  <img className="ml-5" width="25" src={wordpress} alt={wordpress }  />
                  </div>
                  <p className="mt-3 pl-6">
                    I develop custom WordPress themes with a focus on
                    performance and easy content management.
                  </p>
                </li>
                <li className="py-3">
                <div className="cms-title-with-image flex relative">
                  <h6 className="font-bold pl-4 after:absolute after:content-[''] after:bottom-0 after:border-b-2 after:w-60 after:left-4">SquareSpace (None Code CMS 0.6 Year )</h6>
                  <img className="ml-5 invert" width="25" src={squarespace} alt={squarespace }  />
                  </div>
                  <p className="mt-3 pl-6">
                    
                    I design responsive websites on SquareSpace, ensuring
                    simplicity and brand consistency.
                  </p>
                </li>
                <li className="py-3">
                <div className="cms-title-with-image flex relative">
                  <h6 className="font-bold pl-4  after:absolute after:content-[''] after:bottom-0 after:border-b-2 after:w-52 after:left-4"> Webflow (None Code CMS 0.6 Year ) </h6>
                  <img className="ml-5" width="25" src={webflow} alt={webflow}  />
                  </div>
                  <p className="mt-3 pl-6">
                    
                    I build dynamic, interactive websites using Webflow’s visual
                    development tools.
                  </p>
                </li>
                <li className="py-3">
                <div className="cms-title-with-image flex relative">
                  <h6 className="font-bold pl-4 after:absolute after:content-[''] after:bottom-0 after:border-b-2 after:w-44 after:left-4"> Wix  (None Code CMS 0.6 Year )</h6>
                  <img className="ml-5 invert"  width="25" src={wix} alt={wix}  />
                  </div>
                  <p className="mt-3 pl-6">
                    
                    I craft functional and visually appealing Wix sites that are
                    easy to manage and update.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;