import React from 'react';
import axios from 'axios';

import Card from '../components/Card';
import AppContext from '../context';

function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://6852cf830594059b23cf2fe9.mockapi.io/order');
        setOrders(data);
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content ">
      <div className="d-flex align-center justify-between mb-40 paddingleft">
        <h1 style={{marginTop: '30px'}}>Мои заказы</h1>
      </div>

      {isLoading ? (
        <div className="d-flex flex-wrap">
          {[...Array(8)].map((_, index) => (
            <Card key={index} loading={isLoading} />
          ))}
        </div>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="mb-40 paddingleft">
            <h2>Заказ #{order.id}</h2>
            <div className="d-flex flex-wrap contain-card">
              {order.items.map((item, itemIndex) => (
                <Card 
                  key={itemIndex} 
                  loading={false} 
                  {...item}
                  isOrderItem={true} // Вот этот пропс скроет кнопки
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;