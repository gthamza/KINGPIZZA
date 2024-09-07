import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalAmount, shippingFee } = location.state || { cartItems: [], totalAmount: 0, shippingFee: 0 };

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: 'Pakistan',
    address: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);  // State to manage order placement

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Implement form submission logic here (e.g., API call)
    setOrderPlaced(true);
    // Redirect to thank you page or display message
    setTimeout(() => navigate('/thank-you'), 2000); // Redirect after 2 seconds
  };

  // Total including shipping
  const totalWithShipping = totalAmount + shippingFee;

  return (
    <div className="container checkout-page">
      <h1 className="text-center text-3xl">Checkout</h1>

      <div className="row">
        {/* Billing Form Section */}
        <div className="col-md-6">
          <h3 className='text-4xl'>Billing Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Street address *</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success mt-3">
              Place order
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="col-md-6">
          <h3>Order Summary</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th className="text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.product.name} × {item.quantity}</td>
                  <td className="text-right">Rs {parseInt(item.product.price.replace(/[^0-9]/g, '')) * item.quantity}</td>
                </tr>
              ))}
              <tr>
                <td>Subtotal</td>
                <td className="text-right">Rs {totalAmount}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className="text-right">
                  <span className="badge badge-warning">Rs {shippingFee}</span>
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td className="text-right">
                  <strong>Rs {totalWithShipping}</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="payment-method">
            <h3>Payment Method</h3>
            <li>Cash of Delivery</li>
          </div>

          <div className="privacy-note mt-4">
            <p>
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
              <Link to="#">privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Display thank you message if order is placed */}
      {orderPlaced && (
        <div className="thank-you-message text-center mt-4">
          <h2>Thank You for Shopping with Us!</h2>
          <p>Your order has been placed successfully.</p>
          <Link to="/menu" className="btn btn-primary">Continue Shopping</Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
