import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import client01 from '/images/clients/01-client-logo.png'
import client02 from '/images/clients/02-client-logo.png'
import Footer from './Footer'
import { FaBars } from "react-icons/fa";
 
function Navbar() {

  const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle); //false + false = turue
    }
    console.log(toggle)

  const location = useLocation();


  return (
    <nav className=' shadow-lg bg-zinc-900 text-white relative py-5 md:p-0'  >
            <div className='container mx-auto  '>
              <div className='py-5 px-10 flex  justify-between '>
                <h2 className='md:text-4xl text-2xl font-bold'><Link to="/">Pao.</Link></h2>
                <FaBars onClick={handleToggle} className='absolute top-10 right-5 cursor-pointer md:hidden'/>
                <ul className= {`flex flex-col md:flex md:flex-row md:space-x-5 ${toggle ? "block" : "hidden"}`}>
                    <li><Link to="/" className={`${location.pathname === "/" ? "font-bold " : "text-white"}  `}>Home</Link></li>
                    <li><Link to="/about" className={`${location.pathname === "/about" ? "font-bold " : "text-white"}  `}>About</Link></li>
                    {/* <li><Link to="/blog" className={`${location.pathname === "/blog" ? "font-bold " : "text-white"}  `}>Blog</Link></li> */}
                    <li><Link to="/contact" className={`${location.pathname === "/contact" ? "font-bold " : "text-white"}  `}>Contact</Link></li> 
                </ul>
              </div>
                
            </div> 
    </nav>
    
     
  )
}

export default Navbar
