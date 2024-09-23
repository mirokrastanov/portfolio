import React from 'react';
import { CONTACT } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20 mt-20 max-md-500:pb-10'>
            <motion.h2
                className='my-10 text-center text-4xl'
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}>
                Get in Touch
            </motion.h2>

            <article className='contact-form-ctr flex justify-center items-center p-4 max-md-500:px-0'>
                <form
                    action='https://getform.io/f/awngzmvb' method='POST'
                    className='flex flex-col max-w-[600px] w-full'
                >
                    <div className=''>
                        <motion.p
                            className='text-3xl font-bold inline-block border-b-4 border-pink-600 text-neutral-300'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}>
                            Contact
                        </motion.p>
                        <motion.p
                            className='text-neutral-300 py-4'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1, delay: 0.2 }}>
                            Submit the form below or shoot me an email -
                            <span className='ml-1 border-b-2 border-pink-600'>
                                <Link to={`mailto:${CONTACT.email}`}>{CONTACT.email}</Link>
                            </span>
                        </motion.p>
                        <motion.input
                            type='text' placeholder='Name' name='name' id='form-name' autoComplete='off'
                            className='p-2 bg-slate-200 w-full rounded text-black outline-none active:outline-none'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        />
                        <motion.input
                            type='email' placeholder='Email' name='email' id='form-email' autoComplete='off'
                            className='my-4 p-2 bg-slate-200 w-full rounded text-black outline-none active:outline-none'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                        <motion.textarea
                            name='message' placeholder='Message' id='form-msg' rows='10'
                            className='w-full p-2 bg-slate-200 rounded text-black outline-none active:outline-none'
                            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 80 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        ></motion.textarea>
                        <motion.button type='submit'
                            className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-8 mx-auto flex items-center rounded'
                            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5, delay: 1 }}>
                            Let's Collaborate
                        </motion.button>
                    </div>
                </form>
            </article>
        </div>
    )
}

export default Contact;




// SIMPLE STRUCTURE
{/* <div className='border-b border-neutral-900 pb-20 mt-20'>
    <motion.h2
        className='my-10 text-center text-4xl'
        whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}>
        Get in Touch
    </motion.h2>

    <div className='text-center tracking-tighter'>
        <motion.p
            className='my-4'
            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}>
            {CONTACT.address}
        </motion.p>
        <motion.p
            className='my-4'
            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}>
            {CONTACT.phoneNo}
        </motion.p>

        <Link to={''} target='_blank' className='border-b'>
            {CONTACT.email}
        </Link>
    </div>
</div> */}