
import Carosel from "./Carosel";

import Service from "./Services";
import Feedback from "./Feedback";
import Intro from "./Intro";
import Info from "./Info";
import Map from "./Map";

const Home = () => {
    return (
        <div className="content">
            
            <br /><br /><br /><br /> 
            {/* <Carosel /> */}
             <br /><br /><br />

            <Intro/>
            
            <Service/>

           
            {/* <Info/> */}
            <Feedback/>
            <Map/>
        </div>);
}

export default Home;