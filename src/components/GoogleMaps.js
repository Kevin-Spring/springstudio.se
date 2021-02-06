import React from "react";
import { GoogleMap, useLoadScript, Circle } from "@react-google-maps/api";
import mapStyles from "../styles/mapStyles";

const containerStyle = {
  width: "60vw",
  height: "40vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  //zoomControl: true,
};

const circleOptions = {
  strokeColor: "#FFF",
  strokeOpacity: 0.2,
  strokeWeight: 0,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 150,
  zIndex: 1,
};

const GoogleMaps = ({ lat, lng }) => {
  //const libraries = "places";

  const center = { lat, lng };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //libraries: ["places"],
  });

  if (loadError) return "Error Loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={13}
        center={center}
        options={options}
      >
        <Circle center={center} options={circleOptions} />
      </GoogleMap>
    </div>
  );
};

export default React.memo(GoogleMaps);
