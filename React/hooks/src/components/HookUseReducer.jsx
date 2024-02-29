import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const HookUseReducer = () => {

    // 1 comecando com o useReducer

    const [number,dispatch] = useReducer((state,action) => {
        return Math.random(state)
    })

    // 2 avancnado no useReducer

    const inititalTasks = [
        {id: 1, text: 'fazer algo'},
        {id: 2, text: 'fazer outro algo'},
    ]

    const taskReducer = (state,action) => {

        switch(action.type) {

            case "ADD":

                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText("")

                return [...state, newTask]

            case "DELETE":
                return state.filter((task) => task.id !== action.id)

            default:
                return state

        }
    }

    const [taskText,setTaskText] = useState()
    const [tasks,dispatchTasks] = useReducer(taskReducer,inititalTasks)

    const handleSubmit = (e) => {
        
        e.preventDefault();

        dispatchTasks({type: "ADD"})
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>numero {number}</p>
        <button onClick={dispatch}>alterar numero</button>
        <h3>tarefas</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
            <input type="submit" value="enviar"/>
        </form>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
        </ul>
        <hr/>
    </div>
  )
}

export default HookUseReducer