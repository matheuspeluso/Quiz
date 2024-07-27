import "./Welcome.css";
import QuizImg from "../../img/quiz.svg";

const Welcome = () => {
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
