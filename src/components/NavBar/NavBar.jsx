import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import './NavBar.css'

import logo from '../Images/SweetuLogo.png'


function Navbar (){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
        ham();
    }

    const ham = () => {
        const burger = document.querySelector(".burger");
        burger.classList.toggle("toggle");
    }


    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
    }, [])


    return(
        <section>
            <nav>
                <Link to="/" className="logo">
                    <img src={logo} alt="Sweetu-Logo"></img>
                    <p>Sweetu</p>
                </Link>
                {(toggleMenu || screenWidth > 1000) && (
                    <ul className="nav-links">
                        <li onClick = {toggleNav}><Link to="/about">About</Link></li>
                        <li onClick = {toggleNav}><Link to="/contact">Contact</Link></li>
                        <li onClick = {toggleNav}><Link to="/Menu">Menu</Link></li>
                        <li className="order_button" onClick = {toggleNav}><Link to="/Order">Order</Link></li>
                    </ul>
                )}
                
                <div className="burger" onClick = {toggleNav}>
                    <div className = "line1"></div>
                    <div className = "line2"></div>
                    <div className = "line3"></div>
                </div>
            </nav>
            
        </section>
    )
    
}

export default Navbar