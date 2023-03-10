import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { RxTwitterLogo } from 'react-icons/rx'
import './socials.css'

//Social Icons with links.

const Socials = () => {
  return (
    <>
    <div className="socials-container">
     <h4 className="socials-heading">Contact us on socials</h4>
    <div className='socials-box'>
      <a href="https://facebook.com" className="social-link" data-testid="facebook-icon">
        <AiOutlineFacebook className='social-icons mx-4' data-testid="facebook-link" />
      </a>
      <a href="https://instagram.com" className="social-link" data-testid="instagram-icon">
        <AiOutlineInstagram className="social-icons mx-4" data-testid="instagram-link"/>
      </a>
      <a href="https://twitter.com" className="social-link" data-testid="twitter-icon">
        <RxTwitterLogo className="social-icons mx-4" data-testid="twitter-link"/>
      </a>
    </div>
  </div>
    </>
  )
}

export default Socials