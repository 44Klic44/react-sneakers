
import './App.scss';

function App() {
  return (
    <div className="wrapper clear">
   <header className='d-flex justify-between align-center p-40'>
    <div className='d-flex alighn-center headerleft'> 
     <img width={40} height={40} src="https://static.tildacdn.com/tild3336-3038-4338-a664-363562396339/Frame_14.jpg" alt='logo'/>

    <div className='"headerinfo'>
      <h3 className='text-uppercase'>React sneakers</h3>
      <p>Магазин лучших кросовок</p>
    </div> 
    </div>
  

       <ul className='"headerRight d-flex'>
        <li className='mr-30 '>
             <img width={18} height={18} src="https://static.tildacdn.com/tild6363-6234-4165-a637-653264323765/Frame_25.svg" alt='logo'/>

          <span>1205 руб.</span>
        </li>
        <li>
        
 <img width={18} height={18} src="https://static.tildacdn.com/tild6465-3236-4530-b865-653531666532/profile_menu.svg" alt='logo'/>
        </li>
       </ul>

   </header>
   <div className='content  p-40'>
<h1 className='mb-40'>Все пигменты</h1>

<div className='d-flex'>

 <div className='card'>
<img width={133} height={112} src='https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg'/>
<h5>Bronza • 10 ml</h5>
<div className='d-flex justify-between align-center'>
  <div className='d-flex flex-column '>
  <span>Цена:</span>
  <b>12 999руб.</b>
  </div>
  <button className='button'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11px" height="11px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>     
 </button>
</div>
</div>


<div className='card'>
<img width={133} height={112} src='https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg'/>
<h5>Bronza • 10 ml</h5>
<div className='d-flex justify-between align-center'>
  <div className='d-flex flex-column '>
  <span>Цена:</span>
  <b>12 999руб.</b>
  </div>
  <button className='button'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11px" height="11px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>     
 </button>
</div>
</div>


<div className='card'>
<img width={133} height={112} src='https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg'/>
<h5>Bronza • 10 ml</h5>
<div className='d-flex justify-between align-center'>
  <div className='d-flex flex-column '>
  <span>Цена:</span>
  <b>12 999руб.</b>
  </div>
  <button className='button'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11px" height="11px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>     
 </button>
</div>
</div>


<div className='card'>
<img width={133} height={112} src='https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg'/>
<h5>Bronza • 10 ml</h5>
<div className='d-flex justify-between align-center'>
  <div className='d-flex flex-column '>
  <span>Цена:</span>
  <b>12 999руб.</b>
  </div>
  <button className='button'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11px" height="11px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>     
 </button>
</div>
</div>

</div>

   </div>
   
    </div>
  );
}

export default App;
