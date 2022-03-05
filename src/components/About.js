import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Staff from "../media/staff.jpeg"
import name1 from "../resources/name1.jpg"
import name2 from "../resources/name2.jpg"
import name3 from "../resources/name3.jpg"
import { BsCheckLg } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { RiContactsLine } from 'react-icons/ri'
import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
import Carousel from "./service_carousel";
// import { Link } from 'react-router-dom'; 
function About() {
    return (


        <div className="bg py-5 text-center" id='body'>
               <Carousel service_id={7} />
            {/* <about staff /> */}
            <div className="py-5  px-2" id='container'>
                <div className="text-center">
                    <h3 className="mb-4">ABOUT EvoCar</h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>
                <div className="margin">
                    <div className="row gx-5 ">
                        <div className="col-lg-4 col-md-6 col-sm-12  col-12 mb-5">
                            <img src={Staff} alt="intro" className="img-fluid" style={{ width: "300", height: "300px" }} />

                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 col-12" style={{textAlign: 'left'}}>
                            <p>
                                Have you been searching for technically sound and transparent maintenance and auto repair in EvoCar? The Company of Cars service department offers a complete host of automotive services for all makes and models and we specialise in the repair and maintenance of European models. We have over 40 years of experience in the automotive service industry and by using the latest technology and a first class facility we are well positioned to provide the type of services, maintenance and ongoing attention that these cars demand.

                                Our factory trained and Red Seal Certified technicians have travelled far and wide and assure you that if you’re looking for auto repair in EvoCar
                                we’re here to deliver.

                            </p>
                            <br />
                            <div className="row">
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                    <MdOutlineWaterDrop className='intro mb-3' />
                                    <h6 className='formal'>THE BEST CAR WASH</h6>
                                    <ul className='list' style={{ fontSize: '14px' }}>
                                        <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp; We offer multiple services at a great value
                                        </li>
                                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;Multiple car wash locations</li>
                                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;Biodegradable and eco-friendly products</li>
                                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;Pay for your wash electronically and securely</li>
                                    </ul>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                    <RiContactsLine className='intro mb-3' />
                                    <h6 className='formal'>CONTACT US</h6>
                                    <ul className='list' style={{ fontSize: '14px' }}>
                                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; We are very open and easy to reach company
                                        </li>
                                        <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp; Our email is checked hourly during the day</li>
                                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;Book an appointment online under 3 minutes</li>
                                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;Our tool free number will be answered</li>
                                    </ul>

                                </div>
                            </div>




                        </div>


                    </div>
                </div>







            </div>


            <br /><br />


            {/* <Cards /> */}

            <div className="text-center">
                <h3 className="mb-3 font-bold text-white">Meet Our Team</h3>
                <hr className="hr " />
                <p className="font mb-5">Meet our skilled crew</p>
                <p>Our crew members are skilled and fully equiped with equipment and supplies needed that we can deliver the best results.<br />
                    Our goal is to provide our customers with the friendliest, most convenient hand car wash experience possible.</p>
            </div>
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">

                    <img src={name1} alt="intro" className="img-fluid" style={{ width: "500", height: "500px" }} />
                    <div className="card-body">
                        <h5 className="card-title"> Zain Elkazaz</h5>
                        <p className='font mb-5'>Co-Founder </p>
                        <hr className="hr " />

                        <p className="card-text">Primus elite lectus tical at node porta dosis with terminal forks nulla sande novum fermentum top dolor porta an urna vestibulum commodo.</p>
                    </div>

                </div>
                <div className="col">

                    <img src={name2} alt="intro" className="img-fluid" style={{ width: "500", height: "500px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Shady Ahmed</h5>
                        <p className='font mb-5'>General Manager </p>
                        <hr className="hr " />

                        <p className="card-text">Donec mattis rhoncus fermentum donec congue lacus sed egestas sodales praesent erat risus iaculis moles vitae scelerisque vel eleifend eu magna. </p>
                    </div>

                </div>
                <div className="col">

                    <img src={name3} alt="intro" className="img-fluid" style={{ width: "500", height: "500px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Omar Ali</h5>
                        <p className='font mb-5'>Wash Expert </p>
                        <hr className="hr " />

                        <p className="card-text">Vestibulum sit amet neque mauris donec volutpata vestibulum massa ut ultricies tellus interdum at. In placerat sollicitudin lectus et blandit.

                        </p>
                    </div>

                </div>

            </div>


            <br /><br />
            {/* <contacts /> */}

            <div className="row">
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                    <FiPhoneCall className='intro mb-3' />
                    <h6 className='formal' className='font mb-5'>Call Us At</h6>
                    <ul className='list' style={{ fontSize: '14px' }}>
                        <li> <BsCheckLg className='icon4' />&nbsp;&nbsp;&nbsp; (+505) 122 225 225
                        </li>
                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp;(+505) 122 225 224</li>

                    </ul>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                    <GoLocation className='intro mb-3' />
                    <h6 className='formal' className='font mb-5'>Our Address</h6>
                    <ul className='list' style={{ fontSize: '14px' }}>
                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Unnamed Road،, Industrial Area, New Cairo 3, Cairo Governorate
                        </li>

                    </ul>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                    <AiOutlineClockCircle className='intro mb-3' />
                    <h6 className='formal' className='font mb-5'>Working hours</h6>
                    <ul className='list' style={{ fontSize: '14px' }}>
                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Saturday –  Thursday: 8 am – 11 pm
                        </li>
                        <li> <BsCheckLg className='icon4' /> &nbsp;&nbsp;&nbsp; Friday: 12 pm – 11 pm
                        </li>

                    </ul>

                </div>
            </div>


        </div>


    );
}
export default About;