import './App.css'
import { MyComponent } from './components/MyComponent'
import { Title } from './components/Title';

// 2 css componente

function App() {
  
  // 4 css inline dinamico
  const n = 15;

  // 5 classe dinamica
  const redtTitle = false;

  return (
    <>
      <div className="clas">
        {/*css global */}
        <h1>css no react</h1>
        {/*css componentes */}
        <MyComponent/>
        <p>pegou o css do componente</p>
         {/* 3 inline style */}
         <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue", marginTop: "5px"}}>esse elemento tem estilo inline</p>
          {/* 4 inline style dinamico*/}
          <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>css dinamico</h2>
          <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>css dinamico</h2>
          {/* 5  classe dinamica*/}
          <h2 className={redtTitle ? "red-title" : "title"}>esse titulo vai ter uma classe</h2>
          {/* 6 css modules*/}
          <Title/>
      </div>
    </>
  )
}

export default App
