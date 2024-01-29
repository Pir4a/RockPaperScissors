
import { ScoreProvider, useScore, useScoreUpdate } from "../ScoreContext"
import "./Score.css"


function Score() {

    const score = useScore()
    

  return (
        <div className='scorecontainer'>
            <div className='rps'>
                <ul>
                    <li>ROCK</li>
                    <li>PAPER</li>
                    <li>SCISSORS</li>
                </ul>
            </div>
            <div className='score'>
                <p>SCORE</p>
                <h3>{score?.score}</h3>
            </div>
        </div>
 )
}

export default Score
