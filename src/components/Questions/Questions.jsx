import { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import OptionComponent from '../OptionComponent/OptionComponent';

//css
import "./Questions.css"

const Questions = () => {
    const [quizState,dispatch] = useContext(QuizContext);
    //pegando a pegunta atual
    const currentQuestion = quizState.questions[quizState.currentQuestion]
  return (
    <div id='questions'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
            {currentQuestion.options.map((option)=>(
              <OptionComponent option={option} key={option}/>
            ))}
        </div>
        <button onClick={()=> dispatch({type:"CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Questions
