import React from 'react'

export const ConditionalRender = () => {

    const x = 5

    const name = 'jose'

  return (
    <div>
        {/* 7 render condicional */}
        <h3>isso sera exibido</h3>
        {x > 2 && <p> se x for true sim</p>}

        {/* 8 else */}
        <h3>render ternario</h3>
        {name === 'joao' ? (
            <div>
                <p>ola joao</p>
            </div>
        ) : (
            <div>
                <p>Nome nao encontrado</p>
            </div>
        )}
    </div>
  )
}
