import React from 'react';
import styles from './Footer.module.scss';

export const BusinessCard = () => {
  const [openAccordion, setOpenAccordion] = React.useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const ChevronIcon = ({ rotated }) => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      className={`${styles.chevron} ${rotated ? styles.rotated : ''}`}
    >
      <path 
        fill="currentColor" 
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
      />
    </svg>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          
          {/* Контактная информация */}
          <div className={styles.brand}>
            <h3 className={styles.logo}>iColor</h3>
            <div className={styles.contacts}>
              <p className={styles.address}>
                <strong>Юридический адрес:</strong> Рыбацкий проспект 1862-805, литера А. Санкт-Петербург, Российская Федерация, 192176
              </p>
              <p className={styles.address}>
                <strong>Офис продаж:</strong> Санкт-Петербург, ул. Шпалерная, д. 39
              </p>
              <p className={styles.details}>
                <strong>ИНН:</strong> 784202864321
              </p>
              <p className={styles.details}>
                <strong>Телефон:</strong> 8 (965) 000-10-75
              </p>
              <p className={styles.details}>
                <strong>Почта:</strong> info@kolorpmu.com
              </p>
            </div>
          </div>

          {/* Каталог */}
          <div className={styles.column}>
            <h4 className={styles.desktopTitle}>Каталог</h4>
            
            {/* Desktop version */}
            <ul className={styles.desktopList}>
              <li><a href="#">Аппараты iColor</a></li>
              <li><a href="#">+ Пигменты</a></li>
              <li><a href="#">Наборы</a></li>
              <li><a href="#">Сини и арсола</a></li>
              <li><a href="#">Colorlune</a></li>
              <li><a href="#">Сопутствующие товары</a></li>
            </ul>
            
            {/* Mobile Accordion */}
            <div className={styles.mobileAccordion}>
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion('catalog')}
                aria-expanded={openAccordion === 'catalog'}
              >
                <h4>Каталог</h4>
                <ChevronIcon rotated={openAccordion === 'catalog'} />
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'catalog' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  <li><a href="#">Аппараты iColor</a></li>
                  <li><a href="#">+ Пигменты</a></li>
                  <li><a href="#">Наборы</a></li>
                  <li><a href="#">Сини и арсола</a></li>
                  <li><a href="#">Colorlune</a></li>
                  <li><a href="#">Сопутствующие товары</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Академия */}
          <div className={styles.column}>
            <h4 className={styles.desktopTitle}>Академия</h4>
            
            {/* Desktop version */}
            <ul className={styles.desktopList}>
              <li><a href="#">Все курсы iColor Academy</a></li>
              <li><a href="#">+ Базовый курс. PRO</a></li>
              <li><a href="#">Наши тренеры</a></li>
            </ul>
            
            {/* Mobile Accordion */}
            <div className={styles.mobileAccordion}>
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion('academy')}
                aria-expanded={openAccordion === 'academy'}
              >
                <h4>Академия</h4>
                <ChevronIcon rotated={openAccordion === 'academy'} />
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'academy' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  <li><a href="#">Все курсы iColor Academy</a></li>
                  <li><a href="#">+ Базовый курс. PRO</a></li>
                  <li><a href="#">Наши тренеры</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Помощь */}
          <div className={styles.column}>
            <h4 className={styles.desktopTitle}>Помощь</h4>
            
            {/* Desktop version */}
            <ul className={styles.desktopList}>
              <li><a href="#">Общие правила покупки</a></li>
              <li><a href="#">Доставка и оплата</a></li>
              <li><a href="#">Правила возврата</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
              <li><a href="#">Согласие на обработку персональных данных</a></li>
            </ul>
            
            {/* Mobile Accordion */}
            <div className={styles.mobileAccordion}>
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion('help')}
                aria-expanded={openAccordion === 'help'}
              >
                <h4>Помощь</h4>
                <ChevronIcon rotated={openAccordion === 'help'} />
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'help' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  <li><a href="#">Общие правила покупки</a></li>
                  <li><a href="#">Доставка и оплата</a></li>
                  <li><a href="#">Правила возврата</a></li>
                  <li><a href="#">Политика конфиденциальности</a></li>
                  <li><a href="#">Согласие на обработку персональных данных</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};