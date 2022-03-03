import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Staff from "../media/staff.jpeg"
import name1 from "../resources/name1.jpg"
import name2 from "../resources/name2.jpg"
import name3 from "../resources/name3.jpg"
import { BsCheckLg } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import {AiOutlineClockCircle} from 'react-icons/ai'

// import { Link } from 'react-router-dom'; 
function About() {
    return (


        <div className="bg py-5 text-center" id='body'>

                 
               {/* <about staff /> */}
            <div className="p-5 " id='container'>
                <div className="text-center">

                    <h3 className="mb-3 text-white" style={{ fontWeight: "bold" }} >ABOUT US</h3>
                    <hr className="hr " />
                    <p className="font mb-5"> SAVE YOUR CAR </p>
                </div>
                <div className="margin">
                    <div className="row gx-5">

                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                         <img src={Staff} alt="intro" className="img-fluid"  style={{  width: "500",height: "500px" }}  />
                        </div>
                         
                        <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>

                            <p>
                                Have you been searching for technically sound and transparent maintenance and auto repair in EvoCar? The Company of Cars service department offers a complete host of automotive services for all makes and models and we specialise in the repair and maintenance of European models. We have over 40 years of experience in the automotive service industry and by using the latest technology and a first class facility we are well positioned to provide the type of services, maintenance and ongoing attention that these cars demand.

                                Our factory trained and Red Seal Certified technicians have travelled far and wide and assure you that if you’re looking for auto repair in EvoCar
                                we’re here to deliver.
                            </p>


                        </div>

                    </div>
                </div>

            </div>

            <br /><br />
              {/* <contacts /> */}

            <div className="row">
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                    <FiPhoneCall className='intro mb-3' />
                    <h6 className='formal'>Call Us At</h6>
                    <ul className='list' style={{ fontSize: '14px' }}>
                        <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp; (+505) 122 225 225
                        </li>
                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;(+505) 122 225 224</li>

                    </ul>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                    <GoLocation className='intro mb-3' />
                    <h6 className='formal'>Our Address</h6>
                    <ul className='list' style={{ fontSize: '14px' }}>
                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Unnamed Road،, Industrial Area, New Cairo 3, Cairo Governorate
                        </li>

                    </ul>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                    <AiOutlineClockCircle className='intro mb-3' />
                    <h6 className='formal'>Working hours</h6>
                    <ul className='list' style={{ fontSize: '14px' }}>
                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Saturday –  Thursday: 8 am – 11 pm
                        </li>
                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Friday: 12 pm – 11 pm
                        </li>

                    </ul>

                </div>
            </div>

            <br /><br /> <br/> <br/> <br/>
              {/* <Cards /> */}


            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    
                        <img src={name1} alt="intro" className="img-fluid"style={{  width: "500",height: "500px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Zain Elkazaz</h5>
                            <p className="card-text">Engineer.</p>
                        </div>
                    
                </div>
                <div className="col">
                    
                        <img src={name2} alt="intro" className="img-fluid" style={{  width: "500",height: "500px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Shady Ahmed</h5>
                            <p className="card-text">Engineer.</p>
                        </div>
                    
                </div>
                <div className="col">
                    
                        <img src={name3} alt="intro" className="img-fluid" style={{  width: "500",height: "500px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Omar Ali</h5>
                            <p className="card-text">Engineer.</p>
                        </div>
                    
                </div>
                
            </div>

        </div>


    );
}
export default About;