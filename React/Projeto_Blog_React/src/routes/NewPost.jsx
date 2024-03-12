import React from 'react'
import './NewPost.css'
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {

    const navigate = useNavigate()

    const [title,setTitle] = useState()
    const [body,setBody] = useState()

    const createPost = async(e) => {
        
        e.preventDefault();

        const post = {title,body,userId: 1};

        await blogFetch.post("/posts", {
            body: post,
        });

        navigate("/");
    };

  return (
    <div className='new-post'>
        <h2>Inserir novo Post</h2>
        <form onSubmit={(e) => createPost(e)}>
            <div className="form-control">
                <label htmlFor="title">Titulo</label>
                <input id='title' type="text" name='title' placeholder='digite o titulo' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="body">Conteudo</label>
                <textarea id='body' name='body' rows="10" placeholder='digite o conteudo' onChange={(e) => setBody(e.target.value)}/>
            </div>
            <input type="submit" value="Criar Post" className='btn'/>
        </form>
    </div>
  )
}

export default NewPost