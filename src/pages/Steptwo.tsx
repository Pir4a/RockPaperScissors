
import { useEffect, useRef, useState } from 'react'
import "../components/Choices.css"
import Paper from '../components/Paper'
import { useChoice} from '../ChoiceContext'
import Scissors from '../components/Scissors'
import Rock from '../components/Rock'
import './StepTwo.css'
import Empty from '../components/Empty'
import { Link } from 'react-router-dom'
import {useScore} from '../ScoreContext'



function Steptwo() {
    
  const choice  = useChoice()

  const [isVictory, setIsVictory] = useState('')
  const renderVictory = useRef('')

    useEffect(()=>{
    setIsVictory(renderVictory.current)
  })


  let chosen = choice?.choice

function returnchoice(){

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


const house = Math.floor(Math.random() * 3) +1

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
  // @ts-ignore  

  if(chosen=='Scissors')  {
    if(house==1){
      
      return renderVictory.current="IT'S A TIE!"
    }
    else if(house==2){
      return renderVictory.current="YOU LOSE"
    }
    else if(house==3){

      return renderVictory.current="YOU WIN"
    }
  }

  else if(chosen=='Rock'){
    if(house==1){
        return renderVictory.current="YOU WIN"
      }
    else if(house==2){
      return renderVictory.current="IT'S A TIE!"
      }
     else if(house==3){
      return renderVictory.current="YOU LOSE"
    }
  }
  
  else if(chosen=='Paper'){
    if(house==1){
      return renderVictory.current="YOU LOSE"
    }
    else if(house==2){
      
      return renderVictory.current="YOU WIN"
    }
    else if(house==3){
      return renderVictory.current= "IT'S A TIE!"
    }

  }

}

const state  = useScore()


  return  (<>
    <div className='choicecontainer'> 
        <div className='twofirsts'>
         <div className='pick r'><div className={isVictory=='YOU WIN' ? 'glow' : ''}></div>{returnchoice()}
          <p>YOU PICKED</p>
          </div>
          <div className='pick'>
            
              
              
              <div className="absolute"><Empty/></div>
              <div className='house'> <div className={isVictory=='YOU LOSE' ? 'glow' : ''}></div>{houseChoice()}</div>
              <p>THE HOUSE PICKED</p>
                  </div>
                  </div>
                
        </div>  
        <div className='winorloss'>
        <h1 className='delay'>{winOrLose()}</h1>
        
        <Link to="/">
          <button className='playagain' onClick={
              isVictory=="IT'S A TIE!" ? ()=>{} :
              isVictory=='YOU WIN' ?
              ()=>{state.dispatch({type: 'incremented_score'})} 
              : ()=>{state.dispatch({type: 'decrement_score'})}}>
            <p>PLAY AGAIN</p>
          </button>
        </Link>
      </div>  
    </>
  )
  
}

export default Steptwo