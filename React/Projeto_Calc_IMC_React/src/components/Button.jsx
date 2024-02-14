import React from 'react'
import './Button.css'

export const Button = ({id,text,action}) => {

    const handleAction = (e) => {
        action(e);
    }

    return (
        <button id={id} onClick={handleAction}>{text}</button>
    )
}
