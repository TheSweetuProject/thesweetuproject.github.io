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

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
    }, [])

    const ham = () => {
        const burger = document.querySelector(".burger");
        burger.classList.toggle("toggle");
    }

    return(
        <section>
            <nav>
                <Link to="/" class="logo">
                    <img src={logo} alt="Sweetu-Logo"></img>
                    <p>Sweetu</p>
                </Link>
                {(toggleMenu || screenWidth > 1000) && (
                    <ul class="nav-links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/Menu">Menu</Link></li>
                        <li class="order_button"><a href="#">Order Now</a></li>
                    </ul>
                )}
                
                <div class="burger" onClick = {toggleNav}>
                    <div class = "line1"></div>
                    <div class = "line2"></div>
                    <div class = "line3"></div>
                </div>
            </nav>
            
        </section>
    )
    
}

export default Navbar