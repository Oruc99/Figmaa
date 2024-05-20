import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className='nav'>
                    <div className="logo">
                        <Link className='link' to='/'>finsweet</Link>
                    </div>
                    <div className="links">
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/about'>About us</Link>
                        <Link className='link' to='/features'>Features</Link>
                        <Link className='link' to='/pricing'>Pricing</Link>
                        <Link className='link' to='/faq'>FAQ</Link>
                        <Link className='link' to='/blog'>Blog</Link>
                        <Link className='link contactUs' to='/contact'>Contact us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header