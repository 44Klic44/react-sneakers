import {Route, Routes, Link, Links} from 'react-router-dom'

function Header(props){




return(

       <header className='d-flex justify-between align-center p-40'>
         
     <Link to='/'>
    <div className='d-flex alighn-center headerleft'> 
     
    
     <img width={40} height={40} src="https://static.tildacdn.com/tild3336-3038-4338-a664-363562396339/Frame_14.jpg" alt='logo'/>

    <div className='"headerinfo'>
      <h3 className='text-uppercase'>React sneakers</h3>
      <p>Магазин лучших кросовок</p>
    </div> 
    </div>
  </Link>

       <ul className='"headerRight d-flex'>
        <li onClick={props.onClickCart} className='mr-30 cu-p'>
             <img width={18} height={18} src="https://static.tildacdn.com/tild6363-6234-4165-a637-653264323765/Frame_25.svg" alt='logo'/>

          <span>1205 руб.</span>
        </li>

<Link to='/favorites'>
  <li className="mr-20 cu-p"> 
     
 <img width={20} height={18} src="https://static.tildacdn.com/tild3762-6464-4662-b438-616638383666/zmdi_favorite-outlin.png" alt='logo'/>
        </li>
        </Link>

          



        <li>
 <img width={18} height={18} src="https://static.tildacdn.com/tild6465-3236-4530-b865-653531666532/profile_menu.svg" alt='logo'/>
        </li>
       </ul>

   </header>
)
}

export default Header;
