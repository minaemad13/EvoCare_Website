import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { RiContactsLine } from 'react-icons/ri'
import { BsCheckLg } from 'react-icons/bs'
const Intro = () => {
    return (<>
        <div className="py-5  px-2" id='container'>
            <div className="text-center">
                <h3 className="mb-4">Who is EvoCare</h3>
                <hr className="hr " />
                <p className="font mb-5">Car wash & detailling service</p>
            </div>
            <div className="margin">
                <div className="row gx-5 ">
                    <div className="col-lg-4 col-md-6 col-sm-12  col-12 mb-5">
                        <img src={require("../resources/handwash.jpg")} alt="intro" className="img-fluid" />




                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 col-12" style={{ fontSize: '16px' }}>
                        <p>
                            Evocare is Cairo's top center for Car film protection and NanoCeramics, hand car wash and detailing service based in Portland. Our company was founded back in 2005 by a team of experts with more then 10 years of professional car wash experience. We operate three car washes throught Portland area. Our goal is to provide our customers with the friendliest, most convenient hand car wash experience possible. We use the most modern and up-to-date water reclamation modules as a part of our car wash systems. Our products are all biodegradable and eco-friendly.

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




    </>);
}

export default Intro;