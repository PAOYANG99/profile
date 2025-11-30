import React from 'react'
import photo01 from '/images/photo/01-photo.png'
import photo02 from '/images/photo/02-photo.png'
import photo03 from '/images/photo/03-photo.png'
import photo04 from '/images/photo/04-photo.png'
import photo05 from '/images/photo/05-photo.png'
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdOutlinePersonPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Client from '../components/Client'



function About() {
  return (
    <>
     <div>
            <div className='container mx-auto '>
              {/* section1 */}
              <section className='md:flex md:flex-row items-center justify-between my-10 md:my-20 '>
                <div>
                    <div className='md:ml-20 px-10'>
                        <p className='italic md:text-4xl text-sm font-semibold md:pb-10 '>Nice to meet you!</p>
                        <h3 className='text-xl font-bold'>WELCOME TO...</h3> 
                    </div>
                    <div className='px-5 pt-10'>
                        <img src={photo04} className='mx-auto rounded-full w-[500px]  object-cover shadow-xl/70 '  alt="" />
                    </div>
                    <h3 className='text-4xl font-bold text-center pt-10'>PAO YANG</h3>
                </div> 
                <div >
                    <ul  className='md:grid md:grid-cols-2 md:gap-10 text-sm md:text-xl list-disc md:ml-70 py-5 px-5'>
                        <li className='md:flex flex gap-4 '>
                            <MdLocalPhone className='md:text-3xl' />
                            +856 20 54479922
                        </li>
                        <li className='md:flex flex gap-4 '>
                            <MdOutlineEmail className='md:text-3xl' />
                            Biganana616@gmail.com
                        </li>
                        <li className='md:flex flex gap-4 '>
                            <MdOutlinePersonPin className='md:text-3xl' />
                            <h3 className='md:pb-20'>23 yrs</h3>
                        </li>      
                    </ul>
                    <hr className='border-gray-300 border-1  md:ml-70 '/> 

                    <div className='md:grid grid-cols-1 md:grid-cols-2 md:ml-70 pb-10 w-full'>
                        <div>
                            <h2 className='md:text-3xl font-bold md:py-5 py-5 px-5'>Technical Skills</h2>
                            <ul className='list-disc px-10 text-sm'>
                                <li>HTML, CSS, JavaScript, React.js, Tailwind CSS </li>
                                <li>Figma </li>
                                <li>Git, Docker </li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:grid bg-zinc-600 text-white mx-15 md:ml-70 md:text-xl md:mt-10 text-sm md:px-10 md:py-5 py-5 px-5 '>
                        <h2 className='md:text-3xl font-bold md:py-5'>Education</h2>
                        <ul>
                            <li>
                                <span className='md:text-2xl font-bold'>Bachelor’s Degree </span>
                                  in Information Technology, 
                                  <span  className='md:text-2xl font-bold'> National University of Laos</span> (2021–2025)
                            </li>
                        </ul>
                        <h2 className='md:text-2xl font-bold md:py-5'>GPA: 3.53</h2>

                    </div>
                </div>
              </section>
              
            </div>
            {/* section2 */}
              <section className='bg-zinc-900 text-white  md:h-[400px] py-10 px-10 text-sm'>
                <div className='md:flex md:flex-row md:items-center md:justify-between md:px-20   md:space-x-30 '>
                    <div>
                        <h2 className='md:text-4xl font-bold '>PROFILE</h2>
                        <p className='md:py-10 md:text-2xl '>
                            I am a Web Developer with skills in HTML, CSS, JavaScript, React, and Tailwind. <br /> 
                            I work well in a team and can adapt to new tools quickly. <br /> 
                            I am eager to learn and improve my skills in web development.
                        </p>

                    </div>
                    <div className='md:pb-20 py-5'>
                        <h2 className='md:text-4xl font-bold'>Project + GitHub</h2>
                        <p className='md:py-10 md:text-2xl pt-5'>
                            <a className=' md:text-2xl' href="https://github.com/PAOYANG99"><span className='md:text-2xl font-bold'>GitHub:</span> https://github.com/PAOYANG99</a>
                        </p>

                    </div>
                    {/* <div>
                        <h2 className='text-4xl  font-bold pb-40'>My Project</h2>
                        
                    </div> */}
                </div>
                
              </section>
              {/* section3 */}
              <section >
                <Client />
              </section>
          </div>
      
    </>
  )
}

export default About
