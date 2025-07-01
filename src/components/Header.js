import { useContext, useState } from 'react';
import { Route, Routes, Link, Links } from 'react-router-dom';
import AppContext from '../context';

function Header({ searchValue, setSearchValue, onChangeSearchInput, onClickCart }) {
  const { cartItems, favorites } = useContext(AppContext);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  const cartItemsCount = cartItems.length;
  const favoritesCount = favorites.length;

  const handleSearchClick = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  const handleCloseMobileSearch = () => {
    setShowMobileSearch(false);
  };

  return (
    <header className='d-flex justify-between align-center header'>
      <Link to='/'>
        <div className='d-flex alighn-center headerleft'> 
          <img width={80} height={40} src="https://static.tildacdn.com/tild3438-6135-4463-b365-613830336265/norootpng.webp" alt='logo'/>
          <div className='headerinfo'>
            <h3 className='text-uppercase'>Профессиональная косметика</h3>
            <p>для перманентного макияжа</p>
          </div> 
        </div>
      </Link>

      {/* Десктопная версия поиска */}
      <div style={{ alignItems: 'center' }} className="search-block d-flex hide-on-mobile">
        <img width={25} height={25} src="https://static.tildacdn.com/tild3966-3631-4932-a335-333866306164/free-icon-search-241.png" alt="Search" />
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

      {/* Иконка поиска для мобильной версии */}
      <div className="show-on-mobile mr-20 cu-p" onClick={handleSearchClick}>
        <img width={25} height={25} src="https://static.tildacdn.com/tild3966-3631-4932-a335-333866306164/free-icon-search-241.png" alt="Search" />
      </div>

      <ul className='"headerRight d-flex'>
        <li onClick={onClickCart} className='mr-30 cu-p d-flex align-center'>
          <div className='cart-icon-wrapper'>
            <img width={20} height={18} src="https://static.tildacdn.com/tild6537-3430-4262-a161-653339373532/free-icon-font-shopp.png" alt='cart'/>
            {cartItemsCount > 0 && <span className='cart-count'>{cartItemsCount}</span>}
          </div>
          <span>{totalPrice} руб.</span>
        </li>

        <Link to='/favorites'>
          <li className="mr-20 cu-p d-flex align-center">
            <div className='favorites-icon-wrapper'>
              <img width={20} height={18} src="https://static.tildacdn.com/tild3834-3830-4337-b365-333965363034/free-icon-font-heart.png" alt='favorites'/>
              {favoritesCount > 0 && <span className='favorites-count'>{favoritesCount}</span>}
            </div>
          </li>
        </Link>

        <Link to='/orders'>
          <li>
            <img width={20} height={18} src="https://static.tildacdn.com/tild3234-3035-4661-b132-376636636236/free-icon-user-51158.png" alt='user'/>
          </li>
        </Link>
      </ul>

      {/* Мобильное поисковое окно */}
      {showMobileSearch && (
        <div className="mobile-search-overlay">
          <div className="mobile-search-container">
            <div className="mobile-search-block">
              <input 
                onChange={onChangeSearchInput} 
                value={searchValue} 
                placeholder="Поиск..." 
                autoFocus
              />
              {searchValue && (
                <img width={15} height={15}
                  onClick={() => setSearchValue('')}
                  className="clear cu-p"
                  src="https://static.tildacdn.com/tild6135-3630-4532-a330-643539313861/free-icon-font-circl.png"
                  alt="Clear"
                />
              )}
            </div>
            <button 
              className="mobile-search-close"
              onClick={handleCloseMobileSearch}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;