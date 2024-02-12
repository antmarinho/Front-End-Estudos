import { Children, useState } from 'react'
import './App.css'

// 2 imagem em assets
import night from './assets/night.jpg'

// 3 useState
import { Data } from './components/Data'

// 4 renderizacao de lista
import { ListRender } from './components/ListRender'

// 7 condicional render
import { ConditionalRender } from './components/ConditionalRender'

// 8 props 
import { ShowUserName } from './components/ShowUserName'

// 9 desestruturando props
import { CarDetails } from './components/CarDetails'

// 11 renderizacao de lista com componente
const cars = [
  {id: 1, brand: 'ferrari', color: 'amarelo', km: 0},
  {id: 2, brand: 'kia', color: 'branco', km: 1000},
  {id: 3, brand: 'fiat', color: 'azul', km: 9990},
]

// 12 fragment
import { Fragment } from './components/Fragment'

// 13 children
import { Container } from './components/Container'

//14 funcao em prop
import { ExecuteFunction } from './components/ExecuteFunction'

// 15 state lift
import { Message } from './components/Message'
import { ChangeMessage } from './components/ChangeMessage'

function App() {
  const [count, setCount] = useState(0)

  // 14 funcao prop

  function showMessege() {
    console.log('evento do componente pai')
  }

  // 15 state lift
  const [message,setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }
 
  return (
    <div className="App">
      <h1>Avancando em React</h1>
      {/*1 imagem em public*/}
      <img src="/img.jpg" alt="alguma imagem" />
      {/* 2 imagem em assets */}
      <img src={night} alt="outra imagem" />
      {/* useState */}
      <Data/>
      {/* 4 render lista */}
      <ListRender/>
      {/* 7  render condicional */}
      <ConditionalRender/>
      {/* 8 props */}
      <ShowUserName name= 'jose'/>
      {/* 9 desestruturando props */}
      <CarDetails brand='vw' km={999} color='vermelho'/>
      {/* 10 reaproveitamento de componentes */}
      <CarDetails brand='chevrolet' km={0} color='prata'/>
      <CarDetails brand='fiat' km={9999} color='preto'/>
      {/* 11 renderizacao de lista com  componentes */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/* 12 fragment */}
      <Fragment/>
      {/* 13 children*/}
      <Container>
        <p>alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>teste</h2>
          <p>meu componente</p>
        </div>
      </Container>
      {/* 14 funcao em prop*/}
      <ExecuteFunction myFunction={showMessege}/>
      {/* 15 state lift*/}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
