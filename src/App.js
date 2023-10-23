import './App.css';
import Login from './Component/Authentication/Login'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import VehicleListing from './Component/Vehicle/VehicleListing';
import Location from './Location';
// import Home from './HomePage/Home';
import Index from './Component/home/Index'
import Driver_listing from './Component/Driver/Driver_listing';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/location" element={<Location />} />
      <Route path="/vehiclelisting" element={<VehicleListing />} />
      <Route path="/driverlisting/:vehicle_type" element={<Driver_listing />} />
    </Routes>
  </Router>
  );
}

export default App;
