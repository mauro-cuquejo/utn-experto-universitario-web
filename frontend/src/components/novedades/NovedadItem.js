const NovedadItem = (props) => {
    const { titulo, descripcion, precio, imagen } = props;

    return (
        <div className="novedades">
            <h1>{titulo}</h1>
            <h2>Descripción: {descripcion}</h2>
            {imagen ? <img src={imagen} alt={titulo} /> : ''}
            <h3>Precio: {precio}</h3>

            <hr />
        </div>
    );
}

export default NovedadItem;