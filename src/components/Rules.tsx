
import "./Rules.css"
import Popup from './Popup'
import { useState } from 'react'



function Rules() {
    const [buttonPopup, setButtonPopup] = useState(false)
  return (
  <>
    <button className='buttonrules' onClick={()=> setButtonPopup(true)}>
        <h1>RULES</h1>
    </button>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    </Popup>
  </>
  )
}

export default Rules