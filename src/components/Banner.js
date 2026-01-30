import React from 'react';


const HeroBanner = () => {
  return (
    <div className="outer-container">
      <div className="hero-container">
        {/* Затемнение фона */}
        <div className="hero-overlay"></div>
        
        {/* Логотип в верхнем левом углу */}
        <div className="hero-logo">
          BASIC <br/>COURSE.PRO
          <p className="hero-text">
            БАЗОВЫЙ КУРС ПЕРМАНЕНТНОГО <br/>
            МАКИЯЖА ICOLOR
          </p>
        </div>
        
        {/* Текст и кнопка в нижнем левом углу */}
        <div className="hero-content">
           <p className="hero-desc">
            Фундамент, на котором строится <br/>
            успешная карьера мастера.
          </p>
          <button className="hero-button">
            <a href='https://ru.icolorpmu.com/basic-course'>Записаться на курс</a>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;