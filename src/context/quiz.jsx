import { createContext, useReducer} from "react"; // importando o context e useReducer que permite gerenciar estados complexos e fazer alterações com base no projeto
import questions from "../data/questions_complete"; // perguntas

const STAGES = ["Start","Category", "Playing", "End"]

const initialsState = { // estagio inicial do reducer
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score : 0, 
    answerSelected : false,
    help: false,
}

const quisReducer = (state, action) => {

    switch(action.type){ 
        case "CHANGE_STATE":
            return {
                ...state, // pega o state anterior completo e depois substitui apena o gameState
                gameStage: STAGES[1],
            };
        case "START_GAME":
            let quizQuestions = null;
          
            state.questions.forEach((question) => {
                console.log("entrou no forearch")
                if (question.category === action.payload) {
                    quizQuestions = question.questions;
                    console.log(quizQuestions)
                }
            });
          
            return {
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[2],
            };


        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            });
          
            return {
                ...state,
                questions: reorderedQuestions,
            };
        
        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false

            if (!state.questions[nextQuestion]){
                endGame = true
            }

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage : endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
                help:false,
            };

        case "NEW_GAME":
            return initialsState

        case "CHECK_ANSWER":
            if(state.answerSelected) return state;
            
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0

            if (answer === option)correctAnswer = 1;

            return{
                ...state,
                score: state.score + correctAnswer,
                answerSelected:option,
            }

        case "SHOW_TIP":
            return{
                ...state,
                help: "tip"
            }

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


