import React from 'react';
import { CONTACT } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20 mt-20'>
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

                {/* TODO: Replace this with - form and email */}
                <Link to={''} target='_blank' className='border-b'>
                    {CONTACT.email}
                </Link>
            </div>
        </div>
    )
}

export default Contact;