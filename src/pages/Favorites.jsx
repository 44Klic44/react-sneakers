import React, { useContext } from 'react';
import Card from '../components/Card/index';
import AppContext from '../context';
import Breadcrumbs from '../components/Breadcrumbs';

function Favorites() {
  const { favorites, onAddFavorite, onAddToCart,  onOpenProductPopup } = useContext(AppContext);

  return (
    <div className="content paddingleft">
        <Breadcrumbs />

      <div className="d-flex align-center justify-between mb-40 favorite-contain pt-20">
        <h1>Избранное</h1>
      </div>

      {favorites.length > 0 ? (
        <div className="d-flex flex-wrap">
          {favorites.map((item) => (
            <Card
              key={item.id}
              id={item.parentId || item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onOpenPopup={() => onOpenProductPopup(item)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <img src="https://static.tildacdn.com/tild3834-3830-4337-b365-333965363034/free-icon-font-heart.png" alt="Empty favorites" />
          <h3>Избранных нет </h3>
          <p>Вы ничего не добавляли в избранное</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;