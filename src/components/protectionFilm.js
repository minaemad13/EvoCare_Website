import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel from "./service_carousel";
import Packages from "./packages";
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import pro from "../resources/protectionFilm carsl3.jpg"
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
const protectionFilm = () => {

    return (


        <div className="content">



            <br /><br /><br /><br />
            {/* <Carosel /> */}
            <Carousel service_id={1} />
            <br /><br /><br />



            {/* <intro about service /> */}

            <div className="p-5 " id='container'>
                <div className="text-center">

                    <h3 className="mb-3 font-bold text-white"  style={{ fontWeight:"bold" }} >PROTECTION FILM</h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>





                <div className="margin">
                    <div className="row gx-5">

                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                        <img src={pro} alt="intro" className="img-fluid" style={{  width: "500",height: "500px" }} />
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>

                            <br /> <br /> <br />

                            <p>
                                Paint protection film also called clear Bra,PPF etc. It is a very popular products in the automotive after market,Paint protection film protect car surfaces from stone chips, scratches ,bug damage, road tar stains, automotive fluid stains, and punishing outdoor weathering-including harsh ultraviolet (UV) radiation.

                                As a professional paint protection film manufacturer and supplier,we use high quality TPU material and advanced technology,we ensure the product with good quality and outstanding performance.
                            </p>


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
