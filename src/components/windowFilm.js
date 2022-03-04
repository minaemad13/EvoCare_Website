import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel from "./service_carousel";
import Packages from "./packages";

import window from "../resources/windowFilm3.jpg"
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
const windowFilm = () => {

    return (


        <div className="content">



          
            <Carousel service_id={6} />
          



            {/* <intro about service /> */}

            <div className="p-5 " id='container'>
                <div className="text-center">
                    <h3 className="mb-3 font-bold text-white">PROTECTION FILM</h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>





                <div className="margin">
                    <div className="row gx-5">
                        
                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                        <img src={window} alt="intro" className="img-fluid" style={{  width: "500",height: "500px" }}  />
                        </div>
                        
                        <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>
                            
                        <br /> <br /> <br /> 
                            
                            <p>
                            Automotive window tint film is use to protect people in the car from heating of ultraviolet ray and infra ray. There is ceramic film,carbon film,metalized tint,glue tint,etc different types of window tint.

As a professional aotumotive window film manufacturer and supplier,we offers a wide range of auto car window films, including: UV400 skin care nano ceramic film, nano ceramic film,nano carbon window film,chameleon window film,chip dyed film,sputter film, metallic reflective film.
                            </p>
                        

                        </div>

                    </div>
                </div>

            </div>
            {/* packages/> */}
            <Packages service_id={6} />

        </div>



    );
}

export default windowFilm;
