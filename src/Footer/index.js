import React from 'react';
import logo from '../images/logo-dark-mode.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import insta from '../images/instagram.svg';

const Footer = () => {
    return (
        <footer className='bg-darkBlue2 -mt-56 md:-mt-20 '>
            <div className='container flex items-center justify-center mx-auto px-5 pb-10 pt-44 text-white'>
                <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-32 
                items-start'>
                    <div className='flex flex-col space-y-10'>
                        <img src={logo} alt='' className='w-32' />
                        <div className='flex flex-col space-y-3'>
                            <div className='flex flex-row space-x-7'>
                                <div className=' flex flex-row items-center space-x-3'>
                                    <div className='w-6'>
                                        <img src={phone} alt='' />
                                    </div>
                                    <div>+1-543-123-4567</div>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-7'>
                                <div className=' flex flex-row items-center space-x-3'>
                                    <div className='w-6'>
                                        <img src={email} alt='' />
                                    </div>
                                    <div>example@fylo.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <a href='#' className='hover:text-accentCyan'>About Us</a>
                        <a href='#' className='hover:text-accentCyan'>Job</a>
                        <a href='#' className='hover:text-accentCyan'>Press</a>
                        <a href='#' className='hover:text-accentCyan'>Blog</a>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <a href='#' className='hover:text-accentCyan'>Contact Us</a>
                        <a href='#' className='hover:text-accentCyan'>Terms</a>
                        <a href='#' className='hover:text-accentCyan'>Privacy</a>
                    </div>
                    <div className='flex flex-row space-x-3'>
                        <img src={facebook} alt='' className='border border-white rounded-full p-2' />
                        <img src={twitter} alt='' className='border border-white rounded-full p-2' />
                        <img src={insta} alt='' className='border border-white rounded-full p-2' />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;