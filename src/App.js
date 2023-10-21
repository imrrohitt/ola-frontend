import './App.css';
import Login from './Component/Authentication/Login'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Location from './Location';
// import Home from './HomePage/Home';
import Index from './Component/home/Index'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/location" element={<Location />} />
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
