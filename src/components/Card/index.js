import styles from './Card.module.scss';
import React, { useContext } from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Card({ id, imageUrl, price, title, loading = false }) {
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
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              width={30}
              height={30}
              src={isItemFavorited(id) ? 
                "https://static.tildacdn.com/tild6134-3339-4465-b262-343561646137/Group_90.png" : 
                "https://static.tildacdn.com/tild3630-3833-4561-b834-396432383032/Group_90_1.png"} 
              alt="Favorite"
            />
          </div>

          <img width='100%' height='100%' src={imageUrl} alt={title} />
          <h5>{title}</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>

            <img
              width={30}
              height={30}
              className={styles.plus} 
              onClick={onClickPlus} 
              src={isItemAdded(id) ? 
                "https://static.tildacdn.com/tild6336-3961-4137-a437-313339373337/Group_95.png" : 
                "https://static.tildacdn.com/tild3661-3362-4531-b636-636331643038/Group_91_1.png"} 
              alt="Add to cart"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;