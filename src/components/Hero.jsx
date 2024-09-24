import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/profile.png';
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay, }, },
});

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 lg:min-h-[calc(100vh-200px)]'>
            <article className='flex flex-wrap'>
                <section className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start lg:pl-8'>
                        <motion.h1
                            className='pb-8 text-6xl font-thin lg:mt-16 lg:text-[4.5rem]'
                            variants={container(0)} initial={`hidden`} whileInView={`visible`}>
                            Miro Krastanov
                        </motion.h1>
                        <motion.span
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
                            variants={container(0.5)} initial={`hidden`} whileInView={`visible`}>
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            className='my-2 max-w-xl py-6 font-light tracking-tight'
                            variants={container(1)} initial={`hidden`} whileInView={`visible`}>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </section>

                <section className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center rounded-2xl p-1'>
                        <motion.img
                            src={profilePic} alt='Miro Krastanov' className='rounded-2xl opacity-85'
                            initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Hero;