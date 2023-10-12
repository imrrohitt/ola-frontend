import React, { Component } from 'react'

class LocationComponent extends Component {
    constructor() {
        super()
        this.state = {
            locationResult: '',
            error: '',
        }
    }

    getLocation = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude

                fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                )
                    .then((response) => response.json())
                    .then((data) => {
                        const locationName =
                            data.display_name || 'Location not found'
                        const locationResult = `Location: ${locationName}<br>Latitude: ${latitude}<br>Longitude: ${longitude}`
                        this.setState({ locationResult })
                    })
                    .catch((error) => {
                        console.error('Error fetching location data:', error)
                        this.setState({ error: 'Error fetching location data' })
                    })
            })
        } else {
            this.setState({
                error: 'Geolocation is not supported by your browser.',
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Get Current Location</h1>
                <p>Click the button to get your current location:</p>
                <button onClick={this.getLocation}>Get Location</button>
                {this.state.error ? (
                    <p>{this.state.error}</p>
                ) : (
                    <p
                        dangerouslySetInnerHTML={{
                            __html: this.state.locationResult,
                        }}
                    />
                )}
            </div>
        )
    }
}

export default LocationComponent
