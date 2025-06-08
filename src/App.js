import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
   <header>
    <div className='"headerleft'> 
     <img width={40} height={40} src="/img/logo.web"/>
    <div className='"headerinfo'>
      <h3>React sneakers</h3>
      <p>Магазин лучших кросовок</p>
    </div> 
    </div>
  

       <ul className='"headerRight'>
        <li>
          <svg/>
          <span>1205 руб.</span>
        </li>
        <li>
          <svg/>
        </li>
       </ul>

   </header>
   <div className='content'>
<h1>Все кросовки</h1>

   </div>
   
    </div>
  );
}

export default App;
