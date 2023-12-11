import React from 'react';
import quotes from '../images/bg-quotes.png';
import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';


const TestimonialsSection = () => {
    return (
        <section id='testimonials' className='bg-gray-50'>
            <div className='container mx-auto px-6 pt-12 pb-80 md:px-32 md:pb-32 md:pt-20'>
                <div className='relative w-full flex flex-col space-y-6 md:flex-row 
                    items-center md:space-y-0 md:space-x-12'>
                    <img src={quotes} alt='' className='absolute left-1 -top-3 w-10 md:-top-16 md:w-20' />
                    <div className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
                        <p className='text-sm leading-5 md:text-lg'>
                            Fylo has improved our team productivity by an order of magnitude.
                            Since making the switch our team has become a well-oiled collaboration
                            machine.
                        </p>
                        <div className='flex flex-row space-x-4'>
                            <img src={profile1} alt='' className='w-10 h-10 rounded-full' />
                            <div className='flex flex-col space-y-1'>
                                <h5 className='text-sm font-semibold'>Satish Patel</h5>
                                <p className='text-xs font-extralight'>Founder & CEO</p>
                                <p className='text-xs font-extralight'>Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
                        <p className='text-sm leading-5 md:text-lg'>
                            Fylo has improved our team productivity by an order of magnitude.
                            Since making the switch our team has become a well-oiled collaboration
                            machine.
                        </p>
                        <div className='flex flex-row space-x-4'>
                            <img src={profile2} alt='' className='w-10 h-10 rounded-full' />
                            <div className='flex flex-col space-y-1'>
                                <h5 className='text-sm font-semibold'>Bruce McKenzie</h5>
                                <p className='text-xs font-extralight'>Founder & CEO</p>
                                <p className='text-xs font-extralight'>Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
                        <p className='text-sm leading-5 md:text-lg'>
                            Fylo has improved our team productivity by an order of magnitude.
                            Since making the switch our team has become a well-oiled collaboration
                            machine.
                        </p>
                        <div className='flex flex-row space-x-4'>
                            <img src={profile3} alt='' className='w-10 h-10 rounded-full' />
                            <div className='flex flex-col space-y-1'>
                                <h5 className='text-sm font-semibold'>Eva Boyd</h5>
                                <p className='text-xs font-extralight'>Founder & CEO</p>
                                <p className='text-xs font-extralight'>Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;