// src/components/MapView.js

// import React from 'react';
// import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// function MapView({ vehicles }) {
//   const defaultCenter = { lat: 37.7749, lng: -122.4194 };

//   return (
//     <div>
//       <h2>Google Map</h2>
//       <div style={{ height: '400px', width: '100%' }}>
//         <GoogleMap
//           defaultZoom={13}
//           defaultCenter={defaultCenter}
//         >
//           {vehicles.map((vehicle) => (
//             <Marker
//               key={vehicle.id}
//               position={{ lat: vehicle.lat, lng: vehicle.lng }}
//             />
//           ))}
//         </GoogleMap>
//       </div>
//     </div>
//   );
// }

// export default withGoogleMap(MapView);
