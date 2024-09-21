import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/profile.png';

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <article className='flex flex-wrap'>
                <section className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl font-thin lg:mt-16 lg:text-[4.9rem]'>
                            Miro Krastanov
                        </h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</p>
                    </div>
                </section>

                <section className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center rounded-2xl p-1'>
                        <img src={profilePic} alt='Miro Krastanov' className='rounded-2xl opacity-85' />
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Hero;