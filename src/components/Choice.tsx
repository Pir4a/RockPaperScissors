import React from 'react'
import './Choices.css'
import Iconpaper from "../assets/icon-paper.svg"
import Iconrock from "../assets/icon-rock.svg"
import Iconscissors from "../assets/icon-scissors.svg"

function Choice() {
  return (
    <div className='choicecontainer'>
        <div className='twofirsts'>
            <div className='outer blue'>
                <div className='line'></div>
                <div className='line left'></div>
                <div className='line right'></div>
                <div className='inner'><img src={Iconpaper}/></div>
            </div>
            <div className='outer yellow'><div className='inner'><img src={Iconscissors}/></div></div>
        </div>
            <div className='lastone'>
            <div className='outer red'><div className='inner'><img src={Iconrock}/></div></div>
        </div>
    </div>
  )
}

export default Choice