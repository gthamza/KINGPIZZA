import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./pages/CardContext";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const googleMapsApiKey = "AIzaSyBiohy_1HfSjWgJBKgAs57BAHguyjH6bIU";

function App() {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <CartProvider>
        <Router>
          {" "}
          {/* ⬅️ Wrap everything inside Router */}
          <ScrollToTop /> {/* ⬅️ Moved inside Router */}
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
        </Router>
      </CartProvider>
    </LoadScript>
  );
}

export default App;
