import React from 'react';
import access from '../images/icon-access-anywhere.svg';
import file from '../images/icon-any-file.svg';
import colab from '../images/icon-collaboration.svg';
import security from '../images/icon-security.svg';


const FeaturesSection = () => {
    return (
        <section id='features' className='bg-gray-50 dark:bg-darkBlue1'>
            <div className='dark:text-white grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center px-5 md:px-60'>
                <div className='flex flex-col space-y-3 items-center justify-center md:mb-16'>
                    <img src={access} alt='' className='w-28' />
                    <h3 className='text-xl font-bold'>Acces your file from anywhere</h3>
                    <p className='text-center'>
                        The ability to use a smartphone, tablet, or computer to access your
                        account means your files follow you everywhere.
                    </p>
                </div>
                <div className='flex flex-col space-y-3 items-center justify-center md:mb-16'>
                    <img src={security} alt='' className='w-20' />
                    <h3 className='text-xl font-bold'>Security you can trust</h3>
                    <p className='text-center'>
                        2-factor authentication and user-controlled encyption are just a couple of the
                        secutiry features we allow to help secure your files.
                    </p>
                </div>
                <div className='flex flex-col space-y-3 items-center justify-center md:mb-16'>
                    <img src={colab} alt='' className='w-28' />
                    <h3 className='text-xl font-bold'>Acces your file from anywhere</h3>
                    <p className='text-center'>
                        Securely share files and folders with friends, family and colleagues for
                        live collaboration. No email attachments required.
                    </p>
                </div>
                <div className='flex flex-col space-y-3 items-center justify-center md:mb-16'>
                    <img src={file} alt='' className='w-28' />
                    <h3 className='text-xl font-bold'>Security you can trust</h3>
                    <p className='text-center'>
                        Whether you're sharing holidays photos or work documents, Fylo has you
                        covered allowing for all file types to be securely stored and shared.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;