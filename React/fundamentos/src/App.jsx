import { useState } from 'react'
import './App.css'

//2 importando componente
import FirstComponnent from './components/FirstComponent'

// 4 template expression
import TemplateExpression from './components/TemplateExpression'

// 5 hierarquia de componentes
import { MyComponent } from './components/MyComponent'

//6 eventos
import { Events } from './components/Events'

function App() {
  // 3 comentarios
  return (
   <div className="App">
    {/* 3 comentario jsx*/ }
    <h1>Fundamentos do react</h1>
    <FirstComponnent/>
    <TemplateExpression/>
    <MyComponent/>
    <Events/>
   </div>
  )
}

export default App
