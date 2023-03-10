import React from 'react'
import { Nav } from '../components'
import { heroPartners } from '../constants'

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

                <div className='absolute bottom-10 left-0 right-0 w-fit mx-auto flex z-10 gap-x-10 flex-wrap justify-center'>
                    {heroPartners.map((partner, i) =>
                        <div className="flex gap-x-3 items-center" key={i}>
                            <div className="bg-accent/30 border-[1px] border-accent p-1 md:p-3 rounded-full">
                                <img src={partner.img} alt={partner.name} className="w-5 md:w-9" />
                            </div>

                            <h1 className='font-bold text-accent text-sm md:text-base'>{partner.name}</h1>
                        </div>
                    )}
                </div>
                <img src="/whale-hero.webp" alt="hero" className="absolute object-cover right-0 top-0 h-full z-0 opacity-40 md:opacity-100" />
                <div className='bg-accent w-80 h-80 rounded-full blur-[230px] absolute z-10 bottom-[-5rem] left-[-5rem] hidden md:block'></div>
            </main>
        </>
    )
}

export default Hero