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
    img: "https://static.tildacdn.com/tild6534-6138-4332-a464-363136383532/1_1.png",
    title: "ТЕСТ ДРАЙВ АППАРАТА ",
    description: "В любой точке мира",
    buttonText: "Подробнее"
  },
  {
    img: "https://static.tildacdn.com/tild3666-3964-4138-a232-363363306661/3_1.png",
    title: "аппарат fly",
    description: "аппарат для перманентного макияжа",
    buttonText: "Узнать больше"
  },
  {
    img: "https://static.tildacdn.com/tild6263-6639-4665-b264-613535353730/2_2.png",
    title: "icolor в европе",
    description: "совершай покупки по всему миру",
    buttonText: "Перейти"
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
                <p className="slide-description">{slide.description}</p>
                <button className="slide-button">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}