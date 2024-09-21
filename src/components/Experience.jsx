import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";


const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                className='my-20 text-center text-4xl'
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}>
                Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((xp, i) => (
                    <article key={i} className='mb-8 flex flex-wrap lg:justify-center' >
                        <section className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{xp.year}</p>
                        </section>

                        <section className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {xp.role} -
                                <span className='text-sm text-purple-100'> {xp.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{xp.description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {xp.technologies.map((tech, i) => (
                                    <span key={i} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 border border-neutral-800'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Experience;