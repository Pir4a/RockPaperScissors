import React from 'react'
import { useState } from 'react'
import "../components/Choices.css"
import Paper from '../components/Paper'
import { useChoice, useChoiceUpdate } from '../ChoiceContext'
import Scissors from '../components/Scissors'
import Rock from '../components/Rock'
import './StepTwo.css'
import Empty from '../components/Empty'
import { Link } from 'react-router-dom'

function Steptwo(props: any) {
    
  const choice  = useChoice()
  const updateChoice = useChoiceUpdate()

  
  let chosen = choice?.choice

function returnchoice(){

  if (chosen== "Scissors"){
    return <Scissors/>
  }
  if (chosen == "Rock"){
    return <Rock/>
  }
  else if (chosen == "Paper"){
    return <Paper/>
  }
}

let house = Math.floor(Math.random()* 3) +1

function houseChoice(){
 
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

function winOrLose(){
  let victory = ''
  if(chosen=='Scissors'){
    if(house==1){
      return victory = "IT'S A TIE!"
    }
    if(house==2){
      return victory="YOU LOSE"
    }
    if(house==3){
      return victory= "YOU WIN"
    }}
    else if(chosen=='Rock'){
    if(house==1){
      return victory = "YOU LOSE"
    }
    if(house==2){
      return victory="IT'S A TIE!"
    }
    if(house==3){
      return victory= "YOU LOSE"
    }
  }else if(chosen=='Paper'){
    if(house==1){
      return victory = "YOU LOSE"
    }
    if(house==2){
      return victory="YOU WIN"
    }
    if(house==3){
      return victory= "IT'S A TIE!"
    }
  }
  
}



  return  (<>
    <div className='choicecontainer'> 
        <div className='twofirsts'>
         <div className='pick'> <div className='glow'></div>{returnchoice()}
          <p>YOU PICKED</p>
          </div>
          <div className='pick'>
            
              
              
              <div className="absolute"><Empty/></div>
              <div className='house'>{houseChoice()}</div>
              <p>THE HOUSE PICKED</p>
                  </div>
                  </div>
                
        </div>  
        <div className='winorloss'>
        <h1 className='delay'>{winOrLose()}</h1>
        <Link to="/"><button className='playagain'><p>PLAY AGAIN</p></button></Link>
      </div>  
    </>
  )
}

export default Steptwo