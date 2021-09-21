import React from 'react';
import { Link } from 'react-router-dom';

import './descriptions.css';

const Cargador = () => {
    return(
        <React.Fragment>
            <div className="container mt-5">
                <h2 className="tittle">Cargador inalambrico para carro</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCbT7bf5nRu0w2NpOzYfb6qt-7aeyzbcRIJoukLlLjiBUfZAuJdGKNYMzfqCoWyC4jhKg72SF&usqp=CAc"/>
            </div>
            <Link to={"/shop/products"}>Regresar</Link>
        </React.Fragment>
    );
}

export default Cargador;