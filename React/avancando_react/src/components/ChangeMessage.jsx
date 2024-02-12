import React from 'react'

export const ChangeMessage = ({handleMessage}) => {

  const messages = ['oi','ola', 'tudo bem']

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}
