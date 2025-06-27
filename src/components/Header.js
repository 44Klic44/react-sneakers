import { useContext } from 'react';
import {Route, Routes, Link, Links} from 'react-router-dom'
import AppContext from '../context';

function Header(props){

const {cartItems} = useContext(AppContext);

const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
return(

       <header className='d-flex justify-between align-center p-40'>
         
     <Link to='/'>
    <div className='d-flex alighn-center headerleft'> 
     
    
     <img width={80} height={40} src="https://static.tildacdn.com/tild3438-6135-4463-b365-613830336265/norootpng.webp" alt='logo'/>

    <div className='"headerinfo'>
      <h3 className='text-uppercase'>Профессиональная косметика</h3>
      <p>для перманентного макияжа</p>
    </div> 
    </div>
  </Link>

       <ul className='"headerRight d-flex'>
        <li onClick={props.onClickCart} className='mr-30 cu-p'>
             <img width={20} height={18} src="https://static.tildacdn.com/tild6537-3430-4262-a161-653339373532/free-icon-font-shopp.png" alt='logo'/>

          <span>{totalPrice} руб.</span>
        </li>

<Link to='/favorites'>
  <li className="mr-20 cu-p"> 
     
 <img width={20} height={18} src="https://static.tildacdn.com/tild3834-3830-4337-b365-333965363034/free-icon-font-heart.png" alt='logo'/>
        </li>
        </Link>

          


<Link to='/orders'>
        <li>
 <img width={20} height={18} src="https://static.tildacdn.com/tild3437-3538-4165-b837-306665356430/free-icon-font-emplo.png" alt='logo'/>
        </li>
        </Link>
       </ul>

   </header>
)
}

export default Header;
