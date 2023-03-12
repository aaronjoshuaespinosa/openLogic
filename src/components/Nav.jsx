import React, { useState, useEffect } from 'react'
import { navlinks } from '../constants'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
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

    const handleNav = () => {
        setActive(current => !current)
    }

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
                <RxHamburgerMenu className='text-accent text-2xl block lg:hidden' onClick={handleNav} />
            </div>
            <div className="top-0 bottom-0 right-0 h-screen fixed bg-blk/90 backdrop-blur-2xl z-30 transition-all ease-in-out duration-300 px-20 flex flex-col gap-y-5" style={active ? { transform: "translateX(0%)", opacity: 1 } : { transform: "translateX(100%)", opacity: 0 }}>
                <RxCross1 className='text-accent text-2xl block lg:hidden my-8 mx-auto' onClick={handleNav} />
                {navlinks.map((link, i) =>
                    <motion.a href={link.link} key={i} initial={{ opacity: 0, y: "-300%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }}><p className='cursor-pointer hover:text-accent transition-all ease-in-out duration-200 text-center text-xl' onClick={handleNav}>{link.name}</p></motion.a>
                )}
            </div>
        </nav>
    )
}

export default Nav