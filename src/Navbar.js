import React from 'react';

const navItemStyles =
  "bg-transparent block px-4 py-2 rounded-md transition-transform duration-100 hover:scale-125 hover:bg-stone-500 hover:text-white";
function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full bg-transparent z-50'>
            <ul className='flex justify-between py-4 pr-8 space-x-8'>
                <li className="bg-transparent block px-4 py-2">
                    <img
                        src="/initials.webp"
                        alt="Ryan Capozzi"
                        className="rounded-full bg-transparent object-scale-down h-12 h-12">
                    </img>
                </li>
                <div className="flex space-x-8">
                    <li><a href="#home" className={navItemStyles}>Home</a></li>
                    <li><a href="#about" className={navItemStyles}>About</a></li>
                    <li><a href="#projects" className={navItemStyles}>Projects</a></li>
                    <li><a href="#experience" className={navItemStyles}>Experience</a></li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
