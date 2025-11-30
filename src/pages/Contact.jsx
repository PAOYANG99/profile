import React from 'react'
import Client from '../components/Client'
import ClientLogo from '/images/clients/03-client-logo.png'

function Contact() {
  return (
    <>
        <div className='container mx-auto '>
            <section className='md:flex md:py-10 md:px-20 md:items-center md:justify-btween '>
                <div>
                    <h2 className='italic md:text-4xl md:text-xl px-5 pt-5 font-semibold'>Contact</h2>
                    <h2 className='md:text-5xl font-bold text-2xl md:pt-5 px-5'>REACH OUT ME</h2>

                    <ul className='md:text-3xl font-bold md:pt-20 pt-5 px-5'>
                        <li>+856 020 54479922</li>
                        <li className='md:pt-5'>py.paoyang@gmail.com</li>
                    </ul>
                    <ul className='md:grid grid grid-cols-2 px-5 pt-20 py-10 text-zinc-500 text-sm text-center md:grid-cols-4 gap-4 md:pt-20 '>
                        <li>FACEBOOK</li>
                        <li>TWITTER</li>
                        <li>INSTAGRAM</li>
                        <li>LINKEDIN</li>
                    </ul>
                </div>
                <img src={ClientLogo} className='md:w-[700px] md:h-[500px] object-cover' alt="" />
            </section>
            <Client />

        </div>
      
    </>
  )
}

export default Contact
