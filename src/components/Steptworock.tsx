import React from 'react'
import Iconpaper from "../assets/icon-paper.svg"
import Iconrock from "../assets/icon-rock.svg"
import Iconscissors from "../assets/icon-scissors.svg"
import "./Choices.css"
import Paper from './Paper'

function Steptworock() {
  return (
    <div className='choicecontainer'> 
        <div className='twofirsts'>
            <Paper/>
              <div className='outer yellow'>
                <div className='inner'>
                  <img src={Iconscissors}/>
                  </div>
                  </div>
                  </div>
        </div>    
    
  )
}

export default Steptworock