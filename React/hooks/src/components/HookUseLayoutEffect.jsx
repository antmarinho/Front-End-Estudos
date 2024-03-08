import React from 'react'
import { useEffect,useLayoutEffect,useState } from 'react'

const HookUseLayoutEffect = () => {

    const [name,setName] = useState('algum nome')

    useEffect(() => {
        console.log('2')
        setName('mudou')
    },[])

    useEffect(() => {
        console.log('3')
        setName('mudou 3')
    },[])

    useLayoutEffect(() => {
        console.log('1')
        setName('outro nome')
    },[])

    console.log(name)

  return (
    <div>
        <h2>useLayoutEffect</h2>
        <p>nome {name}</p>
        <hr/>
    </div>
  )
}

export default HookUseLayoutEffect