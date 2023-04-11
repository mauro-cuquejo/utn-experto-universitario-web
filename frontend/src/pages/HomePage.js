import React from 'react';
import Carousel from '../components/layout/Carousel';


const HomePage = (props) => {
    const arr = [
        { src: 'images/home/empresas/capisci.png', width: '500em', alt: 'logo empresa capisci', opt: '' },
        { src: 'images/home/empresas/catslock.png', width: '500em', alt: 'logo empresa catslock', opt: '' },
        { src: 'images/home/empresas/numenara.png', width: '500em', alt: 'logo empresa numenara', opt: '' }
    ];
    return (
        <main className='homepage'>
            <div className='homeimg'>
                <img src='images/home/img01.png' alt='cuarto de impresoras 3d' />
            </div>
            <div className='columnas'>
                <h2>Bienvenidos</h2>
                <p>Somos Printered. Nos dedicamos a la impresión de insumos 3d. Mirá nuestro catálogo, que seguro algo te interesa.</p>
            </div>
            <div className='empresas'>
                <h3>Empresas que nos recomiendan:</h3>
                <Carousel props={arr} />
            </div>
        </main>
    );
}

export default HomePage;