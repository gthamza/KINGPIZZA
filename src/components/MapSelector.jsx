import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Spinner } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.853372491266995,
  lng: 69.11390292443679,
};

// eslint-disable-next-line react/prop-types
const MapSelector = ({ onLocationSelect }) => {
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

  return (
    <LoadScript googleMapsApiKey="AIzaSyBiohy_1HfSjWgJBKgAs57BAHguyjH6bIU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onClick={handleMapClick}
      >
        <Marker position={markerPosition} />
      </GoogleMap>

      {loading && (
        <div className="text-center mt-2">
          <Spinner animation="border" size="sm" />
          <p>Fetching location...</p>
        </div>
      )}
    </LoadScript>
  );
};

export default MapSelector;
