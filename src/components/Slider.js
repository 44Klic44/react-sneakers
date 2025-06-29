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
      src="https://static.tildacdn.com/tild3862-3436-4662-a266-656561626361/free-icon-arrow-righ.png" 
      alt="Previous"
      style={{ 
        transform: "rotate(180deg)", 
        width: "100%",
        height: "100%",
        filter: "brightness(0) invert(1)",
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
      src="https://static.tildacdn.com/tild3862-3436-4662-a266-656561626361/free-icon-arrow-righ.png" 
      alt="Next"
      style={{ 
        width: "100%",
        height: "100%",
        filter: "brightness(0) invert(1)",
      }}
    />
  </button>
);

// Данные для слайдов
const slides = [
  {
    img: "https://static.tildacdn.com/tild6533-3332-4332-b563-633334396539/__14.png",
    title: "Заголовок 1",
    description: "Краткое описание первого слайда в несколько строк текста",
    buttonText: "Подробнее"
  },
  {
    img: "https://static.tildacdn.com/tild3037-3365-4763-b430-333733666432/__15.png",
    title: "Заголовок 2",
    description: "Описание второго слайда с важной информацией",
    buttonText: "Узнать больше"
  },
  {
    img: "https://static.tildacdn.com/tild3833-3835-4562-a635-383038303763/__17.png",
    title: "Заголовок 3",
    description: "Ещё одно описание для демонстрации адаптивности",
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