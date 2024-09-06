import React from "react";
import contactImage from "../../assets/contactUs.png";

function ContactForm() {
  return (
    <>
    <div id="contactForm" className="Contact-section  my-20 ">
     <h2 className="text-5xl font-bold text-center md:text-center mb-6 ">
          Get In Touch
        </h2>
    <div className="contact-form-container  rounded-lg shadow-md flex flex-col-reverse md:flex-row items-center">
        
      {/* Contact Form */}
      <div className="w-full  m-auto">
       
        <form  action="https://api.web3forms.com/submit"  method="POST" className="space-y-6">
        <input type="hidden" name="access_key" value="4cba4b25-dff7-47da-9eda-1b06dea92e15"/>
          <div>
            <label
              htmlFor="name"
              className="block  font-medium mb-2"
            >
              Name
            </label>
            <input name="first_name"
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block  font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-700 to-blue-700 text-white py-3 px-6 rounded-full text-lg font-medium transition-all duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side Image */}
      <div className=" m-auto  p-6 flex items-center justify-center md:justify-end">
        <img width="800"
          src={contactImage}
          alt="Contact"
        
        />
      </div>
    </div>
    </div>
    </>
  );
}

export default ContactForm;
