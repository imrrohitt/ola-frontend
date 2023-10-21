import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './index.css';
import img from '../../images/car_in_blue_color_high_tech-removebg-preview.png';
import img2 from '../../images/car_in_blue_color-removebg-preview.png';

function Index() {
  useEffect(() => {
    const handleParallax = () => {
      const text = document.getElementById('text');
      const carImage = document.getElementById('carImage');
      const btn = document.getElementById('btn');

      window.addEventListener('scroll', () => {
        let value = window.scrollY;
        text.style.top = `calc(50% + ${value * -0.1}px)`;
        carImage.style.top = `${value * -1.5}px`;
        btn.style.marginTop = `${value * 1.5}px`;
      });
    };

    handleParallax();

    return () => {
      // Clean up event listener if necessary
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div>
      <header id="header">
        <Link to="/" className="logo">
          Car Booking
        </Link>
        <ul>
        <li>
            <Link to="/login" className="active">
              Login
            </Link>
          </li>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/book">Book a Car</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </header>
      <section>
        <h2 id="text">
          <span>Book Your Car</span>
          <br />
          Anytime, Anywhere
        </h2>
        <img src={img} id="carImage" alt="Car" />
        <Link to="/book" id="btn" className="btn">
          Book Now
        </Link>
      </section>
      <div id="about" className="sec">
        <h2>About Us</h2>
        <p>
          Welcome to CarBooking.com, your premier destination for hassle-free car rentals. We take pride in providing an exceptional and affordable way for you to explore your destination. With an extensive fleet of vehicles and flexible booking options, we ensure that your journey is smooth and enjoyable.
        </p>
      </div>
      <div id="book" className="sec">
        <h2>Book a Car</h2> <img src={img2} alt="car" id='car-second' />
        <div id="book_now">
          <div className="form-group">
            <label htmlFor="pickupLocation">Pickup Location</label>
            <input type="text" id="pickupLocation" name="pickupLocation" required />
          </div>
          <div className="form-group">
            <label htmlFor="dropoffLocation">Drop-off Location</label>
            <input type="text" id="dropoffLocation" name="dropoffLocation" required />
          </div>
          <div className="form-group">
            <label htmlFor="pickupDate">Pickup Date</label>
            <input type="date" id="pickupDate" name="pickupDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="dropoffDate">Drop-off Date</label>
            <input type="date" id="dropoffDate" name="dropoffDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="carType">Car Type</label>
            <select id="carType" name="carType" required>
              <option value="">Select a Car Type</option>
              <option value="economy">Economy</option>
              <option value="standard">Standard</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Book Now
          </button>
        </div>
      </div>
      <div id="contact" className="sec">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance with your booking? Contact our support team.
        </p>
        <div className="contact-details">
          <p>Email: contact@carbooking.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>
      {/* Add more sections and content for your car booking website */}
    </div>
  );
}

export default Index;
