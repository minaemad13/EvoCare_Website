import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel from "./service_carousel";
import Packages from "./packages";
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import care from "../resources/car Care1.jpeg"
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
const carCare = () => {

    return (


        <div className="content">



            <br /><br /><br /><br />
            {/* <Carosel /> */}
            <Carousel service_id={4} />
            <br /><br /><br />



            {/* <intro about service /> */}

            <div className="p-5 " id='container'>
                <div className="text-center">
                    
                    <h3 className="mb-3 font-bold text-white">CAR CARE</h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>





                <div className="margin">
                    <div className="row gx-5">
                        
                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                        <img src={care} alt="intro" className="img-fluid" style={{  width: "500",height: "500px" }}  />
                        </div>
                        
                        <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>
                            
                        <br /> <br /> <br /> 
                            
                            <p>
                            There are two different kinds of Wash services.
                            <br/>
                            Jet Machine : < br />
                            This is an external wash that uses hot water using a high pressure jet, high quality detergent & shining long lasting wax. This type of wash protects the car paint from fading that could occur due to environmental effects such as strong sunlight.
                            <br/>
                            Rollover Machine : < br />
                            Say Goodbye to your worries! If you’re looking for a quick wash with high quality then Wash Rollover Machine is your answer. It takes only 6 minutes to be performed. This is an external wash that uses high pressure water, high quality detergent and shining wax with long lasting effect. The German machine is equipped with the latest technology in brushes, using soft material that is gentle on the car body yet tough on dirt and doesn’t cause any scratches to the paint.
                            <br/>
                            Internal wash : < br />
                            For internal wash, we use high quality detergents that clean, protect & polish the dashboard and the car interior while also protecting it against dust and sun effect as this technology is like a dust buster. 
                            </p>
                        

                        </div>

                    </div>
                </div>

            </div>
            {/* packages/> */}
            <Packages service_id={4} />

        </div>



    );
}

export default carCare;
