import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Carousel = ({ props }) => {
    const config = {
        dots: true, //para mostrar los puntos de navegación
        inifite: true, //para permitir navegación infinita
        speed: 500, //velocidad de transición en ms
        slidesToShow: 1, //para determinar cantidad de slides mostrados a la vez.
        slidesToScroll: 1, //para determinar cantidad de slides desplazados a la vez.
    };
    return (
        <Slider {...config}>
            {props.map(element => {
                let salida = <div><img src={element.src} width={element.width} alt={element.alt} /></div>;
                if (element.opt !== '') {
                    salida = <div> {salida} <div>{element.opt}</div></div>
                }
                return salida;
            })}
        </Slider>
    );
};

export default Carousel;