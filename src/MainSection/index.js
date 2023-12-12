import React from 'react';
import intro from '../images/illustration-intro.png';

const MainSection = () => {
    return (
        <section id='main' className='bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom'>
            <div className='dark:text-white mx-auto container flex flex-col items-center space-y-10 px-6 text-center 
            md:pt-20 pb-52'>
                <img src={intro} alt='' className='mx-auto' />
                <h1 className='font-bold mx-auto text-3xl md:text-4xl max-w-2xl text-center
                leading-normal'>
                    All your files in one secure location, assessible anywhere.
                </h1>
                <p className='max-w-sm mx-auto text-sm md:max-w-xl md:text-lg text-center'>
                    Fylo stores all your most important files in one secure location.
                    Access theme wherever you need, share and collaborate with friends,
                    family and co-workers.
                </p>
                <button className='bg-accentCyan text-white rounded-full py-2 px-14 '>
                    Get Started
                </button>
            </div>

        </section>
    )
}

export default MainSection;