import './App.css'

//importacao de componentes
import FirstComponent from './components/FirstComponent'

//desestruturando props
import SecondComponent from './components/SecondComponent'
import Destructuring, {Category} from './components/Destructuring'

// useState
import State from './components/State'
import { createContext } from 'react'

//context
import Context from './components/Context'

// type

type textOrNull = string | null

type fixed = 'isso' | 'ou' | 'aquilo'

// context

interface IAppContext {

  language: string,
  framework: string,
  projects: number

}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // variaveis

  const name: string = 'jose'
  const age: number = 30
  const isWorking: boolean = true

  // funcoes

  const userGreeting = (name: string): string => {
    return `ola ${name}`
  }

  // type

  const myText: textOrNull = 'tem algum texto aqui'
  let mySecondText: textOrNull = null

  mySecondText = 'opa'

  const testandoFixed: fixed = 'isso'

  // context

  const contextValue: IAppContext = {
    
    language: 'js',
    framework: 'express',
    projects: 5,

  }
  
  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <h1>TypeScript com React</h1>
        <h2>nome {name}</h2>
        <p>idade {age}</p>
        {isWorking && <p>esta trabalhando</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name='segundo'/>
        <Destructuring title='primeiro post' content='algum conteudo' commentsQty={10} tags={['ts','js']} category={Category.JS}/>
        <Destructuring title='segundo post' content='mais outro conteudo' commentsQty={5} tags={['java']} category={Category.P}/>
        <State/>
        <Context/>
      </div>
    </AppContext.Provider>
  )
}

export default App
