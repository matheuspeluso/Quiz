import { useContext } from "react";
import { QuizContext } from "../../context/quiz"; // usando os quizontexto onde vou usar o mesmo  , já o provider onde vou habilitar o mesmo
import "./Welcome.css";
import QuizImg from "../../img/quiz.svg";

const Welcome = () => {
  const [quisState,dispatch] = useContext(QuizContext); // quisState pega os valores e o dispatch altera os valores
  
  return (
    <div id="welcome">
      <h2>Seja Bem-vindo!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={()=> dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
      <img src={QuizImg} alt="Inicio do Quiz"/>
    </div>
  )
}

export default Welcome
