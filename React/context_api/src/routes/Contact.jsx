import React from 'react'
// 3 alterando valor do contexto
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

// 4 refatorano com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Contact = () => {

  //const {counter} = useContext(CounterContext)

  const {counter} = useCounterContext();
  const {color} = useTitleColorContext();

  return (
    <div>
        <h1 style={{color: color}}>pagina de contato</h1>
        <p>Valor do contador {counter}</p>
    </div>
  )
}

export default Contact