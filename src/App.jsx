import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import Menu from './pages/Menu'; 
import About from './pages/About';
import Contact from './pages/Contact'; 
import Footer from './components/Footer'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be displayed on all pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page as default */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes if necessary */}
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;





