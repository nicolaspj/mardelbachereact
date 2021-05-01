import React from 'react';
import { GoogleMap, Marker, LoadScript,  } from '@react-google-maps/api';


const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
               lat: -38.00042, 
               lng: -57.5562
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

/*const onMarkerDragEnd = (Event) => {
  let newLat = Event.latLng.lat();
  let newLng = Event.latLng.lng();
   console.log('new lat',newLat)
   console.log('new lat',newLng)
} */

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCrfytqKztzM0nuTzU9Dwjn8nBoyDDPAHs"
    >
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      
        <Marker
            onLoad={onLoad}
            position={center}
    /*        draggable={true}
            onDragEnd={this.onMarkerDragEnd}
      */
            />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

 


export default React.memo(MyComponent)



