import React from 'react'

export const CarDetails = ({brand,km,color}) => {
  return (
    <div>
        <h2>detalhes do carro</h2>
        <ul>
            <li>marca {brand}</li>
            <li>km {km}</li>
            <li>cor {color}</li>
        </ul>
    </div>
  )
}
