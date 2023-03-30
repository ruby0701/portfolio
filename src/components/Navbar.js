import React from 'react';

function Navbar() {
    return (
        <header>
            <div>
                <div className='heading'>
                    Ruby Wang
                </div>
                <div>
                    <a href='#home'>Home</a>
                    <a href='#about'>About me</a>
                    <a href='#project'>Projects</a>
                    <a href='#timeline'>Timeline</a>
                    <a href='contact'> <button>Contact me</button></a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;