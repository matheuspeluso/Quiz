import { useContext } from "react";
import { QuizContext } from "../../context/quiz"; // usando os quizontexto onde vou usar o mesmo  , já o provider onde vou habilitar o mesmo
import "./Welcome.css";
import QuizImg from "../../img/quiz.svg";

const Welcome = () => {
  const quisState = useContext(QuizContext);
  console.log(quisState)
  return (
    <div id="welcome">
      <h2>Seja Bem-vindo!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={QuizImg} alt="Inicio do Quiz"/>
    </div>
  )
}

export default Welcome
