import React, { Component } from 'react';

class LocationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: '',
    };
  }

  getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geocoder = new window.google.maps.Geocoder(); // Note: Replace "window.google" with the way you load the Google Maps API in your React app

        const latLng = new window.google.maps.LatLng(latitude, longitude);

        geocoder.geocode({ 'location': latLng }, (results, status) => {
          if (status === window.google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              const locationName = results[1].formatted_address;
              const locationResult = `Location: ${locationName}<br>Latitude: ${latitude}<br>Longitude: ${longitude}`;
              this.setState({ locationResult });
            } else {
              this.setState({ locationResult: "Location not found" });
            }
          } else {
            this.setState({ locationResult: `Geocoder failed due to: ${status}` });
          }
        });
      });
    } else {
      this.setState({ locationResult: "Geolocation is not supported by your browser." });
    }
  }

  render() {
    return (
      <div>
        <h1>Get Current Location</h1>
        <p>Click the button to get your current location:</p>
        <button onClick={this.getLocation}>Get Location</button>
        <p dangerouslySetInnerHTML={{ __html: this.state.locationResult }}></p>
      </div>
    );
  }
}

export default Location;
