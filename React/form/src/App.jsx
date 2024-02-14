import './App.css'
import { MyForm } from './components/MyForm'

function App() {
 

  return (
    <>
      <div className="App">
        <h1>Form em React</h1>
        <MyForm userName="jose" userEmail="jose@gmail.com"/>
      </div>
    </>
  )
}

export default App
