import React from 'react'
import { partners } from '../constants'

const Partners = () => {
    return (
        <main>
            <div className='max-w-[1500px] mx-auto'>
                <h1>OUR PARTNERS</h1>
                <div>
                    {partners.map((partner, i) =>
                        <div className="">
                            <img src={partner.img} alt={partner.name} className="w-10" />
                            <div className="">
                                <h1>{partner.name}</h1>
                                <p>{partner.desc}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Partners