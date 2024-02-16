import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 9 search
import Search from './routes/Search.jsx'
// 8 nested route
import Info from './routes/Info.jsx'
// 7 rota dinamica
import Product from './routes/Product.jsx'
// 3 componente base
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
// 2 pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'
//1 configurando router
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
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
      // 7 rota dinamcia
      {
        path: "products/:id",
        element: <Product/>
      },
      // 8 nested dinamica
      {
        path: "products/:id/info",
        element: <Info/>
      },
      // 9 search
      {
        path: "search",
        element: <Search/>
      },
      // 10 redirect
      {
        path: "teste",
        element: <Navigate to="/"/>
      }
    ]
  },
  //{
   // path: "contact",
   // element: <Contact/>
 // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
