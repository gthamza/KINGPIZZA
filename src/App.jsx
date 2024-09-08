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
import { CartProvider } from './pages/CardContext'; // Import CartProvider
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './pages/Checkout'; // Correct Checkout import
import ThankYou from './pages/ThankYou'; // Import ThankYou page

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap your application in the CartProvider */}
        <ScrollToTop /> 
        <Navbar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Fixed this line */}
            <Route path="/thank-you" element={<ThankYou />} /> {/* Added ThankYou page */}
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          <Footer /> 
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
