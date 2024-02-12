import React from 'react'

export const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log("executou")
    }

    // 8 funcao com renderizacao

    const  rederSomething = (x) => {
        if(x){
            return <h1>renderizando isso</h1>
        } else {
            return <h1>renderizaando outra coisa</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => console.log('testando')}>clique aqui</button>
            </div>
            
            {/* 7 evento com funcao  */}

            <div>
                <button onClick={handleClick}>clique aqui com funcao</button>
            </div>

            {/* 8 funcao  com render*/}
            {rederSomething(true)}
            {rederSomething(false)}
        </div>
    )
}