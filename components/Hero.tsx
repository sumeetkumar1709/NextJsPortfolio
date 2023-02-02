import React from 'react'
import Image from 'next/image';
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import pic from '../images/pic.png';
import Link from 'next/link';

type Props = {}

function Hero({}: Props) {
    const [text,count] =useTypewriter({
        words :["<Hi, My name is Sumeet Kumar/>","<GuyWhoLovesCoffee/>","<ButLovesToCodeMore/>"],  
        loop:true,
        delaySpeed:1900,
    });


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={pic} alt=""/>
        <div className='z-20'>
          <h2 className='text-sm uppercase text-[#7CC7C2] pb-2 tracking-[15px]'>Web Developer</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
              <span className='mr-3'>{text}</span>
              <Cursor cursorColor={'#7CC7C2'}/>
          </h1>
        </div>
        
        <div className='pt-5 z-20'>
          <Link href="#about"><button className='hero-btn'>About</button></Link>
          <Link href="#skills"><button className='hero-btn'>Skills</button></Link>
          <Link href="#projects"><button className='hero-btn'>Projects</button></Link>
          <Link href="#contact"><button className='hero-btn'>Contact</button></Link>  
          
        </div>

    </div>
  )
}

export default Hero