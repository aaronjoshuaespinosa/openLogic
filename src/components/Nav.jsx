import React, { useState, useEffect } from 'react'
import { navlinks } from '../constants'
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    const [scrolled, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= 50) {
            setScrollPosition(true);
        } else {
            setScrollPosition(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`w-full h-auto px-8 sm:px-10 py-3 fixed z-20 transition-all ease-in-out duration-200 ${scrolled ? "bg-blk/60 backdrop-blur-sm" : ""}`}>
            <div className='flex max-w-[1500px] mx-auto justify-between items-center'>
                <img className='w-14 md:w-20' src="https://ik.imagekit.io/xzgmktvzg/Open_Logic/logo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678433444180" alt="logo" />
                <div className='gap-x-[4rem] font-bold hidden lg:flex'>
                    {navlinks.map((link, i) =>
                        <a href={link.link} key={i}><p className='cursor-pointer hover:text-accent'>{link.name}</p></a>
                    )}
                </div>
                <RxHamburgerMenu className='text-accent text-2xl block lg:hidden' />
            </div>
        </nav>
    )
}

export default Nav