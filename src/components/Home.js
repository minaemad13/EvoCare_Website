
import Carosel from "./Carosel";

import Service from "./Services";
import Feedback from "./Feedback";
import Intro from "./Intro";
import Info from "./Info";
import Map from "./Map";
import ScrollToTop from "../components/ScrollToTop";
import FloatingWhatsApp from "react-floating-whatsapp";

const Home = () => {
    return (
        <div className="content">
            
            <br /><br /><br /><br /> 
            {/* <Carosel /> */}
            

            <Intro/>
            
            <Service/>

           
            {/* <Info/> */}
            <Feedback/>
            <Map/>
            <a>
          <FloatingWhatsApp
            phoneNumber="+20 1204822114"
            accountName="Mariam"
            allowClickAway
            notification
            notificationDelay={60000}
            notificationSound
          />
        </a>
        </div>);
}

export default Home;