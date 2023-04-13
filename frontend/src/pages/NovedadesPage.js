import React from 'react';

const NovedadesPage = (props) => {
    return (
        <section className='holder novedades'>
            <div>
                <h2>Novedades</h2>
            </div>
            <div>
                <h3>Angel Inquisidor</h3>
                <h4>material: resina</h4>
                <img src="images/home/novedades/angel.png" width={'500em'} alt={'angel impreso en 3d'} />
            </div>
            <div>
                <h3>Miguelito el Roedor</h3>
                <h4>material: resina</h4>
                <img src="images/home/novedades/miguelito.png" width={'500em'} alt={'famoso ratón impreso en 3d'} />
            </div>
            <div>
                <h3>Relojes Impresos</h3>
                <h4>material: resina</h4>
                <img src="images/home/novedades/relojes.png" width={'500em'} alt={'relojes impresos en 3d'} />
            </div>

        </section>
    );
}

export default NovedadesPage;