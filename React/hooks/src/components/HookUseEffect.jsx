import React from 'react'
import { useEffect,useState } from 'react'

const HookUseEffect = () => {

    // 1 useEffect sem dependecias

    useEffect(() => {
        console.log('estou sendo executado')
    })

    const [number,setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 2 array de dependencia vazio

    useEffect(() => {
        console.log('serei executao 1x')
    },[])

    // 3 array de pedendecia com valores

    const [anotherNumber,setAnotherNumber] = useState(0)

    useEffect(() => {
        
        if(anotherNumber > 0) {
            console.log('sou executado apenas quando muda o anothernumber')
        }

    },[anotherNumber])

    //4 cleanup do useEffect

    useEffect(() => {

        const timer = setTimeout(() => {
            console.log('hello world')
            setAnotherNumber(anotherNumber+1)
        }, 2000)
        return () => clearTimeout(timer)
    },[anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>number {number}</p>
        <button onClick={changeSomething}>executar</button>
        <p>another number {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>mudar o another</button>
    </div>
  )
}

export default HookUseEffect