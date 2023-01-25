import React from 'react'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {RxTwitterLogo} from 'react-icons/rx'





const Socials = () => {
  return (
 
    <div className='socials-box'>   
    <a href="https://facebook.com">
    <AiOutlineFacebook className='social-icons' button type="button"  /> 
    </a>
    <a href="https://instagram.com">
    <AiOutlineInstagram className="social-icons"/> 
    </a>
    <a href="https://twitter.com">
    <RxTwitterLogo className='social-icons'/>
    </a>
</div>
  )
}

export default Socials

onclick="window.location='http://example.com'"