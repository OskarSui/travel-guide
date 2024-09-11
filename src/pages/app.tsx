import React, { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Component to handle map click events and update coordinates
const LocationMarker = ({ setCoordinates, setAddressData }) => {
  const [position, setPosition] = useState(null);

  // Function to get address from coordinates using reverse geocoding
  const getAddressFromCoordinates = async (lat, lon) => {
    try {
      const response = await axios.get("https://nominatim.openstreetmap.org/reverse", {
        params: {
          format: "json",
          lat: lat,
          lon: lon,
          addressdetails: 1,
        },
      });
      setAddressData(response.data);
    } catch (error) {
      console.error("Error fetching data from OpenStreetMap:", error);
    }
  };

  // Use useMapEvents to capture map clicks
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      setCoordinates({ lat, lon: lng });
      getAddressFromCoordinates(lat, lng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        You clicked here! Latitude: {position[0]}, Longitude: {position[1]}
      </Popup>
    </Marker>
  );
};

const App = () => {
  const [coordinates, setCoordinates] = useState({ lat: 42.865, lon: 74.595 }); // Default location Bishkek
  const [addressData, setAddressData] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Roboto" }}>
      {/* <h1>OpenStreetMap Reverse Geocoding</h1> */}

      {/* Map Section */}
      <div style={{ marginTop: "100px", height: "500px" }}>
        {/* <h3>Click on the Map to Get Address</h3> */}
        <MapContainer
          center={[coordinates.lat, coordinates.lon]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker setCoordinates={setCoordinates} setAddressData={setAddressData} />
        </MapContainer>
      </div>

      {/* Display the Address Information */}
      {addressData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Address Details</h3>
          <p>{/* <strong>Display Name:</strong> {addressData.display_name} */}</p>
          <p>
            <strong>Street:</strong> {addressData.address.road}
          </p>
          {/* <p>
            <strong>City:</strong> {addressData.address.city || addressData.address.town}
          </p> */}
          <p>
            <strong>House number:</strong> {addressData.address.house_number}
          </p>
          {/* <p>
            <strong>Country:</strong> {addressData.address.country}
          </p>
          <p>
            <strong>Postcode:</strong> {addressData.address.postcode}
          </p> */}
        </div>
      )}
    </div>
  );
};

export default App;
