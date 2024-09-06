import React, { useState } from "react";
import shopifySvg from "../../assets/shopify.svg";
import squarespace from "../../assets/squarespace.svg";
import webflow from "../../assets/webflow.svg";
import wix from "../../assets/wix.svg";
import wordpress from "../../assets/wordpress.svg";
import reactIcon from "../../assets/react-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import tailwindIcon from "../../assets/tailwind-css.svg";

function Skills() {
  const [activeTab, setActiveTab] = useState("Code CMS");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = {
    "Technologies": [
      {
        title: (
          <div className="main-title-image flex"> 
            
            <h3 className="font-bold mr-4">React </h3>
            <img src={reactIcon} alt={reactIcon} width="25" />
          </div>
        ),
        description: (
          <ul>
            <li>
              Developed reusable components to streamline the development
              process.
            </li>

            <li>
              Integrated APIs and state management libraries like Redux for
              efficient data handling.
            </li>
            <li>
              Implemented responsive design principles to ensure cross-device
              compatibility.
            </li>
          </ul>
        ),
      },
      {
        title: (
          <div className="main-title-image flex"> 
        <h3 className="font-bold mr-4">Tilwind CSS </h3>
        <img src={tailwindIcon} alt={tailwindIcon} width="25" srcset="" />
        </div>

        ),
        description: (
          <ul>
            <li>
              Crafted custom, responsive designs with Tailwind CSS’s
              utility-first approach.
            </li>

            <li>
              Leveraged Tailwind’s built-in classes to reduce the need for
              writing custom CSS.
            </li>
            <li>
              Ensured consistent design across different screen sizes using
              Tailwind’s responsive utilities.
            </li>
          </ul>
        ),
      },
      {
        title: (
          <div className="main-title-image flex"> 
        <h3 className="font-bold mr-4">Javascript </h3>
        <img src={jsIcon} alt={jsIcon} width="25" srcset="" />
        </div>
        ),
        description: (
          <ul>
            <li>
              Deep understanding of ES6+ features and best practices for writing
              clean, maintainable code.
            </li>
            <li>
              Experience with asynchronous programming, including promises and
              async/await.
            </li>
            <li>
              Utilized JavaScript frameworks and libraries to enhance
              functionality and performance.
            </li>
          </ul>
        ),
      },
    ],

    "Code CMS": [
      {
        title: (
          <div className="main-title-image flex">
        <h3 className="font-bold mr-4">WordPress </h3>
        <img src={wordpress} alt={wordpress} width="25" srcset="" />
        </div>),
        description: (
          <ul>
            <li>Strong Knowledge of Wordpress.</li>
            <li>
              I can customise the frontend design using the Elementor, Divi
              Builder, WP Backary etc.
            </li>
            <li>Integrate the third party apps in the Wordpress site.</li>
          </ul>
        ),
      },
      {
        title:( 
          <div className="main-title-image flex">
        <h3 className="font-bold mr-4">Shopify </h3>
        <img src={shopifySvg} alt={shopifySvg} width="25" srcset="" />
        </div>
        ),
        description: (
          <ul>
            <li>Strong Knowledge of the E-Commerence Platform.</li>
            <li>I can customise the theme depends on the requirements.</li>
            <li>Integrate the third party apps.</li>
            <li> I've a good Knowledge in the Shopify CLI</li>
          </ul>
        ),
      },
    ],
    "Non-Code CMS": [
      {
        title: (
          <div className="main-title-image flex"> 
        <h3 className="font-bold mr-4">Wix </h3>
        <img className="invert" src={wix} alt={wix} srcset="" width="25" />
        </div>
        ),
        description: (
          <ul>
            <li>
              User-friendly platform with a robust CMS, ideal for creating
              visually appealing websites without coding.
            </li>

            <li>
              Offers a wide range of templates and drag-and-drop features for
              easy customization.
            </li>
            <li>
              Implemented responsive design principles to ensure cross-device
              compatibility.
            </li>
          </ul>
        ),
      },
      {
        title: (
          <div className="main-title-image flex">
        <h3 className="font-bold mr-4">Squarespace </h3> 
        <img className="invert" src={squarespace} alt={squarespace} srcset="" width="25" />
        </div>),
        description: (
          <ul>
            <li>
              A design-focused website builder with powerful CMS capabilities.
            </li>

            <li>
              Known for its beautifully crafted templates, making it ideal for
              creatives and professionals.
            </li>
            <li>
              Integrated tools for blogging, e-commerce, and marketing, all
              within a seamless user experience.
            </li>
          </ul>
        ),
      },
      {
        title: (<div className="main-title-image flex">
        <h3 className="font-bold mr-4"> webflow </h3>
        <img src={webflow} alt={webflow} srcset="" width="25" />
         </div>),
        description: (
          <ul>
            <li>
              A flexible website builder that combines the ease of drag-and-drop
              design with the power of HTML, CSS, and JavaScript.
            </li>

            <li>
              Allows designers to create professional-grade websites with visual
              precision and clean code.
            </li>
            <li>
              Ideal for designers who want more control over their site’s
              appearance and functionality without heavy coding.
            </li>
          </ul>
        ),
      },
    ],
   
  };

  return (
    <>
      <div id="skillSection" className="skills-container mt-20 ">
        <h2 className="text-center text-5xl font-bold mb-8"> Skills </h2>
        <div className="tabs flex justify-center space-x-4 mb-8">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 rounded-full text-white transition-all duration-300 max-md:text-xs ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-700 to-blue-700"
                  : "bg-black border hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="cards-container  grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabData[activeTab].map((card, index) => (
            <div
              key={index}
              className="card p-6 bg-black hover:bg-gray-900 border rounded-lg shadow-lg transition-transform duration-500 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
