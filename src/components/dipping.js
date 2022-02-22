import React from 'react';
import "./dipping.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function dipping() {
    return (
        <div className="bg py-5 text-center"id='body'>

            <div className="container cont py-5">


                <h2 className=" text-center mb-2">Dipping</h2>
                <hr className="hr"></hr>
                <div className="my-3 px-5 mx-5">
                    <p className="font">Save time and money</p>
                    <p className="my-3 px-5 mx-5 ">
                        We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours  <br />
                        Our goal is to provide our customers with the friendliest, most convenient hand car wash experience possible.
                    </p>
                </div>
            </div>

            <div className="container cont justify-content-center">
                <div className="row">
                <div className='col col-md-4 ' >
                        <div className="card border-warning" id='card'>

                            <div className="card-body">
                                <h5 className="cbs-package-name">Paint Protection Film </h5>
                                <h2>15$</h2>
                                <ul className="cbs-package-service-list list cbs-list-reset cbs-clear-fix">
                                    <li>High Gloss Ppf Tpu Clear </li>
                                    <li>Towel Hand Dry</li>
                                    <li>Wheel Shine</li>
                                </ul>
                                <a href="#" className="btn btn-outline-warning">Book Now</a>

                            </div>
                        </div>
                    </div>
                    
                    <div className='col col-md-4 ' >
                        <div className="card border-warning" id='card'>

                            <div className="card-body">
                                <h5 className="cbs-package-name">Paint Protection Film </h5>
                                <h2>25$</h2>
                                <ul className="cbs-package-service-list list cbs-list-reset cbs-clear-fix">
                                    <li>High Gloss Ppf Tpu Clear </li>
                                    <li>Towel Hand Dry</li>
                                    <li>Wheel Shine</li>
                                </ul>
                                <a href="#" className="btn btn-outline-warning">Book Now</a>

                            </div>
                        </div>
                    </div>

                    <div className='col col-md-4 ' >
                        <div className="card border-warning" id='card'>

                            <div className="card-body">
                                <h5 className="cbs-package-name">Paint Protection Film </h5>
                                <h2>30$</h2>
                                <ul className="cbs-package-service-list list cbs-list-reset cbs-clear-fix">
                                    <li>High Gloss Ppf Tpu Clear </li>
                                    <li>Towel Hand Dry</li>
                                    <li>Wheel Shine</li>
                                </ul>
                                <a href="#" className="btn btn-outline-warning">Book Now</a>

                            </div>
                        </div>
                    </div>



                </div>


            </div>

        </div>



    );
}

export default dipping;
