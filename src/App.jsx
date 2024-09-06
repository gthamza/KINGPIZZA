import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import Menu from './pages/Menu'; 
import About from './pages/About';
import Contact from './pages/Contact'; 
import Cart from './pages/Cart'; 
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop'; // Scroll to top component
import NotFound from './pages/NotFound'; // 404 Page
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to the top on route change */}
      <Navbar /> {/* Navbar will be displayed on all pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page as default */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
