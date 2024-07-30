import { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

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
            <p>Opções</p>
        </div>
        <button>Continuar</button>
    </div>
  )
}

export default Questions
