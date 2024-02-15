import React from 'react'
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsEmojiNeutralFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill} from 'react-icons/bs'
import './Tyou.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>
}

export const Tyou = ({data,updateFieldHandler}) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>A sua opiniao e muito importante em breve voce recebera um cupom de 10% de desconto para a sua proxima compra</p>
      <p>Para concluir sua avaliacao clique no botao de Enviar abaixo</p>
      <h3>Aqui esta o resumo da sua avaliacao {data.name}:</h3>
      <p className="review-data">
        <span>Satisfacao com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentario:</span>
        {data.comment}
      </p>
    </div>
  )
}
