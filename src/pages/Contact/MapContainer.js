import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapContainer = ({ userLocation, handleLocationError }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDU5mbiOJjNfM0Y5cf26A5mCtUOwogUh-E",
  });

  const [mapLoaded, setMapLoaded] = useState(false);

  const byteBuy = { lat: -21.9838, lng: -47.8836 };

  const mapOptions = {
    zoom: 15,
    center: byteBuy,
  };

  useEffect(() => {
    if (isLoaded) {
      setMapLoaded(true);
    }
  }, [isLoaded]);

  return mapLoaded ? (
    <GoogleMap mapContainerStyle={{ height: "400px"  }} options={mapOptions}>

      <Marker position={byteBuy} title="ByteBuy" />
        
      {userLocation && (
        <Marker
          position={userLocation}
          title="Sua localização"
          icon={{
            path: "M10 0 L0 20 L20 20 Z",
            fillColor: "blue",
            fillOpacity: 0.6,
            strokeWeight: 0,
            scale: 1,
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <div>Error loading map</div>
  );
};

export default MapContainer;