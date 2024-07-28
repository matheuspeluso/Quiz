import { createContext } from "react"; // importando o context

export const QuizContext = createContext() // exportando o contexto de createContext

// e tb precisaremos de um provider , que vai prover o contexto da aplicação
export const QuizProvider = ({children}) =>{ // para que o QuizProvider possa abaçar varios components é necessario usar o children
    const value = {name: "QuizName"};
    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
};


