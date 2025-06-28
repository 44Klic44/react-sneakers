import Card from '../components/Card/index';
import React from 'react';

function Home({
  items = [],
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  isLoading = false
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={item?.id || index}
        {...(item || {})}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все пигменты'}</h1>
        <div style={{ alignItems: 'center' }} className="search-block d-flex">
          <img  width={25} height={25} src="https://static.tildacdn.com/tild3966-3631-4932-a335-333866306164/free-icon-search-241.png" alt="Search" />
          {searchValue && (
            <img width={10} height={10}
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="https://static.tildacdn.com/tild6135-3630-4532-a330-643539313861/free-icon-font-circl.png"
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