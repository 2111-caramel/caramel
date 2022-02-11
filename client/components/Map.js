import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

 function Map ({ location, zoomLevel }) {
    return (

     <div className="container map google-map" style={{height: '36vh', width: '100%'}}>
        
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.SECRET_GOOGLEMAPS_KEY }}
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
        )
 }
  export default Map
