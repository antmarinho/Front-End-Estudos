import React from 'react'
import { useState } from 'react'

export const ListRender = () => {

    const [list] = useState(['jose','joao','maria'])

    const [users,setUsers] = useState([
        {id: 1, name: 'jose', age: 31},
        {id: 2, name: 'joao', age: 30},
        {id: 3, name: 'maria', age: 55},
        {id: 4, name: 'ana', age: 16}
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 5)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    } 

  return (
    <div>
        {/* 4 render sem key */}
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}  
        </ul>

        {/* 5 render com key */}

        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
          ))}  
        </ul>

        {/* 6 previous state */}
        <button onClick={deleteRandom}>deletar random user</button>

    </div>
  )
}
