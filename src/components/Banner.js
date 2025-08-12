import React from 'react';


const HeroBanner = () => {
  return (
    <div className="outer-container">
      <div className="hero-container">
        {/* Затемнение фона */}
        <div className="hero-overlay"></div>
        
        {/* Логотип в верхнем левом углу */}
        <div className="hero-logo">
          iСolor Academy
        </div>
        
        {/* Текст и кнопка в нижнем левом углу */}
        <div className="hero-content">
          <p className="hero-text">
            Курсы по перманентному макияжу онлайн и оффлайн.<br/>
            Обучаем на руcском, английском и латышском языках.
          </p>
          <button className="hero-button">
            Обучение в iColor 
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;