import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';
import { motion } from "framer-motion";


const Education = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                className='my-20 text-center text-4xl'
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}>
                Education
            </motion.h1>
            <div>
                {EDUCATION.map((edu, i) => (
                    <article key={i} className='mb-8 flex flex-wrap md:justify-center' >
                        <motion.section
                            className='w-full md:w-1/4'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}>
                            <p className='mb-2 text-sm text-neutral-400'>{edu.year}</p>
                        </motion.section>

                        <motion.section
                            className='w-full max-w-xl md:w-3/4'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}>
                            <h6 className='mb-2 font-semibold tracking-wide'>
                                {edu.major} -
                                <span className='text-sm text-purple-100'> {edu.university}</span>
                            </h6>
                            <motion.p
                                className='mb-4 text-neutral-400 tracking-wide'
                                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1, delay: 0.3 }}>
                                {edu.degree}
                            </motion.p>
                            <div className='flex flex-wrap gap-2'>
                                {edu.notable.map((notable, i) => (
                                    <motion.span key={i} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-pink-500 border border-neutral-800 mb-4'
                                        whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 1, delay: Number(`0.${2 + i}`) }}>
                                        {notable}
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

export default Education;