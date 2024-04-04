

type Props = {
    name: string
}

function SecondComponent(props: Props) {
  return (
    <div>
        <p>Meu segundo componente</p>
        <p>o nome dele e {props.name}</p>
    </div>
  )
}

export default SecondComponent