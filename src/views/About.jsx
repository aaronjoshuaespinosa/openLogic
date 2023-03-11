import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'

const About = () => {
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
            x: 250
        },
    };

    const [light, setLight] = useState(false)
    const lightSwitch = () => {
        setLight(current => !current)
    }

    const options = {
        triggerOnce: true,
        thresold: 0.3
    }

    const [bulbRef, bulbView] = useInView(options)
    const [aboutRef, aboutView] = useInView(options)
    const [descRef, descView] = useInView(options)

    return (
        <main className='w-full bg-black/90 px-8 md:px-10' id="about">
            <div className='max-w-[1500px] mx-auto relative flex justify-end py-32'>
                {/* bulb */}
                <Parallax translateY={[20, -30]} className="border-1 w-full absolute left-[-10rem] lg:left-0 top-0 bottom-0 my-auto z-10">
                    <motion.img initial={{ scale: 0.1, rotate: -25 }} ref={bulbRef} animate={bulbView ? { scale: 1, rotate: 0 } : {}} transition={{ duration: 0.5 }} src="/bulb.webp" alt="bulb" className={`w-[15rem] lg:w-[20rem] opacity-50 lg:opacity-100 drop-shadow-bulbGlow z-10 cursor-pointer transition-all ease-out duration-300 ${light ? "drop-shadow-none" : ""}`} onClick={lightSwitch} />
                </Parallax>

                {/* about details */}
                <motion.div className="flex flex-col gap-y-5 w-[900px] relative z-10" variants={containerVariants} initial="hidden" ref={aboutRef} animate={`${aboutView ? "visible" : ""}`}>
                    <motion.p className='text-accent text-lg md:text-2xl font-bold' variants={childVariants}>— Who are we</motion.p>
                    <motion.h1 className='font-climate text-6xl' variants={childVariants}>About <span className='text-accent'>us</span></motion.h1>
                    <motion.p className='opacity-70 text-sm md:text-lg' initial={{ opacity: 0, x: 250 }} ref={descRef} animate={descView ? { opacity: 0.7, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>We have been involved in the crypto industry in a multitude of compacities since 2015. Since then, we have established a wealth of knowledge and valuable connections. Over time, we have witnessed  various marketing strategies that have emerged and faded. As a result, we have a deep understanding of what works and what doesn't. Rest assured that if you collaborate with us, you will be in capable and trustworthy hands.</motion.p>
                </motion.div>
                <div className="w-40 h-40 rounded-full bg-accent absolute right-0 top-0 bottom-0 my-auto blur-[120px]"></div>
            </div>
        </main >
    )
}

export default About