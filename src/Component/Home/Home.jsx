import React from 'react'
import Intro from './Intro.jsx'
import Skills from './Skills.jsx'
import ContactForm from './ContactForm.jsx'
import Experience from './Experience.jsx'

function Home() {
  return (
   <>
   <div className='px-16 max-md:px-5'>
   <Intro/>
   <Skills/>
  <Experience/>
   <ContactForm/>
   
   </div>
   
   </>
 
  )
}

export default Home