import React from 'react'
import { useState } from 'react'

export const Data = () => {

    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <div>
            <p>valor {someData}</p>
            <button onClick={() => (someData = 15)}>mudar variavel</button>
        </div>
        <div>
            <p>valor {anotherNumber}</p>
            <button onClick={() => (setAnotherNumber(20))}>mudar variavel</button>
        </div>
    </div>
  )
}
