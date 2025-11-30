import React from 'react'
import photo01 from '/images/photo/01-photo.png'
import photo02 from '/images/photo/02-photo.png'
import photo03 from '/images/photo/03-photo.png'
import photo04 from '/images/photo/04-photo.png'
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import client01 from '/images/clients/01-client-logo.png'
import client02 from '/images/clients/02-client-logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Home() {
  return (
    <>
        <div className='container mx-auto'>
          <div className='py-10 md:grid md:grid-cols-2 md:justify-between md:items-center'>
            <div>
              <img src={photo02} className='rounded-full w-[500px] md:w-[600px] px-5 object-cover shadow-lg mx-auto' alt="" />
            </div>
              
              <div className='px-10 md:mx-auto '>
                <h1 className='py-10 font-bold md:text-4xl hidden md:block' >MY NAME <br /><span className='text-center'>IS</span> <br /> PAO YANG </h1>
                <h1 className='py-10 font-bold md:text-4xl md:hidden ' >MY NAME IS PAO YANG </h1>
                <ul className='flex gap-4 items-center'>
                  <li><MdLocalPhone className='text-sm ' /></li>
                  <li>+856 20 54479922</li>
                </ul>
                <ul className='flex gap-4 items-center '>
                  <li><MdOutlineEmail className='text-sm ' /></li>
                  <li>py.paoyang@gmail.com</li>
                </ul>
                <ul className='flex gap-4 items-center'>
                  <li><FaFacebook className='text-sm ' /></li>
                  <li>P'Y-Pao Yang </li>
                </ul>
                <ul className='flex gap-4 items-center'>
                  <li><FaSquareInstagram className='text-sm ' /></li>
                  <li>ppao_y9</li>
                </ul>
              </div>
          </div>
          
        </div>
        
    </>
  )
}

export default Home
