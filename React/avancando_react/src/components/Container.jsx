import React from 'react'

export const Container = ({children}) => {
  return (
    <div>
        <h1>conteudo do componente pai</h1>
        {children}
    </div>
  )
}
