// import { Map, GoogleApiWrapper } from 'google-maps-react';
import {FiMapPin} from 'react-icons/fi'
import Mapview from './Mapview'
const Map = () => {
    return (  <>
    
    <div className="">

  <button className="map " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
    <FiMapPin/><br/>
    <span>show map</span>
  </button>
</div>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    {/* Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. */}
  <Mapview/>
  </div>
</div>
    </>);
}
 
export default Map;