import React from 'react';
import "./packages.css";
import {useHistory} from "react-router-dom";
function PackageCard({packs,service}) {
    let history = useHistory();
    // console.log(`service is ${service}`)
    const bookPackage = event => {
       history.push({
           pathname: '/book',
           state: { packageId: packs.id, packagePrice: packs.pck_price}
       });
    };
    return (
       <div className="col-md-6">
                        <div className="card border-warning border-2 mb-5">
                            <div className="card-body p-4 bg">
                                <div className="d-flex align-items-center">
                                    <h5 className="font-weight-medium text-white mb-0">{packs.pck_name}</h5>
                                </div>
                                <div className="row ">
                                    <div className="col-lg-5 text-center fw-bold">
                                        <div className="price-box my-3 text-light">
                                            <sup style={{color:'rgb(196,184,184)'}}>EGP</sup><span className="text-light display-5">{packs.pck_price}</span>
                                            <h6 className="font-weight-light text-light">Starting from</h6>
                                            <button className="btn btn-outline-warning rounded-pill "
                                               onClick={bookPackage}>Book Now </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                        <ul className="list-inline pl-3 font-14 font-weight-medium text-light">
                                            <li className="py-2"><span>Improve paint brightness,high glossy</span>
                                            </li>
                                            <li className="py-2"><span>Self-cleaning, effective anti-fouling</span>
                                            </li>
                                            <li className="py-2"><span>Good adhesion, no glue left after tearing off</span>
                                            </li>
                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )}
export default PackageCard;