import React from 'react';
import { Link } from 'react-router-dom';

import './descriptions.css';

const Conector = () => {
    return(
        <React.Fragment>
            <div className="container mt-5">
                <h2 className="tittle">Conector USB para celular y música</h2>
                <img src="https://i.blogs.es/078455/vic/450_1000.jpg"/>
            </div>
            <Link to={"/shop/products"}>Regresar</Link>
        </React.Fragment>
    );
}

export default Conector;