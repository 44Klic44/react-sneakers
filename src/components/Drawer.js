
function Drawer({onClose, onRemover, items =[]}){


    return(
         <div  className='overlay '>

      <div className='drawer '>
<h2 className='d-flex justify-between '>Корзина 
  <svg className='removeBtn cu-p' onClick={onClose} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg></h2>



{
  items.length > 0  ? <div className='items'>
{items.map((obj) =>(
<div className='cartItem mb-20 d-flex align-center justify-between'>
  
<div 
  className='cartItemImg '
  style={{ backgroundImage: `url(${obj.imageUrl})` }}
></div>


  {/* <img className='mr-20' width={70} height={70} src='https://static.tildacdn.com/stor3830-6632-4431-a664-353039626532/52817993.jpg'/> */}

   <div className='mr-20'>
    <p className='mb-5'>{obj.title} </p>
    <b>{obj.price} руб.</b>
   </div>

<svg onClick={() => onRemover(obj.id)} className='removeBtn' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg>

</div>




))}

</div>


 :   
 
 
 <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src="https://static.tildacdn.com/tild6635-6562-4535-b263-346234346637/Group_117_1.png" alt="Empty" />
      <h2>Корзина Пустая</h2>
      {/* <h2>{title}</h2> */}
      {/* <p className="opacity-6">{description}</p> */}
       <p className="opacity-6">Добавьте хотябы один товар</p>
      <button  onClick={onClose} className="greenButton">
        <img  сlassNam=" strelka"  width={14} src="https://static.tildacdn.com/tild3338-6566-4964-a665-356331323563/Group_1.png" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
}









<div className='cartTotalBlock'> 
  <ul >
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

<button className='greenButton '>Оформить заказ 
<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>

</div>


      </div>

</div>
    )
}


export default Drawer;