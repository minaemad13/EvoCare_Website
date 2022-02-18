import{RiRoadMapLine,RiTeamLine} from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import{GiExtraTime} from 'react-icons/gi'
import{AiOutlineCar} from 'react-icons/ai'
const Intro = () => {
    return ( <>
    <div className="my-3 p-5 ">
                <div className="text-center">
                    <h3 className="mb-4">Who is Evo Care</h3>
                    <hr className="hr " />
                    <p className="font mb-5">Car wash & detailling service</p>
                </div>
                <div className=" margin">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-sm-12 mb-5">
                            <img src={require("../resources/handwash.jpg")} alt="intro" className="img-fluid" />


                       

                        </div>
                        <div className="col-lg-8 col-sm-12" style={{ fontSize: '15px' }}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-lg-6">
                                < RiRoadMapLine className='icons' />
                    <br/> <br/>
                    <h5>CONVENIENCE</h5>
                    <p>We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.</p>
                    <br/>
                                </div>
                                <div className="col-lg-6">
                                < RiRoadMapLine className='icons' />
                    <br/> <br/>
                    <h5>CONVENIENCE</h5>
                    <p>We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.</p>
                    <br/>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>







            </div> 
    
    
    
    
    </> );
}
 
export default Intro;