import React from 'react'
import { partners } from '../constants'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Partners = () => {
    const containerVariants = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // sets a 0.1 second delay between each child animation
                delayChildren: 0.2, // sets a 0.2 second delay before the first child animation starts
                delay: 0.2
            }
        },
        hidden: {
            opacity: 0
        }
    };

    const childVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        },
        hidden: {
            opacity: 0,
            y: "50%"
        },
    };

    const options = {
        triggerOnce: true,
        thresold: 0.3
    }

    const [partnerRef, partnerView] = useInView(options)
    return (
        <main className='w-full px-8 md:px-10 relative'>
            <div className='max-w-[1500px] mx-auto pb-32 pt-3 flex flex-col gap-y-10 relative z-10'>
                {/* <motion.h1 initial={{ opacity: 0, y: "100%" }} ref={titleRef} animate={titleView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className='font-climate text-4xl text-center'>OUR SERVICES</motion.h1> */}
                <motion.div className='flex flex-col md:flex-row gap-x-6 gap-y-6' variants={containerVariants} initial="hidden" ref={partnerRef} animate={`${partnerView ? "visible" : ""}`}>
                    {partners.map((partner, i) =>
                        <motion.div key={i} className="bg-blk p-8 rounded-[15px] flex flex-col gap-y-5 text-center items-center justify-center group hover:drop-shadow-hover transition-all ease-out duration-300 w-full h-auto lg:h-[23rem]" variants={childVariants}>
                            <img src={partner.img} alt={partner.name} className="w-20 h-20 group-hover:scale-[1.1] group-hover:rotate-[5deg] transition-all ease-in-out duration-300" />
                            <h1 className='uppercase text-accent text-lg font-bold tracking-widest'>{partner.name}</h1>
                            <p className='text-sm opacity-70'>{partner.desc}</p>
                            <p className='pt-4 font-bold text-accent'>Price: <a href="" className='font-normal text-wht hover:underline'>{partner.price}</a></p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
            <div className='w-[20rem] h-[20rem] bg-accent rounded-full blur-[150px] absolute left-0 top-0 opacity-50' />
        </main>
    )
}

export default Partners