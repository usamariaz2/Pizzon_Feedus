import React from 'react'
import Contact from './Contact'
import Leftsec from './Leftsec'

export default function ContactSection() {
  return (
    <div id='table' className='min-h-screen container mx-auto flex justify-center'>
    <div className='flex-wrap sm:flex-nowrap flex items-center sm:gap-20 lg:gap-20'>
        <Leftsec/>
        <Contact/>
    </div>
    </div>
  )
}
