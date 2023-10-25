import React, { useState } from 'react';
import axios from 'axios';
import { LOCATION_API_ENDPOINT } from './api/Api';
import New from './New';

const saveLocation = (latitude, longitude) => {
  return axios.post(LOCATION_API_ENDPOINT, { latitude, longitude })
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error saving location data:', error);
      throw error;
    });
};

const getLocationData = (latitude, longitude) => {
  const locationEndpoint = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  return axios.get(locationEndpoint)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching location data:', error);
      throw error;
    });
};

const LocationComponent = () => {
  const [locationResult, setLocationResult] = useState('');
  const [error, setError] = useState('');

  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Save the location to the server using the Api
        saveLocation(latitude, longitude)
          .then(() => {
            // Fetch and set location data
            getLocationData(latitude, longitude)
              .then((data) => {
                const locationName = data.display_name || 'Location not found';
                const result = `Location: ${locationName}<br>Latitude: ${latitude}<br>Longitude: ${longitude}`;
                setLocationResult(result);
              })
              .catch(() => {
                setError('Error fetching location data');
              });
          })
          .catch(() => {
            setError('Error saving location data');
          });
      });
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  return (
    <>
      <div>
        <h1>Get Current Location</h1>
        <p>Click the button to get your current location:</p>
        <button onClick={getLocation}>Get Location</button>
        {error ? (
          <p>{error}</p>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: locationResult }} />
        )}
      </div>
      <New />
    </>
  );
};

export default LocationComponent;
