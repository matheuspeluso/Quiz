import { useContext } from "react"; // pegar a pontuação do usuario!
import { QuizContext } from "../../context/quiz"; // importando o contexto

import WellDone from "../../img/welldone.svg";
import "./GameOver.css";


const GameOver = () => {
  const [quizState,dispatch] = useContext(QuizContext); // para que eu possa acessar os dados do quiz
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Sua pontuação: {quizState.score} </p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas!</p>
      <img src={WellDone} alt="fim de jogo!" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver
