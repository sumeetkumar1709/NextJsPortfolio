import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function Expcard({}: Props) {
  return (
    <article className='snap-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl-[900px] bg-[#7CC7C2]/10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200m overflow-hidden'>
        
        <motion.img initial={{y:-100,opacity:0}} transition={{duration:1.2}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className=' object-cover  w-24 h-24  ' src="https://i.ibb.co/2sLDTMP/logo2.webp" alt="logo2">
        </motion.img>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light '>Web Developer</h4>
            <p className='font-bold text-2xl mt-1'>The Mother's Cook</p>
            <div className='flex space-x-2 my-2'>
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
            </div>

            <p className='uppercase py-5 text-gray-300'>Started.... - Ended ....</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
            </ul>
        </div>

    </article>
  )
}

export default Expcard