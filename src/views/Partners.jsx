import React from 'react'
import { partners } from '../constants'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Partners = () => {
    const options = {
        triggerOnce: true,
        thresold: 0.3
    }

    const [titleRef, titleView] = useInView(options)
    const [partnerRef, partnerView] = useInView(options)
    return (
        <main className='w-full px-8 md:px-10 relative' id="partners">
            <div className='max-w-[1500px] mx-auto py-32 flex flex-col gap-y-10 relative z-10'>
                <motion.h1 initial={{ opacity: 0, y: "100%" }} ref={titleRef} animate={titleView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className='font-climate text-4xl text-center'>OUR PARTNERS</motion.h1>
                <div className='flex flex-col lg:flex-row gap-x-6 gap-y-6 items-center justify-center'>
                    {partners.map((partner, i) =>
                        <motion.div key={i} initial={{ opacity: 0, y: "100%" }} ref={partnerRef} animate={partnerView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="bg-blk p-8 rounded-[15px] flex flex-col md:flex-row gap-y-5 gap-x-5 items-center justify-center h-auto lg:h-[10rem]">
                            <img src={partner.img} alt={partner.name} className="w-20 h-20" />
                            <div className="text-center md:text-left flex flex-col gap-y-1">
                                <h1 className='uppercase text-accent text-lg font-bold tracking-widest'>{partner.name}</h1>
                                <p className='max-w-[400px]'>{partner.desc}</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
            <div className='w-[20rem] h-[20rem] bg-accent rounded-full blur-[150px] absolute left-0 top-0 opacity-50' />
        </main>
    )
}

export default Partners