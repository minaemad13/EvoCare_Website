import React from 'react';
import { useState } from 'react';
import { GoogleMap, LoadScript ,Marker,InfoWindow } from '@react-google-maps/api';
const MapContainer = () => {
  // 30.060823126594073, 31.218831838906784

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }
  const locations = [
    {
      name: "zamalk",
      location: { 
        lat: 30.060823126594073,
        lng: 31.218831838906784
      }}]
  const mapStyles = {        
    height: "100%",
    width: "100%"};
  
  const defaultCenter = {
    // 30.0444766843023, 31.235804443463177
    lat:  30.0444766843023, lng: 31.235804443463177
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyB1rzcsILswAH-lMAs8C9sMI9iUR6w60RM'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} 
              position={item.location}
              onClick={() => onSelect(item)}
              



              />
              )
            })
         }

{
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>

  )
}
export default MapContainer;
