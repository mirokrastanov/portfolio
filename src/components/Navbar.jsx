import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Navbar = () => {
    // Responsive styles - popped out for HTML clarity
    const sub250 = {
        l: 'max-md-250:absolute max-md-250:top-2 max-md-250:left-1/2 max-md-250:-translate-x-1/2 max-md-250:pr-2',
        i: 'max-md-250:mt-14 max-md-250:mx-auto max-md-250:flex-wrap',
    };
    const sub300 = {
        i: 'max-md-300:ml-6',
    };
    const sub500 = {
        l: 'max-md-500:mx-0',
        i: 'max-md-500:mr-0'
    };

    return (
        <nav className='mb-20 flex items-center justify-between py-4'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt='logo' className={`mx-2 h-10 ${sub250.l} ${sub500.l}`} />
            </div>

            <div className={`m-8 flex items-center justify-center gap-4 text-2xl ${sub250.i} ${sub300.i} ${sub500.i}`}>
                <FaLinkedin />
                <FaGithub />
                <TfiEmail />
                <BsFillPersonLinesFill />
            </div>
        </nav>
    )
}

export default Navbar;