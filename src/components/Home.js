import React from "react";
import { Button } from "reactstrap";

import './home.css';
import rr from './rr.gif';


const Home = () => {
    return(
        <React.Fragment>
            <div className="espacio"></div>
            <div className="contenedor-principal">
                <div className="row">
                    <div className="col">
                        <div className="content-1">
                            <img src={rr} className="img"/>   
                        </div>
                        
                    </div>
                    <div className="col">
                        <h1>BIENVENIDO</h1>
                        <Button color="primary">click me</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;