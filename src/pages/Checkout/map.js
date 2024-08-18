import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapComponent = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBeoSc41NabP50zIM7bi2gMYTrolDSRmBA', // Replace with your API key
  });

  const [markerPosition, setMarkerPosition] = useState(center);

  const onMarkerDragEnd = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    props.setLocation({lat,lng})
    console.log('New Position:', lat, lng);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            setMarkerPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          props.setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
        //   setError(error.message);
        console.log("error while getting current location")
        }
      );
    } else {
    //   setError("Geolocation is not supported by this browser.");
      console.log("Geolocation is not supported by this browser.");
    }
    // }
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={markerPosition}
      zoom={10}
    >
      <Marker
        position={markerPosition}
        draggable={true}
        onDragEnd={onMarkerDragEnd}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(MapComponent);
