import styles from './Card.module.scss'
import React, { useEffect, useState } from 'react'

function Card({id, imageUrl, price, title, onFavorite, onPlus, favorited= false}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({id, imageUrl, price, title});
    setIsAdded(!isAdded); // Переключаем состояние между true и false
  }

   const onClickFavorite = () => {
   onFavorite({id, imageUrl, price, title});
    setIsFavorite(!isFavorite); // Переключаем состояние между true и false
  }

  React.useEffect(()=>{

console.log('Изменилась переменная')
  },[isAdded])

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
      <img width={30} height={30}
          className={styles.plus} 
          onClick={onClickFavorite} 
          src={isFavorite ? "https://static.tildacdn.com/tild6134-3339-4465-b262-343561646137/Group_90.png" : "https://static.tildacdn.com/tild3630-3833-4561-b834-396432383032/Group_90_1.png"} 
          alt="Add to cart"
        />
      </div>

      <img width={133} height={112} src={imageUrl} alt={title}/>
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price}</b>
        </div>

        <img width={30} height={30}
          className={styles.plus} 
          onClick={onClickPlus} 
          src={isAdded ? "https://static.tildacdn.com/tild6336-3961-4137-a437-313339373337/Group_95.png" : "https://static.tildacdn.com/tild3661-3362-4531-b636-636331643038/Group_91_1.png"} 
          alt="Add to cart"
        />
      </div>
    </div>
  )
}

export default Card;