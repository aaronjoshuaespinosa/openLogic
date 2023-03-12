import React from 'react'
import { services } from '../constants'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Services = () => {
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

    const [titleRef, titleView] = useInView(options)
    const [descRef, descView] = useInView(options)
    const [serviceRef, serviceView] = useInView(options)
    return (
        <main className='w-full bg-gry px-8 md:px-10 relative' id="services">
            <div className='max-w-[1500px] mx-auto pt-32 pb-3 flex flex-col gap-y-10 relative z-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-y-10'>
                    <motion.p initial={{ opacity: 0, x: "-100%" }} ref={titleRef} animate={titleView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className='max-w-[500px] font-climate text-4xl text-center md:text-left'>Explore <span className='text-accent'>why</span> you need Open<span className='text-accent'>Logic</span></motion.p>
                    <motion.p initial={{ opacity: 0, x: "100%" }} ref={descRef} animate={descView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className='max-w-[400px] text-sm opacity-70 text-center md:text-left'>Our services will aid you in making informed decisions. Our reliable information, tools and resources will put you on the road to success.</motion.p>
                </div>
                <motion.div className='flex flex-col md:flex-row gap-x-6 gap-y-6' variants={containerVariants} initial="hidden" ref={serviceRef} animate={`${serviceView ? "visible" : ""}`}>
                    {services.map((service, i) =>
                        <motion.div key={i} className="bg-blk p-8 rounded-[15px] flex flex-col gap-y-5 text-center items-center group hover:drop-shadow-hover transition-all ease-out duration-300 w-full" variants={childVariants}>
                            <p className='text-8xl group-hover:scale-[1.1] group-hover:rotate-[5deg] transition-all ease-in-out duration-300'>{service.icon}</p>
                            <h1 className='uppercase text-accent text-lg font-bold tracking-widest'>{service.label}</h1>
                            <p className='text-sm opacity-70'>{service.desc}</p>
                            <p className='pt-4 font-bold text-accent'>Price: <a href="" className='font-normal text-wht hover:underline'>{service.price}</a></p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
            <div className='w-[20rem] h-[20rem] bg-wht rounded-full blur-[220px] absolute right-0 top-40 opacity-80' />
        </main>
    )
}

export default Services