import React, {createContext, useContext, useState} from "react";

type ScoreProvider = {
    children : React.ReactNode;
}

type ScoreContext = {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}


const ScoreContext = createContext<ScoreContext | any>(null)
const ScoreUpdateContext = createContext<any>(null)

export function useScore(){
    return useContext(ScoreContext)
}

export function useScoreUpdate(){
    return useContext(ScoreUpdateContext)
}

export function ScoreProvider ({children}: any) {
    const [score, setScore] = useState(0)

    function updateScore(){

     setScore((prevScore) => prevScore+1)
    }

    
    return (
        <ScoreContext.Provider value={{score, setScore}}>
            <ScoreUpdateContext.Provider value={updateScore}>
                {children}
            </ScoreUpdateContext.Provider>
        </ScoreContext.Provider>
    )
}