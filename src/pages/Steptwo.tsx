
import { useState } from 'react'
import "../components/Choices.css"
import Paper from '../components/Paper'
import { useChoice} from '../ChoiceContext'
import Scissors from '../components/Scissors'
import Rock from '../components/Rock'
import './StepTwo.css'
import Empty from '../components/Empty'
import { Link } from 'react-router-dom'

function Steptwo() {
    
  const choice  = useChoice()
 

  
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
let house:number


house = Math.floor(Math.random() * 3) +1

function houseChoice(){

  console.log(house)
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

const [isVictory, setVictory] = useState(false)




function winOrLose(): any{
  let victory = ''


  if(chosen=='Scissors')  {
    if(house==1){
     
      return victory = "IT'S A TIE!", setVictory(false)
      
    }
    else if(house==2){
      return victory="YOU LOSE"
    }
    else if(house==3){
      setVictory(current => !current)

      return victory= "YOU WIN", setVictory(current => !current)
    }
  }


    else if(chosen=='Rock'){
    if(house==1){

      setVictory(current => !current)

      return victory = "YOU WIN", setVictory(current => !current)
    }
    else if(house==2){
      return victory="IT'S A TIE!", setVictory(false)
    }
    else if(house==3){
      return victory= "YOU LOSE"
    }
  }
  
  else if(chosen=='Paper'){
    if(house==1){
      return victory = "YOU LOSE"
    }
    else if(house==2){
      setVictory(current => !current)
      return victory="YOU WIN", setVictory(current => !current)
    }
    else if(house==3){
      return victory= "IT'S A TIE!", setVictory(false)
    }

  }

}



  return  (<>
    <div className='choicecontainer'> 
        <div className='twofirsts'>
         <div className='pick r'> <div className={isVictory ? 'glow' : ''}></div>{returnchoice()}
          <p>YOU PICKED</p>
          </div>
          <div className='pick'>
            
              
              
              <div className="absolute"><Empty/></div>
              <div className='house'> <div className={isVictory ? '' : 'glow'}></div>{houseChoice()}</div>
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