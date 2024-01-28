import React from 'react'
import { useState } from 'react'
import "../components/Choices.css"
import Paper from '../components/Paper'
import { useChoice, useChoiceUpdate } from '../ChoiceContext'
import Scissors from '../components/Scissors'
import Rock from '../components/Rock'
import './StepTwo.css'
import Empty from '../components/Empty'

function Steptwo(props: any) {
    
  const choice  = useChoice()
  const updateChoice = useChoiceUpdate()

function returnchoice(){
  let chosen = choice?.choice
  if (chosen== "Scissors"){
    return <Scissors/>
  }
  else if (chosen == "Rock"){
    return <Rock/>
  }
  else if (chosen == "Paper"){
    return <Paper/>
  }
}

function houseChoice(){
  let house = Math.floor(Math.random()* 3) +1
  if(house==1){
    return <Scissors/>
  }
  else if(house==2){
    return <Rock/>
  }
  else if(house==3){
    return <Paper/>
  }
}


  return  (
    <div className='choicecontainer'> 
        <div className='twofirsts'>
         <div className='pick'> {returnchoice()}
          <p>YOU PICKED</p>
          </div>
          <div className='pick'>
              {houseChoice()}<p>THE HOUSE PICKED</p>
                  </div>
                  </div>
        </div>    
    
  )
}

export default Steptwo