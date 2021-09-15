import React from "react";

import './home.css';

const Home = () => {
    return(
        <React.Fragment>
            <div className="espacio"></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://miro.medium.com/max/1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg" 
                        className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://conceptodefinicion.de/wp-content/uploads/2021/01/tecnologia-.jpg" 
                        className="d-block w-100" width="100%" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn-3.expansion.mx/dims4/default/7d3824b/2147483647/strip/true/crop/1000x667+0+0/resize/800x534!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff0%2F1d%2Fd0b7fd994e67a9f48564db5f7507%2Fistock-856757428-copy.jpg" 
                        className="d-block w-100" width="100%" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="Buttons">
                <div className="row">
                    <div className="col">
                        <div className="carro">
                            carros
                        </div>  
                    </div>
                    <div className="col">
                        <div className="moto">
                            motos
                        </div>
                    </div>    
                    <div className="col">
                        <div className="otro">
                            otros
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;