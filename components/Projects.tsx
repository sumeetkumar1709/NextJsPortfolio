import React from 'react'
import {motion} from  'framer-motion';

type Props = {}

function Projects({}: Props) {
  const projects=[1,2,3,4,5];
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#7CC7C2] text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-30 scrollbar scrollbar-track-[#fff]/20 scrollbar-thumb-[#7CC7C2]/80 '>

          {/* Projects */}
          {projects.map((project,i)=>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen '>
              <motion.img
              initial={{
                y:-300,
                opacity:0,
              }}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}

              src="https://picsum.photos/id/237/400/400"/>

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-3xl font-semibold text-center'>
                  <span className='underline decoration-[#D1CAAD]/90'>Dummy Project {i+1} of {projects.length}</span>
                  :Chat App</h4>

                  <p className='text-lg text-center md:text-left'>Project Summary sadasdasdasdasdasdasdasdasdasd asd as as dsa das a sd asd as asd asd asd asd as ads dad as ads as dsa a
                  Project Summary sadasdasdasdasdasdasdasdasdasd asd as as dsa das a sd asd as asd asd asd asd as ads dad as ads as dsa a
                  </p>
              </div>
            </div>
          ))};
        </div>

        <div className='w-full absolute top-[30%] bg-[#7CC7C2]/10 left-0 h-[400px] -skew-y-12'>

        </div>
    </motion.div>
  )
}

export default Projects