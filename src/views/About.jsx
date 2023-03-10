import React from 'react'

const About = () => {
    return (
        <main className='w-full bg-black/90 px-8 md:px-10' id="about">
            <div className='max-w-[1500px] mx-auto relative flex justify-end py-32'>
                <img src="https://ik.imagekit.io/xzgmktvzg/Open_Logic/bulb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678431311661" alt="bulb" className="w-[15rem] lg:w-[20rem] absolute opacity-50 lg:opacity-100 left-[-10rem] lg:left-0 top-0 bottom-0 my-auto drop-shadow-bulbGlow" />
                <div className="flex flex-col gap-y-5 w-[900px] relative z-10">
                    <p className='text-accent text-lg md:text-2xl font-bold'>— Who are we</p>
                    <h1 className='font-climate text-6xl'>About <span className='text-accent'>us</span></h1>
                    <p className='opacity-70 text-sm md:text-lg'>With years of experience in the cryptocurrency industry since 2017, I have established a wealth of knowledge and valuable connections. Over time, I have witnessed various marketing strategies emerge and fade away. As a result, I have a deep understanding of what works and what doesn't in this industry. Rest assured that if you collaborate with me, you will be in capable and trustworthy hands.</p>
                </div>
                <div className="w-40 h-40 rounded-full bg-accent absolute right-0 top-0 bottom-0 my-auto blur-[120px]"></div>
            </div>
        </main>
    )
}

export default About