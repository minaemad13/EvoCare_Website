import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel from "./service_carousel";
import Packages from "./packages";
import pol from "../resources/polish2.jpeg"
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
const polish = () => {

    return (


        <div className="content">



            <Carousel service_id={2} />




            {/* <intro about service /> */}

            <div className="p-5 " id='container'>
                <div className="text-center">

                <h3 className="mb-3 font-bold text-white" style={{ fontWeight: "bold" }} >POLISH </h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>





                <div className="margin">
                    <div className="row gx-5">

                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                            <img src={pol} alt="intro" className="img-fluid" style={{ width: "400", height: "400px" }} />
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>

                            <p>
                                Designed to give the paint work a lift, the machine polish removes swirls and finer scratches on the paintwork. The Machine Polish will add a gloss finish to your paintwork, making it look like your car just came out of the showroom! Before the Machine polishing begins, a decontamination process may be needed on the cars paintwork. Our specialist team will be able to tell if this is a needed step. You can contact us and we'll be happy to take a look!
                            </p>
                            <br/>
                            <div className="row">
                            <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <h5 className="font">STAGE1</h5>
                                <h6 className='formal'>This service includes the following:</h6>
                                <ul className='list' style={{ fontSize: '14px' }}>
                                    <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp;  2 Bucket Method Wash
                                    </li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Pre Wash and snow foam,Tyres Dressed</li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Clay bar and Decontamination process</li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Wheels are rotated 180° and pressure washed</li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; 1 time Machine Polish to restore gloss on paint</li>
                                
                                </ul>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                <h5 className="font">STAGE2</h5>
                                <h6 className='formal'>This service includes the following:</h6>
                                <ul className='list' style={{ fontSize: '14px' }}>
                                <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp;  2 Bucket Method Wash
                                    </li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Pre Wash and snow foam,Tyres Dressed</li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Clay bar and Decontamination process</li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Wheels are rotated 180° and pressure washed</li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; 2 Stage Machine Polish,Interior Dry Valet</li>
                                </ul>

                            </div>
                        </div>


                        </div>

                    </div>
                </div>

            </div>
            {/* packages/> */}
            <Packages service_id={2} />

        </div>



    );
}

export default polish;
