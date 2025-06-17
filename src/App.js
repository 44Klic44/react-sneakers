
import { useState } from 'react';
import './App.scss';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react';








function App() {
  const [items, setItems] = useState([ ])
    const [cartitems, setCartItems] = useState([ ])
const [searchValue, setsearchValue] = useState('');
const [cartOpened, setCardOpened] = useState(false);


React.useEffect(()=>{

fetch('https://684e8a9ef0c9c9848d286908.mockapi.io/items').then(response =>{
  return response.json();
}).then(json=>{
  setItems(json)
});

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
 setCartItems([...cartitems, obj]);

};

 console.log(cartitems);


  return (
    <div className="wrapper clear">
      {/* <h1>{count}</h1>
<button onClick={clikplus}>+</button>
<button onClick={clikmin}>-</button> */}
     


{cartOpened && <Drawer items={cartitems} onClose={()=> setCardOpened(false)}></Drawer> }
<Header onClickCart={()=> setCardOpened(true)} ></Header>

<div className='content  p-40'>
   <div className='d-flex align-center justify-between content mb-40  '>
<h1 >{searchValue ? `Поиск по запросу:"${searchValue}"`: "Все кросовки" }</h1>

<div className='search-block d-flex align-center'>


  
 
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="18px" height="18px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
 {searchValue && <img onClick={()=> setsearchValue('')} className='clear cu-p'  width="18" height="18"  alt="Add to cart" src="https://static.tildacdn.com/tild3661-3362-4531-b636-636331643038/Group_91_1.png"></img>}

<input placeholder='Поиск' onChange={onChangeSearchInput} value={searchValue}></input>
</div>

  </div>

<div className='d-flex flex-wrap justify-between'>
{items.filter(obj => obj.title.toLowerCase().includes(searchValue)).map((obj, index) => 
<Card 
key={index}
title={obj.title} 
price={obj.price} 
imageUrl={obj.imageUrl}
onFavorite={() => console.log('Избранное добавили')}
onPlus={(item) => onAddToCart(item)}  >

</Card>
)}


</div>

   </div>
   
  
    </div>
  );
}

export default App;
