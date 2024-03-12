import React from 'react'
import blogFetch from '../axios/config'
import { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const EditPost = () => {

    const navigate = useNavigate()

    const [title,setTitle] = useState()
    const [body,setBody] = useState()

    const {id} = useParams()

    const gerPost = async() => {
        
        try {

            const response = await blogFetch.get(`/posts/${id}`);

            const data = response.data

            setTitle(data.title)
            setBody(data.body)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        gerPost()
    },[])

    const editPost = async(e) => {

        e.preventDefault();

        const post = {title,body,userId: 1}

        await blogFetch.put(`/posts/${id}`,{
            body: post,
        })

    }

  return (
    <div className='new-post'>
        <h2>Editando: {title}</h2>
        <form onSubmit={(e) => editPost(e)}>
            <div className="form-control">
                <label htmlFor="title">Titulo</label>
                <input id='title' type="text" name='title' placeholder='digite o titulo' onChange={(e) => setTitle(e.target.value)} value={title || ""}/>
            </div>
            <div className="form-control">
                <label htmlFor="body">Conteudo</label>
                <textarea id='body' name='body' rows="10" placeholder='digite o conteudo' onChange={(e) => setBody(e.target.value)} value={body || ""}/>
            </div>
            <input type="submit" value="Editar Post" className='btn'/>
        </form>
    </div>
  )
}

export default EditPost