import React, { useContext } from 'react';
import Card from '../components/Card/index';
import  AppContext  from '../context';

function Favorites({  onAddFavorite, onAddToCart }) {

  const { favorites } = useContext(AppContext); // Деструктурируем favorites из контекста

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
            onFavorite={onAddFavorite}
            onPlus={onAddToCart} // Добавляем эту строку
            added={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;