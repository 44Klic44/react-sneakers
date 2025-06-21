import React from 'react';
import Card from '../components/Card/index';

function Home({
  items = [],
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddFavorite,
  onAddToCart,
  cartItems = [],
  favorites = [],
  isLoading = false
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={item?.id || index}
        onFavorite={onAddFavorite}
        onPlus={onAddToCart}
        added={item && cartItems.some((obj) => Number(obj.parentId) === Number(item.id))}
        favorited={item && favorites.some((obj) => Number(obj.parentId) === Number(item.id))}
        {...(item || {})}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input 
            onChange={onChangeSearchInput} 
            value={searchValue} 
            placeholder="Поиск..." 
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;