import React from 'react';


const BusinessCard = () => {
  return (
    <div className="business-card-container" style={{ maxWidth: '1430px', margin: '0 auto' }}>
      {/* Контактная информация */}
      <div className="contact-info">
        <div className="address">
          <p><strong>Юридический адрес:</strong> Рыбацкий проспект 1862-805, литера А. Санкт-Петербург, Российская Федерация, 192176</p>
          <p><strong>Офис продаж:</strong> Санкт-Петербург, ул. Шпалерная, д. 39</p>
          <p><strong>ИНН:</strong> 784202864321</p>
        </div>
        
        <div className="contacts">
          <p><strong>Телефон:</strong> 8 (965) 000-10-75</p>
          <p><strong>Почта:</strong> info@kolorpmu.com</p>
        </div>
      </div>

      {/* Основные блоки (Каталог, Академия, Помощь) */}
      <div className="main-sections">
        <div className="section catalog-section">
          <h3>Каталог</h3>
          <ul>
            <li>Аппараты iColor</li>
            <li>+ Пигменты</li>
            <li>Наборы</li>
            <li>Сини и арсола</li>
            <li>Colorlune</li>
            <li>Сопутствующие товары</li>
          </ul>
        </div>

        <div className="section academy-section">
          <h3>Академия</h3>
          <ul>
            <li>Все курсы iColor Academy</li>
            <li>+ Базовый курс. PRO</li>
            <li>Наши тренеры</li>
          </ul>
        </div>

        <div className="section help-section">
          <h3>Помощь</h3>
          <ul>
            <li>Общие правила покупки</li>
            <li>Доставка и оплата</li>
            <li>Правила возврата</li>
            <li>Политика конфиденциальности</li>
            <li>Согласие на обработку персональных данных</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;