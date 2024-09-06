import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar/Navbar.jsx'
import Home from './Component/Home/Home.jsx'
import Footer from './Component/Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
 
)
