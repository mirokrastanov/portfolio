import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";


const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                className='my-20 text-center text-4xl'
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}>
                Projects
            </motion.h2>

            <div>
                {PROJECTS.map((p, i) => (
                    <article key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.section
                            className='w-full lg:w-1/4'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}>
                            <img src={p.image} alt={p.title} width={150} height={150} className='mb-6 rounded-xl' />
                        </motion.section>
                        <motion.section
                            className='w-full max-w-xl lg:w-3/4'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}>
                            <h6 className='mb-2 font-semibold'>{p.title}</h6>
                            <h6 className='mb-4 text-neutral-400'>{p.description}</h6>

                            <div className='flex flex-wrap gap-2'>
                                {p.technologies.map((tech, i) => (
                                    <motion.span key={i} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 border border-neutral-800'
                                        whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 1, delay: Number(`0.${2 + i}`) }}>
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.section>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Projects;