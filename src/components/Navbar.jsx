import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Navbar = () => {
    return (<>
        <nav className='mb-20 flex items-center justify-between py-4'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt='logo' className='h-12' />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <TfiEmail />
                <BsFillPersonLinesFill />
            </div>
        </nav>

    </>)
}

export default Navbar;