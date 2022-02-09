import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { SECRET_GOOGLEMAPS_KEY } from "../../script/apiKey";
//import '../../public/map.css'

// const location = {
//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216,
//     lng: -122.08427,
//   }

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

function Map({ location, zoomLevel }) {
  return (
    <div
      className="container map google-map"
      style={{ height: "30vh", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: SECRET_GOOGLEMAPS_KEY }}
        center={location}
        defaultZoom={zoomLevel}
      >
        {/* <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.name}
            /> */}
      </GoogleMapReact>
    </div>
  );
}
export default Map;
