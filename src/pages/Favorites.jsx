import React, { useContext } from 'react';
import Card from '../components/Card/index';
import AppContext from '../context';

function Favorites() {
  const { favorites, onAddFavorite, onAddToCart } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.id}
            id={item.parentId || item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;