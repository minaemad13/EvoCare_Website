import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel from "./service_carousel";
import Packages from "./packages";
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import nano from "../resources/nanoceramic5.jpg"
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
const nanoCeramic = () => {

    return (


        <div className="content">




            {/* <Carosel /> */}
            <Carousel service_id={5} />




            {/* <intro about service /> */}

            <div className="p-5 " id='container'>
                <div className="text-center">

                    <h3 className="mb-3 font-bold text-white" style={{ fontWeight: "bold" }} >NANO CERAMIC</h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>





                <div className="margin">
                    <div className="row gx-5">

                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                            <img src={nano} alt="intro" className="img-fluid" style={{ width: "500", height: "500px" }} />
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>


                            <div className='col-lg-6 col-md-6 col-sm-6 col-12'>

                                <h6 className='formal'>Why should I use Nano Ceramic?</h6>
                                <ul className='list' style={{ fontSize: '14px' }}>
                                    <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp;  EvoCar Nano car ceramic paint protection coating is the ultimate protection of your car paint and crystal gloss effect. Nano ceramic coating for car paints will prevent the appearance the potential scratches and stoneсhips, and decrease adverse effects of environmental conditions and chemicals. The car covered with our nano ceramic coating on cars is easy to clean from dirt, dust, resin, mud, and bird droppings.
                                    </li><br />
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;  nano ceramic coating for car paint protection stands out among the rest of nano car care products due to the longevity of its protecting abilities. Depending on the product, it could be from 3 to 5 years. Of course, regular car washing makes the protecting layer thinner. However, If you use EvoCar hydrophobic paint protection for cars you can be sure, that even after 100 washing, and for some products even after 250, your car paint will be still protected.</li>
                                    <br />
                                    <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;  You can, also, use our nano car polish to protect other hard surface parts of the car such as headlights, tail indicators, and hard plastic trims.</li>

                                </ul>
                            </div>




                        </div>


                    </div>
                </div>

            </div>
            {/* packages/> */}
            <Packages service_id={5} />

        </div>



    );
}

export default nanoCeramic;
