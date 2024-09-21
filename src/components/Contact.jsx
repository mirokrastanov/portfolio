import React from 'react';
import { CONTACT } from '../constants';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>

            <div className='text-center tracking-tighter'>
                <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4'>{CONTACT.phoneNo}</p>

                {/* TODO: Replace this with - form and email */}
                <Link to={''} target='_blank' className='border-b'>
                    {CONTACT.email}
                </Link>
            </div>
        </div>
    )
}

export default Contact;