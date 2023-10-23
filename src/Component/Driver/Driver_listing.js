import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Driver_listing() {
    const [drivers, setDrivers] = useState([]);
    const { vehicle_type } = useParams();

    useEffect(() => {
        console.log(vehicle_type)
      const apiUrl = `http://127.0.0.1:3002/api/v1/drivers?vehicle_type=${vehicle_type}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setDrivers(data.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [vehicle_type]);

    return (
      <div className="App">
        <h1>{vehicle_type} Drivers</h1>
        <ul className="vehicle-list">
          {drivers.map((driver) => (
            <li className="vehicle-item" key={driver.id}>
              <div className="vehicle-details">
                <span className="vehicle-info">Name: {driver.attributes.name}</span>
                <span className="vehicle-info">License Number: {driver.attributes.license_number}</span>
                <span className="vehicle-info">Phone: {driver.attributes.phone}</span>
                <span className="vehicle-info">Email: {driver.attributes.email}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default Driver_listing;
