import React from 'react';
import Card from './Card';

function SearchPopup({ items, searchValue, onClose }) {
  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!searchValue || filteredItems.length === 0) return null;

  return (
    <div className="search-popup-overlay" onClick={onClose}>
      <div className="search-popup-container" onClick={e => e.stopPropagation()}>
        <div className="search-popup-header">
          <h3>Результаты поиска: "{searchValue}"</h3>
          <button onClick={onClose} className="search-popup-close">
            ×
          </button>
        </div>
       <div className="search-popup-results">
  {filteredItems.map(item => (
    <div className="popup-card-wrapper">
      <Card
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
      />
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

export default SearchPopup;