import React from 'react'

const EarlySection = () => {
    return (
        <section id='early' className='relative px-6 md:px-0 '>
            <div className='relative -mt-44 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center
        rounded-lg bg-gray-200 md:px-16'>
                <h5 className='text-2xl font-bold'>Get early access today</h5>
                <p>
                    It only takes a minute to sign up and out free starter tier is extremely
                    generous. If you have any questions, our support team would be happy
                    to help you.
                </p>
                <div className='flex flex-col md:flex-row items-start space-y-6 md:space-y-0
                md:space-x-6'>
                    <div className='w-full md:flex-1'>
                        <input className='w-full px-10 py-3 rounded-full focus:outline-none'
                        type='text'
                        placeholder='email@example.com' />
                    </div>
                    <button className='w-full p-3 px-6 rounded-full bg-accentCyan md:w-56
                    hover:scale-95'>Get Started For Free</button>
                </div>
            </div>
        </section>
    )
}

export default EarlySection;