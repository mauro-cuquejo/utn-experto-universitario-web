import React from 'react';
import '../styles/pages/NovedadesPage.css'
const NovedadesPage = (props) => {
    return (
        <section className='holder novedades'>
            <div>
                <h2>Novedades</h2>
            </div>
            <div className='contenedor'>
                <h3>Angel Inquisidor</h3>
                <h4>material: resina</h4>
                <h5>Precio: u$s50</h5>
                <img src="images/home/novedades/angel.png" width={'500em'} alt={'angel impreso en 3d'} />
                <input type="submit" value={"Comprar"} />
            </div>
            <div className='contenedor'>
                <h3>Miguelito el Roedor</h3>
                <h4>material: resina</h4>
                <h5>Precio: u$s30</h5>
                <img src="images/home/novedades/miguelito.png" width={'500em'} alt={'famoso ratón impreso en 3d'} />
                <input type="submit" value={"Comprar"} />
            </div>
            <div className='contenedor'>
                <h3>Relojes Impresos</h3>
                <h4>material: resina</h4>
                <h5>Precio: u$s25</h5>
                <img src="images/home/novedades/relojes.png" width={'500em'} alt={'relojes impresos en 3d'} />
                <input type="submit" value={"Comprar"} />
            </div>

        </section>
    );
}

export default NovedadesPage;