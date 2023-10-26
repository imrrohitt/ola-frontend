import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    <div className="container mb-1 p-2">
      <h1 className="text-center heading">{vehicle_type} Drivers</h1>
      <div className="row">
        {drivers.map((driver) => (
          <div key={driver.id} className="col-md-12 ">
            <div className="card custom-card">
              <div class="cab-card">
                <img src="https://gos3.ibcdn.com/hatchback_v_5_copy-1576142454.png" alt="Cab Image" className="cab-img" />
                <div className="cab-details">
                  <h4 className="cab-name">{driver.attributes.name}</h4>
                  <h1 className="text-center heading mt-4">Cab Details</h1>

                  <p className="cab-type">License Number: {driver.attributes.license_number}</p>
                  <p className="cab-type">Phone: {driver.attributes.phone}</p>
                  <p className="cab-type">Email: {driver.attributes.email}</p>
                  {/* <p className="cab-type">Status: {driver.attributes.status}</p> */}
                </div>
                <div class="rating-badge">

                <div class="rating">
               <span class="rating-number">4.4</span>
                 <span class="rating-text">/ 5</span>
                </div>
              <div class="ratings-count">1031 ratings</div>
                </div>


              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Driver_listing;
