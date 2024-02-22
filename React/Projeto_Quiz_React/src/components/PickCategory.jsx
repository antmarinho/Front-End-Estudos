import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Category from '../img/category.svg'
import './PickCategory.css'

const PickCategory = () => {

    const [quizState, dispatch] = useContext(QuizContext);

    const chooseCategoryAndReorderQuestion = (category) => {

        dispatch({type: "START_GAME", payload: category});

        dispatch({type: "REORDER_QUESTIONS"});
    }

  return (
    <div id='category'>
        <h2>Escolha um categoria</h2>
        <p>As perguntas serao referentes a uma das linguagens abaixo</p>
        <div>
            {quizState.questions.map((question) => (<button onClick={() => chooseCategoryAndReorderQuestion(question.category)}>{question.category}</button>))}
        </div>
        <img src={Category} alt="categorias do quiz" />
    </div>
  )
}

export default PickCategory