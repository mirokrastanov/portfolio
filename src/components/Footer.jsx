import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbMailFilled } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import NavIconWrapper from './shared/NavIconWrapper';
import { URLs } from '../constants';

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

    const handleNavBtnCLick = (e, tooltip) => {
        e.preventDefault();
        const URL = URLs[tooltip];
        window.open(URL, '_blank', 'noopener,noreferrer')
    };

    return (
        <footer className='relative flex items-center justify-between py-4'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt='logo' className={`text-white mx-2 h-10 ${sub250.l} ${sub500.l}`} />
            </div>

            <div className={`m-4 flex items-center justify-center gap-4 max-md-300:gap-x-3 max-md-250:gap-x-4 text-2xl ${sub250.i} ${sub300.i} ${sub500.i}`}>
                <NavIconWrapper Icon={FaLinkedin} tooltip='LinkedIn' footer={true}
                    custom='' handler={(e) => handleNavBtnCLick(e, 'LinkedIn')} />
                <NavIconWrapper Icon={FaGithub} tooltip='GitHub' footer={true}
                    custom='' handler={(e) => handleNavBtnCLick(e, 'GitHub')} />
                <NavIconWrapper Icon={TbMailFilled} tooltip='Email' custom='' footer={true}
                    incSize={true} handler={(e) => handleNavBtnCLick(e, 'Email')} />
                <NavIconWrapper Icon={FaFileDownload} tooltip='Resume' custom='' footer={true}
                    handler={(e) => handleNavBtnCLick(e, 'Resume')} />
            </div>
        </footer>
    )
}

export default Footer;