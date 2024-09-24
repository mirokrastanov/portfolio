import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";
import { FaGithub, FaPlay } from 'react-icons/fa';


const Projects = () => {
    const handleBtns = (e, link) => {
        e.preventDefault();
        window.open(link, '_blank', 'noopener,noreferrer');
    };

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
                    <article key={i} className='mb-8 pb-8 border-b border-neutral-900 flex flex-wrap md:justify-center'>
                        <motion.section
                            className='w-full md:w-1/4'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}>
                            <img src={p.image} alt={p.title} className='mb-6 rounded-xl lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] max-md:w-full max-md:max-w-[300px] max-md:mx-auto max-md:h-auto max-md-300:w-full' />
                        </motion.section>
                        <motion.section
                            className='w-full max-w-xl md:w-3/4'
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
                            <div className='mt-4 flex flex-wrap w-full justify-center items-center gap-4'>
                                <motion.button onClick={(e) => handleBtns(e, p.demo)}
                                    className={`text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-2 py-2 flex items-center rounded-md transition-all`}
                                    whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}>
                                    <FaPlay className='mr-2' /> Try Demo
                                </motion.button>
                                <motion.button onClick={(e) => handleBtns(e, p.code)}
                                    className={`text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-2 py-2 flex items-center rounded-md transition-all`}
                                    whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}>
                                    <FaGithub className='mr-2 text-xl' /> View Code
                                </motion.button>
                            </div>
                        </motion.section>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Projects;