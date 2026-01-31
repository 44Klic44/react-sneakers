import styles from './Card.module.scss';
import React, { useContext } from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Card({ 
  id, 
  imageUrl, 
  price, 
  title,
  shortDescription,
  description, 
  loading = false, 
  isOrderItem = false, // Новый пропс
  onOpenPopup,
  
}) {
  const { 
    isItemAdded, 
    isItemFavorited, 
    onAddFavorite, 
    onAddToCart, 
    setCartOpened } = useContext(AppContext);
  
  const onClickPlus = (e) => {
    e.stopPropagation();
    onAddToCart({ id, imageUrl, price, title });
  };

  const onClickFavorite = (e) => {
    e.stopPropagation();
    onAddFavorite({ id, imageUrl, price, title });
  };

  return (
    <div className={styles.card} onClick={() => onOpenPopup({ id, title, imageUrl, price, description })} >
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

          <img  className={styles.image} width='100%' height='100%' src={imageUrl} alt={title} />
          <h5 className='cena'>{title}</h5>
          <p className={styles.shortDescription}>
              {shortDescription}
          </p>
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
                  "https://static.tildacdn.com/tild3564-6637-4563-b263-373431343964/icons8--64_1.png" : 
                  "https://static.tildacdn.com/tild6566-3838-4734-b862-306535623666/icons8--64.png"} 
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