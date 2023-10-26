import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// CSS for styling
import './Driver_listing.css';

function Driver_listing() {
  const [drivers, setDrivers] = useState([]);
  const { vehicle_type } = useParams();

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:3001/api/v1/drivers?vehicle_type=${vehicle_type}`;

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
    <div className="container">
      <h1 className="text-center heading">{vehicle_type} Drivers</h1>
      <table className="table table-bordered custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>License Number</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td >{driver.attributes.name}</td>
              <td>{driver.attributes.license_number}</td>
              <td>{driver.attributes.phone}</td>
              <td>{driver.attributes.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Driver_listing;


