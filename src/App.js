
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
  const [items, setItems] = useState([ ])
    const [cartitems, setCartItems] = useState([ ])
      const [favorites, setFavorites] = useState([ ])
const [searchValue, setsearchValue] = useState('');
const [cartOpened, setCardOpened] = useState(false);
// fetch запрос на сервер с товарами
React.useEffect(()=>{
// fetch('https://684e8a9ef0c9c9848d286908.mockapi.io/items').then(response =>{
//   return response.json();
// }).then(json=>{
//   setItems(json)
// });
axios.get('https://684e8a9ef0c9c9848d286908.mockapi.io/items').then(res =>{
  setItems(res.data)
})
axios.get('https://684e8a9ef0c9c9848d286908.mockapi.io/cart').then(res =>{
  setCartItems(res.data)
})
axios.get('https://6852cf830594059b23cf2fe9.mockapi.io/favorites').then(res =>{
  setFavorites(res.data)
})
},[])



const  onChangeSearchInput = (event) =>{
setsearchValue(event.target.value )
}



// const [count , setCount] = useState(0);
// const clikplus = () =>{
// setCount(count + 1);
// }
// const clikmin = () =>{
// setCount(count - 1);
// }


const onAddToCart = (obj) =>{
  
  if(cartitems.find((item) => Number(item.id) === Number(obj.id))){
     axios.delete(`https://684e8a9ef0c9c9848d286908.mockapi.io/cart/${obj.id}`);
setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
  }


else{
axios.post('https://684e8a9ef0c9c9848d286908.mockapi.io/cart', obj).then(res =>{})
setCartItems((prev) => [...prev, obj])
}
 
};




const onRemoveItem = (id) =>{
  axios.delete(`https://684e8a9ef0c9c9848d286908.mockapi.io/cart/${id}`);
 setCartItems((prev) => prev.filter(item => item.id !== id ));
}

const onAddFavorite = async(obj) =>{
  try{
  if (favorites.find(favobj => favobj.id === obj.id)){
     axios.delete(`https://6852cf830594059b23cf2fe9.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id ));
  } else{

    const {data} = await axios.post(`https://6852cf830594059b23cf2fe9.mockapi.io/favorites`, obj);

 setFavorites((prev) => [...prev, data]);
  }
  } catch(error){
alert('Не удалось добавить в избранное')

  }
}

 console.log(cartitems);

  return (
    <div className="wrapper clear">
      {/* <h1>{count}</h1>
<button onClick={clikplus}>+</button>
<button onClick={clikmin}>-</button> */}
     

{cartOpened && <Drawer items={cartitems} onClose={()=> setCardOpened(false)} onRemover={ onRemoveItem}></Drawer> }
<Header onClickCart={() => setCardOpened(true)} />


<Routes>
  <Route
    path="/"
    element={<Home items={items}
    searchValue={searchValue}
    setSearchValue={setsearchValue}
    onChangeSearchInput={onChangeSearchInput}
    onAddFavorite={onAddFavorite}
    onAddToCart={onAddToCart}
    >
    </Home>}
  />
</Routes>
<Routes>
  <Route
    path="/favorites"
    element={<Favorites items={favorites} onAddFavorite ={onAddFavorite }></Favorites>}
  />
</Routes>

   
 
    </div>
  );
}
export default App;
