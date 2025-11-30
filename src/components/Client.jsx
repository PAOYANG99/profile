import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Client() {
  return (
    <>
        <div className='flex py-30 md:text-9xl text-3xl h-[100px] items-center justify-center text-center space-x-10 md:space-x-20'>
        <FaFacebook className=''/>
        <FaSquareInstagram/>
        <FaSquareXTwitter/>
        </div>
      
    </>
  )
}

export default Client
