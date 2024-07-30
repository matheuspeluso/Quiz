import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./OptionComponent.css"

const OptionComponent = ({option}) => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="option">
      <p>{option}</p>
    </div>
  )
}

export default OptionComponent
