// import React from 'react'
// import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
// //import '../../public/map.css'

// // const location = {
// //     address: '1600 Amphitheatre Parkway, Mountain View, california.',
// //     lat: 37.42216,
// //     lng: -122.08427,
// //   }

// const LocationPin = ({ text }) => (
//     <div className="pin">
//       <Icon icon={locationIcon} className="pin-icon" />
//       <p className="pin-text">{text}</p>
//     </div>
//   )

//  function Map ({ location, zoomLevel }) {
//      console.log("location", location)
//      console.log("zoomLevel", zoomLevel)
//     return (
//      <div className="map">
//         <h2 className="map-h2">Map</h2>
//         <div className="google-map">
//             <GoogleMapReact
//             bootstrapURLKeys={{ key: 'AIzaSyBnn94Kp2Y1yNF4bW1Jg49UPzykmCtm09k' }}
//             defaultCenter={location}
//             defaultZoom={zoomLevel}
//             >
//             <LocationPin
//                 lat={location.lat}
//                 lng={location.lng}
//                 text={location.address}
//             />
//             </GoogleMapReact>
//         </div>
//         </div>
//         )
//  }
//   export default Map