import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// criando o provider
import { CounterContextProvider } from './context/CounterContext.jsx'
//5 contexto mais completo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // 3 componente base
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CounterContextProvider>
        <TitleColorContextProvider>
            <RouterProvider router={router}/>
        </TitleColorContextProvider>
     </CounterContextProvider>
  </React.StrictMode>,
)
