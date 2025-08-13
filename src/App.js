import { createContext, useState } from 'react';
import './App.scss';
import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Order';
import SimpleSlider from './components/Slider';
import Banner from './components/Banner';
import BusinessCard from './components/BusinessCard';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsRes, cartRes, favoritesRes] = await Promise.all([
          axios.get('https://684e8a9ef0c9c9848d286908.mockapi.io/items'),
          axios.get('https://684e8a9ef0c9c9848d286908.mockapi.io/cart'),
          axios.get('https://6852cf830594059b23cf2fe9.mockapi.io/favorites')
        ]);

        setIsLoading(false);
        setItems(itemsRes.data);
        setCartItems(cartRes.data);
        setFavorites(favoritesRes.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  const isItemFavorited = (id) => {
    return favorites.some((obj) => Number(obj.parentId) === Number(id));
  };

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      
      if (findItem) {
        await axios.delete(`https://684e8a9ef0c9c9848d286908.mockapi.io/cart/${findItem.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://684e8a9ef0c9c9848d286908.mockapi.io/cart', {
          ...obj,
          parentId: obj.id
        });
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
      console.error(error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://684e8a9ef0c9c9848d286908.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter(item => item.id !== id));
    } catch (error) {
      alert('Не удалось удалить товар');
      console.error(error);
    }
  };

  const onAddFavorite = async (obj) => {
    try {
      const itemId = Number(obj.id);
      const existingItem = favorites.find(item => 
        Number(item.parentId) === itemId || Number(item.id) === itemId
      );

      if (existingItem) {
        await axios.delete(`https://6852cf830594059b23cf2fe9.mockapi.io/favorites/${existingItem.id}`);
        setFavorites(prev => prev.filter(item => 
          Number(item.parentId) !== itemId && Number(item.id) !== itemId
        ));
      } else {
        const { data } = await axios.post(
          'https://6852cf830594059b23cf2fe9.mockapi.io/favorites', 
          {
            ...obj,
            parentId: itemId,
            id: undefined
          }
        );
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      console.error('Ошибка при обновлении избранного:', error);
      alert('Не удалось обновить избранное. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      isItemFavorited,
      onAddFavorite,
      onAddToCart,
      setCartOpened,
      setCartItems
    }}>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer 
            items={cartItems} 
            onClose={() => setCartOpened(false)} 
            onRemove={onRemoveItem} 
          />
        )}
        <Header 
         searchValue={searchValue}
  setSearchValue={setSearchValue}
  onChangeSearchInput={onChangeSearchInput}
  onClickCart={() => setCartOpened(true)}
   items={items} />
        

        
        <Routes>
          <Route
            path="/"
            element={
              
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />

           <Route
            path="/orders"
            element={<Orders />}
          />
         
        </Routes>

        
        <BusinessCard></BusinessCard>
      </div>
    </AppContext.Provider>
  );
}

export default App;