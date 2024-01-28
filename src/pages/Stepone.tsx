import React, { useContext, useState } from 'react'
import '../components/Choices.css'
import { Link } from 'react-router-dom'
import Paper from '../components/Paper'
import Scissors from '../components/Scissors'
import Rock from '../components/Rock'
import { useChoice, useChoiceUpdate } from '../ChoiceContext'


function StepOne() {

  const choice  = useChoice()
  const updateChoice = useChoiceUpdate()
    
  return (
    <div className='choicecontainer'>
    <div className='twofirsts'>
              <div className='line'></div>
              <div className='line left'></div>
              <div className='line right'></div>
        <Link to="/steptwo" onClick={() => updateChoice('Paper')} >
          <Paper/>
        </Link> 
        <Link to="/steptwo" onClick={() => updateChoice('Scissors')}>
          <Scissors/>
        </Link>
    </div>
        <div className='lastone'>
        <Link to="/steptwo"  onClick={() => updateChoice('Rock')}>
            <Rock/>
        </Link>
    </div>
</div>
  )
}

export default StepOne