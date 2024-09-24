import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT } from '../constants';
import { Link } from 'react-router-dom';
import { TbMailFilled } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, formData,
            { publicKey: VITE_PUBLIC_KEY })
            .then(
                (res) => {
                    setSubmitted(true);
                    setLoading(false);
                    toast.success('Submitted successfully!');
                    console.log('SUCCESS!', res.status, res.text);
                },
                (err) => {
                    setLoading(false);
                    toast.error(err);
                    console.log('FAILED...', err);
                },
            );
    };


    return (
        <div className='border-b border-neutral-900 mt-20 pb-10'>
            <motion.h2
                className='my-10 text-center text-4xl'
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}>
                Get in Touch
            </motion.h2>

            <article className='contact-form-ctr flex justify-center items-center p-4 max-md-500:px-0'>
                {!submitted && <form onSubmit={handleSubmit}
                    className='flex flex-col max-w-[600px] w-full'
                >
                    <div className='pb-16'>
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
                            Submit the form below or shoot me an email - <TbMailFilled className='inline text-2xl' />
                            <span className='ml-1 border-b-2 border-pink-600'>
                                <Link to={`mailto:${CONTACT.email}`}>{CONTACT.email}</Link>
                            </span>
                        </motion.p>
                        <motion.input
                            type='text' placeholder='Name' name='name' id='form-name' autoComplete='off'
                            value={formData.name} onChange={handleChange} required
                            className='p-2 bg-slate-200 w-full rounded-md text-black outline-none active:outline-none'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        />
                        <motion.input
                            type='email' placeholder='Email' name='email' id='form-email' autoComplete='off'
                            value={formData.email} onChange={handleChange} required
                            className='my-4 p-2 bg-slate-200 w-full rounded-md text-black outline-none active:outline-none'
                            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                        <motion.textarea
                            name='message' placeholder='Message' id='form-msg' rows='7'
                            value={formData.message} onChange={handleChange} required
                            className='w-full p-2 bg-slate-200 rounded-md text-black outline-none active:outline-none'
                            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 80 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        ></motion.textarea>
                        {!loading && <motion.button type='submit'
                            className={`text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-8 mx-auto flex items-center rounded-md`}
                            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5, delay: 1 }}>
                            Let's Collaborate
                        </motion.button>}
                        {loading && <div
                            className='w-20 h-[52px] px-4 py-3 mt-8 mx-auto flex justify-center items-center'>
                            <div id='loader-1' className='animate-spin rounded-full h-8 w-8 border-t-2 border-white'></div>
                        </div>}
                    </div>
                </form>}
                {submitted && <section className='relative flex flex-col justify-center items-center gap-8 border border-neutral-900 rounded-xl max-w-[600px] w-full py-8 min-h-[450px] my-16'>
                    <div className='absolute w-full h-full top-0 left-0 bg-gray-700 z-[-1] rounded-xl opacity-5'></div>
                    <FaCheckCircle className='text-6xl text-green-400' />
                    <h2 className='text-3xl font-bold'>Thank You!</h2>
                    <p className='text-lg'>The form was submitted successfully!</p>
                </section>}
            </article>
        </div>
    )
}

export default Contact;
