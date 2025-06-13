
import './App.scss';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr =[
  {
    title:'Stylish node 10ml', 
    price: 4000,
    imageUrl: "https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg",
  },
    {
    title:'Stylish pink 10ml', 
    price: 3700,
    imageUrl: "https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg",
  },
    {
    title:'Stylish red 10ml', 
    price: 3800,
    imageUrl: "https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg",
  },
    {
    title:'Stylish browe 10ml', 
    price: 3500,
    imageUrl: "https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg",
  }
]

function App() {
  return (
    <div className="wrapper clear">

     


<Drawer></Drawer>
<Header></Header>

<div className='content p-40'>
   <div className='d-flex align-center justify-between content mb-40  '>
<h1 className=''>Все пигменты</h1>

<div className='search-block d-flex align-center'>
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="18px" height="18px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
<input placeholder='Поиск'></input>
</div>

  </div>

<div className='d-flex'>
{arr.map((obj) => 
<Card 
title={obj.title} 
price={obj.price} 
imageUrl={obj.imageUrl}
onClick={() => console.log(obj)}  >

</Card>
)}


</div>

   </div>
   
  
    </div>
  );
}

export default App;
