import React from 'react';

function SearchPopup({ items, searchValue, onClose, onOpenProductPopup }) {
  const filteredItems = items.filter(item => 
    item && item.title && item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!searchValue || filteredItems.length === 0) return null;

  const handleItemClick = (item) => {
    if (onClose) onClose();
    
    if (onOpenProductPopup && typeof onOpenProductPopup === 'function') {
      onOpenProductPopup(item);
    }
  };

  return (
    <div className="search-dropdown">
      <div className="search-dropdown-header">
        <span className="search-results-count">Найдено: {filteredItems.length}</span>
      </div>
      <div className="search-dropdown-results">
        {filteredItems.slice(0, 5).map(item => (
          <div 
            key={item.id} 
            className="search-dropdown-item"
            onClick={() => handleItemClick(item)}
          >
            <div className="search-dropdown-item-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="search-dropdown-item-info">
              <div className="search-dropdown-item-title">{item.title}</div>
              <div className="search-dropdown-item-price">{item.price} руб.</div>
            </div>
          </div>
        ))}
        {filteredItems.length > 5 && (
          <div className="search-dropdown-more">
            И еще {filteredItems.length - 5} результатов...
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPopup;