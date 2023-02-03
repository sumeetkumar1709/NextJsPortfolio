// @ts-nocheck
import React from 'react'
import {motion} from  'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  projects:Project[];
}

function Projects({projects}: Props) {
  // const projects=[1,2,3,4,5];
  //console.log(projects);
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
            <div key={project._id} className='w-screen 
            flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen '>
              <motion.img
              initial={{
                y:-300,
                opacity:0,
              }}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              className="h-[250px] w-[100%] object-contain"
               src={urlFor(project?.profilePic).url()}
              />

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-3xl font-semibold text-center'>
                  <span className='underline decoration-[#D1CAAD]/90'>Project {i+1} of {projects.length}</span>
                  : {project.title}</h4>

                  <div className='flex items-center space-x-2 justify-center'>
                    {project.technologies.map(tech=>(
                      <img className='h-10 w-10' key={tech._id} src={urlFor(tech.image).url()}/>
                    ))}

                  </div>
                  
                  <p className='text-[20px] text-center md:text-left'>
                    {project.summary}
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