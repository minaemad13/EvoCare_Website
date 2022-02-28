import React from 'react';
import "./packages.css";
import {useHistory} from "react-router-dom";
function PackageCard({packs,service}) {
    let history = useHistory();
    // console.log(`service is ${service}`)
    const bookPackage = event => {
       history.push({
           pathname: '/book',
           state: { packageName: packs.id, packagePrice: packs.pck_price}
       });
    };
    return (
       <div className="col-md-6">
                        <div className="card card-shadow border-0 mb-4">
                            <div className="card-body p-4 bg">
                                <div className="d-flex align-items-center">
                                    <h5 className="font-weight-medium text-white mb-0">{packs.pck_name}</h5>
                                </div>
                                <div className="row ">
                                    <div className="col-lg-5 text-center fw-bold">
                                        <div className="price-box my-3 text-light">
                                            <sup style={{color:'rgb(196,184,184)'}}>EGP</sup><span className="text-light display-5">{packs.pck_price}</span>
                                            <h6 className="font-weight-light text-light">Starting from</h6>
                                            <button className="btn btn-outline-warning font-14 text-white p-3 btn-block mt-3"
                                               onClick={bookPackage}>Book Now </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                        <ul className="list-inline pl-3 font-14 font-weight-medium text-light">
                                            <li className="py-2"><span>dummy data</span>
                                            </li>
                                            <li className="py-2"><span>dummy data</span>
                                            </li>
                                            <li className="py-2"><span>dummy data</span>
                                            </li>
                                            <li className="py-2"><span>dummy data</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )}
export default PackageCard;