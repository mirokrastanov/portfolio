import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavIconWrapper from './shared/NavIconWrapper';


const Footer = () => {
    // Responsive styles - popped out for HTML clarity
    const sub250 = {
        l: 'max-md-250:hidden',
        i: 'max-md-250:mx-auto max-md-250:flex-wrap',
    };
    const sub300 = {
        i: 'max-md-300:ml-6',
    };
    const sub500 = {
        l: 'max-md-500:mx-0',
        i: 'max-md-500:mr-0'
    };

    return (
        <footer className='relative flex items-center justify-between py-4'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt='logo' className={`text-white mx-2 h-10 ${sub250.l} ${sub500.l}`} />
            </div>

            <div className={`m-4 flex items-center justify-center gap-4 max-md-300:gap-x-3 max-md-250:gap-x-4 text-2xl ${sub250.i} ${sub300.i} ${sub500.i}`}>
                <NavIconWrapper Icon={FaLinkedin} tooltip='LinkedIn' custom='' footer={true} />
                <NavIconWrapper Icon={FaGithub} tooltip='GitHub' custom='' footer={true} />
                <NavIconWrapper Icon={TfiEmail} tooltip='Email' custom='' footer={true} />
                <NavIconWrapper Icon={BsFillPersonLinesFill} tooltip='Resume' custom='' footer={true} />
            </div>
        </footer>
    )
}

export default Footer;