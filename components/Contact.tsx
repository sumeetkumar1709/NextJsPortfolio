import React from 'react'
import {PhoneIcon, MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
  };

type Props = {}

function Contact({}: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href =`mailto:sumeetkumar1709@gmail.com?subject= ${formData.subject}&body=Hi, my name is ${formData.name} , ${formData.message}`
    };


  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#7CC7C2] text-2xl'>Skills</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>Let's <span className='underline decoration-[#D1CAAD]/90'>Talk</span></h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#7CC7C2] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+91-7992287051</p>
                </div>
                
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#7CC7C2] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Birla Institute Of Technology, Mesra</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#7CC7C2] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>sumeetkumar1709@gmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contact-input' type="text" />
                    <input {...register('email')} placeholder='Email' className='contact-input'  type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contact-input'  type="text" />
                <textarea {...register('message')}placeholder="Message" className='contact-input' />
                <button type="submit" className='bg-[#7CC7C2] py-5 px-10 rounded-md text-[#1f1f1f] font-bold text-lg'>Submit</button>
            </form>

        </div>


    </div>
  )
}

export default Contact