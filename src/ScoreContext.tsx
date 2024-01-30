import React, {createContext, useContext, useReducer} from "react";

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

    const [state, dispatch] = useReducer(updateScore, {score: 0})

    function updateScore(state: { score: number; }, action: { type: string; }) {
        if (action.type === 'incremented_score') {
          return {
            score: state.score + 1
          };
        }else if(action.type ==='decrement_score')
        return {
            score: state.score -1
        }
        throw Error('Unknown action.');
      }


    
    return (
        <ScoreContext.Provider value={{state, dispatch}}>
            <ScoreUpdateContext.Provider value={updateScore}>
                {children}
            </ScoreUpdateContext.Provider>
        </ScoreContext.Provider>
    )
}