//react
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

//components
import Welcome from './components/Welcome/Welcome'
import Questions from './components/Questions/Questions'
import GameOver from './components/GameOver/GameOver'

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
     <h1>Raleway</h1>
     {quisState.gameStage === "Start" && <Welcome/>}
     {quisState.gameStage === "Playing" && <Questions/>}
     {quisState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
