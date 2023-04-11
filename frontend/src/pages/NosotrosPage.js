import React from 'react';
import Carousel from '../components/layout/Carousel';

const NosotrosPage = (props) => {
    const arr = [
        { src: 'images/home/nosotros/carlitos.png', width: '500em', alt: 'logo empresa capisci', opt: 'Carlitos' },
        { src: 'images/home/nosotros/ingrid.png', width: '500em', alt: 'logo empresa catslock', opt: 'Ingrid' },
        { src: 'images/home/nosotros/jorgito.png', width: '500em', alt: 'logo empresa numenara', opt: 'Jorgito' },
        { src: 'images/home/nosotros/maria.png', width: '500em', alt: 'logo empresa numenara', opt: 'Maria' }
    ];
    return (
        <main className='nosotros'>
            <div className='quienes_somos'>
                <h2>¿Quiénes Somos?</h2>
                <p>
                    Somos Printered, un grupo familiar que inició como hobby a realizar impresiones.
                    Primero para nosotros, después para nuestros amigos, después para amigos de amigos.
                    Cuando nos dimos cuenta, ya habíamos comprado nuestro segundo equipo. Después el tercero.
                    Después pasamos de ser tres a ser cinco. Hoy somos más de treinta personas en el staff y seguimos creciendo.
                    Creemos que todavía queda mucho camino por recorrer en este mundo tan lindo como lo es el de los diseños y
                    las impresiones. Si podés imaginarlo, seguro podemos hacerlo.
                </p>
            </div>
            <div className='staff'>
                <div className='personas'></div>
                <Carousel props={arr} />
            </div>
        </main>
    );
}

export default NosotrosPage;