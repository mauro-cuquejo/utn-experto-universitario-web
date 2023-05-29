import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/pages/NovedadesPage.css';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            //const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);


    return (
        <section className='holder novedades'>
            <div>
                <h2>Novedades</h2>
            </div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    titulo={item.titulo}
                    descripcion={item.descripcion}
                    precio={item.precio}
                    imagen={item.imagen} />)
            )}

        </section>
    );
}

export default NovedadesPage;