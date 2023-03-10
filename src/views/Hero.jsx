import React from 'react'
import { Nav } from '../components'

const Hero = () => {
    return (
        <>
            <Nav />
            <main className='min-h-screen px-8 md:px-10 flex items-center text-center md:text-left relative'>
                <div className='max-w-[1500px] mx-auto w-full h-full relative z-10'>
                    <div className='w-fit flex flex-col gap-y-5'>
                        <p className='text-accent font-bold text-base md:text-xl'>WELCOME, WE ARE</p>
                        <h1 className='font-climate text-6xl md:text-8xl'>OPEN <span className='text-accent'>LOGIC</span></h1>
                        <p className='opacity-70 text-sm md:text-lg max-w-[55rem]'>Our experience and expertise in the crypto industry have established us as a trusted partner that can guide both seasoned and novice investors through the constantly evolving landscape of cryptocurrency with confidence.</p>
                    </div>
                </div>
                <img src="/whale-hero.webp" alt="hero" className="absolute object-cover right-0 top-0 h-full z-0" />
            </main>
        </>
    )
}

export default Hero