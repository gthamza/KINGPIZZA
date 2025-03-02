import { LoadScript } from "@react-google-maps/api";

// eslint-disable-next-line react/prop-types
const GoogleMapsProvider = ({ children }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBiohy_1HfSjWgJBKgAs57BAHguyjH6bIU">
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
