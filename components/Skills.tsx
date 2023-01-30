import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#7CC7C2] text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-[#7CC7C2]/60 text-sm'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5 top-[10%] relative'>
            <Skill directionLeft={true}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
            <Skill directionLeft={true}/>
        </div>
    </motion.div>
  )
}

export default Skills