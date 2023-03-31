import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <div className='footer flex bg-gray-700 text-white justify-between items-center mx-auto'>
            <footer>Made by Ruby Wang 2023</footer>

            <div className='m-3 pd-3'>
                <a href="mailto:ruby0701@gmail.com">ruby0701@gmail.com</a>
                <div >
                    <a href="https://www.linkedin.com/feed/" target='_blank' rel="noreferrer">
                        <LinkedInIcon></LinkedInIcon>
                    </a>

                    <a href="https://github.com/ruby0701" target='_blank' rel="noreferrer">
                        <GitHubIcon></GitHubIcon>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Footer;