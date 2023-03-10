import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Footer = () => {
    const options = {
        triggerOnce: true,
        thresold: 0.3
    }

    const [topoRef, topoView] = useInView(options)
    const [whaleRef, whaleView] = useInView(options)
    const [parentRef, parentView] = useInView(options)
    return (
        <footer className='bg-gradient-to-b from-gry to-blk flex flex-col w-full'>
            <motion.div initial={{ opacity: 0 }} ref={parentRef} animate={parentView ? { opacity: 1 } : {}} transition={{ duration: 1 }} className="flex items-center justify-center overflow-hidden h-[15rem] md:h-[25rem] relative">
                <motion.img initial={{ y: "40%", rotate: 0 }} ref={whaleRef} animate={whaleView ? { y: [0, 20, 0], rotate: [0, 3, 0] } : {}} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }} src="/whale.webp" alt="whale" className="mt-10 md:mt-20 relative z-10" />
                <motion.img initial={{ opacity: 0 }} ref={topoRef} animate={topoView ? { opacity: 0.4 } : {}} transition={{ duration: 0.7 }} src="/topog.webp" className="absolute opacity-40 h-full w-full object-cover" />
                <div className="bg-gradient-to-b from-gry to-transparent w-full h-[10rem] absolute top-0 z-20" />
            </motion.div>
            <div className="w-full border-t-wht border-t-[1px]">
                <div className="max-w-[1500px] mx-auto relative flex flex-col md:flex-row gap-y-2 justify-between items-center opacity-70 py-4 px-8 md:px-10">
                    <p>© Open Logic 2023</p>
                    <div className="flex items-center justify-center gap-x-4">
                        <p>FIND US HERE</p>
                        <BsTwitter className='cursor-pointer hover:text-accent transition-all ease-in-out duration-200' />
                        <FaTelegramPlane className='cursor-pointer hover:text-accent transition-all ease-in-out duration-200' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer