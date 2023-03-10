import React from 'react'
import { Nav } from '../components'
import { heroPartners } from '../constants'
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // sets a 0.1 second delay between each child animation
                delayChildren: 0.2, // sets a 0.2 second delay before the first child animation starts
            }
        },
        hidden: {
            opacity: 0
        }
    };

    const childVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        },
        hidden: {
            opacity: 0,
            x: -250
        },
    };

    return (
        <>
            <Nav />
            <main className='min-h-screen px-8 md:px-10 flex items-center text-center md:text-left relative'>
                <div className='max-w-[1500px] mx-auto w-full h-full relative z-10'>
                    <motion.div className='w-fit flex flex-col gap-y-5' variants={containerVariants} initial="hidden" animate="visible">
                        <motion.p className='text-accent font-bold text-base md:text-xl' variants={childVariants}>WELCOME, WE ARE</motion.p>
                        <motion.h1 className='font-climate text-6xl md:text-8xl' variants={childVariants}>OPEN <span className='text-accent'>LOGIC</span></motion.h1>
                        <motion.p className='opacity-70 text-sm md:text-lg max-w-[55rem]' initial={{ opacity: 0, x: -250 }} animate={{ opacity: 0.7, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>Our experience and expertise in the crypto industry have established us as a trusted partner that can guide both seasoned and novice investors through the constantly evolving landscape of cryptocurrency with confidence.</motion.p>
                    </motion.div>
                </div>

                <div className='absolute bottom-10 left-0 right-0 w-fit mx-auto flex z-10 gap-x-10 flex-wrap justify-center'>
                    {heroPartners.map((partner, i) =>
                        <motion.div className="flex gap-x-3 items-center" key={i} initial={{ opacity: 0, y: "200%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                            <div className="bg-accent/30 border-[1px] border-accent p-1 md:p-3 rounded-full">
                                <img src={partner.img} alt={partner.name} className="w-5 md:w-9" />
                            </div>

                            <h1 className='font-bold text-accent text-sm md:text-base'>{partner.name}</h1>
                        </motion.div>
                    )}
                </div>
                <motion.img initial={{ opacity: 0, x: "50%" }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} src="/whale-hero.webp" alt="hero" className="absolute object-cover right-0 top-0 h-full z-0 opacity-40 lg:opacity-100" />
                <div className='bg-accent w-80 h-80 rounded-full blur-[230px] absolute z-10 bottom-[-5rem] left-[-5rem] hidden md:block'></div>
            </main>
        </>
    )
}

export default Hero