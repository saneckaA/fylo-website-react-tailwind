import React from 'react';
import illustration from '../images/illustration-stay-productive.png';
import arrow from '../images/icon-arrow.svg';

const ProductiveSection = () => {
    return (
        <section id='productive' className='bg-gray-50 dark:bg-darkBlue1'>
            <div className='dark:text-white flex flex-col space-y-7 text-center md:text-left items-center
            justify-center py-20 px-5 md:flex-row md:space-x-16 md:space-y-0'>
                <img src={illustration} alt='' className='w-96 px-5' />
                <div className='max-w-md flex flex-col items-center md:items-start space-y-3'>
                    <h3 className='text-3xl font-bold md:max-w-xs'>Stay productive, whereever you are</h3>
                    <p className=''>
                        Never let location be an issue when accessing your files.
                        Fylo has you covered for all of your file storage needs.
                    </p>
                    <p>
                        Securely share files and folders with friends, family and colleagues
                        for live collaboration. No email attachments required.
                    </p>
                    <div className='flex flex-row items-center space-x-1 '>
                        <a href='#' className='text-accentCyan font-bold border-b border-accentCyan'>
                            See how Fylo works
                        </a>
                        <div>
                        <img src={arrow} alt=''  />
                        </div>
                       
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductiveSection;