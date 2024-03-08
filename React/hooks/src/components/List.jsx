import React from 'react'
import { useEffect,useState } from 'react'

const List = ({getItems}) => {

    const[myItems,setMyItems] = useState()

    useEffect(() => {

        console.log("buscando dados no db")

        setMyItems(getItems)

    },[getItems])

  return (
    <div>
        {myItems && myItems.map((item) => <p key={item}>{item}</p>)}
    </div>
  )
}

export default List