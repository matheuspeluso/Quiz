import { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import OptionComponent from '../OptionComponent/OptionComponent';

//css
import "./Questions.css"

const Questions = () => {
    const [quizState,dispatch] = useContext(QuizContext);
    //pegando a pegunta atual
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOptions = (option) =>{
      dispatch({
        type:"CHECK_ANSWER",
        payload:{answer:currentQuestion.answer, option}, // enviando dados pro reducer por meio de payload
      })
    }

    console.log(quizState)

  return (
    <div id='questions'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
            {currentQuestion.options.map((option)=>(
              <OptionComponent 
              option={option} 
              key={option} 
              answer={currentQuestion.answer}
              selectOption = {() => onSelectOptions(option)} // função sendo enviada como props para ser ativa na options
              hide={quizState.optionToHide === option ? "hide" : null}
              />
            ))}
        </div>

        {!quizState.answerSelected && !quizState.help && (
          <>
            {currentQuestion.tip && (
              <button onClick={() => dispatch({type:"SHOW_TIP"})}>Dica</button>
            )}
            <button onClick={() => dispatch({type: "REMOVE_OPTION"})}>Excluir uma Opção</button>
          </>
        )}

        {!quizState.answerSelected && quizState.help === "tip" && (
          <p>{currentQuestion.tip}</p>
        )}



        {quizState.answerSelected && ( // botão só aparece quando uma opção estiver selecionada!
          <button onClick={()=> dispatch({type:"CHANGE_QUESTION"})}>Continuar</button>
        )}
    </div>
  )
}

export default Questions
