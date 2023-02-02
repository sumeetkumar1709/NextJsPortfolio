import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        
        <motion.div initial={{x:-500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{ duration:1.5,}}className='flex flex-row items-center'>
            {/* Icons */}
            <SocialIcon  fgColor='#9CA4B2' bgColor='transparent' url="https://github.com/sumeetkumar1709/" className="hover:opacity-80"/>
            <SocialIcon fgColor='#9CA4B2' bgColor='transparent' url="https://www.linkedin.com/in/sumeet--kumar//"className="hover:opacity-80"/>
            <SocialIcon fgColor='#9CA4B2' bgColor='transparent' url="https://www.instagram.com/cool_sumeet_/?hl=en/"className="hover:opacity-80"/>

        </motion.div>
      <Link href="#contact">
        <motion.div initial={{x:500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{ duration:1,}}  className='flex flex-row items-center cursor-pointer'>
            <SocialIcon fgColor='#9CA4B2' bgColor='transparent' className='cursor-pointer hover:opacity-80' network='email' />
            <p className='uppercase hidden md:flex text-sm text-[#9CA4B2] hover:opacity-80' >Get In Touch</p>
        </motion.div>
        </Link>
    </header>
  )
}

export default Header