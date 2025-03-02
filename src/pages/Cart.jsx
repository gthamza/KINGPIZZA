import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useCart } from "../pages/CardContext";
import MapSelector from "../components/MapSelector";

const API_URL = "http://localhost:5007"; // Replace with deployed API

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState("");
  const [location, setLocation] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cartVisible, setCartVisible] = useState(true); // State to hide cart

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const totalItemPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const finalTotal =
    totalItemPrice + (deliveryMode === "delivery" ? deliveryFee : 0);

  const handleCalculateDelivery = async () => {
    if (!location) {
      setError("Please select a location on the map.");
      return;
    }
    setError("");

    try {
      const response = await axios.get(`${API_URL}/calculate-delivery`, {
        params: { latitude: location.lat, longitude: location.lng },
      });
      setDeliveryFee(response.data.deliveryPrice);
      setShowMapModal(false);
      setShowModal(true); // Open user details modal after selecting location
    } catch (err) {
      console.log(err);
      setError("Failed to fetch delivery price.");
    }
  };

  const handleProceed = (mode) => {
    setDeliveryMode(mode);
    if (mode === "delivery") {
      setShowMapModal(true);
    } else {
      setShowModal(true);
    }
  };

  const handleConfirmOrder = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      setError("All fields are required.");
      return;
    }

    setShowModal(false);
    setOrderPlaced(true);

    // ✅ Clear the cart after order confirmation
    clearCart();

    // ✅ Hide the cart container after 3 seconds
    setTimeout(() => {
      setCartVisible(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {cartVisible && cartItems.length > 0 ? (
        <div className="bg-[#C92C5A] p-6 rounded-lg shadow-lg w-full max-w-lg">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-[#1C1C1C] rounded-lg p-4 mb-4"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-20 h-20 rounded-lg mr-4"
              />
              <div>
                <h5 className="font-semibold">{item.product.name}</h5>
                <p>Price: Rs {item.product.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <Button
                variant="danger"
                className="ml-auto"
                onClick={() => removeFromCart(item.product)}
              >
                Remove
              </Button>
            </div>
          ))}

          {/* 🧾 Bill Summary */}
          <div className="bg-[#1C1C1C] p-4 rounded-lg text-white mt-4">
            <h4 className="text-lg font-bold">Bill Summary</h4>
            <p>Subtotal: Rs {totalItemPrice}</p>
            <p>
              Delivery Fee: Rs {deliveryMode === "delivery" ? deliveryFee : 0}
            </p>
            <hr className="border-gray-500 my-2" />
            <h5 className="text-xl font-bold">Total: Rs {finalTotal}</h5>
          </div>

          {/* 🏷️ Buttons */}
          <div className="flex justify-between mt-4">
            <button
              className="bg-[#FE6F68] text-white px-4 py-2 rounded-md"
              onClick={() => handleProceed("pickup")}
            >
              Pickup
            </button>
            <button
              className="bg-[#FE6F68] text-white px-4 py-2 rounded-md"
              onClick={() => handleProceed("delivery")}
            >
              Delivery
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-4">Your cart is empty.</p>
      )}

      {/* Thank You Message */}
      {orderPlaced && (
        <div className="text-center mt-4 bg-[#1C1C1C] p-4 rounded-md">
          <h3>🎉 Thank You for Shopping!</h3>
          <p>Your order has been placed successfully.</p>
        </div>
      )}

      {/* Map Modal */}
      <Modal show={showMapModal} onHide={() => setShowMapModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Delivery Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MapSelector onLocationSelect={setLocation} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMapModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleCalculateDelivery}
            disabled={!location}
          >
            Confirm Location & Get Delivery Fee
          </Button>
        </Modal.Footer>
      </Modal>

      {/* User Details Modal (Contains Confirmation Button) */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={userDetails.phone}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
              />
            </Form.Group>
            {error && <p className="text-red-500">{error}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          {/* ✅ Order Confirmation Button */}
          <Button variant="success" onClick={handleConfirmOrder}>
            Confirm Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
