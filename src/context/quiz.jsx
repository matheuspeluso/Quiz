import { createContext, useReducer} from "react"; // importando o context e useReducer que permite gerenciar estados complexos e fazer alterações com base no projeto
import questions from "../data/questions"; // perguntas

const STAGES = ["Start", "Playing", "End"]

const initialsState = { // estagio inicial do reducer
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
}

const quisReducer = (state, action) => {
    console.log(state,action)

    switch(action.type){ 
        case "CHANGE_STATE":
            console.log("caiu em CHANGE_STATE!")
            return {
                ...state, // pega o state anterior completo e depois substitui apena o gameState
                gameStage: STAGES[1],
            };
            
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };

        default:
            return state
    }
};

export const QuizContext = createContext() // exportando o contexto de createContext

// e tb precisaremos de um provider , que vai prover o contexto da aplicação
export const QuizProvider = ({children}) =>{ // para que o QuizProvider possa abaçar varios components é necessario usar o children
    const value = useReducer(quisReducer,initialsState)
    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
};


