// 4 template expression

const TemplateExpression = () => {

    const name = "jose"
    const data = {
        age: 31,
        job: "programador"
    }

    return (
        <div>
            <p>a soma e { 2 + 2 }</p>
            <h3>bem vindo {name}</h3>
            <p>sua idade e {data.age} anos e vc e um {data.job}</p>
        </div>
    )
}

export default TemplateExpression