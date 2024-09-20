import React from 'react';
import aboutImg from '../assets/about5.png';
import { ABOUT_TEXT } from '../constants';

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>
                About
                <span className='text-neutral-500'> Me</span>
            </h2>

            <article className='flex flex-wrap'>
                <section className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img src={aboutImg} alt='about' className='rounded-2xl' />
                    </div>
                </section>

                <section className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tight'>{ABOUT_TEXT}</p>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default About;