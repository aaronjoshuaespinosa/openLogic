import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b from-gry to-blk flex flex-col w-full'>
            <div className="flex items-center justify-center overflow-hidden h-[15rem] md:h-[25rem] relative">
                <img src="/whale.webp" alt="whale" className="mt-10 md:mt-20 relative z-10" />
                <img src="/topog.webp" className="absolute opacity-40 h-full w-full object-cover" />
                <div className="bg-gradient-to-b from-gry to-transparent w-full h-[10rem] absolute top-0 z-20"/>
            </div>
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