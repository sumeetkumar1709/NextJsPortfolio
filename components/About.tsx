import React from 'react'
import {motion} from "framer-motion";
import pic from '../images/about-image.png';
import Image from 'next/image';
type Props = {}

function About({}: Props) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#7CC7C2] text-2xl'>About</h3>
        <motion.img initial={{x:-200,opacity:0,}} transition={{duartion:1.2,}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover  md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' src="https://i.ibb.co/sKgxbz6/about-image.png" alt=""/>   
           
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#7CC7C2]/70'>little</span> background</h4>
            <p className='text-base'>I'm Sumeet a 3rd year undergraduate at Birla Institute of Technology, Mesra. My interest lies in Competitive Programming, Data Structure, Algorithms, and Full Stack Web Development. Also, keen to learn about Machine Learning and Python. Currently, I am mostly active in
            various coding platforms like Codeforces, GeeksForGeeks, Codechef, and LeetCode.</p>
        </div>
    </motion.div>
  )
}

export default About