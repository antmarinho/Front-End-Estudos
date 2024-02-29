import React from 'react'
import { useState } from 'react'

const HookUseState = () => {

    // 1 usestate

    let useName = 'maria'

    const [name,setName] = useState('jose')

    const changeNames = () => {
        useName = 'joao'

        setName('mateus')
    }

    // 2 useState e input

    const [age,setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(age)
    }

  return (
    <div>
        {/*1 useState */}
        <h2>useState</h2>
        <p>useState {name}</p>
        <p>variavel {useName}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        {/*2 useState  e input*/}
        <form onSubmit={handleSubmit}> 
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="enviar"/>
        </form>
        <p>voce tem {age} anos</p>
        <hr/>
    </div>
  )
}

export default HookUseState