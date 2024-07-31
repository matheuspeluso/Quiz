//react
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

//components
import Welcome from './components/Welcome/Welcome'
import Questions from './components/Questions/Questions'
import GameOver from './components/GameOver/GameOver'
import PickCategory from './components/PickCategory/PickCategory'

//static
import './App.css'

function App() {
  const [quisState,dispatch] = useContext(QuizContext);

  useEffect(()=>{
    //embaralhamento das perguntas
    dispatch({type:"REORDER_QUESTIONS"})

  },[])

  return (
    <div className='App'>
     <h1>Quiz de Programação!</h1>
     {quisState.gameStage === "Start" && <Welcome/>}
     {quisState.gameStage === "Category" && <PickCategory/>}
     {quisState.gameStage === "Playing" && <Questions/>}
     {quisState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
