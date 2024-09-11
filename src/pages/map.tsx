// // Map.tsx
// import React from "react";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

// const Map = () => {
//   return (
//     <Layout pageTitle="Karta">
//       <div className="leaflet-container"></div>
//       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[51.505, -0.09]}>
//           <Popup>This is a popup</Popup>
//         </Marker>
//       </MapContainer>
//     </Layout>
//   );
// };

// export const Head = () => <Seo title="Map" />;

// export default Map;
