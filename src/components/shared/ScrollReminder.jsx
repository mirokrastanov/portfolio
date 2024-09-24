import React, { useEffect, useState } from 'react';
import { CgScrollV, CgMouse } from "react-icons/cg";


const ScrollReminder = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) setHasScrolled(true);
            else setHasScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className='absolute bg-transparent right-0 top-1/2 -translate-y-1/2'>
            {!hasScrolled && <CgScrollV className='text-white top-0 right-0 text-4xl animate-bounce lg:text-6xl' />}
        </div>
    )
}

export default ScrollReminder;