import React, { useContext, useState } from 'react';
import AppContext from '../context';
import axios from 'axios';
import Info from './info';

function Drawer({ onClose }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isOrderId, setisOrderId] = useState(null);
 const [isLoading, setisLoading] = useState(false);
  const [orderId] = useState(Math.floor(Math.random() * 1000));

  // Вычисляем общую сумму и налог
  const totalPrice = cartItems.reduce((sum, obj) => sum + Number(obj.price), 0);
  const tax = Math.round(totalPrice * 0.05);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  
  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://684e8a9ef0c9c9848d286908.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      alert('Не удалось удалить товар');
      console.error(error);
    }
  };

  const onClickOrder = async () => {
  try {
    setisLoading(true);
    
    // Создаем заказ
    const { data } = await axios.post('https://6852cf830594059b23cf2fe9.mockapi.io/order', { 
      items: cartItems 
    });
    
    setisOrderId(data.id);
    
    // Удаляем все товары из корзины на сервере
    await Promise.all(
      cartItems.map(item => 
        axios.delete(`https://684e8a9ef0c9c9848d286908.mockapi.io/cart/${item.id}`)
      )
    );
    
    // Очищаем корзину в состоянии
    setCartItems([]);
    
    setIsOrderComplete(true);
  } catch (error) {
    alert('Не удалось оформить заказ');
    console.error(error);
  } finally {
    setisLoading(false);
  }
};

  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='d-flex justify-between'>
          {isOrderComplete ? 'Заказ оформлен' : 'Корзина'}
          <svg 
            className='removeBtn cu-p' 
            onClick={onClose} 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
            <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
          </svg>
        </h2>

        {cartItems.length > 0 && !isOrderComplete ? (
          <>
            <div className='items d-flex flex-column'>
              {cartItems.map((obj) => (
                <div key={obj.id} className='cartItem mb-20 d-flex align-center justify-between'>
                  <div 
                    className='cartItemImg'
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  ></div>

                  <div className='mr-20'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>

                  <svg 
                    onClick={() => onRemoveItem(obj.id)} 
                    className='removeBtn' 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                    <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                  </svg>
                </div>
              ))}
            </div>

            <div className='cartTotalBlock'> 
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{tax} руб.</b>
                </li>
              </ul>

              <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>
                Оформить заказ 
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </>
        ) : (
          <Info
            image={isOrderComplete 
              ? "https://static.tildacdn.com/tild3234-6661-4333-b231-613266323965/Group_117_4.png" 
              : "https://static.tildacdn.com/tild6635-6562-4535-b263-346234346637/Group_117_1.png"}
            title={isOrderComplete 
              ? `Заказ #${isOrderId} оформлен!` 
              : "Корзина пустая"}
            description={isOrderComplete 
              ? "Ваш заказ скоро будет передан курьерской доставке" 
              : "Добавьте хотя бы один товар"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;