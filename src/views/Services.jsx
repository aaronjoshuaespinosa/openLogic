import React from 'react'
import { services } from '../constants'

const Services = () => {
    return (
        <main className='w-full bg-gry'>
            <div className='max-w-[1500px] mx-auto'>
                <div>
                    <p>Explore <span>why</span> you need Open <span>Logic</span></p>
                    <p>Our services to make informed decisions with reliable information, tools, and resources for the cryptocurrency market.</p>
                </div>
                <div>
                    {services.map((service, i) =>
                        <div key={i}>
                            <h1>{service.label}</h1>
                            <p>{service.desc}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Services