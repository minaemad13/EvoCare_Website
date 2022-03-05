import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel from "./service_carousel";
import Packages from "./packages";
import pro from "../resources/protectionFilm carsl2.jpg"
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { RiContactsLine } from 'react-icons/ri'
import { BsCheckLg } from 'react-icons/bs'
const protectionFilm = () => {

    return (


        <div className="content">




            <Carousel service_id={1} />

               {/* <intro about service /> */}
            
            <div className="py-5  px-2" id='container'>
            <div className="text-center">
            <h3 className="mb-3 font-bold text-white" style={{ fontWeight: "bold" }} >PROTECTION FILM</h3>
                <hr className="hr " />
                <p className="font mb-5">Car wash & detailling service</p>
            </div>
            <div className="margin">
                <div className="row gx-5 ">
                    <div className="col-lg-4 col-md-6 col-sm-12  col-12 mb-5">
                        <img src={pro} alt="intro" className="img-fluid" style={{ width: "300", height: "350px" }} />




                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 col-12" style={{ fontSize: '16px' }}>
                        <p>
                        Paint protection film also called clear Bra,PPF etc. It is a very popular products in the automotive after market,Paint protection film protect car surfaces from stone chips, scratches ,bug damage, road tar stains, automotive fluid stains, and punishing outdoor weathering-including harsh ultraviolet (UV) radiation.

As a professional paint protection film manufacturer and supplier,we use high quality TPU material and advanced technology,we ensure the product with good quality and outstanding performance.

                        </p>
                        <br />
                        <div className="row">
                            <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                
                                <h6 className='formal'>GLOSSY</h6>
                                <ul className='list' style={{ fontSize: '14px' }}>
                                    <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp;  Improve paint brightness,high glossy
                                    </li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Self-cleaning, effective anti-fouling</li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Good adhesion, no glue left after tearing off</li>
                                
                                </ul>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            
                                <h6 className='formal'>MATTY</h6>
                                <ul className='list' style={{ fontSize: '14px' }}>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;Anti-scratches, self-healing,Anti-yellowing
                                    </li>
                                    <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp; Good stretchability, strong flexibility, easily installation</li>
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;Self-healing micro mark, no worries</li>
        
                                </ul>

                            </div>
                        </div>




                    </div>


                </div>
            </div>

        </div>

         

            

            {/* packages/> */}
            <Packages service_id={1} />

        </div>



    );
}

export default protectionFilm;
