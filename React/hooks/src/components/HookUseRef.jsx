import React from 'react'
import { useRef,useState,useEffect } from 'react'

const HookUseRef = () => {

    // 1 useRef
    const numberRef = useRef(0)
    const [counter,setCounter] = useState(0)
    const [counterB,setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current +1
    })

    // 2 useRegf com DOM

    const inputRef = useRef()
    const [text,setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setText("")

        inputRef.current.focus();
    }

  return (
    <div>
        <h2>useRef</h2>
        <p>o componente rendereizou {numberRef.current}</p>
        <p>counter 1 {counter}</p>
        <button onClick={() => setCounter(counter+1)}>contador a</button>
        <p>counter 2 {counterB}</p>
        <button onClick={() => setCounterB(counterB+1)}>contador b</button>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="enviar"/>
        </form>
        <hr/>
    </div>
  )
}

export default HookUseRef