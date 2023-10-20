import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VEHICLE_LISTING_API_ENDPOINT } from '../../api/Api';

function VehicleListing() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get(VEHICLE_LISTING_API_ENDPOINT)
      .then(response => {
        if (response.data && Array.isArray(response.data.data)) {
          setVehicles(response.data.data);
        } else {
          console.error('API response does not contain an array of data:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching vehicle data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Vehicle List</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            Vehicle Type: {vehicle.attributes.vehicle_type}<br />
            License Plate: {vehicle.attributes.license_plate}<br />
            Status: {vehicle.attributes.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleListing;
