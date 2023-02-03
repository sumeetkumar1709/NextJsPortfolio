import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { PageInfo,Skill,Project } from '@/typings'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'


type Props={
  pageInfo:PageInfo;
  skills:Skill[];
  projects:Project[];
}



export default function Home({pageInfo,projects,skills}:Props) {

  return (
    <div className='bg-gray-900 text-white h-screen snap-y  snap-mandatory overflow-scroll z-0 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-[#fff]/20 scrollbar-thumb-[#7CC7C2]/80'>
      <Head>
        <title>{pageInfo?.name
        } | Portfolio</title>
      </Head>

      {/*Header */}
      <Header/>
      
      {/* Banner */}
      <section id="hero" className='snap-center'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      {/* <section id="experience" className='snap-center'>
        <Experience />
      </section> */}
      
      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <Contact/>
      </section>

    </div>
  )
};

export const getStaticProps :GetStaticProps<Props> = async()=>{
    const pageInfo:PageInfo = await fetchPageInfo();
    const skills:Skill[] = await fetchSkills();
    const projects:Project[] = await fetchProjects();


    return {
      props:{
        pageInfo,
        skills,
        projects,
      },
      revalidate:10,
    }
}
