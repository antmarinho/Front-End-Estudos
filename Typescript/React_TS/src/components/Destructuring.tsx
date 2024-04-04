

type Props = {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[]

    // enum

    category: Category
}

export enum Category {
  JS = 'javascript',
  TS = 'typescript',
  P = 'python'
}

function Destructuring({title,content,commentsQty,tags,category}: Props) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>quantidade de comentarios {commentsQty}</p>
        <div>
            {tags.map((tag) => (
                <span>#{tag}</span>
            ))}
        </div>
        <h4>categoria {category}</h4>
    </div>
  )
}

export default Destructuring