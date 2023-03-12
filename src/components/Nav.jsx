import React, { useState, useEffect } from 'react'
import { navlinks } from '../constants'
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion';

const Nav = () => {
    const [scrolled, setScrollPosition] = useState(0)
    const [active, setActive] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= 100) {
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
        <nav className={`w-full h-auto px-8 sm:px-10 py-3 fixed z-20 transition-all ease-in-out duration-200 ${scrolled ? "bg-blk/60 backdrop-blur" : ""}`}>
            <div className='flex max-w-[1500px] mx-auto justify-between items-center'>
                <a href='#'><motion.img initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='w-14 md:w-20' src="/logo.webp" alt="logo" /></a>
                <div className='gap-x-[4rem] font-bold hidden lg:flex'>
                    {navlinks.map((link, i) =>
                        <motion.a href={link.link} key={i} initial={{ opacity: 0, y: "-300%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }}><p className='cursor-pointer hover:text-accent transition-all ease-in-out duration-200'>{link.name}</p></motion.a>
                    )}
                </div>
                <RxHamburgerMenu className='text-accent text-2xl block lg:hidden' />
            </div>
        </nav>
    )
}

export default Nav