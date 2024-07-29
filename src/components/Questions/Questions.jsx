import { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

const Questions = () => {
    const [quisState,dispatch] = useContext(QuizContext);
  return (
    <div>
      Questions
    </div>
  )
}

export default Questions
