import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Ride() {
  const [response, setResponse] = useState(null);
  const { driver_id } = useParams(); // Extract the driver_id from the URL parameter

  useEffect(() => {
    const makeRideRequest = async () => {
      try {
        console.log("driver id ====", driver_id)
        // Use the driver_id from the URL parameter in the POST request
        const response = await axios.post('http://localhost:3001/api/v1/rides', {
          driver_id: driver_id, // Use the extracted driver_id
        });

        if (response.status === 200) {
          setResponse(response.data);
        } else {
          console.error('Failed to make the request');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    makeRideRequest();
  }, [driver_id]);

  return (
    <div>
      <h1>Make a Ride Request</h1>
      {response ? (
        <div>
          <h2>Ride Details</h2>
          <p>Rider ID: {response.data.attributes.rider_id}</p>
          <p>Driver Name: {response.data.attributes.driver.name}</p>
          <p>Vehicle Type: {response.data.attributes.driver.vehicle_type}</p>
          <p>Driver Phone: {response.data.attributes.driver.phone}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Ride;
