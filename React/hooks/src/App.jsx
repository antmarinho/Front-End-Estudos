import './App.css'
import { Outlet,Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='App'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contatos</Link>
          </li>
        </ul>
        <Outlet/>
      </div>
    </>
  )
}

export default App
