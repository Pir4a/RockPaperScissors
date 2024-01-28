
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Rules from './components/Rules'
import Score from './components/Score'
import StepOne from './pages/Stepone'
import Steptwo from './pages/Steptwo'
// @ts-ignore
import { ChoiceProvider } from "./ChoiceContext"


 
function App() {


  return (
    <>
    <ChoiceProvider>
      <Score />
      <Routes>
       <Route path="/" element={<StepOne />} />
       <Route path="/steptwo" element={<Steptwo/>} />
      </Routes>
      <Rules />
    </ChoiceProvider>
    </>
  )
}

export default App