import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import { SomeContext } from '../components/HookUseContext'
import { useContext } from 'react'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'

const Home = () => {

  const {contextValue} = useContext(SomeContext)

  return (
    <div>
       <h1>Home</h1>
       <HookUseState/>
       <HookUseReducer/>
       <HookUseEffect/>
       <h2>useContext</h2>
       <p>valor do contexto {contextValue}</p>
       <hr/>
       <HookUseRef/>
       <HookUseCallback/>
       <HookUseMemo/>
       <HookUseLayoutEffect/>
       <HookUseImperativeHandle/>
       <HookCustom/>
    </div>
  )
}

export default Home