import React from 'react';
import dark from '../images/icon-dark.svg';
import light from '../images/icon-light.svg';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = ({darkMode, toggleDarkMode}) => {
    return (
        <div className='container mx-auto px-6 text-center h-40 md:h-20'>
            <div className='bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 
               w-48 mx-auto md:mx-0 md:absolute top-10 left-10'></div>
            <div className='dark:text-white flex flex-row space-x-4 items-center justify-center 
               md:justify-end md:space-x-10 md:absolute top-12 right-12'>
                <a href='#features' className='hover:text-accentCyan'>Features</a>
                <a href='#testimonials' className='hover:text-accentCyan'>Testimonials</a>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Header;
