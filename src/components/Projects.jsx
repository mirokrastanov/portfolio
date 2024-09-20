import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>Projects</h2>

            <div className=''>
                {PROJECTS.map((p, i) => (
                    <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <img src={p.image} alt={p.title} width={150} height={150} className='mb-6 rounded-xl' />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{p.title}</h6>
                            <h6 className='mb-4 text-neutral-400'>{p.description}</h6>

                            <div className='flex flex-wrap gap-2'>
                                {p.technologies.map((tech, i) => (
                                    <span key={i} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 border border-neutral-800'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;