import React from 'react'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {RxTwitterLogo} from 'react-icons/rx'



const Socials = () => {
  return (
    <div className='socials-box'>   
    <AiOutlineFacebook className='social-icons' /> <AiOutlineInstagram className="social-icons"/> <RxTwitterLogo
   className='social-icons'/>
</div>
  )
}

export default Socials