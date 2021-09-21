import React from "react";
import { Link } from "react-router-dom";

import './home.css';

const Home = () => {
    return(
        <React.Fragment>
            <div className="espacio"></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://asegurandome.com.ve/wp-content/uploads/2018/10/Tecnolog%C3%ADa-para-mejorar-la-calidad-del-servicio.jpg" 
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
                        <div className="tarjeta mt-3">
                            <img src="https://media.revistagq.com/photos/5d89c9335d07090008d92dd6/16:9/w_2560%2Cc_limit/2020-mclaren-senna-mmp-1545234547.jpg" className="imagen-home" alt="..."/>
                            <div className="card-body">
                                <Link className="btn btn-primary" to={"/shop/products"} >carros</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tarjeta mt-3">
                            <img src="https://s3-eu-west-1.amazonaws.com/boxrepsol-site/uploads/00_marc_marquez_jerez_motorp_repsol_honda_rc213v.jpg" className="imagen-home" alt="..."/>
                            <div className="card-body">
                                <Link className="btn btn-primary" to={"/shop/products"}>motos</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tarjeta mt-3">
                            <img src="https://static3.elcorreo.com/www/multimedia/202011/04/media/cortadas/615GbEDqwQL._AC_SL1500_-kVzH-U120669777876mWF-624x385@El%20Correo.jpg" className="imagen-home" alt="..."/>
                            <div className="card-body">
                                <Link className="btn btn-primary" to={"/shop/products"}>otros</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;