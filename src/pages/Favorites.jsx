import React from 'react';
import Card from '../components/Card/index';

function Favorites({ items, onAddFavorite, onAddToCart }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item) => (
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