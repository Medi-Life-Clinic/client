import React from 'react'
import Popup from './Popup.jsx'
import { useState } from 'react'


// Popup Application Component

const PopoutApp = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="Popout">
      <main>
        <br></br>
        <button onClick = {() => setButtonPopup(true)}>Book Now</button>
        </main>
        <Popup trigger={buttonPopup} setTrigger=
        {setButtonPopup}>
        {/* Bottom code is what contains pop up information */}
          <h1>My popup</h1>
          <p>This is my btn popup</p>
        </Popup>
       </div>
  )
}

export default PopoutApp