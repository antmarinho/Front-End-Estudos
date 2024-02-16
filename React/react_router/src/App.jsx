import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

// 5 link entre paginas
import Navbar from './components/Navbar'
// 9 search params
import SearchForm from './components/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar/>
        <SearchForm/>
        <Outlet/>
        <p>footer</p>
      </div>
    </>
  )
}

export default App
