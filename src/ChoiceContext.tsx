import React, {createContext, useContext, useState} from "react";

type ChoiceProvider = {
    children : React.ReactNode;
}

type ChoiceContext = {
    choice: string;
    setChoice: React.Dispatch<React.SetStateAction<string>>;
}


const ChoiceContext = createContext<ChoiceContext | null>(null)
const ChoiceUpdateContext = createContext<any | null>(null)

export function useChoice(){
    return useContext(ChoiceContext)
}

export function useChoiceUpdate(){
    return useContext(ChoiceUpdateContext)
}

export function ChoiceProvider ({children}: any) {
    const [choice, setChoice] = useState('')

    function updateChoice(value: any){

     setChoice(value)
    }

    return (
        <ChoiceContext.Provider value={{choice, setChoice}}>
            <ChoiceUpdateContext.Provider value={updateChoice}>
                {children}
            </ChoiceUpdateContext.Provider>
        </ChoiceContext.Provider>
    )
}