import React from 'react'
import instaLogo from "../../assets/insta-icon.svg"; 
import gitLogo from "../../assets/Github-icon.svg"; 
import linkedinLogo from "../../assets/LinkedIn-icon.svg"; 
import location from "../../assets/location.svg"
function Footer() {
  return (
    <>

<footer
  class="text-center text-surface/75 bg-gray-900  lg:text-left">
  <div
    class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
    <div class="me-12 hidden lg:block">
      <h3>Get connected with us on social networks:</h3>
    </div>
   <div class="flex justify-center">
     
     
      
      <a href="https://linkedin.com/in/naresh-kansara-a273b0200" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
       <img className='invert' src={instaLogo} width="25" alt="" srcset="" />
      </a>
      <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
      <img className='invert' src={linkedinLogo} width="25" alt="" srcset="" />
      </a>
      <a href="https://github.com/nareshkansara" className="[&>svg]:h-4 [&>svg]:w-4">
      <img className='invert' src={gitLogo} width="25" alt="" srcset="" />
      </a>
    </div>
  </div>

   <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-md:justify-items-start">
      
      <div class="">
        <h4 className='text-2xl font-bold'
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
        
          Naresh Kansara
        </h4>
        
      </div>
     
      <div className='text-left'>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
         Quick Links
        </h6>
        <p class="mb-4">
          <a href="#introSection">Intro</a>
        </p>
        <p class="mb-4">
          <a href="#skillSection">Skills</a>
        </p>
        <p class="mb-4">
          <a href="#experienceSection">Experience</a>
        </p>
        <p>
          <a href="#contactForm">Contact Me</a>
        </p>
      </div>
      
      
      
       
      
      <div className='text-left flex flex-col justify-start'>
        <h6
          class="mb-4 flex  font-semibold uppercase md:justify-start">
          Contact Info
        </h6>
        
         
        <p class="mb-4 flex ">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </span>
          <a className='hover:border-b-2' href="mailto:nareshkansara06@gmail.com" target="_blank" rel="noopener noreferrer"> nareshkansara06@gmail.com</a> 
        </p>
        <p class="mb-4 flex">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <a className='hover:border-b-2' href="tel:+917742751167"> +91 7742751167</a>
        </p>
        <p class="flex">
         
            <img  className='invert me-3' src={location} width={20} alt="" srcset="" />
        
          Jodhpur Rajasthan India
        </p>
      </div>
    </div>
  </div>

 
  <div class="bg-black/5 p-6 text-center">
    <span>© 2024 Copyright</span>
    
    
  </div>
</footer>
    </>
  )
}

export default Footer