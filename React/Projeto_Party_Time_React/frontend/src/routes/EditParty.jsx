import React from 'react'
import partyFetch from '../axios/config'
import { useState,useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import './Form.css'
import useToast from '../hook/useToast'

const EditParty = () => {

    const {id} = useParams()

    const [party,setParty] = useState(null)

    const [services,setServices] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const loadServices = async () => {
    
          const res = await partyFetch.get("/services")
    
          setServices(res.data)

          loadParty()
    
        }

        const loadParty = async() => {

            const res = await partyFetch.get(`/parties/${id}`)

            setParty(res.data)
        }
    
        loadServices()
    
      },[])

    const handleServices = (e) => {

        const checked = e.target.checked
        const value = e.target.value
    
        const filteredService = services.filter((s) => s._id === value)

        let partyServices = party.services
    
        if(checked) {
          partyServices = [...partyServices,filteredService[0]]
        } else {
          partyServices = partyServices.filter((s) => s._id !== value)
        }

        setParty({...party, services: partyServices})
    
      }

    const updateParty = async (e) => {

        e.preventDefault()

        try {

            const res = await partyFetch.put(`/parties/${party._id}`, party)

            if(res.status === 200) {

                navigate(`/party/${id}`)
            }
            
        } catch (error) {
            useToast(error.response.data.msg, "error")
        }

    }

    if(!party) return <p>Carregando...</p>

    return (
        <div className='form-page'>
          <h2>Editando: {party.title}</h2>
          <p>Ajuste as informacoes da sua festa</p>
          <form onSubmit={(e) => updateParty(e)}> 
            <label>
              <span>Nome da festa:</span>
              <input type="text" placeholder='seja criativo...' onChange={(e) => setParty({...party,title: e.target.value})} value={party.title} required/>
            </label>
            <label>
              <span>Anfitriao:</span>
              <input type="text" placeholder='Quem esta dando a festa?' onChange={(e) => setParty({...party,author: e.target.value})} value={party.author} required/>
            </label>
            <label>
              <span>Descricao:</span>
              <textarea placeholder='Conte mais sobre a festa' onChange={(e) => setParty({...party,description: e.target.value})} value={party.description} required></textarea>
            </label>
            <label>
              <span>Orcamento:</span>
              <input type="number" placeholder='Quanto vc pretende investir?' onChange={(e) => setParty({...party,budget: e.target.value})} value={party.budget} required/>
            </label>
            <label>
              <span>Image:</span>
              <input type="text" placeholder='Insita a url de uma imagem' onChange={(e) => setParty({...party,image: e.target.value})} value={party.image} required/>
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
                      <input type="checkbox" value={service._id} onChange={(e) => handleServices(e)} checked={party.services.find((partyService) => partyService._id === service._id) || ""}/>
                      <p>Marque para solicitar</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <input className='btn' type="submit" value='Editar festa' />
          </form>
        </div>
      )
}

export default EditParty