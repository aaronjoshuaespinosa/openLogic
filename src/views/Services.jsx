import React from 'react'
import { services } from '../constants'

const Services = () => {
    return (
        <main className='w-full bg-gry px-8 md:px-10 relative' id="services">
            <div className='max-w-[1500px] mx-auto py-32 flex flex-col gap-y-10 relative z-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-y-10'>
                    <p className='max-w-[500px] font-climate text-4xl text-center md:text-left'>Explore <span className='text-accent'>why</span> you need Open <span className='text-accent'>Logic</span></p>
                    <p className='max-w-[400px] text-sm opacity-70 text-center md:text-left'>Our services to make informed decisions with reliable information, tools, and resources for the cryptocurrency market.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-x-6 gap-y-6'>
                    {services.map((service, i) =>
                        <div key={i} className="bg-blk p-8 rounded-[15px] flex flex-col gap-y-5 text-center items-center">
                            <p className='text-8xl'>{service.icon}</p>
                            <h1 className='uppercase text-accent text-lg font-bold tracking-widest'>{service.label}</h1>
                            <p className='text-sm opacity-70'>{service.desc}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-[20rem] h-[20rem] bg-wht rounded-full blur-[220px] absolute right-0 top-40 opacity-80' />
        </main>
    )
}

export default Services