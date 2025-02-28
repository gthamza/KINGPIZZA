import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import MapSelector from "../components/MapSelector";

const API_URL = "http://localhost:5007"; // Replace with deployed API

function Cart() {
  const [location, setLocation] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  // User details
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

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
    } catch (err) {
      setError("Failed to fetch delivery price.");
    }
  };

  const handleProceedToCheckout = () => {
    if (!location) {
      setError("Please select an address first.");
      return;
    }
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setShowModal(false);
    alert("Order placed successfully!");
  };

  return (
    <div className="container mt-4">
      <h3>Select Delivery Location</h3>
      <MapSelector onLocationSelect={setLocation} />

      <Button
        variant="primary"
        onClick={handleCalculateDelivery}
        className="mt-3"
      >
        Get Delivery Fee
      </Button>

      {deliveryFee && <p className="mt-2">Delivery Fee: Rs {deliveryFee}</p>}
      {error && <p className="text-danger">{error}</p>}

      <Button
        variant="success"
        onClick={handleProceedToCheckout}
        className="mt-3"
      >
        Proceed to Checkout
      </Button>

      {/* Modal for User Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Delivery Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="email" className="mt-2">
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

            <Form.Group controlId="phone" className="mt-2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={userDetails.phone}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
              />
            </Form.Group>

            <p className="mt-3">
              <strong>Delivery Fee:</strong> Rs {deliveryFee}
            </p>

            {error && <p className="text-danger">{error}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirmOrder}>
            Confirm Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
