import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
    return (
        <section>
            <footer>
                <div>
                    <p>&copy; 2022 The Sweetu Project</p>
                    <p>Website Created by Alexander Shen & Chhuong Le</p>
                    <br/>
                    <div className = "social">
                        <a href="https://www.instagram.com/thesweetuproject/?hl=en" target="_blank" rel="noopener noreferrer"><BsInstagram size={40}/></a>
                    </div>
                </div>
            </footer>
        </section>
    )
  }
  
  export default Footer;