import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import Menu from './pages/Menu'; 
import About from './pages/About';
import Contact from './pages/Contact'; 
import Cart from './pages/Cart'; 
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import { CartProvider } from './pages/CardContext'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './pages/Checkout'; 
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <CartProvider> 
        <ScrollToTop /> 
        <Navbar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </div>
        <Footer /> 
      </CartProvider>
    </Router>
  );
}

export default App;
