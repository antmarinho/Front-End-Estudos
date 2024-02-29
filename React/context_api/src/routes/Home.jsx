import React from 'react'
// 3 alterando valor do contexto
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

// 4 refatorano com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {

  //const {counter} = useContext(CounterContext)

  const {counter} = useCounterContext();
  const {color,dispatch} = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador {counter}</p>
        <ChangeCounter/>
        {/*6 alterando contexto completo */}
        <button onClick={() => setTitleColor('RED')}>vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>azul</button>
    </div>
  )
}

export default Home