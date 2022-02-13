import React from 'react';
import './Landing.css';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const Landing = () => {
  return (
    <section>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Care for a Slice?</h1>
          <p>For the Sweetest bite you'll ever taste</p>
          <p>Contact our prestigous baker to get started</p>
        </div>
      </div>
      <div className="instagram">
        <InstagramFeed token={process.env.REACT_APP_INSTAGRAM_API_KEY}  counter="3"/> 
      </div>   
    </section>
  )
}

export default Landing;