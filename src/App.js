
import './App.scss';

function App() {
  return (
    <div className="wrapper clear">

      <div className='overlay '>
      <div className='drawer '>
<h2>Корзина</h2>


<div className='items'>
<div className='cartItem mb-20 d-flex align-center justify-between'>
  
<div 
  className='cartItemImg '
  style={{ backgroundImage: "url(https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg)" }}
></div>


  {/* <img className='mr-20' width={70} height={70} src='https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg'/> */}

   <div className='mr-20'>
    <p className='mb-5'>Stylysh nide - 10ml </p>
    <b> 4000 руб.</b>
   </div>

<svg className='removeBtn' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg>

</div>

<div className='cartItem mb-20 d-flex align-center justify-between'>
  
<div 
  className='cartItemImg '
  style={{ backgroundImage: "url(https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg)" }}
></div>


  {/* <img className='mr-20' width={70} height={70} src='https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg'/> */}

   <div className='mr-20'>
    <p className='mb-5'>Stylysh nide - 10ml </p>
    <b> 4000 руб.</b>
   </div>

<svg className='removeBtn' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg>

</div>

</div>
 <ul className='cartTotalBlock'>
  <li >
    <span>Итого</span>
    <div></div>
    <b>21 500 руб.</b>
  </li>
  <li >
    <span>Налог 5%</span>
    <div></div>
    <b>1074 руб.</b>
  </li>
</ul>


      </div>
</div>


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

<div className='content p-40'>

   <div className='d-flex align-center justify-between content mb-40  '>
<h1 className=''>Все пигменты</h1>

<div className='search-block d-flex align-center'>
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="18px" height="18px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
<input placeholder='Поиск'></input>
</div>

  </div>
<div className='d-flex'>

 <div className='card'>
  
<div className='favorite'>
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8"/>
<path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

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
