import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel from "./service_carousel";
import Packages from "./packages";
import dip from "../resources/Dipping1.jpg"
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
const dipping = () => {

    return (


        <div className="content">


            {/* <Carosel /> */}
            <Carousel service_id={3} />




            {/* <intro about service /> */}

            <div className="p-5 " id='container'>
                <div className="text-center">

                <h3 className="mb-3 font-bold text-white" style={{ fontWeight: "bold" }} >DIPPING </h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>


                <div className="margin">
                    <div className="row gx-5">

                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                            <img src={dip} alt="intro" className="img-fluid" style={{ width: "500", height: "500px" }} />
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>

                            <p>
                                We've owned our '68 for over a decade and have watched its paint fade, crack and chip.
                                Some areas were down to the metal and we wanted to do something about it before it got any worse.

                                We discovered Plasti-Dip*. Plasti-Dip is resistant to sun fading, winter ice, cold, and salt. It is also a durable yet removable substance that will peel off when we decide to pay for a real paint job.

                                *We chose plasti-dip because: IT'S NOT PERMANENT. I haven't painted a car before and didn't want to test out doing a "real paint job" on our CLASSIC. I'm satisfied with the outcome (however temporary it may be) it's serving its purpose well: protecting the car while we decide if we will go with silver in the future.

                            </p>
                            <br/>
                            <h6 className='formal'> How to Plasti-Dip Your Car?</h6>
                            <ul className='list' style={{ fontSize: '14px' }}>
                                <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;PRO CAR KIT
                                </li>
                                <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp;SURFACE PREP</li>
                                <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;TAPE OR NOT?</li>
                                <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;WASH IT FIRST!
                                </li>
                                <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp;PERFECT PAINTING PLACE? </li>
                                <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;SPRAY ON THE PLASTI-DIP </li>
                                <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;REMOVE THE TAPE
                                </li>
                                <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp;CURE IT! </li>
                                <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;FINISHING TOUCHES  </li>

                            </ul>


                        </div>

                    </div>
                </div>

            </div>
            {/* packages/> */}
            <Packages service_id={3} />

        </div>



    );
}

export default dipping;
