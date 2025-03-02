import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Spinner } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.853372491266995,
  lng: 69.11390292443679,
};

const googleMapsApiKey = "AIzaSyBiohy_1HfSjWgJBKgAs57BAHguyjH6bIU";

// eslint-disable-next-line react/prop-types
const MapSelector = ({ onLocationSelect }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey,
  });

  const [markerPosition, setMarkerPosition] = useState(center);
  const [loading, setLoading] = useState(false);

  const handleMapClick = (event) => {
    setLoading(true);
    const newPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(newPosition);
    onLocationSelect(newPosition);
    setTimeout(() => setLoading(false), 1000);
  };

  if (!isLoaded) {
    return (
      <div className="text-center mt-2">
        <Spinner animation="border" size="sm" />
        <p>Loading Map...</p>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onClick={handleMapClick}
    >
      <Marker position={markerPosition} />
    </GoogleMap>
  );
};

export default MapSelector;
