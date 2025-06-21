
import { useState } from 'react';
import './App.scss';
import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
   const [isLoading, setisLoading] = useState(true);

  React.useEffect(() => {
    async function fetchData() {

 
      try {
        const [itemsRes, cartRes, favoritesRes] = await Promise.all([
          axios.get('https://684e8a9ef0c9c9848d286908.mockapi.io/items'),
          axios.get('https://684e8a9ef0c9c9848d286908.mockapi.io/cart'),
          axios.get('https://6852cf830594059b23cf2fe9.mockapi.io/favorites')
        ]);

        setisLoading(false)
        
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
    // Нормализуем ID для сравнения (преобразуем в число)
    const itemId = Number(obj.id);
    
    // Ищем в текущих избранных как по parentId, так и по id (для совместимости)
    const existingItem = favorites.find(item => 
      Number(item.parentId) === itemId || Number(item.id) === itemId
    );

    if (existingItem) {
      // Удаляем по реальному ID записи в избранном
      await axios.delete(`https://6852cf830594059b23cf2fe9.mockapi.io/favorites/${existingItem.id}`);
      
      // Обновляем состояние, удаляя все версии элемента (по parentId и id)
      setFavorites(prev => prev.filter(item => 
        Number(item.parentId) !== itemId && Number(item.id) !== itemId
      ));
    } else {
      // Создаем новую запись с явным указанием parentId
      const { data } = await axios.post(
        'https://6852cf830594059b23cf2fe9.mockapi.io/favorites', 
        {
          ...obj,
          parentId: itemId, // Гарантированно число
          id: undefined // Позволяем серверу сгенерировать новый ID
        }
      );
      
      // Добавляем в состояние, предварительно проверив на дубликаты
      setFavorites(prev => {
        const alreadyExists = prev.some(item => 
          Number(item.parentId) === itemId || Number(item.id) === data.id
        );
        return alreadyExists ? prev : [...prev, data];
      });
    }
  } catch (error) {
    console.error('Ошибка при обновлении избранного:', error);
    alert('Не удалось обновить избранное. Пожалуйста, попробуйте позже.');
  }
};

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer 
          items={cartItems} 
          onClose={() => setCartOpened(false)} 
          onRemove={onRemoveItem} 
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
              cartItems={cartItems}
              favorites={favorites}
              isLoading={isLoading}
            />
          }
        />
       <Route
  path="/favorites"
  element={<Favorites items={favorites} onAddFavorite={onAddFavorite} onAddToCart={onAddToCart} />}
/>
      </Routes>
    </div>
  );
}
export default App;
