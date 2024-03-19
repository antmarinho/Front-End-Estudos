import React from 'react'
import partyFetch from '../axios/config'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import useToast from '../hook/useToast'

const CreateParty = () => {

  const [services, setServices] = useState([])

  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [budget,setBudget] = useState(0)
  const [image,setImage] = useState("")
  const [partyServices,setPartyServices] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    const loadServices = async () => {

      const res = await partyFetch.get("/services")

      setServices(res.data)

    }

    loadServices()

  },[])

  const handleServices = (e) => {

    const checked = e.target.checked
    const value = e.target.value

    const filteredService = services.filter((s) => s._id === value)

    if(checked) {
      setPartyServices((services) => [...services,filteredService[0]])
    } else {
      setPartyServices((services) => services.filter((s) => s._id !== value))
    }

  }

  const createParty = async (e) => {
    e.preventDefault();

    try {
      const party = {
        title,
        author,
        description,
        budget,
        image,
        services: partyServices,
      };

      const res = await partyFetch.post("/parties", party);

      console.log(res.status);

      if (res.status === 201) {
        navigate("/");

        useToast(res.data.msg)
      }
    } catch (err) {
      useToast(err.response.data.msg, "error")
    }
  };

  return (
    <div className='form-page'>
      <h2>Crie sua proxima Festa</h2>
      <p>Defina o seu orcamento e escolha o servicos</p>
      <form onSubmit={(e) => createParty(e)}> 
        <label>
          <span>Nome da festa:</span>
          <input type="text" placeholder='seja criativo...' onChange={(e) => setTitle(e.target.value)} value={title} required/>
        </label>
        <label>
          <span>Anfitriao:</span>
          <input type="text" placeholder='Quem esta dando a festa?' onChange={(e) => setAuthor(e.target.value)} value={author} required/>
        </label>
        <label>
          <span>Descricao:</span>
          <textarea placeholder='Conte mais sobre a festa' onChange={(e) => setDescription(e.target.value)} value={description} required></textarea>
        </label>
        <label>
          <span>Orcamento:</span>
          <input type="number" placeholder='Quanto vc pretende investir?' onChange={(e) => setBudget(e.target.value)} value={budget} required/>
        </label>
        <label>
          <span>Image:</span>
          <input type="text" placeholder='Insita a url de uma imagem' onChange={(e) => setImage(e.target.value)} value={image} required/>
        </label>
        <div>
          <h2>Escolha os servicos</h2>
          <div className="services-container">
            {services.length === 0 && <p>Carregando...</p>}
            {services.length > 0 && services.map((service) => (
              <div className="service" key={service._id}>
                <img src={service.image} alt={service.name} />
                <p className='service-name'>{service.name}</p>
                <p className="service-price">R${service.price}</p>
                <div className="checkbox-container">
                  <input type="checkbox" value={service._id} onChange={(e) => handleServices(e)}/>
                  <p>Marque para solicitar</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <input className='btn' type="submit" value='Criar festa' />
      </form>
    </div>
  )
}

export default CreateParty