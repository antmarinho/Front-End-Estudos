import { useContext } from "react"
import { AppContext } from "../App"

const Context = () => {

    const details = useContext(AppContext)

  return (
    <>
        {details && (
            <div>
                <h2>Liguagem {details.language}</h2>
                <h4>framework {details.framework}</h4>
                <p>qtd {details.projects}</p>
            </div>
        )}
    </>
  )
}

export default Context