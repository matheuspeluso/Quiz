import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//para usar nosso contexto para toda aplicação podemos usar ele aqui no nosso main
import { QuizProvider } from './context/quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider> 
      <App/> 
    </QuizProvider>
  </React.StrictMode>,
)
