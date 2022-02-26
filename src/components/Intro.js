import { RiRoadMapLine, RiTeamLine } from 'react-icons/ri'
// import{FaCarAlt} from 'react-icons/fa's
import { GiExtraTime } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
const Intro = () => {
    return (<>
        <div className="p-5 " id = 'container'>
            <div className="text-center">
                <h3 className="mb-4">Who is EvoCare</h3>
                <hr className="hr " />
                <p className="font mb-5">Car wash & detailling service</p>
            </div>
            <div className="margin">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                        <img src={require("../resources/handwash.jpg")} alt="intro" className="img-fluid" />




                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12" style={{ fontSize: '15px' }}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <br/>
                    



                    </div>

                </div>
            </div>







        </div>




    </>);
}

export default Intro;