import { useContext } from "react"; // pegar a pontuação do usuario!
import { QuizContext } from "../../context/quiz"; // importando o contexto

import WellDone from "../../img/welldone.svg";
import "./GameOver.css";


const GameOver = () => {
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Sua pontuação: x </p>
      <p>Você acertou 2 de 5 perguntas!</p>
      <img src={WellDone} alt="fim de jogo!" />
      <button>Reiniciar</button>
    </div>
  )
}

export default GameOver
