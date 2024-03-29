import React from 'react'
import axios from '../axios-config'
import { useState } from 'react'
import './AddMemory.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddMemory = () => {

  const [inputs,setInputs] = useState([])

  const [image,setImage] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async(e) => {

    e.preventDefault()

    const formData = new FormData()

    formData.append("image", image)
    formData.append("title", inputs.title)
    formData.append("description", inputs.description)

    try {

      const response = await axios.post("/memories", formData, {

        headers: {
          "Content-Type": "multipart/form-data"
        }

      })

      toast.success(response.data.msg)

      navigate('/')
      
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }

  }

  const handleChange = async(e) => {

    if(e.target.name === "image") {

      setImage(e.target.files[0])

    } else {

      setInputs({...inputs, [e.target.name]: e.target.value})
    }
  }

  return (
    <div className='add-memory-page'>
      <h2>Crie uma nova memoria</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Titulo:</p>
          <input type="text" placeholder='defina um titulo' name='title' onChange={handleChange}/>
        </label>
        <label>
          <p>Descrição:</p>
          <textarea type="text" placeholder='explique o que aconteceu...' name='descricao' onChange={handleChange}></textarea>
        </label>
        <label>
          <p>Foto:</p>
          <input type="file" name='image' onChange={handleChange}/>
        </label>
        <input type="submit" className='btn' value="Enviar"/>
      </form>
    </div>
  )
}

export default AddMemory