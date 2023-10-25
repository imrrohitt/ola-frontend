import './App.css';
import Login from './Component/Authentication/Login'
import Signup from './Component/Authentication/Signup'
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/location" element={<Location />} />
        <Route path="/vehiclelisting" element={<VehicleListing />} />
      </Routes>
    </Router>
  );
}

export default App;
