import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import '../components/Card/Card.module.scss'

// Кастомные стрелки
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-prev"
    onClick={onClick}
    style={{
      background: "transparent",
      border: "none",
      position: "absolute",
      left: "20px",
      zIndex: 1,
      cursor: "pointer",
      width: "30px",
      height: "30px",
       opacity: "0.5",
    }}
  >
    <img 
      src="https://static.tildacdn.com/tild6461-3736-4666-b161-373731393831/icons8-----2-100_1.png" 
      alt="Previous"
      style={{ 
        transform: "rotate(0deg)", 
        width: "100%",
        height: "100%",
      
      }}
    />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-next"
    onClick={onClick}
    style={{
      background: "transparent",
      border: "none",
      position: "absolute",
      right: "20px",
      zIndex: 1,
      cursor: "pointer",
      width: "30px",
      height: "30px",
      opacity: "0.5",
      
    }}
  >
    <img 
      src="https://static.tildacdn.com/tild3361-6463-4361-a434-653837343833/icons8-----2-100_2.png" 
      alt="Next"
      style={{ 
        width: "100%",
        height: "100%",
  
      }}
    />
  </button>
);

// Данные для слайдов
const slides = [
  {
    img: "https://static.tildacdn.com/tild3032-3762-4762-b463-363963313438/Group_1267.png",
    title: "Двухкислотный ремувер blur 2.0 ",
    description: "Эффективно удаляет весь цветовой спектр пигментов без «съедания» кожи.",
    buttonText: "Подробнее",
      buttonLink: "https://ru.icolorpmu.com/blur-new"
  },
  {
    img: "https://static.tildacdn.com/tild3538-3237-4239-a237-613563346338/Group_824.png",
    title: "Пигменты для камуфлирования и микропигментации ареолы ",
    description: "Совершенство - это история, которая пускает свои корни в самую глубь человеческого естества и сквозь заботу о внешности прорастает прямо в сердце. ",
    buttonText: "Подробнее",
      buttonLink: "https://ru.icolorpmu.com/skin-n-areola"
  },
  {
    img: "https://static.tildacdn.com/tild3531-6231-4361-b134-393863326262/Frame_1604.png",
    title: "Иглы для перманентного макияжа ICOLOR",
    description: "Профессиональные иглы для \n  татуажа бровей, губ и век.",
    buttonText: "Подробнее",
      buttonLink: "https://ru.icolorpmu.com/cartridge-new"
  }
];

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <style>{`
        .slick-prev:before, .slick-next:before {
          display: none;
        }
      `}</style>
      
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img 
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
              <div className="slide-content">
  <h2 className="slide-title">{slide.title}</h2>

  <p className="slide-description">
    {slide.description}
  </p>

  <a href={slide.buttonLink} className="slide-button">
    {slide.buttonText}
  </a>
</div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}