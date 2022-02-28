import React from 'react';
import "./packages.css";
import {useHistory} from "react-router-dom";
function PackageCard({packs,service}) {
    let history = useHistory();
    // console.log(`service is ${service}`)
    const bookPackage = event => {
       history.push({
           pathname: '/book',
           state: { packageName: packs.pck_name, packagePrice: packs.pck_price, serviceId: service }
       });
    };
    return (
       <div className="col-md-6">
                        <div className="card card-shadow border-0 mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center">
                                    <h5 className="font-weight-medium mb-0">{packs.pck_name}</h5>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 text-center">
                                        <div className="price-box my-3">
                                            <sup style={{color:'rgb(32,32,32)'}}>EGP</sup><span className="text-dark display-5">{packs.pck_price}</span>
                                            <h6 className="font-weight-light">Starting from</h6>
                                            <button className="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
                                               onClick={bookPackage}>Book Now </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                        <ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
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