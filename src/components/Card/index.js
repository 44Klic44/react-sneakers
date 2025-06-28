import styles from './Card.module.scss';
import React, { useContext } from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Card({ 
  id, 
  imageUrl, 
  price, 
  title, 
  loading = false, 
  isOrderItem = false // Новый пропс
}) {
  const { 
    isItemAdded, 
    isItemFavorited, 
    onAddFavorite, 
    onAddToCart, 
    setCartOpened 
  } = useContext(AppContext);
  
  const onClickPlus = () => {
    onAddToCart({ id, imageUrl, price, title });
  };

  const onClickFavorite = () => {
    onAddFavorite({ id, imageUrl, price, title });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader 
          speed={2}
          width={150}
          height={260}
          viewBox="0 0 150 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="133" rx="3" ry="3" width="150" height="15" /> 
          <rect x="0" y="153" rx="3" ry="3" width="100" height="15" /> 
          <rect x="0" y="198" rx="3" ry="3" width="80" height="25" /> 
          <rect x="113" y="198" rx="3" ry="3" width="32" height="25" /> 
          <rect x="0" y="6" rx="3" ry="3" width="150" height="112" />
        </ContentLoader>
      ) : (
        <div>
          {!isOrderItem && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img className='iconFavorite'
                width={18}
                height={17}
                src={isItemFavorited(id) ? 
                  "https://static.tildacdn.com/tild6664-6461-4436-b366-633033663338/free-icon-font-heart.png" : 
                  "https://static.tildacdn.com/tild3834-3830-4337-b365-333965363034/free-icon-font-heart.png"} 
                alt="Favorite"
              />
            </div>
          )}

          <img width='100%' height='100%' src={imageUrl} alt={title} />
          <h5 className='cena'>{title}</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column cena'>
              <span >Цена:</span>
              <b >{price} руб.</b>
            </div>

            {!isOrderItem && onAddToCart && (
              <img 
                width={20}
                height={20}
                className={styles.plus } 
                onClick={onClickPlus} 
                src={isItemAdded(id) ? 
                  "https://static.tildacdn.com/tild6163-6465-4766-b739-333034383036/free-icon-font-check.png" : 
                  "https://static.tildacdn.com/tild3262-6134-4633-a139-303330626234/free-icon-font-check.png"} 
                alt="Add to cart"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;