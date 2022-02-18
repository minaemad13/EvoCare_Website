
import Carosel from "./Carosel";
import { BsDroplet } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import Service from "./Services";
import Feedback from "./Feedback";
import Intro from "./Intro";
import Info from "./Info";
import Map from "./Map";

const Home = () => {
    return (
        <div >
            <br /><br /><br /><br /> 
            {/* <Carosel /> */}
             <br /><br /><br />

            <Intro/>
            <Service/>
           
            {/* <Info/> */}
            <Feedback/>
            {/* <Map/> */}
        </div>);
}

export default Home;