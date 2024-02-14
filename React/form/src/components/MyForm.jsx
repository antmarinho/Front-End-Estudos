import React from 'react'
import { useState } from 'react'
import './MyForm.css'

export const MyForm = ({userName,userEmail}) => {

    const [name,setName] = useState(userName);
    const [email,setEmail] = useState(userEmail);
    const [bio,setBio] = useState("");
    const [role,setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    // 5 envio do form

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,bio,role)

        //validacao
        //envio

        // 7 limpar o form

        setEmail("");
        setName("");
        setBio("");
        setRole("");
    }

    console.log(name,email)

  return (
    <div>
        {/* 1 criacao de form */}
        {/* 5 envio do formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="digite o seu nome" 
                    onChange={handleName}
                    // 6 controlled input
                    value={name || ""}/>
            </div>
             {/* 2 label envolvendo input */}
             <label>
                <span>E-mail</span>
                <input 
                    type="email" 
                    name='email' 
                    placeholder='digite o seu email' 
                    onChange={(e) => setEmail(e.target.value)} 
                    // 6 controlled input 
                    //ou no state inicia com a string vazia
                    value={email || ""}/>
             </label>
             {/* 8 textarea */}
             <label>
                <span>Bio:</span>
                <textarea 
                    name="bio" 
                    placeholder='Descricao do usuario' 
                    onChange={(e) => setBio(e.target.value)} 
                    value={bio}></textarea>
             </label>
             {/* 9 select */}
             <label>
                <span>Funcao do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">usuario</option>
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                </select>
             </label>
            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}
