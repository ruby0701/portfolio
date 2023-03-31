import React from 'react';
import '../App.css';

function Navbar() {
    return (
        <header className='h-24 bg-gray-700'>
            <div className='text-white bg-gray-700 flex heading justify-between w-full'>
                <div className='text-lg font-boldheading container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
                    Ruby Wang
                </div>
                <div className='heading container flex justify-between items-center m-1'>
                    <a href='home' className='hover:bg-gray-600 rounded-md px-2 md:px-4 lg:px-8'>Home</a>
                    <a href='about' className='hover:bg-gray-600 rounded-md px-2 md:px-4 lg:px-8'>About me</a>
                    <a href='project' className='hover:bg-gray-600 rounded-md px-2 md:px-4 lg:px-8'>Projects</a>
                    <a href='timeline' className='hover:bg-gray-600 rounded-md px-2 md:px-4 lg:px-8'>Experience</a>
                    <a href='contact' className='bg-gray-400 rounded-full px-4 md:px-8 lg:px-12'> <button>Contact me</button></a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;