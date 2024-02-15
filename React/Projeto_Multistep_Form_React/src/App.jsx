// components
import { UsuarioFormu } from './components/UsuarioFormu'
import { AvaliacaoFormu } from './components/AvaliacaoFormu'
import { Tyou } from './components/Tyou'
import { GrFormNext,GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi'
import { Steps } from './components/Steps';

// hooks
import { usuarioFormu } from './hooks/usuarioFormu';
import { useState } from 'react';

import './App.css';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  commet: "",
};

function App() {

  const [data,setData] = useState(formTemplate);

  const updateFieldHandler = (key,value) => {
    setData((prev) => {
      return {...prev,[key]: value};
    });
  };

  const formuComponents = [
  <UsuarioFormu data={data} updateFieldHandler={updateFieldHandler}/>,
  <AvaliacaoFormu data={data} updateFieldHandler={updateFieldHandler}/>,
  <Tyou data={data} updateFieldHandler={updateFieldHandler}/>
  ];

  const {currentStep,currentComponent,changeStep,isLastStep,isFirstStep} = usuarioFormu(formuComponents)

  return (
    <>
      <div className="App">
        <div className="header">
          <h2>Deixe sua avaliacao</h2>
          <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto</p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep}/>
          <form onSubmit={(e) => changeStep(currentStep + 1,e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && ( 
                <button type='button' onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious/>
                  <span>Voltar</span>
                </button>)}
              {!isLastStep ? ( 
                <button type='submit'>
                  <span>Avancar</span>
                  <GrFormNext/>
                </button>) : (
                <button type='button'>
                  <span>Enviar</span>
                  <FiSend/>
                </button>)}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
