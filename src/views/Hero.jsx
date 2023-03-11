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
                        <motion.p className='text-accent font-bold text-base md:text-xl' variants={childVariants}>WELCOME TO</motion.p>
                        <motion.div className='flex flex-col lg:flex-row gap-x-4 font-climate text-6xl md:text-8xl' variants={childVariants}>
                            <p className='cursor-pointer hover:drop-shadow-whiteGlow transition-all ease-out duration-300'>OPEN</p>
                            <span className='text-accent cursor-pointer hover:drop-shadow-accentGlow transition-all ease-out duration-300'>LOGIC</span>
                        </motion.div>
                        <motion.p className='opacity-70 text-sm md:text-lg max-w-[55rem]' initial={{ opacity: 0, x: -250 }} animate={{ opacity: 0.7, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>We are long established conglomerate that specializes in the crypto industry. We have established ourselves as a trusted partner that can guide both seasoned and novice investors through the constantly evolving landscape of cryptocurrency with confidence.</motion.p>
                        <motion.button initial={{ opacity: 0, x: -250 }} animate={{ opacity: 0.7, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className='border-[1px] border-accent bg-accent/20 rounded-[5px] py-3 px-5 w-full md:w-fit hover:bg-accent/40 transition-all ease-out duration-300'>Contact Now</motion.button>
                    </motion.div>
                </div>

                <div className='absolute bottom-3 md:bottom-10 left-0 right-0 w-fit mx-auto flex z-10 gap-x-10 flex-wrap justify-center'>
                    {heroPartners.map((partner, i) =>
                        <motion.div className="flex gap-x-3 items-center py-1 group cursor-pointer" key={i} initial={{ opacity: 0, y: "200%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                            <div className="bg-accent/20 border-[1px] border-accent p-1 md:p-3 rounded-full group-hover:bg-accent/40 group-hover:rotate-[-10deg] group-hover:scale-[1.1] transition-all ease-out duration-300">
                                <p className="text-lg md:text-2xl" style={{ color: `${partner.color}` }}>{partner.img}</p>
                            </div>

                            <h1 className='font-bold text-accent text-sm md:text-base group-hover:text-wht/70 transition-all ease-out duration-300'>{partner.name}</h1>
                        </motion.div>
                    )}
                </div>
                <motion.img initial={{ opacity: 0, x: "50%" }} animate={{ opacity: 0.4, x: 0 }} transition={{ duration: 0.7 }} src="/hero.webp" alt="hero" className="absolute object-cover right-0 top-0 h-full z-0 opacity-40 lg:opacity-100" />
                <div className='bg-accent w-80 h-80 rounded-full blur-[230px] absolute z-10 bottom-[-5rem] left-[-5rem] hidden md:block'></div>
            </main>
        </>
    )
}

export default Hero