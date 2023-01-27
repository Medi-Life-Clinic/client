import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { RxTwitterLogo } from 'react-icons/rx'



const Socials = () => {
  return (
    <div className='socials-box'>
      <a href="https://facebook.com" className="social-link">
        <AiOutlineFacebook className='social-icons' class="mx-4" />
      </a>
      <a href="https://instagram.com" className="social-link">
        <AiOutlineInstagram className="social-icons" class="mx-4" />
      </a>
      <a href="https://twitter.com" className="social-link">
        <RxTwitterLogo className='social-icons' class="mx-4" />
      </a>
    </div>
  )
}

export default Socials