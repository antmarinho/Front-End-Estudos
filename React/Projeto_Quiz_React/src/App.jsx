import './App.css'
import Welcome from './components/Welcome'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import Question from './components/Question'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
     <div className="App">
      <h1>Quiz de Programacao</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Category" && <PickCategory/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
     </div>
    </>
  )
}

export default App
