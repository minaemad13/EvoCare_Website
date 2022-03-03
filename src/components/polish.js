import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel from "./service_carousel";
import Packages from "./packages";
import pol from "../resources/polish1.jpeg"
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
const polish = () => {

    return (


        <div className="content">



            <br /><br /><br /><br />
            {/* <Carosel /> */}
            <Carousel service_id={2} />
            <br /><br /><br />



            {/* <intro about service /> */}

            <div className="p-5 " id='container'>
                <div className="text-center">

                    <h3 className="mb-3 font-bold text-white">POLISH </h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>





                <div className="margin">
                    <div className="row gx-5">

                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                        <img src={pol} alt="intro" className="img-fluid" style={{  width: "500",height: "500px" }} />
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>

                            <br /> <br /> <br />

                            <p>
                                Designed to give the paint work a lift, the machine polish removes swirls and finer scratches on the paintwork. The Machine Polish will add a gloss finish to your paintwork, making it look like your car just came out of the showroom! Before the Machine polishing begins, a decontamination process may be needed on the cars paintwork. Our specialist team will be able to tell if this is a needed step. You can contact us and we'll be happy to take a look!
                                <br />
                                - 2 Bucket Method Wash
                                - Pre Wash and snow foam
                                - Wheels are rotated 180° and pressure washed
                                - Clay bar and Decontamination process
                                - 2 Stage Machine Polish, which will eliminate swirl marks or paint imperfections and restore gloss
                                - Tyres Dressed
                                - Interior Dry Valet
                            </p>


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
