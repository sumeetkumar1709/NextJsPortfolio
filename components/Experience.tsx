import React from 'react'
import { motion } from 'framer-motion'
import Expcard from './Expcard'
type Props = {}

function Experience({}: Props) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#7CC7C2] text-2xl'>Experience</h3>

        <div className='w-full flex  space-x-5 overflow-x-scroll  p-10  snap-x snap-mandatory scrollbar scrollbar-track-[#fff]/20 scrollbar-thumb-[#7CC7C2]/80'>
            <Expcard/>
            <Expcard/>
            <Expcard/>
            <Expcard/>
        </div>

    </motion.div>

    

  )
}

export default Experience